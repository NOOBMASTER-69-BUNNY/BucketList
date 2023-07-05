import React, { useEffect, useState } from 'react';
import './articles.css'

const ArticleCards = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/destinations/articles/");
        const data = await response.json();
        setCardsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {cardsData.map((cardData) => (
        <div className="article" key={cardData._id}>
          <div className="card-body">
            <h2 className="blog-title">{cardData.location}</h2>
            <p className="blog-description">{cardData.article}</p>
            <p className="category-tag">{cardData.tags}</p>

            <div className="card-profile">
              <div className="card-profile-info">
                <h3 className="profile-name">{cardData.upload_by}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleCards;
