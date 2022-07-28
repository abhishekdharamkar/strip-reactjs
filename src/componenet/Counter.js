import React, { useState, useEffect } from "react";
import "./Counter.css";
export default function Counter(props) {
  let [num, setNum] = useState(1);
  useEffect(() => {
    props.counter(num);
  }, [num]);

  let incNum = () => {
    if (num < 3) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <div className="conterbox">
      <div className="conterbox1">
        <input
          type="text"
          className="countervalue"
          value={num}
          onChange={handleChange}
        />
      </div>
      <div className="conterbox2">
        <div className="arrow">
          <i className="fa-solid fa-sort-up i" onClick={ incNum}  style={
              num === 3
                ? { color: "#cccccc" }
                : { color: "black" }
            }></i>

          <i class="fa-solid fa-sort-down i2" onClick={decNum}  style={
              num === 1
                ? { color: "#cccccc" }
                : { color: "black" }
            }></i>
        </div>
      </div>
    </div>
  );
}
