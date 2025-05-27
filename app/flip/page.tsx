'use client';

import { useState } from "react";

export default function Flip() {
    const [animation, setAnimation] = useState("")
    const [flipping, setFlipping] = useState(false)

    const flipCoin = () => {
        setFlipping(true)
        setAnimation(Math.random() > 0.5 ? animation === "flip-tails" ? "flip-heads-from-tails" : "flip-heads" : "flip-tails");
        setTimeout(() => {
            setFlipping(false) 
        }, 2000);
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="mb-4">Coin Flipper</h1>

            <div className={`${animation} coin w-20 h-20`}>
                <div className="tails absolute w-full h-full bg-yellow-400 rounded-full flex items-center justify-center mb-4 text-black text-2xl font-bold">
                    <span>T</span>
                </div>
                <div className="heads absolute w-full h-full bg-yellow-400 rounded-full flex items-center justify-center mb-4 text-black text-2xl font-bold">
                    <span>H</span>
                </div>
            </div>

            <button
                className=" mt-6 px-6 py-2 bg-white rounded-md hover:bg-gray-200 text-black transition-colors duration-300"
                onClick={flipCoin}
                disabled={flipping}
                style={{ cursor: flipping ? "not-allowed" : "pointer" }}
            >
                Flip
            </button>
        </main>
    );
};