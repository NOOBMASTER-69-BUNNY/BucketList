import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './404_page.css'
import Header from './components/Header/Header';
import SearchBar from './components/Searchbar/Searchbar';
import CardCarousel from './components/Carousels/carousel';
import ArticleCards from './components/Articles/articles';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');
        setSliderData(response.data);
      } catch (error) {
        console.error('Error fetching slider data:', error);
      }
    };

    fetchSliderData();
  }, []);

  // // useEffect(() => {
  // //   const fetchDestinations = async () => {
  // //     try {
  // //       const response = await axios.get('http://127.0.0.1:8000/destinations/');
  // //       setDestinations(response.data);
  // //     } catch (error) {
  // //       console.error('Error fetching destinations:', error);
  // //     }
  // //   };

  //   fetchDestinations();
  // }, []);

  return (
    <div >
      <Header />

      <body>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>

        <section class="banner" id="home">
        <div class="content">
            <h2>"Unleash Your Wanderlust, One Checkmark at a Time!"</h2>
            <p>Embark on a journey of exploration and adventure with our platform designed exclusively for young travel enthusiasts like you. Whether you're a seasoned globetrotter or a budding wanderer, <b>WanderCheck</b> is your one-stop destination to create, manage, and check off your ultimate travel bucket list. <br />Get ready to ignite your wanderlust and make unforgettable memories!
            </p>
        </div>
        </section>

        <SearchBar />

        <section class="about" id="about">
          <div class="row">
            <div class="col50">
                <h2 class="titeText"><span>A</span>BOUT US</h2>
                <p>Welcome to WanderCheck, the ultimate companion for adventurous souls seeking to create and conquer their travel bucket lists. Our app is designed to inspire and assist young travel minds in curating their dream destinations, providing a seamless platform to add, organize, and track their bucket list items. <br /><br /> But we don't stop there. Harnessing the collective wisdom of previous visitors, WanderCheck also showcases insightful reviews and suggestions for each place on your list. From hidden gems to popular landmarks, our community-driven app ensures you have all the information you need to embark on unforgettable journeys. Join us and turn your travel dreams into reality, one checkmark at a time.
                </p>
            </div>
            <div class="col50">
                <div class="imgbx">
                    <img src="https://images.pexels.com/photos/7846563/pexels-photo-7846563.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                </div>
            </div>
        </div>
    </section>
    <section className='carousel' id='top_destination'>
      <div class="row-carousel"><div class="col50"><h2 class="titeText"><span>T</span>OP DESTINATIONS</h2></div></div>
      <CardCarousel />
    </section>
    <section className='articles'>
      <ArticleCards />
    </section>
        </body>
    </div>
    
  );
}

export default App;
