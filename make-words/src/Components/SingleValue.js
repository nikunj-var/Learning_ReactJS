import React, { useState } from "react";
import db from "./FireBase";

import { Link } from "react-router-dom";

const SingleValue = () => {
  const [data, setData] = useState("");
  const [dataStored, setDataStored] = useState(false);
  const handleDataSubmit = async () => {
    const db = firebase.firestore();

    // Update data in Firestore
    await db.collection("singlevalue").doc("singleData").set({
      value: data,
    });

    setDataStored(true);
  };

  return (
    <div className="main-item">
      <h1>Generate Code</h1>
      <input type="number" value={data} placeholder="******" />
      <button
        onClick={() => {
          const min = 100000;
          const max = 999999;
          const random = Math.floor(Math.random() * (max - min + 1));
          setData(random);
        }}
      >
        Generate Code
      </button>
      <Link to="/newpage">
        <button onClick={handleDataSubmit}>
          {dataStored ? "Data Updated" : "Submit Code"}
        </button>
      </Link>
    </div>
  );
};

export default SingleValue;
