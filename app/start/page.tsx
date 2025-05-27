'use client'

export default function StartPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1>Welcome to Coin Flipper!</h1>
            <p>Get ready to flip a coin and test your luck.</p>

            <button
                className="mt-4 px-6 py-2 bg-white rounded hover:bg-gray-200 text-black transition-colors duration-300"
                onClick={() => window.location.href = '/flip'}
            >
                Start Flipping!
            </button>
        </main>
    );
}