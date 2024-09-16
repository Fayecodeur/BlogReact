import React from "react";
import { Link } from "react-router-dom";

export default function BlogList({ blogs }) {
  return (
    <section className="blogList-section">
      <h1>Liste des articles</h1>
      <div className="blogList">
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            <p>{blog.content}</p>
            <small>{blog.author}</small>
            <small>Date :{blog.date} </small>
          </div>
        ))}
      </div>
    </section>
  );
}
