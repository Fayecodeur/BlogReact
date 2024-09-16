import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Add() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const addBlog = (e) => {
    e.preventDefault();
    let date = new Date().toISOString().split("T")[0];
    const blog = { title, author, content, date };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <form className="add-article-form" onSubmit={addBlog}>
      <div className="form-group">
        <label htmlFor="title">Titre de l'article :</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Auteur :</label>
        <select
          id="author"
          name="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">Sélectionnez un auteur</option>
          <option value="Alice Dupont">Alice Dupont</option>
          <option value="Bob Martin">Bob Martin</option>
          <option value="Clara Lefèvre">Clara Lefèvre</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="content">Contenu de l'article :</label>
        <textarea
          id="content"
          name="content"
          rows="5"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <button type="submit">Ajouter l'article</button>
    </form>
  );
}
