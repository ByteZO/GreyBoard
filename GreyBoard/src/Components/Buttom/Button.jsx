import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <div className="  	 shadow-lg shadow-white-800/50 h-14 w-14 border-2  bg-gray-900 text-white   rounded-md flex justify-center items-center r">

        {children}
      </div>
    </>
  );
};

export default Button;
