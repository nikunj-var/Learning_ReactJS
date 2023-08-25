import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import firebase from "firebase/compat/app";
import "firebase/database";
import { getDatabase, ref, get } from "firebase/database";
import { initializeApp } from "firebase/app";

function HomePage({ history }) {
  const firebaseConfig = {
    apiKey: "AIzaSyDYAQX0JtBn45jR-OOiUNcXTN4fggjpODE",
    authDomain: "storingquiz.firebaseapp.com",
    databaseURL: "https://storingquiz-default-rtdb.firebaseio.com",
    projectId: "storingquiz",
    storageBucket: "storingquiz.appspot.com",
    messagingSenderId: "816326310890",
    appId: "1:816326310890:web:bf5efb7879d710563d9093",
  };
  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initialize Firebase
    const trimmedNumber = number.trim();
    const numberRef = ref(database, "numbers/" + trimmedNumber);
    console.log(numberRef);
    // Check if the number exists in Firebase
    try {
      const snapshot = await get(numberRef);
      if (snapshot.exists()) {
        history.push("/hello");
      } else {
        alert("Number not found in Firebase.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data.");
    }
  };

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
        <input
          type="text"
          placeholder="Enter code here"
          className="inputtext"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleSubmit}>START QUIZ</button>
      </div>
    </div>
  );
}
export default HomePage;
