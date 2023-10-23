import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { useState } from "react";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);
  const increaseSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes === 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours === 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div
      style={{
        width: "59vw",
        height: "31vh",
        background: "#1E2343",
        position: "absolute",
        borderRadius: "12px",
        marginTop: "18px",
        marginLeft: "20px",
        display: "flex",
        gap: "20px",
        boxSizing: "border-box",
        padding: "18px",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={["#FF6A6A"]}
          padding="70px 0"
        >
          {({ remainingTime }) => (
            <span
              style={{
                color: "white",
                fontSize: "1.6rem",
                background: "#191E39",
              }}
            >
              {toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div style={{ width: "32vw", textAlign: "center" }}>
        <div
          style={{
            color: "white",
            display: "flex",
            fontSize: "1.6rem",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ textAlign: "center", padding: "6px" }}>
            <p
              style={{
                color: "#949494",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "1.04px",
              }}
            >
              Hours
            </p>
            <img
              style={{ width: "19px", height: "14px" }}
              onClick={increaseHour}
              src={vector1}
              alt=""
            />
            <p>{hours}</p>
            <img
              style={{ width: "19px", height: "14px" }}
              onClick={decreaseHour}
              src={vector2}
              alt=""
            />
          </div>
          <div style={{ textAlign: "center", padding: "6px" }}>
            <p
              style={{
                color: "#949494",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "1.04px",
              }}
            >
              Minutes
            </p>
            <img
              style={{ width: "19px", height: "14px" }}
              onClick={increaseMinute}
              src={vector1}
              alt=""
            />
            <p>{minutes}</p>
            <img
              style={{ width: "19px", height: "14px" }}
              onClick={decreaseMinute}
              src={vector2}
              alt=""
            />
          </div>

          <div style={{ textAlign: "center", padding: "6px" }}>
            <p
              style={{
                color: "#949494",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "1.04px",
              }}
            >
              Seconds
            </p>
            <img
              style={{ width: "19px", height: "14px" }}
              onClick={increaseSecond}
              src={vector1}
              alt=""
            />
            <p>{seconds}</p>
            <img
              style={{ width: "19px", height: "14px" }}
              onClick={decreaseSecond}
              src={vector2}
              alt=""
            />
          </div>
        </div>
        <div
          onClick={() => setPlaying((prev) => !prev)}
          style={{
            background: "#FF6A6A",
            borderRadius: "12px",
            width: "324px",
            height: "31px",
            fontSize: "22px",
            marginLeft: "59px",
            textAlign: "center",
            color: "#FFF",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: "29px",
            letterSpacing: "1.24px",
          }}
        >
          {playing ? <p>Pause</p> : <p>Start </p>}
        </div>
      </div>
    </div>
  );
};
export default Timer;
