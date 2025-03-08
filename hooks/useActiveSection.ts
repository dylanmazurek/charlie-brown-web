import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[], threshold: number = 0.6) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isManualNavigation, setIsManualNavigation] = useState(false);

  // Effect for handling scroll-based section detection
  useEffect(() => {
    // Don't run on server side
    if (typeof window === 'undefined') return;

    const observers: IntersectionObserver[] = [];
    
    // Create an observer for each section
    sectionIds.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              // When section enters viewport, update active section
              if (entry.isIntersecting && !isManualNavigation) {
                setActiveSection(sectionId);
                
                // Update the URL hash without scrolling
                const url = new URL(window.location.href);
                url.hash = `#${sectionId}`;
                window.history.replaceState({}, '', url.toString());
              }
            });
          },
          { 
            threshold, // How much of section needs to be visible
            rootMargin: '-10% 0px -70% 0px' // Adjust this to control trigger area
          }
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    // Cleanup function to disconnect all observers
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sectionIds, threshold, isManualNavigation]);

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
      handleHashChange();
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [sectionIds]);

  return activeSection;
}
