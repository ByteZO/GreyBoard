import React, { useState, useRef, useEffect } from "react";
import ToolBar from "../ToolBar/ToolBar";

const PaintApp = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [color, setColor] = useState("#000000");
  const [thickness, setThickness] = useState(2);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setContext(ctx);
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    context.strokeStyle = color;
    context.lineWidth = thickness;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(
      e.clientX - canvasRef.current.offsetLeft,
      e.clientY - canvasRef.current.offsetTop
    );
  };

  const draw = (e) => {
    if (!isDrawing) return;
    context.lineTo(
      e.clientX - canvasRef.current.offsetLeft,
      e.clientY - canvasRef.current.offsetTop
    );
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    context.closePath();
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setThickness(2);
  };

  const handleThicknessChange = (e) => {
    setThickness(e.target.value);
  };

  return (
    <>
      <div className=" flex flex-col content-between relative">
        {/* <input type="color" value={color} onChange={handleColorChange} /> */}
        {/* <input
          type="range"
          min="1"
          max="10"
          value={thickness}
          onChange={handleThicknessChange}
        /> */}
        <canvas
          ref={canvasRef}
          width={1490}
          height={600}
          style={{ border: "px solid #000", marginTop: "10px" }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
        />
      </div>
      <ToolBar colorChanger = {color}  markerHandle = {handleColorChange} />
    </>
  );
};

export default PaintApp;
// export { handleThicknessChange, color, handleColorChange };
