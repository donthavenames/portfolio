import React, { useState } from 'react';

import Banner from './Banner.tsx';

export default function Profile() {
    return (
        <div>
            <Banner
                title="Welcome"
                subtitle="to my Portfolio"
                bgImg="https://wallpapercave.com/wp/wp8695528.jpg"
                alignment="text-right"
            />
                <div className='mx-20'>
                <h1 className="text-6xl pt-40 my-4">Hi, I'm Eric Yen.</h1>
                <h2 className="text-3xl my-2">BS Computer Science</h2>
                <h2 className="text-3xl my-2">@ Cornell University</h2>
                </div>
            
            <div className="card mt-8 mx-20">
                <h1 className='text-4x1'>
                    Here's a bit about me 
                   
                </h1>
                <p className="text-3xl leading-relaxed">
                    Here's a little info about me.
                    Hello, I'm Eric, a developer with a passion in software development, machine learning, data science, and product management.

                    I'm currently a student at Cornell University studying Computer Science. 

                    Get in touch! I would love to chat about work, projects, technology, or anything :)

                </p>
            </div>
        </div>
    );
}
