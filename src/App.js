// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MainCarousel from './components/MainCarousel';
import SearchCategory from "./components/SearchCategory";
import PopularProducts from './components/PopularProducts';
import Conveniences from './components/Conveniences';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <MainCarousel />
      <SearchCategory />
      <PopularProducts />
      <Conveniences />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
