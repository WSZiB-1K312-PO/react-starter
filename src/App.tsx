import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CounterProps} from "./Counter";
import {Counters} from "./Counters";
import {CounterData} from "./CounterData";
import {Link, Route, Routes} from "react-router-dom";
import {Randomizer} from "./Randomizer";

function App() {
  const counters: CounterData[] = [
    {
      initialValue: 5
    },
    {
      minValue: -5
    },
    {
      minValue: -10,
      initialValue: 10,
      maxValue: 20
    }
  ];

  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counters">Counters</Link></li>
        <li><Link to="/randomizer">Randomizer</Link></li>
      </ul>
      <Routes>
        <Route path={'/'} element={
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        }>
        </Route>
        <Route path={'/counters'} element={<Counters counters={counters}></Counters>}>
        </Route>
        <Route path={'/randomizer'} element={<Randomizer/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
