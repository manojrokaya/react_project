import React from 'react';
import { useParams } from 'react-router-dom';


function Article({ articles }) {
  const { id } = useParams();
  const article = articles[parseInt(id, 10)];

  if (!article) {
    return <p>Article not found!</p>; 
  }

  return (
    <div className="container">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} className="img-fluid" alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
}

export default Article;
