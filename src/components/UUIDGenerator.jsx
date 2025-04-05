import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UUIDGenerator = () => {
  const [uuid, setUuid] = useState(uuidv4());

  return (
    <div className="p-5 bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-300 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">UUID Generator</h2>
      <div className="mb-4 break-all bg-gray-100 dark:bg-gray-700 text-black dark:text-white p-3 rounded">
        {uuid}
      </div>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => setUuid(uuidv4())}
      >
        Generate UUID
      </button>
    </div>
  );
};

export default UUIDGenerator;