import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@mantine/core';
import './carousel.css';

const CardCarousel = () => {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://127.0.0.1:8000/destinations/suggestions/')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    // Scroll to current card
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = currentCard * carouselRef.current.offsetWidth;
    }
  }, [currentCard]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      const scrollPosition = carouselRef.current.scrollLeft;
      const newCurrentCard = Math.round(scrollPosition / cardWidth);
      setCurrentCard(newCurrentCard);
    }
  };

  return (
    <div className="card-carousel" ref={carouselRef} onScroll={handleScroll}>
      <div className="card-carousel-inner">
        {cards.map((card, index) => (
          <div className={`card-slide ${index === currentCard ? 'active' : ''}`} key={index}>
            <div className="card">
              <img src={card.images.standard[1]} alt={card.destination} className="card-image" />
              <div className="card-info">
                <h3 className="card-title">{card.destination}</h3>
                <p className="card-location">{card.state},<br /> {card.country}</p>
                <p className="card-rating">Rating: {card.rating}</p>
                <a href={card.url} className="card-link">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
