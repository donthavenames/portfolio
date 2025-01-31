import React from 'react'
import Banner from './Banner.tsx'


function Resume() {
    return(
        <div>
            <Banner
            title="Resume"
            subtitle=""
            bgImg="https://wallpaperaccess.com/full/1123697.jpg"
            alignment="text-right"
            />
            <div className="h-40"></div> 
            <iframe
                src={'/My_Resume (3).pdf#zoom=90'}
                className="flex-grow w-full h-screen"
                
            ></iframe>
        </div>
        
        
    );
};

export default Resume;