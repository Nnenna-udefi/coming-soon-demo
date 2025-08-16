import { useEffect, useState } from "react";
import "./App.css";
import { Stars } from "lucide-react";

const countdown_target = new Date("2025-12-25T11:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = countdown_target - new Date();
  // number of milliseconds in 1sec = 1000, number of seconds in 1min = 60, the number of minutes in 1hours = 60, the number of hours in 1day = 24
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));

  // the number of hours remaining in the current day (today)
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);

  return { days, hours, minutes, seconds };
};
function App() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(
      () => setTimeLeft(getTimeLeft()),
      // to be updated every seconds i.e 1 millisecond
      1000
    );

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div className="nav">
        <p className="mainLogo">NDEV</p>
        <Stars className="spin" />
      </div>
      <Stars className="spin" />
      <div className="main">
        <h1>Coming Soon</h1>
        <div className="para">
          <p>
            Our site is under construction, we are working very hard to give you
            the best experience with this one.
          </p>
        </div>

        <div className="countdown">
          <div className="box">
            <p className="value">{timeLeft.days}</p>
            <p className="label">Days</p>
          </div>
          <div className="box">
            <p className="value">{timeLeft.hours}</p>
            <p className="label">Hours</p>
          </div>
          <div className="box">
            <p className="value">{timeLeft.minutes}</p>
            <p className="label">Minutes</p>
          </div>
          <div className="box">
            <p className="value">{timeLeft.seconds}</p>
            <p className="label">Seconds</p>
          </div>
        </div>

        <h2>Notify me when it's ready?</h2>
        {/* <p className="promise">We'll never span you</p> */}
        <form>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </form>
        <Stars className="spin" />
        <div className="spin-flex">
          <Stars className="spin" />
          <Stars className="spin" />
        </div>
      </div>
    </div>
  );
}

export default App;
