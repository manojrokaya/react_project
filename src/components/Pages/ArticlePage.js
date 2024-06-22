import React from 'react';
import Article from '../Article';

function ArticlePage({ articles }) {
  return (
    <div className="container mt-4">
      <Article articles={articles} />
    </div>
  );
}

export default ArticlePage;
