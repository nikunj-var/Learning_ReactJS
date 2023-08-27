import React from "react";
export default function Translation({ doStuff, setInput, result }) {
  return (
    <div className="translation-box">
      <textarea
        className="textarea"
        cols={50}
        rows={20}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        Generate Response
      </button>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
