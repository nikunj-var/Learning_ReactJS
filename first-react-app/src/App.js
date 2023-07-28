import logo from "./logo.svg";
import "./App.css";

function App() {
  // without using variables

  // return <div className="App">
  //   <h3>Full Name : Nikunj Varshney</h3>
  //   <p>Age : 21</p>
  //   <p>Job : Student</p>
  // </div>;

  // using variables

  // const firstName = "Nikunj";
  // const lastName = "Varshney";
  // const age = 21;
  // const Job = "Student";
  // return (
  //   <div className="App">
  //     <h3>Full Name : {`${firstName} ${lastName}`}</h3>
  //     <p>Age : {age}</p>
  //     <p>Job : {Job}</p>
  //   </div>
  // );

  // using functions

  const firstName = "Nikunj";
  const lastName = "Varshney";
  const age = 21;
  const Job = "Student";
  const getfullname = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  };
  const placeholder = "enter your details";
  const BlogObj = {
    title : "Blog Title 1",
    description : "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor "
  };
  return (
    <div className="App">
      <h3>Full Name : {getfullname(firstName, lastName)}</h3>
      <p>Age : {age}</p>
      <p>Job : {Job}</p>
      <input placeholder={placeholder}></input>
      <hr></hr>
      <div>
        <h3>{BlogObj.title}</h3>
        <p>{BlogObj.description}</p>
      </div>
    </div>
  );
}

export default App;
