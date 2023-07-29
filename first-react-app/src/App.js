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
    title: "Blog Title 1",
    description:
      "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor ",
  };

  {
    /* storing style in variables */
  }
  const styles = {
    margin: "16px",
    padding: "16px",
    boxSizing: "border-box",
    borderRadius: "5px",
    boxShadow: "0 2px 5px #ccc",
  };

  // creating array of contents

  const blogarr = [
    {
      id: 1,
      title: "Blog Title 3",
      description:
        "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor ",
    },
    {
      id: 2,
      title: "Blog Title 4",
      description:
        "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor ",
    },
    {
      id: 3,
      title: "Blog Title 5",
      description:
        "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor ",
    },
  ];

  // fetching content from array using map
  const blogCards = blogarr.map((item) => {
    return (
      <div className="blogcard" key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    );
  });
  return (
    <div className="App">
      {/* adding styles - Internal styles */}
      <div
        style={{
          margin: "16px",
          padding: "16px",
          boxSizing: "border-box",

          borderRadius: "5px",
          boxShadow: "0 2px 5px #ccc",
        }}
      >
        <h3>Full Name : {getfullname(firstName, lastName)}</h3>
        <p>Age : {age}</p>
        <p>Job : {Job}</p>
        <input placeholder={placeholder}></input>
      </div>

      <hr></hr>

      {/* adding internal css using variables */}
      <div style={styles}>
        <h3>{BlogObj.title}</h3>
        <p>{BlogObj.description}</p>
      </div>

      <hr></hr>

      {/* giving styles using external css */}
      <div className="blogcard">
        <h3>{BlogObj.title}</h3>
        <p>{BlogObj.description}</p>
      </div>

      <hr></hr>

      {/* generating components dynamically */}
      {blogCards}
    </div>
  );
}

export default App;
