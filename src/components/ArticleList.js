import React from 'react';
import { Link } from 'react-router-dom';

function ArticleList({ articles = [] }) {
  if (!Array.isArray(articles) || articles.length === 0) {
    return <p>No articles available.</p>;
  }

  return (
    <div className="row">
      {articles.map((article, index) => (
        <div className="col-md-4" key={index}>
          <div className="card mb-4 shadow-sm">
            <img src={article.urlToImage ||  'https://via.placeholder.com/150'} className="card-img-top" alt={article.title} style={{ height: '200px', objectFit: 'cover' }}/>
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <Link to={{ pathname: `/article/${index}`,
                  state: { articles: articles } }} className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
