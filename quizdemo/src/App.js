import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Components/HomePage";
import Start from "./Components/Start";
import HelloPage from "./Components/HelloPage"

import 'firebase/firestore';

import './index.css';
import DataDisplay from "./Components/DataDisplay";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Start />} />
        <Route path="/hello" element={<HelloPage />} />
      </Routes> */}
      <header className="App-header">
        <DataDisplay />
      </header>
    </div>
  );
}
export default App;
