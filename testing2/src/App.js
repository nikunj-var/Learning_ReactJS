import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
  Link,
} from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/test">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/test" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
