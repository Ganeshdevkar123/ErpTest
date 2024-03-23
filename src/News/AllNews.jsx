import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

function AllNews(props) {
  let category = props.category;
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=ae2332e0a990445fba87374b40ed6759`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <>
      <h3 className="text-center m-3">{props.category} News</h3>
      <div className="container my-3">
        <div className="row">
          {articles &&
            articles.map((e, i) => {
              return (
                <div className="col-md-4" key={i}>
                  <NewsItem
                    sourceName={e.source.name}
                    title={e.title}
                    desc={e.description}
                    imageURL={
                      e.urlToImage
                        ? e.urlToImage
                        : "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/01/trending-sports-stories-5-1704427257.jpg"
                    }
                    newsUrl={e.url}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default AllNews;
