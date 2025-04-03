import Banner from './banner';

export default function Clouds() {
    return (
        <div className="absolute top-0 left-0 w-full h-[calc(100%-6rem)] bg-sky z-0 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-90">
                <Banner top={10} duration={15} delay={0} />
                <Cloud left={-10} top={0} duration={35} delay={-5} />
                <Cloud left={40} top={5} duration={40} delay={-15} />
                <Cloud left={-5} top={36} duration={45} delay={-25} />
                <Cloud left={0} top={60} duration={50} delay={-30} />
                <Cloud left={-10} top={45} duration={38} delay={-12} />
            </div>
        </div>
    )
}

function Cloud({ left, top, duration, delay }: { left: number, top: number, duration: number, delay: number }) {
    let divStyle: React.CSSProperties = {
        position: 'absolute',
        left: `${left}%`,
        top: `${top}%`,
        animation: `animateCloud ${duration}s linear infinite`,
        animationDelay: `${delay}s`
    };
    
    return (
        <div className="cloud" style={divStyle} />
    )
}