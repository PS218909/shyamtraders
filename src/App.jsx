import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/header'
import HomePage from './components/homePage';
import AboutUsPage from './components/aboutPage';
import ProductPage from './components/productPage';
import axios from 'axios';

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [images, setImages] = useState([]);
  const [cntImg, setCntImg] = useState(0);
  const [userInputs, setUserInputs] = useState({fname: '', lname: '', email: '', message: ''});
  
  useEffect(() => {
    const importedImages = import.meta.glob('./assets/bg-images/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
    setImages(Object.values(importedImages));
  }, []);

  useEffect(() => {
    if (document.getElementsByClassName("page-bg").length > 0)
      document.getElementsByClassName("page-bg")[0].style.backgroundImage = `url(${images[cntImg]})`
    const intervalId = setInterval(() => {
      setCntImg(prev => (prev + 1)%images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images]);
  
  useEffect(() => {
    if (images.length === 0) return;
    if (document.getElementsByClassName("page-bg").length > 0)
      document.getElementsByClassName("page-bg")[0].style.backgroundImage = `url(${images[cntImg]})`;
  }, [cntImg, images]);
  
  return (
    <>
      <Header pageStatus={setCurrentPage} cntPage={currentPage} />
      <main>
        <div className={currentPage === "product"?"":"page-bg"}></div>
        <div className="page-container">
          {currentPage === "home" && <HomePage />}
          {currentPage === "product" && <ProductPage />}
          {currentPage === "about" && <AboutUsPage />}
        </div>
      </main>
      <footer>
        <div className='footer'>
          <div className='form'>
            <span id='message'></span>
            <div className='row'>
              <div className="form-input">
                <label htmlFor="fname"></label>
                <input type="text" id='fname' placeholder='First Name' value={userInputs.fname} autoComplete='false' onChange={(e) => setUserInputs(prev => ({...prev, fname: e.target.value}))} />
              </div>
              <div className="form-input">
                <label htmlFor="lname"></label>
                <input type="text" id='lname' placeholder='Last Name' value={userInputs.lname} autoComplete='false' onChange={(e) => setUserInputs(prev => ({...prev, lname: e.target.value}))} />
              </div>
            </div>
            <div className='row'>
              <div className="form-input">
                <label htmlFor="email"></label>
                <input type="email" id='email' placeholder='Email' value={userInputs.email} autoComplete='false' onChange={(e) => setUserInputs(prev => ({...prev, email: e.target.value}))} />
              </div>
            </div>
            <div className='row'>
              <textarea rows={4} placeholder='Requirement/Feedback if any' value={userInputs.message} onChange={(e) => setUserInputs(prev => ({...prev, message: e.target.value}))} />
            </div>
            <div className='row'>
              <button style={{backgroundColor: 'buttonface', border: '2px solid hsl(var(--accent-color-secondary))', borderRadius: '8px', width: '20%'}} onClick={(e) => {
                document.getElementById('message').style.color = 'red'
                if (!/\S+@\S+\.\S+/.test(userInputs.email)) {
                  e.currentTarget.style.backgroundColor = 'red';
                  document.getElementById('message').innerText = 'Email is not valid'
                } else if (userInputs.message.trim().length < 2) {
                  document.getElementById('message').innerText = 'Message length should be greater than 1'
                } else if (userInputs.fname.trim().length < 1) {
                  document.getElementById('message').innerText = 'First Name length should be greater than or equal to 1'
                } else {
                  document.getElementById('message').innerText = 'You will be contacted soon'
                  document.getElementById('message').style.color = 'green'
                  e.currentTarget.style.backgroundColor = 'buttonface';
                  axios.post('https://discord.com/api/webhooks/1393582454685700116/im-yEm0LvH4dlq_vBs-dCVGyOWLWSebnfd65Fi-_7TID-y1PEJ7_TKXrntXZ0bRBJyCA', {'username': userInputs.email, 'embeds': [{'description': userInputs.message, 'title': `${userInputs.fname} ${userInputs.lname}`, }]}).then((res) => {
                    setUserInputs({fname: '', lname: '', email: '', message: ''})
                  }).catch((err) => {
                    console.error(err)
                  })
                }
              }}>Submit</button>
            </div>
          </div>
          <div>&copy;2025 Shyam Trader's</div>
        </div>
      </footer>
    </>
  )
}

export default App