import { useState } from 'react'
import Profile from './Profile.tsx'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Home() {
    return(
        <div className='min-h-screen font-sans'>
            <Profile />
        </div>
    );
};

export default Home;