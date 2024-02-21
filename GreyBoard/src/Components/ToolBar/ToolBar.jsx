import React from "react";
import Button from "../Buttom/Button";

const ToolBar = ({ colorChanger, markerHandle }) => {
  return (
    <>
      <section className="  absolute bottom-0 h-20 w-full   flex items-center justify-between  px-7 border-2  ">
        <Button>
          <i class="ri-camera-3-line"></i>
        </Button>

        <section className=" flex   items-center bg-gray-400  justify-around h-16  w-1/2  rounded-md border-2 ">
          <Button>
            <i className="ri-pencil-line"></i>
          </Button>
          <Button>
            <i className="ri-arrow-right-up-line"></i>
          </Button>
          <Button>
          <i class="ri-text-snippet"></i>
          </Button>
          <Button>
            <i className="ri-rectangle-line"></i>
          </Button>
          <Button>
            <i className="ri-eraser-line"></i>
          </Button>
          <Button>
            <i className="ri-color-filter-line"></i>
          </Button>
        </section>

        <section className=" flex space-x-5" >
        <button className="border-2   bg-gray-900 text-white  rounded-md flex justify-center items-center p-3">
            SignUp
          </button>
          <button className="border-2   bg-gray-900 text-white  rounded-md flex justify-center items-center p-3">
            LogIn
          </button>
        </section>
      </section>
    </>
  );
};

export default ToolBar;
