"use client";
import { useEffect, useState } from "react";

export default function ImpactPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/asteroid")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">🚀 Asteroid Orbit Data</h1>
        {data ? (
          <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          <p>Loading orbit data...</p>
        )}
      </div>
    </div>
  );
}