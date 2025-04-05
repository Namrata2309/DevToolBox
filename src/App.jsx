import React from 'react';
import JSONFormatter from './components/JSONFormatter';
import ColorPicker from './components/ColorPicker';
import Base64Tool from './components/Base64Tool';
import UUIDGenerator from './components/UUIDGenerator';
import TextDiffChecker from './components/TextDiffChecker';
import RegexTester from './components/RegexTester';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Dev Toolbox 🧰</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <JSONFormatter />
        <ColorPicker />
        <Base64Tool />
        <UUIDGenerator />
        <TextDiffChecker />
        <RegexTester />
      </div>
    </div>
  );
};

export default App;