import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>
            Welcome to my store, your ultimate destination for fashion-fo rward
            individuals seeking quality and style. Founded with a passion for
            bringing the latest trends and timeless elegance together, we're
            committed to providing an exceptional online shopping experience
            that resonates with each and every customer.
          </span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>
            We're thrilled that you're considering reaching out to my store.
            Your feedback, questions, and thoughts are essential to us. We're
            here to provide you with exceptional service and support, so don't
            hesitate to get in touch with us. Customer Support: Our dedicated
            customer support team is available to assist you with any inquiries
            or concerns you may have. Whether you need help with sizing, product
            information, or assistance with your order, we're here to provide
            timely and helpful responses. You can contact us through the
            following methods: Email: Send us an email at support@example.com
            and expect a prompt response during our working hours.
            </span>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <span className="logo">Lamastore</span>
              <span className="copyright">
                © Copyright 2023. All Rights Reserved
              </span>
            </div>
            <div className="right">
              <img src="/img/payment.png" alt="" />
            </div>
          </div>
        </div>
      );
    };
    
    export default Footer;