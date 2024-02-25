import React, { useState } from "react";

interface ColorPickerProps {
  color: string;
  setColor: (color: string) => void;
}

const ColorPicker = ({ color, setColor }: ColorPickerProps) => {
  const colors = ["red", "green", "blue", "yellow"];
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (selectedColor: string) => {
    setColor(selectedColor);
    setIsOpen(false); // Close color picker after selecting a color
  };

  return (
    <div className="colorPicker">
      <div>Select a color</div>
      <div
        id="color"
        style={{
          backgroundColor: color || "black",
          display: isOpen ? "none" : "block",
        }}
        onClick={() => setIsOpen(!isOpen)}
      ></div>

      {isOpen && (
        <div>
          <select
            id="selector"
            value={color}
            onChange={(e) => handleClick(e.target.value)}
          >
            {colors.map((c, index) => (
              <option
                className="colorOption"
                key={index}
                style={{ backgroundColor: c }}
                value={c}
              >
                {c}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
