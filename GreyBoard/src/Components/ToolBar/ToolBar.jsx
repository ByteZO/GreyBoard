import React from "react";
import Button from "../Buttom/Button";


const ToolBar = ({colorChanger, markerHandle}) => {
  return (
    <>
      <div className="  absolute bottom-0 h-20   w-full   flex items-center  justify-center  border-2 ">
        <div className=" flex   items-center   justify-around h-16  w-1/2  rounded-md border-2 ">
          <Button>
            <i className="ri-pencil-line"></i>
          </Button>
          <Button>
            <i className="ri-arrow-right-up-line"></i>
          </Button>
          <Button>
            <i className="ri-rectangle-line"></i>
          </Button>
          <Button>
            <i className="ri-eraser-line"></i>
          </Button>
          <Button>
            <i className="ri-color-filter-line">
              <input  type="color" value={colorChanger} onChange={markerHandle} />
            </i>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ToolBar;
