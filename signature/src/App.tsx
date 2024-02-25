import { useState } from "react";
import "./App.css";
import CanvasComponent from "./CanvasComponent";
import ColorPicker from "./ColorPicker";
import Background from "./Background";
import FontSize from "./FontSize";
import Button from "./Button";

function App() {
  const [color, setColor] = useState("");
  return (
    <>
      <div className="btnDiv">
        <ColorPicker color={color} setColor={setColor} />
        <Background />
        <FontSize />
      </div>
      <CanvasComponent />
      <div className="btnDiv">
        <Button title={"Clear"} />
        <Button title={"Save and Download"} />
        <Button title={"Retrive Saved Signature"} />
      </div>
    </>
  );
}

export default App;
