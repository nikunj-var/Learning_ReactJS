import React from "react";

export default function OptionSelection({ arrayItem, selectoption }) {
  return (
    <div>
      <h1>React AI APP</h1>
      <div className="main-grid">
        {arrayItem.map((item) => {
          return (
            <div className="grid-child" onClick={()=>selectoption(item.option)}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
