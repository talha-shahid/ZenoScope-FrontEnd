import React, { useEffect, useState } from "react";
// import { Slider } from "@mui/material";
import "./Side.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateRange,
  updateColor,
  updateAlgorithm,
  updateSpeed,
} from "../../../../store/sortingSlice";

const SideBar = () => {
  const [value, setValue] = useState(30);
  const myState = useSelector((state) => state.sorting);
  const dispatch = useDispatch();

  //Handle Algorithm
  const handleAlgo = (algo) => {
    dispatch(updateAlgorithm(algo));
  };

  //Handle Range
  const handleRange = (range) => {
    setValue(range);
    // let new_arr = [...myState.values];
    // console.log(new_arr);
    //   for (let i = 0; i < new_arr.length; i++)
    //     document.getElementById(i).style.transform = `translateX(${i * 11}px)`;

    //   resetColor();

    dispatch(updateRange(range));
    // dispatch({
    //   type: "CHANGE_VALUES",
    // });
  };

  //Handle Color
  const handleColor = (color) => {
    console.log(color);
    dispatch(updateColor(color));
  };

  //Handle Speed
  const handleSpeed = (speed) => {
    dispatch(updateSpeed(speed));
  };

  //useEffect
  useEffect(() => {
    handleRange(30);
  }, []);

  return (
    <div>
      <div className="sidebar__option">
        <label htmlFor="algo">Algorithm: </label>
        <select
          name="algo"
          id="algo"
          onChange={(e) => handleAlgo(e.target.value)}
          disabled={myState.play ? true : false}
        >
          <option value="bubble" className="bg-gray-800">
            Bubble Sort{" "}
          </option>
          <option value="merge" className="bg-gray-800">
            Merge Sort
          </option>
          <option value="insertion" className="bg-gray-800">
            Insertion Sort
          </option>
          <option value="selection" className="bg-gray-800">
            Selection Sort
          </option>
          <option value="quick" className="bg-gray-800">
            Quick Sort
          </option>
        </select>
      </div>

      <div className="sidebar__option ">
        <label htmlFor="range">Range: </label>
        <input
          id="slider"
          type="range"
          value={value}
          className="w-[180px] h-1 rounded-lg appearance-none cursor-pointer bg-gray-700"
          onChange={(e) => handleRange(e.target.value)}
          disabled={myState.play ? true : false}
        />
      </div>

      <div className="sidebar__option">
        <label htmlFor="color">Color: </label>
        <select
          name="color"
          id="color"
          onChange={(e) => handleColor(e.target.value)}
          disabled={myState.play ? true : false}
        >
          <option
            value="rgb(0, 149, 199)"
            style={{ color: "rgb(0, 149, 199)" }}
          >
            Blue
          </option>
          <option
            value="rgb(85, 212, 0)"
            style={{ color: "rgb(10,200,20)" }}
            className="bg-gray-800"
          >
            Green
          </option>
          <option
            value="rgb(255, 112, 112)"
            style={{ color: "red" }}
            className="bg-gray-800"
          >
            Red
          </option>
          <option
            value="grey"
            style={{ color: "grey" }}
            className="bg-gray-800"
          >
            Black
          </option>
          <option
            value="#ddd902"
            style={{ color: "#ddd902" }}
            className="bg-gray-800"
          >
            Yellow
          </option>
        </select>
      </div>

      <div className="sidebar__option ">
        <label htmlFor="speed">Speed: </label>
        <select
          name="speed"
          defaultValue={100}
          id="speed"
          onChange={(e) => handleSpeed(e.target.value)}
          disabled={myState.play ? true : false}
        >
          <option value={500} className="bg-gray-800">
            Slow
          </option>
          <option value={200} className="bg-gray-800">
            Medium
          </option>
          <option value={100} className="bg-gray-800">
            Fast
          </option>
          <option value={20} className="bg-gray-800">
            Super Fast
          </option>
          <option value={5} className="bg-gray-800">
            Ultra Fast
          </option>
        </select>
      </div>
    </div>
  );
};

export default SideBar;
