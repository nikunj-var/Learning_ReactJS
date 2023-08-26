import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "firebase/database";
import db from "./FireBaseConfig";
import { useHistory } from "react-router-dom";
import HelloPage from "./HelloPage";

function HomePage({ history }) {
  const [datataken, setData] = useState([]);

  const [number, setNumber] = useState("");
  const [dataList, setDataList] = useState([]); 

  useEffect(() => {
    db.collection("quiz").onSnapshot((snapshot) => {
      const newDataList = snapshot.docs.map((doc) => doc.data().data);
      setDataList(newDataList); 
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data().data,
        }))
      );
    });
  }, []);
  const checknumber = async () => {
    if (dataList.includes(number)) {
      
      {<HelloPage/>}
    } else {
     
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
          type="number"
          placeholder="Enter code here"
          className="inputtext"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={checknumber}>START QUIZ</button>
      </div>
      <table>
          <thead>
            <tr>
              <th scope="col">Data</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((data) => {
              return (
                <tr >
                  <th>{data}</th>
                 
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  );
}
export default HomePage;
