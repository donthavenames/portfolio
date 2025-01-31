import React from 'react'
import Banner from './Banner.tsx'
import Game from './Game.tsx'
import Login from './Login.tsx'


function Blackjack() {
    return(
        <div>
            <Banner
            title="Blackjack"
            subtitle=""
            bgImg="https://wallpaperaccess.com/full/496596.jpg"
            alignment="text-right"
            color="text-black"
            />
            <Game />

            
            
        </div>
        
        
    );
};

export default Blackjack;