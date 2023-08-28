import React, { useState } from "react";

function AlphabetButtons() {
  const [WORDS, SETWORDS] = useState(["BELT", "EAT", "ATE", "LET"]);

  return (
    <div>
      {alphabetList.map((letter, index) => (
        <button key={index} className="letterbutton">
          {letter}
        </button>
      ))}
      
    </div>
  );
}

export default AlphabetButtons;
