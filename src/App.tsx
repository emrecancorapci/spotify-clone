import { useState } from 'react';
import reactLogo from './assets/react.svg';
import tauriLogo from './assets/tauri.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-0 flex min-h-screen min-w-[320px] flex-col items-center justify-center">
      <div className="grid grid-cols-3">
        <a className="pe-12" href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src="/vite.svg"
            className="h-24 p-6 transition-all duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a className="flex justify-center pe-4" href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-24 animate-[spin_3s_linear_infinite] p-6 transition-all duration-300 will-change-auto hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
        <a className="flex justify-center ps-8" href="https://tauri.app" target="_blank" rel="noreferrer">
          <img
            src={tauriLogo}
            className="h-24 p-6 transition-all duration-300 will-change-auto hover:drop-shadow-[0_0_2em_#FFC131]"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1 className="text-5xl">Vite + React + Tauri</h1>
      <div className="p-8">
        <button
          className="rounded-lg border border-solid border-transparent bg-zinc-900 px-5 py-2 text-base font-medium transition-colors hover:border-[#646cff] focus:outline focus:outline-4 focus:outline-[#646cff] "
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="pt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-zinc-500">Click on the Vite, React and Tauri logos to learn more</p>
    </div>
  );
}

export default App;
