import React, { useState, useEffect } from "react";
import "./redirectpage.css";
import { Link } from "react-router-dom";
import db from "./FireBaseConfig";
function RedirectedPage() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    db.collection("student").onSnapshot((snapshot) => {
      setDataList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          code: doc.data().code,
        }))
      );
    });
  }, []);
  return (
    <div className="main-item">
        <nav>
        <ul>
          <li>
            <Link to="/teacher">
              <img
                className="img"
                src="https://cdn-icons-png.flaticon.com/256/11826/11826847.png"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </nav>
      <table>
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data) => {
            return (
              <tr>
                <th>{data.code}</th>
                <th>{data.name}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default RedirectedPage;
