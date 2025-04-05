import React, { useState } from 'react';

const JSONFormatter = () => {
  const [input, setInput] = useState('');
  const [formatted, setFormatted] = useState('');

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);
      setFormatted(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setFormatted('❌ Invalid JSON');
    }
  };

  return (
    <div className="p-5 bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-300 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">JSON Formatter</h2>
      <textarea
        rows="6"
        className="w-full p-3 border border-gray-300 rounded text-black dark:text-white dark:bg-gray-900"
        placeholder="Paste raw JSON here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button
        className="mt-3 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        onClick={handleFormat}
      >
        Format
      </button>
      <pre className="mt-4 bg-gray-100 dark:bg-gray-700 text-sm p-3 rounded overflow-auto whitespace-pre-wrap text-black dark:text-white">
        {formatted}
      </pre>
    </div>
  );
};

export default JSONFormatter;