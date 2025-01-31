import React from 'react';

interface BannerProps {
    title: string;
    subtitle: string;
    bgImg: string;
    alignment?: 'text-left' | 'text-center' | 'text-right';
    color?: 'text-white' | 'text-black';
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, bgImg, alignment = "text-right", color = "text-white" }) => {
    return (
        <section 
            className="h-[60vh] w-screen bg-cover bg-center" 
            style={{ backgroundImage: `url("${bgImg}")` }}
        >
            <div className={`z-10 ${alignment} ${color}`}>
                <h1 className={`text-7xl font-bold ${color}`}>{title}</h1>
                <p className={`mt-2 text-4xl font-bold ${color}`}>{subtitle}</p>
            </div>
        </section>
    );
}

export default Banner;
