import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router  , Route ,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Pages/HomePage";
import ArticlePage from './components/Pages/ArticlePage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in',
            apiKey: 'a070bf9c2b1f472fa61fed0fe512925c',
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<HomePage/>}/>
        <Route path="/article/:id" element={<ArticlePage articles={articles}/>}/>
      </Routes>
    </Router>
  );
}

export default App;







