"use client";
import Link from "next/link";
import { useState } from "react";
export default function HonestyPledge() {
  const [name, setName] = useState("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="font-bold mb-4">Honesty Pledge</h1>
      <p className="max-w-xl text-center">
        Before you proceed, we ask that you uphold the spirit of fair play.
        Please commit to reporting your coin flip results truthfully and
        accurately. Your honesty ensures a fair and fun experience for everyone.
      </p>

      <div className="text-center max-w-xl mt-6">
        <p className="mb-6">
          I,&nbsp;
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g( John Doe )"
            className="inline-block border-b border-gray-300 focus:outline-none px-2 bg-transparent w-48 text-center"
          />
          , pledge to complete this task with integrity, honesty, and in
          accordance with the principles of fair conduct.
        </p>

        <Link
          className="px-6 py-2 bg-white rounded shadow-md hover:bg-gray-200 text-black transition-colors duration-300"
          // onClick={() => window.location.href = '/flip'}
          href={{
            pathname: "/start",
            query: { honesty: "h" },
          }}
          style={{ pointerEvents: name.trim() === "" ? "none" : "auto" }}
        >
          I Pledge
        </Link>
      </div>
    </main>
  );
}
