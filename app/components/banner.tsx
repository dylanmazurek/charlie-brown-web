'use client';

import { siteConfig } from '@/config/site';

export default function Banner({ top, duration, delay }: { top: number, duration: number, delay: number }) {
    let divStyle: React.CSSProperties = {
        position: 'absolute',
        top: `${top}%`,
        animation: `animateBanner ${duration}s linear infinite`,
        animationDelay: `${delay}s`
    };

    let daysLeft = Math.ceil((new Date(siteConfig.show.event.sessions[0].date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    if (daysLeft > 0) {
        return (
            <div className="banner" style={divStyle}>
                <div className="bannerText">Only {daysLeft} days to go!</div>
            </div>
        )
    } else {
        return (
            <div className="banner" style={divStyle}>
                <div className="bannerText">Tickets on sale now!</div>
            </div>
        )
    }
}