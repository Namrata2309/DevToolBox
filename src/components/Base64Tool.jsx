import React, { useState } from 'react';

const Base64Tool = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isEncoding, setIsEncoding] = useState(true);

  const handleConvert = () => {
    try {
      if (isEncoding) {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch (e) {
      setOutput('❌ Invalid input');
    }
  };

  return (
    <div className="p-5 bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-300 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">Base64 Encoder / Decoder</h2>
      <textarea
        rows="4"
        className="w-full p-3 border border-gray-300 rounded text-black dark:text-white dark:bg-gray-900"
        placeholder="Enter text or Base64"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div className="flex justify-between items-center mt-3">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isEncoding}
            onChange={() => setIsEncoding(!isEncoding)}
          />
          <span>Encode</span>
        </label>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
      <pre className="mt-4 bg-gray-100 dark:bg-gray-700 text-sm p-3 rounded overflow-auto whitespace-pre-wrap text-black dark:text-white">
        {output}
      </pre>
    </div>
  );
};

export default Base64Tool;
