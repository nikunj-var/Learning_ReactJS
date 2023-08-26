import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Link } from "react-router-dom";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBs4-1KdtY1xaXLOe6QMagHLNwMSu03wL0",
  authDomain: "quiz-740fb.firebaseapp.com",
  projectId: "quiz-740fb",
  storageBucket: "quiz-740fb.appspot.com",
  messagingSenderId: "510220594975",
  appId: "1:510220594975:web:6b9d0299a46d12fdbc4a2a",
  measurementId: "G-LPCS4J0PYY",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
      <input type="number" value={data} placeholder="produce code" />
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
