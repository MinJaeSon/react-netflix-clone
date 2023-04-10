import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [show, setshow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log('window.scrollY', window.scrollY);

      if(window.scrollY > 50) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`)
  };

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt='Netflix logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        className='nav__logo'
        onClick={() => window.location.reload()}
      />

      <input 
        value={searchValue} 
        onChange={handleChange} 
        className='nav__input' 
        type='text' 
        placeholder='영화를 검색해주세요.' 
      />

      <img
        alt='User logged'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        className='nav__avatar'
      />
        </nav>
  )
}
