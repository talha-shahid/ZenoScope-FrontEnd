import React from "react";

const TextInput = (props) => {
  return (
    <div>
      <input
        placeholder="Search"
        className={`bg-[#2a2f36] border-none
        py-[5px] px-[10px]
        w-[200px]
        text-[#fff]
        text-[18px]
        rounded-[10px]
        outline: none`}
        style={{ width: props.fullwidth === "true" ? "100%" : "inherit" }}
        type="text"
        {...props}
      />
    </div>
  );
};

export default TextInput;
