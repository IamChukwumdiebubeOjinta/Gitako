import React from "react";

const Input = ({ text }) => {
  return (
    <div className="form-control">
      <label>{text}</label>
      <br />
      <input
        type="text"
        placeholder={text}
        className="input border-b-0 input-bordered bg-[#f0ebeb] focus:outline-none focus:bg-white "
      />
    </div>
  );
};

export default Input;
