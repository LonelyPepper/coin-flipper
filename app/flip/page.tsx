export default function Flip() {



    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="pb-8">Coin Flipper</h1>

            <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mb-4 text-black text-2xl font-bold coin-flip">
                <span>T</span>
            </div>

            <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mb-4 text-black text-2xl font-bold">
                <span>H</span>
            </div>
        </main>
    );
};