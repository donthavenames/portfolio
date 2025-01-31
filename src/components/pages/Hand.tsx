import React from 'react';
import Card from "./Card";

type HandProps = {
    cards: { suit: string; rank: string }[];
    title: string;
    handValue: number;
};

const Hand: React.FC<HandProps> = ({ cards, title, handValue }) => {
    return (
        <div>
            <h2>{title}: {handValue}</h2>
            <div>
                {cards.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </div>
        </div>
    );
};

export default Hand;
