import React, { useState } from 'react';
import "./Product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const images = [
    'https://images.pexels.com/photos/356170/pexels-photo-356170.jpeg?auto=compress&cs=tinysrtb&w=1600',
    'https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrtb&w=1600'
  ];

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt="Product 1" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt='Product 2' onClick={() => setSelectedImg(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt={`Product ${selectedImg + 1}`} />
        </div>
      </div>
      <div className='right'></div>
    </div>
  );
}

export default Product;
