import { useState, useEffect } from "react";

function CurrTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("interval started");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("cancelled the interval");
    };
  }, []);
  let date = time.toLocaleDateString();
  let currentTime = time.toLocaleTimeString();

  return (
    <p className="lead">
      This is the current Time : {date} {currentTime}
    </p>
  );
}
export default CurrTime;
