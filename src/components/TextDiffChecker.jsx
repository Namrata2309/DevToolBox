import React, { useState } from 'react';

const TextDiffChecker = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const getDiff = () => {
    if (text1 === text2) return '✅ Texts are identical';
    const diffLines = text1.split('\n').map((line, idx) => {
      const secondLine = text2.split('\n')[idx] || '';
      return line === secondLine ? `  ${line}` : `- ${line}\n+ ${secondLine}`;
    });
    return diffLines.join('\n');
  };

  return (
    <div className="p-5 bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-300 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">Text Diff Checker</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <textarea
          rows="5"
          className="p-2 border rounded dark:bg-gray-900 dark:text-white"
          placeholder="Text 1"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        ></textarea>
        <textarea
          rows="5"
          className="p-2 border rounded dark:bg-gray-900 dark:text-white"
          placeholder="Text 2"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        ></textarea>
      </div>
      <pre className="mt-4 bg-gray-100 dark:bg-gray-700 text-sm p-3 rounded overflow-auto whitespace-pre-wrap text-black dark:text-white">
        {getDiff()}
      </pre>
    </div>
  );
};

export default TextDiffChecker;