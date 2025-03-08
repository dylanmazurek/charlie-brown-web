import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[], threshold: number = 0.2) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isManualNavigation, setIsManualNavigation] = useState(false);

  // Effect for handling scroll-based section detection
  useEffect(() => {
    // Don't run on server side
    if (typeof window === 'undefined') return;

    // Set first section as active initially if no hash exists
    if (!activeSection && !window.location.hash && sectionIds.length > 0) {
      setActiveSection(sectionIds[0]);
    }

    const observers: IntersectionObserver[] = [];
    let observerOptions = {
      threshold: [0, threshold],
      rootMargin: '-10% 0px -60% 0px' // Less strict margin to detect sections sooner
    };
    
    // Helper function to update active section and URL
    const updateSection = (sectionId: string) => {
      if (!isManualNavigation) {
        setActiveSection(sectionId);
        
        // Update the URL hash without scrolling
        const url = new URL(window.location.href);
        if (url.hash !== `#${sectionId}`) {
          url.hash = `#${sectionId}`;
          window.history.replaceState({}, '', url.toString());
        }
      }
    };
    
    // Create an observer for each section
    sectionIds.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            // Sort entries by their intersection ratio
            const sortedEntries = [...entries].sort(
              (a, b) => b.intersectionRatio - a.intersectionRatio
            );

            // Update with the most visible section
            if (sortedEntries.length > 0 && sortedEntries[0].isIntersecting) {
              updateSection(sectionId);
            }
          },
          observerOptions
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    // Cleanup function to disconnect all observers
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sectionIds, threshold, isManualNavigation, activeSection]);

  // Effect for handling hash changes in URL (when user clicks nav links)
  useEffect(() => {
    // Don't run on server side
    if (typeof window === 'undefined') return;

    const handleHashChange = () => {
      // Set manual navigation flag to prevent the observer from changing the hash again
      setIsManualNavigation(true);
      
      // Extract section id from hash (remove the # character)
      const hash = window.location.hash.replace('#', '');
      
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
      
      // Reset the flag after a short delay to allow scrolling to complete
      setTimeout(() => {
        setIsManualNavigation(false);
      }, 1000);
    };

    // Initial check for hash in URL
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [sectionIds]);

  return activeSection;
}
