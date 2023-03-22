import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BubbleSort from "./SortingAlgorithms/BubbleSort";
import "./Main.css";
import { play_pause } from "../../../../store/sortingSlice";
import InsertionSort from "./SortingAlgorithms/InsertionSort";
import MergeSort from "./SortingAlgorithms/MergeSort";
import QuickSort from "./SortingAlgorithms/QuickSort";
import SelectionSort from "./SortingAlgorithms/SelectionSort";

const Main = () => {
  const myState = useSelector((state) => state.sorting);
  const dispatch = useDispatch();
  const color = myState.color;
  const range = myState.range;

  //Speed
  let speed = myState.speed;
  if (myState.algorithm === "selection") speed *= 3;
  else if (myState.algorithm === "merge") speed *= 5;
  else if (myState.algorithm === "quick") speed *= 6;

  //play/pause function
  const handlePlayPause = (play) => {
    console.log("play pause called");
    if (!myState.play) {
      document.getElementById("change-btn").disabled = true;
      document.getElementById("change-btn").style.backgroundColor = "grey";
      document.getElementById("play-btn").disabled = true;
      document.getElementById("play-btn").style.backgroundColor = "grey";
    } else {
      return;
    }
    dispatch(play_pause(play));
  };

  useEffect(() => {
    if (!myState.play) {
      document.getElementById("play-btn").disabled = false;
      document.getElementById("play-btn").style.backgroundColor =
        "rgb(0, 149, 199)";
      document.getElementById("change-btn").disabled = false;
      document.getElementById("change-btn").style.backgroundColor =
        "rgb(0, 149, 199)";
    }
  }, [myState.play]);

  return (
    <div className="visuals">
      <div className="visualizer">
        {myState.algorithm === "quick" && (
          <div className="legend">
            <div className="legend__lable"></div> Pivot elements
          </div>
        )}
        {
          <div
            className="visual__items"
            style={{ width: `${myState.values.length * 11}px` }}
          >
            {myState.values.map((item) => {
              return (
                <div
                  className="visual__item"
                  key={item[1]}
                  id={item[1]}
                  style={{
                    transition: `${speed / 1000}s linear all`,
                    transform: `translateX(${item[1] * 11}px)`,
                  }}
                >
                  <h4>{item[0]}</h4>
                  <div
                    className="visual"
                    style={{
                      height: `${item[0] * 3}px`,
                      backgroundColor: color,
                      width: range < 35 ? "8px" : "6px",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        }
      </div>
      {/* Buttons */}
      <div className="visual__btns">
        <button id="change-btn" onClick={() => window.location.reload(true)}>
          change values
        </button>
        <button id="play-btn" onClick={() => handlePlayPause(true)}>
          play
        </button>
      </div>
      {/* Sorting Algorithms */}
      <BubbleSort />
      <InsertionSort />
      <MergeSort />
      <QuickSort />
      <SelectionSort />
    </div>
  );
};

export default Main;
