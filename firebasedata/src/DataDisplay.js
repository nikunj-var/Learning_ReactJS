// src/DataDisplay.js
import React, { useState, useEffect } from "react";
import firestore from "./firebase";

function DataDisplay() {
  const [data, setData] = useState(['abce']);

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = firestore.collection("text");
      const snapshot = await dataRef.get();
      const fetchedData = snapshot.docs.map((doc) => doc.data().text);
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Numbers from Firebase:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.number}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
