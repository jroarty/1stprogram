import { useState } from "react";
import "./App.css";

function App() {
  const [largest, setLargest] = useState(0.0);
  const [smallest, setSmallest] = useState(0.0);

  const h = Math.pow(largest - smallest, 2) / Math.pow(largest + smallest, 2);
  const circumference =
    Math.PI *
    (largest + smallest) *
    (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
  // diameter from circumference
  const diameter = circumference / Math.PI;

  return (
    <>
      <h1>Josh's First Program!</h1>
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="largest-measurement">Largest Measurement</label>
        <input
          id="largest-measurement"
          onChange={(e) => setLargest(e.target.value)}
          type="number"
        />
        <label htmlFor="smallest-measurement">Smallest Measurement</label>
        <input
          id="smallest-measurement"
          onChange={(e) => setSmallest(e.target.value)}
          type="number"
        />
        <span>Circumference is {circumference}</span>
        <span>Diameter is {diameter}</span>
      </div>
    </>
  );
}

export default App;
