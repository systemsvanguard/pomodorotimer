// src/components/PomodoroTimer.js
import React, { useState, useRef } from 'react'
import Spacer from "../app/images/spacer.png";
import PomodoroImage from "../app/images/PomodoroImage.jpg"

function padTime(time) {
  return time.toString().padStart(2, '0');
}

const PomodoroTimer = () => {
  const [title, setTitle] = useState("A journey of a 1,000 online miles begins with 1 button click below!")
  /* Sets initial timer to 25 minutes |  25 * 60 = 1500 */
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const pomodoroMinutes = padTime(Math.floor(timeLeft / 60) );
  const pomodoroSeconds = padTime(timeLeft - (pomodoroMinutes * 60) );
  const stopPomodoroMessage = "Nice! Let's keep going.";
  const resetPomodoroMessage = "How about another bout?";
  let runningPomodoroMessage = [
    "Excellent. Keep up the good work!",
    "Let's keep going friends!",
    "Nice! Onward & upward!",
    "Let's press on friends!",
    "Let's do this!!",
    "Another click, another opportunity.",
    "Slow down if you must BUT never stop!",
    "Work smarter AND harder.  Press on!",
    "Onward through the fog!"
  ];
  let randomRuningMessage = runningPomodoroMessage[Math.floor(Math.random() * runningPomodoroMessage.length)];
  // ----------------->

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle(resetPomodoroMessage);
    setTimeLeft(25 * 60);
    setIsRunning(false);
  }

  function startTimer() {
    if (intervalRef.current !== null) return;
    setTitle(randomRuningMessage);
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >=1 ) return timeLeft - 1;
        resetTimer();
        return 0;
      } );
    }, 1000 );
  }

  function stopTimer() {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle(stopPomodoroMessage);
    setIsRunning(false);
  }
  // ----------------->

  return (
  <div className="pomodoro">
    <h1 className="w3-center pageHeader">My Pomodoro Timer</h1>
    <h1 className="pomodoroMessage w3-center" id="pomodoroGreeting">{title}</h1>

    <div className="timer">
      <span>{pomodoroMinutes}</span>
      <span>:</span>
      <span className="timerSeconds">{pomodoroSeconds}</span>
    </div>

    <div className="pomodoroButtons">
      {!isRunning && <button onClick={startTimer} className="w3-button w3-indigo w3-hover-purple w3-round-large w3-xxlarge"> Start </button>}
      <img src={Spacer} alt=" " title=" " />
      <button onClick={resetTimer} className="w3-button w3-green w3-hover-teal w3-round-large w3-xxlarge"> Reset </button>
      <img src={Spacer} alt=" " title=" " />
      <button onClick={stopTimer} className="w3-button w3-deep-orange w3-hover-pink w3-round-large w3-xxlarge"> Stop </button>
    </div>
    <br />
    <img src={PomodoroImage} alt="Pomodoro Timer" title="Pomodoro Timer" />
  </div>
  );
}

export default PomodoroTimer;