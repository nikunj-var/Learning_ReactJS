import "./App.css";
import db from "./FireBase.utils";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  //function to fetch data from database
  useEffect(()=>{
    db.collection('todos').orderBy("timestamp","desc").onSnapshot(
      snapshot =>{
        console.log(snapshot);
      }
    )
  })

  // creating function to add data in firewase
  const addToDo = (e) => {
    e.preventDefault();
    db.collection("todo").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <div className="card">
        <h1>TODO-LIST</h1>
        <form className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="submit" className="btn btn-primary" onClick={addToDo}>
            ADD TODO
          </button>
        </form>
      </div>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TODO</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>HELLO</th>
              <th>
                <button className="btn btn-success">UPDATE</button>
              </th>
              <th>
                <button className="btn btn-danger">DELETE</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
