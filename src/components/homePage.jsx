import {useState, useEffect} from 'react';

const HomePage = () => {
    return (
      <>
        <div className="page page-1">
          <div className="content">
            <h1>Welcome to Shyam Trader's</h1>
            <h3>At Shyam Trader's, we offer top-quality seasonal goods. Our range of premium offerings includes wholesome ingredients that are rich in nutrients, and culture. We believe in offering only the best to our customers, and that's why our products are carefully sourced and prepared with the utmost care.</h3>
          </div>
        </div>
        <div className="page page-2">
          <div className="content">
            <h1>Why Choose US?</h1>
            <h3>
              <ul>
                <li><span>100% Authentic: </span>Our products are sourced from trusted suppliers who follow traditional, sustainable farming practices.</li>
                <li><span>Freshness Guaranteed: </span>We ensure that every product is fresh, clean, and packed with nutrients to help you create the most flavorful dishes.</li>
                <li><span>Locally Sourced: </span>We believe in supporting local farmers and communities, ensuring that you get the highest-quality, eco-friendly products.</li>
                <li><span>Customer Satisfaction: </span>We are dedicated to providing exceptional customer service, offering fast delivery, and making sure you are satisfied with every order.</li>
              </ul>
            </h3>
          </div>
        </div>
        <div className="page page-3">
          <div className="content">
            <h1>Get In Touch</h1>
            <h3>We'd love to hear from you! If you have any questions, need more information about our products, or want to place an order, feel free to contact us via email or drop your requirement at the bottom of the page. We will reply soon.</h3>
            <h3>Email: <a href="mailto:shyammkg09@gmail.com">shyammkg09@gmail.com</a></h3>
          </div>
        </div>
      </>
    )
}

export default HomePage;