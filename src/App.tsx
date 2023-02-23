import React from 'react';
import logo from './logo.svg';
import TemplateInjector from './TemplateInjector';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800">
      <header className="flex flex-col items-center">
        <img src={logo} className="h-60 mb-4" alt="logo" />

        <h1 className="text-3xl font-bold underline text-red-600 mb-2 dark:text-white">
          Some Tailwind Styling
        </h1>

        <p className="text-gray-700 mb-4 dark:text-gray-300">
          Edit
          <code className="font-mono bg-white dark:bg-gray-900 rounded px-1 text-gray-900 dark:text-gray-100">
            src/App.tsx
          </code>
          and save to reload.
        </p>

        <a
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-gray-500 dark:hover:bg-gray-700 dark:text-gray-900"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <TemplateInjector templateId='fathym-compose' className="mt-8 prose dark:prose-invert"></TemplateInjector>
      </header>
    </div>
  );
}

export default App;
