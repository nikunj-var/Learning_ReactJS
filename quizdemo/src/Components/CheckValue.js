import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "firebase/database";
import db from "./FireBaseConfig";
import { useHistory } from "react-router-dom";
import HelloPage from "./HelloPage";

function HomePage() {
  const [enteredcode, setEnteredCode] = useState("");
  const [enteredname, setEnteredname] = useState("");
  const [dataList, setDataList] = useState("");
  const [flag, setflag] = useState(false);
  useEffect(() => {
    db.collection("singlevalue").onSnapshot((snapshot) => {
      const newDataList = snapshot.docs.map((doc) => doc.data().value);
      setDataList(newDataList);
    });
  }, []);
  const adddetails = (e) => {
    e.preventDefault();
    console.log(typeof enteredcode);
    console.log(typeof dataList[0]);
    dataList[0] = dataList[0].toString();
    if (dataList.length > 0 && enteredcode === dataList[0]) {
      db.collection("student4").add({
        code: enteredcode,
        name: enteredname,
      });
      alert("you entered correct code");
    } else {
      alert("you entered wrong code");
    }
    console.log(typeof enteredcode);
    console.log(typeof dataList[0]);

    setEnteredCode("");
    setEnteredname("");
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                className="img"
                src="https://cdn-icons-png.flaticon.com/256/11826/11826847.png"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main-item">
        <input
          type="number"
          placeholder="Enter code here"
          className="inputtext"
          value={enteredcode}
          onChange={(e) => {
            setEnteredCode(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter your name"
          className="inputtext"
          value={enteredname}
          onChange={(e) => {
            setEnteredname(e.target.value);
          }}
        />
        <button onClick={adddetails}>START QUIZ</button>
      </div>
    </div>
  );
}
export default HomePage;
