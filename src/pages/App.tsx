import { useState } from 'react';

import reactLogo from '@assets/images/react.svg';
import viteLogo from '@public/vite.svg';

import '@assets/styles/App.css';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state: any) => state.user);
  console.log(user);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Redux Template</h1>
      <div className="card">
        <div>
          <h2 style={{color: 'red'}}>{user?.user?.message}</h2>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
