import "./App.css";
import React  from "react";
import GrayBoard from "./Components/GrayBoard/GrayBoard";


function App() {
 
 
  return (
    <>
      <GrayBoard/>

      {/* <div>
        <h1>Custom Color Palette Selector</h1>
        <CustomColorPicker onChange={handleColorChange} color={selectedColor} />

        <div style={{ marginTop: "20px" }}>
          <p>Selected Color:</p>
          <div
            style={{
              width: "50px",
              height: "20px",
              backgroundColor: `rgba(${selectedColor.r},${selectedColor.g},${selectedColor.b},${selectedColor.a})`,
            }}
          />
        </div>
      </div> */}
    </>
  );
}

export default App;
