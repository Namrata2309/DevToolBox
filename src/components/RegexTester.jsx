import React, { useState } from 'react';

const RegexTester = () => {
  const [regex, setRegex] = useState('');
  const [testStr, setTestStr] = useState('');
  const [matches, setMatches] = useState([]);

  const handleTest = () => {
    try {
      const re = new RegExp(regex, 'g');
      const found = [...testStr.matchAll(re)].map((match) => match[0]);
      setMatches(found);
    } catch (e) {
      setMatches(['❌ Invalid regex']);
    }
  };

  return (
    <div className="p-5 bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-300 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">Regex Tester</h2>
      <input
        className="w-full p-2 mb-2 border rounded dark:bg-gray-900 dark:text-white"
        placeholder="Enter regex pattern"
        value={regex}
        onChange={(e) => setRegex(e.target.value)}
      />
      <textarea
        rows="4"
        className="w-full p-2 border rounded dark:bg-gray-900 dark:text-white"
        placeholder="Enter test string"
        value={testStr}
        onChange={(e) => setTestStr(e.target.value)}
      ></textarea>
      <button
        className="mt-3 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        onClick={handleTest}
      >
        Test
      </button>
      <pre className="mt-3 bg-gray-100 dark:bg-gray-700 text-sm p-3 rounded overflow-auto whitespace-pre-wrap text-black dark:text-white">
        {matches.length > 0 ? matches.join('\n') : 'No matches found'}
      </pre>
    </div>
  );
};

export default RegexTester;