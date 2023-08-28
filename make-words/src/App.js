import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage";
import SingleValue from "./Components/SingleValue";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/singlevalue" element={<SingleValue />} />
      </Routes>
    </div>
  );
}

export default App;
