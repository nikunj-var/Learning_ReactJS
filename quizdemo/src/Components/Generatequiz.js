import React, { useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import db from "./FireBaseConfig";

function GenerateQuiz() {
  const [text, settextfield] = useState("******");
  const navigate = useNavigate();
  const addnumber = (e) => {
    e.preventDefault();
    db.collection("quiz")
      .add({
        data: text,
      })
      .then((docRef) => {
        // After adding the document, navigate to the generated URL
        navigate(`/${text}`);
      });
  };
  return (
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
        GENERATE QUIZ
      </button>
      <button onClick={addnumber}>SUBMIT QUIZ</button>
    </div>
  );
}

export default GenerateQuiz;
