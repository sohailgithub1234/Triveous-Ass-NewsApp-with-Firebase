import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    let [articles, setArticles] = useState([]);

    useEffect(()=>{
        // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}$apiKey=${import.meta.env.VITE_API_KEY}`;
        const url = ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f7f4c99c67214776b93341214227a29b`;
        fetch(url)
        .then((response) => response.json())
        .then((data)=> setArticles(data.articles))
        .catch((error)=>console.error(err));
    },[category]);
  return (
    <div>
    <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    {articles && articles.length > 0 ? (
      articles.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} imgurl={news.urlToImage} url={news.url} />
      ))
    ) : (
      <p>No news articles available.</p>
    )}
  </div>
  )
}

export default NewsBoard
