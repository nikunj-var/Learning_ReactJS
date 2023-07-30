import React from "react";

// this properties object that we are using here is called props.
// this is a standard way to name the arguments as props for function competence
const BlogCard2 = (properties) => {
  return (
    <div className="blogcard">
      <h3>Blog Title - {properties.title}</h3>
      <p>Blog Description - {properties.description}</p>
    </div>
  );
};

export default BlogCard2;
