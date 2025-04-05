import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#3498db');

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const hexToHsl = (hex) => {
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 7) {
      r = parseInt(hex.slice(1, 3), 16) / 255;
      g = parseInt(hex.slice(3, 5), 16) / 255;
      b = parseInt(hex.slice(5, 7), 16) / 255;
    }
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return `hsl(${(h * 360).toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%)`;
  };

  return (
    <div className="p-5 bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-300 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">Color Picker</h2>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-20 h-20 border-0" />
      <div className="mt-4 text-sm">
        <p><strong>HEX:</strong> {color}</p>
        <p><strong>RGB:</strong> {hexToRgb(color)}</p>
        <p><strong>HSL:</strong> {hexToHsl(color)}</p>
      </div>
    </div>
  );
};

export default ColorPicker;