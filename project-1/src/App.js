
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./About";

function App() {
  const [marks, setMarks] = useState(80);
  return (
    <div className="App">
     <About/>
      <Router>
        <Switch>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


 {/* <header className="app-header">
        <nav className="topbar">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png"
            alt="amazon-logo"
          />
        </nav>
      </header>
      <div className="maincontainer">
        <div className="productpreview">
          <img src="https://imgur.com/PTgQlim.png" />
        </div>
        <div className="productdata">
          <h1 className="producttitle">{productData.title}</h1>
        </div>
      </div> */}
      {/* <div className="main">
        <div className="main-img">
          <img src=""></img>
        </div>
        <div className="main-content">
          <h1>FitBit 19 - The Smartest Watch</h1>
          <p>
            lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
            epsum lorem epsum
          </p>
          <span>Select Color</span>
          <div className="img-options">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALQStBmgNH8o_gqr3TDDPYZXBAMILQp1DVYk5rH2P-p9gl7BhHdhmaGN1yHx1CZOI6uw&usqp=CAU" />
            <img src="https://www.switchingtomac.com/wp-content/uploads/2022/12/preview-media-01-Title-Image.jpeg" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCA1SycE74AuQGKhaNd68i-UjaXlL4LZMedXItnNZ3vB9y-di3QkmwuNZ296DnxQ-TBE&usqp=CAU" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgm6i1a97ioF308vld0GM6TfusNA4yn6IgtNNKqns24kPYvmyV3yYiT-LfBh_JKfFPOsk&usqp=CAU" />
          </div>
          <p className="features">Features</p>
        </div>
      </div> */}

      // <h1>My marks is {marks}</h1>
      // <button
      //   onClick={() => {
      //     if (marks === 80) {
      //       setMarks(30);
      //     } else {
      //       setMarks(80);
      //     }
      //   }}
      // >
      //   Update
      // </button>