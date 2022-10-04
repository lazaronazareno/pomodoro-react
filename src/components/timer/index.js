import React, { useState, useEffect } from 'react';
import play from '../../utils/icon/play.png'
import pause from '../../utils/icon/pause.png'
import stop from '../../utils/icon/stop.png'
import './styles.scss';

const FULL_DASH_ARRAY = 283;

const Timer = ({START_MINUTES, START_SECOND, START_DURATION, counter, setCounter, isBreak, setIsBreak}) => {
  const [currentMinutes, setMinutes] = useState(START_MINUTES < 10 ? '0' + START_MINUTES : START_MINUTES);
  const [currentSeconds, setSeconds] = useState(START_SECOND < 10 ? '0' + START_SECOND : START_SECOND);
  const [isStop, setIsStop] = useState(false);
  const [duration, setDuration] = useState(START_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [warningLimit, setWarningLimit] = useState(500)
  const [alertLimit, setAlertLimit] = useState(100)

  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: warningLimit
    },
    alert: {
      color: "red",
      threshold: alertLimit
    }
  };
  let remainingPathColor = COLOR_CODES.info.color;

  const startHandler = () => {
    const newDuration = parseInt(START_SECOND, 10) + 60 * parseInt(START_MINUTES, 10)
    setDuration(newDuration);
    setWarningLimit(newDuration / 3)
    setAlertLimit(newDuration / 8)
    setIsRunning(true);
  };

  const stopHandler = () => {
    setIsStop(true);
    setIsRunning(false);
  };

  const resetHandler = () => {
    setMinutes(START_MINUTES < 10 ? '0' + START_MINUTES : START_MINUTES);
    setSeconds(START_SECOND < 10 ? '0' + START_SECOND : START_SECOND);
    setIsRunning(false);
    setIsStop(false);
    setDuration(START_DURATION);
  };

  const handleCounter = () => {
    setCounter(counter + 1)
    setIsBreak(!isBreak)
  }

  const resumeHandler = () => {
    let newDuration =
      parseInt(currentMinutes, 10) * 60 + parseInt(currentSeconds, 10);
    setDuration(newDuration);

    setIsRunning(true);
    setIsStop(false);
  };

  const setRemainingPathColor = (timeLeft) => {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  const setCircleDasharray = (timer) => {
    const timeLimit = parseInt(START_SECOND, 10) + 60 * parseInt(START_MINUTES, 10)
    const rawTimeFraction = timer / timeLimit
    const circleDasharray = `${(
      (rawTimeFraction - (1/timeLimit)*(1-rawTimeFraction)) * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }

  useEffect(() => {
    if (isRunning === true) {
      let timer = duration;
      var minutes, seconds;

      const interval = setInterval(function () {
        if (--timer <= 0) {
          handleCounter();
        } else {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? '0' + minutes : minutes;
          seconds = seconds < 10 ? '0' + seconds : seconds;

          setMinutes(minutes);
          setSeconds(seconds);
          setCircleDasharray(timer);
          setRemainingPathColor(timer);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <>
      <div>
        <div className="base-timer">
          <svg className={`base-timer__svg ${isBreak ? 'bg-green' : 'bg-red'}`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="base-timer__circle">
              <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
              <path
                id="base-timer-path-remaining"
                strokeDasharray="283"
                className={`base-timer__path-remaining ${remainingPathColor}`}
                d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                "
              ></path>
            </g>
          </svg>
          <div id="base-timer-label" className="base-timer__label">
            <span>{currentMinutes} : {currentSeconds}</span>
          </div>
            <div className='timer-button__container'>
              {!isRunning && !isStop && (
                <div className={`timer-button ${isBreak ? 'bg-green' : 'bg-red'}`}>
                  <img onClick={startHandler} src={play} alt='Play icons created by Freepik - Flaticon' />
                </div>
              )}
              {isRunning && (
                <div className={`timer-button ${isBreak ? 'bg-green' : 'bg-red'}`}>
                  <img onClick={stopHandler} src={pause} alt='Pause icons created by inkubators - Flaticon' />
                </div>
              )}

              {isStop && (
                <div className={`timer-button ${isBreak ? 'bg-green' : 'bg-red'}`}>
                  <img onClick={resumeHandler} src={play} alt='Play iconos creados por Freepik - Flaticon' />
                </div>
              )}
              <div className={`timer-button ${isBreak ? 'bg-green' : 'bg-red'}`}>
                <img onClick={resetHandler} disabled={!isRunning && !isStop} src={stop} alt='Stop icons created by Pixel perfect - Flaticon' />
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Timer;