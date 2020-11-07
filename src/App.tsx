import React, { FC } from 'react';
import Timer from './Timer';
import Counter from './Counter';
import './App.css';

const App: FC = () => (
  <div className="container">
    <header>
      <h1>タイマー</h1>
    </header>
    <Timer limit={60} />
    <Counter initialCount={10}/>
  </div>
);

export default App;