import React, { Component } from "react";
import "./App.css";
// import BlogCard from "./BlogCard";
import BlogCard2 from "./BlogCard2";

// function App() {
//   // without using variables
//   // return <div className="App">
//   //   <h3>Full Name : Nikunj Varshney</h3>
//   //   <p>Age : 21</p>
//   //   <p>Job : Student</p>
//   // </div>;

//   // using variables
//   // const firstName = "Nikunj";
//   // const lastName = "Varshney";
//   // const age = 21;
//   // const Job = "Student";
//   // return (
//   //   <div className="App">
//   //     <h3>Full Name : {`${firstName} ${lastName}`}</h3>
//   //     <p>Age : {age}</p>
//   //     <p>Job : {Job}</p>
//   //   </div>
//   // );

//   // using functions
//   const firstName = "Nikunj";
//   const lastName = "Varshney";
//   const age = 21;
//   const Job = "Student";
//   const getfullname = (firstName, lastName) => {
//     return `${firstName} ${lastName}`;
//   };
//   const placeholder = "enter your details";
//   const BlogObj = {
//     title: "Blog Title 1",
//     description:
//       "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor ",
//   };

//   {
//     /* storing style in variables */
//   }
//   const styles = {
//     margin: "16px",
//     padding: "16px",
//     boxSizing: "border-box",
//     borderRadius: "5px",
//     boxShadow: "0 2px 5px #ccc",
//   };

//   // creating array of contents

//   const blogarr = [
//     {
//       id: 1,
//       title: "Blog Title 3",
//       description:
//         "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor ",
//     },
//     {
//       id: 2,
//       title: "Blog Title 4",
//       description:
//         "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor ",
//     },
//     {
//       id: 3,
//       title: "Blog Title 5",
//       description:
//         "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor ",
//     },
//   ];

//   // fetching content from array using map
//   const blogCards = blogarr.map((item) => {
//     return (
//       <div className="blogcard" key={item.id}>
//         <h3>{item.title}</h3>
//         <p>{item.description}</p>
//       </div>
//     );
//   });

//   // using functional component
//   const blogCards2 = blogarr.map((item, pos) => {
//     return <BlogCard key="pos" />;
//   });

//   // passing data to components using props and this data is treated as argument
//   const blogCards3 = blogarr.map((item, pos) => {
//     return <BlogCard2 title={item.title} description={item.description} />;
//   });

//   const onHideBtnClick = () => {
//     alert("Button Clicked");
//   };
//   return (
//     <div className="App">
//       {/* adding styles - Internal styles */}
//       <div
//         style={{
//           margin: "16px",
//           padding: "16px",
//           boxSizing: "border-box",

//           borderRadius: "5px",
//           boxShadow: "0 2px 5px #ccc",
//         }}
//       >
//         <h1>using functions</h1>
//         <h3>Full Name : {getfullname(firstName, lastName)}</h3>
//         <p>Age : {age}</p>
//         <p>Job : {Job}</p>
//         <input placeholder={placeholder}></input>
//       </div>

//       <hr></hr>

//       {/* adding internal css using variables */}
//       <div style={styles}>
//         <h1>adding internal css using variables</h1>
//         <h3>{BlogObj.title}</h3>
//         <p>{BlogObj.description}</p>
//       </div>

//       <hr></hr>

//       {/* giving styles using external css */}
//       <div className="blogcard">
//         <h1>giving styles using external css</h1>
//         <h3>{BlogObj.title}</h3>
//         <p>{BlogObj.description}</p>
//       </div>

//       <hr></hr>

//       {/* generating components dynamically */}
//       <h1>generating components dynamically</h1>
//       {blogCards}

//       <hr></hr>
//       <hr></hr>

//       {/* using functional component */}
//       <h1>using functional component</h1>
//       <button onClick={onHideBtnClick}>Hide List</button>
//       {blogCards2}

//       <hr></hr>
//       <hr></hr>
//       {/* passing data to components and this data is treated as argument */}
//       <h1>passing data to components and this data is treated as argument</h1>
//       {blogCards3}
//     </div>
//   );
// }

// learning class

class App extends Component {
  // no need to write const,let,var
  state = {
    showBlogs: true,
    blogarr1: [
      {
        id: 1,
        title: "Blog Title 3",
        description:
          "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor ",
        likecount: 0,
      },
      {
        id: 2,
        title: "Blog Title 4",
        description:
          "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor ",
        likecount: 0,
      },
      {
        id: 3,
        title: "Blog Title 5",
        description:
          "lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor lorem epsum dolor ",
        likecount: 0,
      },
    ],
  };

  
  onHideBtnClick = () => {
    let updatedstate = !this.state.showBlogs;
    // this.setState({
    //    showBlogs:updatedstate
    // });

    // or

    this.setState((prevState, prevprops) => {
      return {
        showBlogs: !prevState.showBlogs,
      };
    });
  };
  onLikeBtnClick = (pos) => {
    const updateBlogList = this.state.blogarr1;
    const updateBlogObj = updateBlogList[pos];
    updateBlogObj.likecount = updateBlogObj.likecount + 1;
    updateBlogList[pos] = updateBlogObj;
    this.setState({ blogarr1: updateBlogList });
  };
  render() {
    const BlogCard = this.state.blogarr1.map((item, pos) => {
      return (
        <BlogCard2
          title={item.title}
          description={item.description}
          id={item.id}
          likecount={item.likecount}
          onLikeBtnClick={() => this.onLikeBtnClick(pos)}
        />
      );
    });
  
    return (
      <div className="App">
        <h1>learning classbased components</h1>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <button onClick={this.onHideBtnClick}>
          {this.state.showBlogs ? "Hide List" : "Show List"}
        </button>
        {this.state.showBlogs ? BlogCard : null}
      </div>
    );
  }
}

export default App;
