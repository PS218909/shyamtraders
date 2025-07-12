import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/header'
import HomePage from './components/homePage';
import AboutUsPage from './components/aboutPage';
import ProductPage from './components/productPage';

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [images, setImages] = useState([]);
  const [cntImg, setCntImg] = useState(0);
  
  useEffect(() => {
    const importedImages = import.meta.glob('./assets/bg-images/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
    setImages(Object.values(importedImages));
  }, []);

  useEffect(() => {
    document.getElementsByClassName("page-bg")[0].style.backgroundImage = `url(${images[cntImg]})`
    const intervalId = setInterval(() => {
      setCntImg(prev => (prev + 1)%images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images]);
  
  useEffect(() => {
    if (images.length === 0) return;
    document.getElementsByClassName("page-bg")[0].style.backgroundImage = `url(${images[cntImg]})`;
  }, [cntImg, images]);
  
  return (
    <>
      <Header pageStatus={setCurrentPage} cntPage={currentPage} />
      <main>
        <div className="page-bg"></div>
        {currentPage === "home" && <HomePage />}
        {currentPage === "product" && <ProductPage />}
        {currentPage === "about" && <AboutUsPage />}
      </main>
      <footer>
        <div>
          &copy;2025 Shyam Trader's
        </div>
      </footer>
    </>
  )
}

export default App