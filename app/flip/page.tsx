'use client'

import { useRouter } from "next/navigation";

export default function StartPage() {
    const router = useRouter();

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1>Welcome to Coin Flipper!</h1>
            <p>Get ready to flip a coin and test your luck.</p>

            <button
                className="mt-4 px-6 py-2 bg-white rounded hover:bg-gray-200 text-black transition-colors duration-300"
                onClick={() => Math.random() > 0.5 ? router.push('flip') : router.push('honesty')}
            >
                Start Flipping!
            </button>
        </main>
    );
}