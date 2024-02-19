import React from "react";

const Button = ({children}) => {
  return (
    <>
      <div className="  h-14 w-14 border-2   rounded-md flex justify-center items-center  ">
        {children}
      </div>
    </>
  );
};

export default Button;
