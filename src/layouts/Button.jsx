import React from "react";

const Button = (props) => {
  return (
    <div>
      <button href="https://wa.me/1234567890" className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;