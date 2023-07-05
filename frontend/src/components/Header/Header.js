import React, { useEffect, useState } from 'react';
import './Header.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function togglemenu(){
        const menutoggle = document.querySelector('.menutoggle');
        const navigation = document.querySelector('.navigation');
        menutoggle.classList.toggle('active');
        navigation.classList.toggle('active');
    };

    
    useEffect(() => {
      window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 0);
      });
    }, []);
    
    function handleclick(sectionId) {
      const section = document.getElementById(sectionId);
      section.classList.add('active');
    };
    
    return(
<header>
    <a href="#" class="logo">BUCKET<span class="span1">LIST</span></a>
    <div class="menutoggle" onClick={togglemenu}>
      
    </div>
    <ul class="navigation">
      <li><a href='#home' onClick={()=> handleclick('home')}>Home</a></li>
      <li><a href='#about' onClick={()=> handleclick('about')}>About Us</a></li>
      <li><a href='#top_destination'>Top Destinations</a></li>
      <li><a>Articles</a></li>
      <li><a>Suggestions</a></li>
      <li><button className='signin-button'>Sign in</button></li>
    </ul>
</header>);
}

export default Header;