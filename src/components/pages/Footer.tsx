import React from 'react'

const Footer = () => {
    return(
        <footer className="fixed bottom-0 left-0 right-0 bg-transparent text-black">
            <div className='flex space-x-8'>
                <div className="my-4 w-1/2">
                    <p className="container mx-10 text-sm ">
                        By Eric Yen
                    </p>
                    <p className="container mx-10 text-sm">
                        Developer
                    </p>
                </div>
                <div className="my-3 w-1/2">
                    <p className="container mx-60 text-sm">
                        LinkedIn
                    </p>
                    <p className="container mx-60 text-sm font-bold">
                        ecy29@cornell.edu
                    </p>
                </div>
            </div>
            <div className="container mx-10 text-[10px] font-light">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
            
        </footer>
    );
};

export default Footer;
