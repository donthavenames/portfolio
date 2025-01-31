import React from 'react';

type CardProps = {
    card: {
        suit: string;
        rank: string;
    };
};

const Card: React.FC<CardProps> = ({ card }) => {
    return (
        <div className="border border-gray-400 rounded-lg p-4 shadow-md bg-white text-center w-20 h-28 flex flex-col justify-center items-center">
            <p className="text-lg font-semibold">{card.rank}</p>
            <h1 className="text-xl font-bold capitalize">{card.suit}</h1>
        </div>
    );
};

export default Card;
