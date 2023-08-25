import React, { useState } from "react";
import "./HomePage.css";

function TextField() {
  const [text, settextfield] = useState("******");

  return (
    <div className="main-item">
      {text}
      <button
        onClick={() => {
          const min = 100000;
          const max = 999999;
          const random = Math.floor(Math.random() *  (max - min + 1));
          settextfield(random);
        }}
      >
        GENERATE QUIZ
      </button>
      <button 
      onClick={async () => {
          const res = await fetch(
            "https://storingquiz-default-rtdb.firebaseio.com/quizcode2.json ",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ text }),
            }
          );
        }}>
        SUBMIT QUIZ
      </button>
    </div>
  );
}

export default TextField;
