import React from "react";

import xyz from "./blogcard.module.css";

const BlogCard = () => {
  return (
    <div className={xyz.newblogcard}>
      <h3>Blog Title</h3>
      <p>Blog Description</p>
    </div>
  );
};

export default BlogCard;
