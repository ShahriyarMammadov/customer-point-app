import React, { useState } from "react";
import "./index.scss";

function PointsCalculator() {
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [points, setPoints] = useState(0);

  const calculatePoints = () => {
    let pointsEarned = 0;
    if (purchaseAmount > 100) {
      const overHundredAmount = purchaseAmount - 100;
      pointsEarned += overHundredAmount * 2;
      pointsEarned += 1 * 50;
    } else if (purchaseAmount >= 50) {
      pointsEarned += (purchaseAmount - 50) * 1;
    }
    setPoints(pointsEarned);
  };

  return (
    <div id="pointCalculator">
      <div>
        <h1>Points Calculator</h1>
        <label htmlFor="purchaseAmount">Purchase Amount:</label>
        <input
          type="number"
          id="purchaseAmount"
          value={purchaseAmount}
          onChange={(e) => setPurchaseAmount(Number(e.target.value))}
        />
        <button onClick={calculatePoints}>Calculate Points</button>
        <p>Points Earned: {points}</p>
      </div>
    </div>
  );
}

export default PointsCalculator;
