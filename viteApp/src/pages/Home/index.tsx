import React, { useState } from "react";
import reactLogo from '@/assets/react.svg'
import './index.less'

const Home = () => {
  const [count, setCount] = useState(0)

  return  <div className="App">
    <div>
      <div className={'img'}>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + qiankun</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h1 className="read-the-docs">
        主项目
      </h1>
    </div>
  </div>;
};

export default Home;
