'use client';

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from 'next/navigation'
import Image from "next/image"
import base32encode from "../helper/base_32.js"

export default function Flip() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [animation, setAnimation] = useState("")
    const [flipping, setFlipping] = useState(false)

    const [actual, setActual] = useState(15)
    const [reported, setReported] = useState(0)
    const [flips, setFlips] = useState(29)

    const [error, setError] = useState("")

    const [result, setResult] = useState("")

    const flipCoin = () => {
        if (flips >= 30) {
            setError("You can only flip the coin 30 times!");
            return;
        }
        setFlipping(true)
        setFlips(flips + 1)
        let wasTails = animation === "flip-tails" || animation === "flip-tails-from-tails"
        setAnimation(wasTails ? "tails" : "")
        setTimeout(() => {
            let isHeads = Math.random() > 0.5
            setAnimation(isHeads ? wasTails ? "flip-heads-from-tails" : "flip-heads" : wasTails ? "flip-tails-from-tails" : "flip-tails");
        },  100)
        setTimeout(() => {
            setFlipping(false)
            if (actual) setActual(actual + 1)
        }, 2000);
    }

    const done = () => {
        if (flips < 30) {
            setError("You need to flip the coin 30 times before you can report your result!")
            return;
        }
        if (reported > 30 || reported < 0) {
            setError("You can only report a number between 0 and 30!");
            return;
        }
 
        const honesty = searchParams.get('honesty') || "nh"
        console.log(honesty)

        setResult(base32encode(honesty, reported, actual))
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="mb-4 font-bold">coin flipper ({flips}/30)</h1>

            <h1 className="mb-4 w-96 text-center">
                please count how many heads you flipped and enter that total here to submit 
            </h1>

            <h1 className="mb-8 w-96 text-center">
                the person who flips the most number of heads will win a prize! ($50)
            </h1>

            <div className={`${animation} coin w-20 h-20 mb-4`}>
                <div className="tails absolute w-full h-full bg-yellow-400 rounded-full flex items-center justify-center mb-4 text-black text-2xl font-bold">
                    <span>T</span>
                </div>
                <div className="heads absolute w-full h-full bg-yellow-400 rounded-full flex items-center justify-center mb-4 text-black text-2xl font-bold">
                    <span>H</span>
                </div>
            </div>

            <div className="flex flex-row" style={{ display: error ? "" : "none" }}>
                <Image
                    priority
                    src="/warning.svg"
                    alt="Warning"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                />

                <span className="ml-2 text-sm text-red-400">
                    {error}
                </span>
            </div>

            <div className="mt-4 space-x-2">
                <button
                    className="px-4 py-2 bg-white rounded-md hover:bg-gray-200 text-black transition-colors duration-300"
                    onClick={flipCoin}
                    disabled={flipping}
                    style={{ cursor: flipping ? "not-allowed" : "pointer" }}
                >
                    flip
                </button>

                <input 
                    type="number"
                    className="px-4 py-2 border-gray-300 rounded-md text-black"
                    placeholder="number of heads"
                    onChange={(e) => {
                        const value = parseInt(e.target.value);
                        setReported(value);
                    }}
                />

                <button
                    className="px-4 py-2 bg-white rounded-md hover:bg-gray-200 text-black transition-colors duration-300"
                    onClick={done}
                    disabled={flips != 30}
                    style={{ cursor: flips != 30 ? "not-allowed" : "pointer" }}
                >
                    done?
                </button>
            </div>

            <div className="flex flex-row my-4" style={{ display: result ? "" : "none" }}>
                <span className="ml-2 font-bold text-xl">
                    email <a href="mailto:joey5th@icloud.com">iggy</a> to joey/iggy: {result}
                </span>
            </div>
            
        </main>
    );
};