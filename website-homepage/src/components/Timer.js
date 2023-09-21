import { useEffect, useState } from "react";

import React from "react";

function Timer({ duration }) {
  const [remainingTime, setRemainingTime] = useState(duration - Date.now());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => Math.max(prevRemainingTime - 1000, 0));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [duration]);

  const remainingTimeHours = Math.floor(remainingTime / (1000 * 60 * 60));
  const remainingTimeMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const remainingTimeSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  let remainingTimeString;

  if (remainingTimeHours > 0) {
    remainingTimeString = `${String(remainingTimeHours).padStart(2, "0")}H : ${String(
      remainingTimeMinutes
    ).padStart(2, "0")}M: ${String(remainingTimeSeconds).padStart(2, "0")}S `;
  } else {
    // remainingTimeString = `${remainingTimeMinutes}M : ${
    //   remainingTimeSeconds < 10 ? "0" : ""
    // }${remainingTimeSeconds}S`;
    remainingTimeString = `${remainingTimeMinutes}M : ${String(remainingTimeSeconds).padStart(
      2,
      "0"
    )}S`;
  }

  return (
    <div className="text-white mt-[77px] text-4xl" style={{ fontFamily: "Unica One" }}>
      {remainingTimeString}
    </div>
  );
}

export default Timer;
