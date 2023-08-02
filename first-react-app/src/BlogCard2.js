// import React from "react";

// // this properties object that we are using here is called props.
// // this is a standard way to name the arguments as props for function competence
// const BlogCard2 = (properties) => {
//   return (
//     <div className="blogcard">
//       <h3>Blog Title - {properties.title}</h3>
//       <p>Blog Description - {properties.description}</p>
//     </div>
//   );
// };

// export default BlogCard2;

// converting this functional based component to class based component

import React, { Component } from "react";
import classes from "./blogcard.module.css";
class BlogCard2 extends Component {
  state = {
    likecount: 0,
  };
  // onLikeBtnClick = () => {
  //   this.setState((prevState) => {
  //     return { likecount: prevState.likecount + 1 };
  //   });
  // };
  render() {
    return (
      <div className="blogcard">
        <h3>Blog Title - {this.props.title}</h3>
        <p>Blog Description - {this.props.description}</p>

        <p>
          Like Count:
          <span className={classes.likecount}>{this.props.likecount}</span>
        </p>
        <button onClick={() => this.props.onLikeBtnClick(this.props.position)}>
          Like
        </button>
      </div>
    );
  }
}

export default BlogCard2;
