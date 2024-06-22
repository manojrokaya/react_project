import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import axios from 'axios';
import ArticleList from '../ArticleList';
import CategorieSelector from '../CategorieSelector';


function HomePage() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const  [selectedCategory, setSelectedCategory] = useState('general');
  const apiKey = 'a070bf9c2b1f472fa61fed0fe512925c';  // Replace with your actual API key

  useEffect(() => {
    if (!apiKey) {
      setError('API key is missing');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      const pageSize = 6;  // Number of articles per page
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('httpns://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in',
            category: selectedCategory,
            page: currentPage,
            pageSize: pageSize,
            apiKey: apiKey,
          },
        });

        if (response.data && response.data.status === 'ok') {
          const fetchedArticles = response.data.articles || [];
          const totalResults = response.data.totalResults || 0;

          setArticles(fetchedArticles);
          setTotalPages(Math.ceil(totalResults / pageSize));
        } else {
          throw new Error('Unexpected API response structure');
        }
      } catch (error) {
        console.error('Error fetching the news:', error);
        setError('Failed to fetch articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, selectedCategory,apiKey]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);  // Reset to the first page when category changes
  };


  return (
    <div className="container mt-4">
      <h1>Top Headlines</h1>
      <CategorieSelector selectedCategory={selectedCategory} onCategoyChange={handleCategoryChange}/>
      {loading ? (
        <p>Loading articles...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <ArticleList articles={articles} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  );
}

export default HomePage;
