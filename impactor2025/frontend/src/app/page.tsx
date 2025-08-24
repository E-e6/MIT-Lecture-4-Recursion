"use client";
import { useEffect, useState } from "react";

interface AsteroidData {
  name: string;
  x: number;
  y: number;
  z: number;
  timestamp: string;
}

export default function Home() {
  const [asteroid, setAsteroid] = useState<AsteroidData | null>(null);

  useEffect(() => {
    fetch("/api/asteroid")
      .then((res) => res.json())
      .then((data) => setAsteroid(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Meteor Madness Tracker</h1>
      {asteroid ? (
        <div className="text-center space-y-2">
          <p>
            <strong>Name:</strong> {asteroid.name}
          </p>
          <p>
            <strong>Coordinates:</strong> X: {asteroid.x.toFixed(2)}, Y:{" "}
            {asteroid.y.toFixed(2)}, Z: {asteroid.z.toFixed(2)}
          </p>
          <p>
            <strong>Timestamp:</strong> {new Date(asteroid.timestamp).toLocaleString()}
          </p>
        </div>
      ) : (
        <p>Loading asteroid data...</p>
      )}
    </main>
  );
}