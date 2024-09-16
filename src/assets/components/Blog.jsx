import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFecth from "./useFecth.jsx";
import { useHistory } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();
  const url = `http://localhost:8000/blogs/${id}`;
  const { data: blog, error } = useFecth(url);
  const history = useHistory();
  const handleDelete = () => {
    fetch(url, {
      method: "DELETE",
    }).then(() => {
      console.log("Article supprimé");
      history.push("/");
    });
  };
  return (
    <section className="blog-section">
      {error && <p className="error">Une erreur s'est produite...</p>}
      {blog && (
        <article className="blog-detail">
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-content">
            <p>{blog.content}</p>
          </div>
          <div className="blog-meta">
            <small className="blog-author">{`Publié par ${blog.author}`}</small>
            <small className="blog-date">{`Publié le ${blog.date}`}</small>
          </div>
          <button className="delete-btn" onClick={handleDelete}>
            Supprimer
          </button>
        </article>
      )}
    </section>
  );
}
