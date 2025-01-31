import { useState, useEffect } from 'react';
import Hand from "./Hand";

const suits: string[] = ['spades', 'hearts', 'diamonds', 'clubs'];
const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

type Card = { suit: string; rank: string };

const deck: Card[] = suits.flatMap((suit) => ranks.map((rank) => ({ suit, rank })));

function Game() {
    const [gameDeck, setGameDeck] = useState<Card[]>([...deck]);
    const [playerHand, setPlayerHand] = useState<Card[]>([]);
    const [dealerHand, setDealerHand] = useState<Card[]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [result, setResult] = useState<{ type: string; message: string }>({ type: "", message: "" });
    const [newGame, setNewGame] = useState(false);

    const getRandomCard = (): Card => {
        const randomIndex: number = Math.floor(Math.random() * gameDeck.length);
        const card: Card = gameDeck[randomIndex];
        const newDeck = gameDeck.filter((_, index) => index !== randomIndex);
        setGameDeck(newDeck);
        return card;
    };

    const dealCards = () => {
        const playerInitialCards = [getRandomCard(), getRandomCard()];
        const dealerInitialCard = getRandomCard();
        setPlayerHand(playerInitialCards);
        setDealerHand([dealerInitialCard]);
    };

    const hit = () => {
        const newCard = getRandomCard();
        setPlayerHand((prevHand) => [...prevHand, newCard]);
        const playerValue = calculateCardsValue([...playerHand, newCard]);

        if (playerValue > 21) {
            handleGameOver({ type: "dealer", message: "Player Busts" });
        } else if (playerValue === 21) {
            handleGameOver({ type: "player", message: "Player Wins" });
        }
    };

    const playerStand = () => {
        let newDealerHand = [...dealerHand];
        let dealerValue = calculateCardsValue(newDealerHand);
        
        while (dealerValue < 17) {
            newDealerHand = [...newDealerHand, getRandomCard()];
            dealerValue = calculateCardsValue(newDealerHand);
        }

        setDealerHand(newDealerHand);
        const playerValue = calculateCardsValue(playerHand);

        if (dealerValue > 21) {
            handleGameOver({ type: "player", message: "Dealer Busts" });
        } else if (dealerValue > playerValue) {
            handleGameOver({ type: "dealer", message: "Dealer Wins" });
        } else if (dealerValue === playerValue) {
            handleGameOver({ type: "", message: "It's a Draw" });
        } else {
            handleGameOver({ type: "player", message: "Player Wins" });
        }
    };

    const handleGameOver = (result: { type: string; message: string }) => {
        setGameOver(true);
        setResult(result);
        setNewGame(true);
    };

    const resetGame = () => {
        setPlayerHand([]);
        setDealerHand([]);
        setGameOver(false);
        setResult({ type: "", message: "" });
        setNewGame(false);
        setGameDeck([...deck]);
        dealCards(); // Deal initial cards when the game resets
    };

    const calculateCardsValue = (cards: Card[]): number => {
        let value = 0;
        let aceCount = 0;

        cards.forEach((card) => {
            if (["J", "Q", "K"].includes(card.rank)) {
                value += 10;
            } else if (card.rank === "A") {
                aceCount += 1;
                value += 11;
            } else {
                value += parseInt(card.rank);
            }
        });

        while (value > 21 && aceCount > 0) {
            value -= 10;
            aceCount -= 1;
        }

        return value;
    };

    const playerValue = calculateCardsValue(playerHand);
    const dealerValue = calculateCardsValue(dealerHand);

    useEffect(() => {
        if (playerHand.length === 0 && dealerHand.length === 0) {
            dealCards(); // Deal initial cards when the game starts
        }
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen text-black">
            <div className="text-center">
                {gameOver && (
                    <div className="text-4xl mb-6">
                        <h1>{result.message}</h1>
                    </div>
                )}
                {!newGame ? (
                    <div className="mb-6">
                        <button 
                            onClick={hit} 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded m-2 text-xl"
                        >
                            Hit
                        </button>
                        <button 
                            onClick={playerStand} 
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded m-2 text-xl"
                        >
                            Stand
                        </button>
                    </div>
                ) : (
                    <button 
                        onClick={resetGame} 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded text-xl"
                    >
                        Reset
                    </button>
                )}

                <div className="mt-4 text-2xl">
                    <Hand cards={playerHand} title={"Player's Hand"} handValue={playerValue} />
                    <Hand cards={dealerHand} title={"Dealer's Hand"} handValue={dealerValue} />
                </div>
            </div>
        </div>
    );
}

export default Game;
