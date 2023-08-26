import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import db from "./FireBaseConfig";
import { Link, useHistory } from "react-router-dom";

function GenerateQuiz() {
  const navigate = useNavigate();

  const [text, settextfield] = useState("******");

  const [url, seturl] = useState();
  const addnumber = (e) => {
    e.preventDefault();
    db.collection("teacher").add({
      data: text,
      url: `/${text}`,
    });
    seturl(`/${text}`);
    navigate("/newpage");
  };
  const [datataken, setData] = useState([]);

  //   const [number, setNumber] = useState("");

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/test">
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
        {text}
        <button
          onClick={() => {
            const min = 100000;
            const max = 999999;
            const random = Math.floor(Math.random() * (max - min + 1));
            settextfield(random);
          }}
        >
          GENERATE CODE
        </button>
        <Link to="/newpage">
          <button onClick={addnumber}>SUBMIT CODE</button>
        </Link>
      </div>
    </div>
  );
}

export default GenerateQuiz;
