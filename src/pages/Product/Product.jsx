import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';


const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1)

  const images = [
    'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrtb&w=1600',
    'https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrtb&w=1600'
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
      <div className='right'> 
      <h1>Title</h1> 
      <span className='price'>$99</span>
      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nulla, consectetur sapiente unde autem, enim minus dignissimos quis debitis nisi ullam atque eum ipsam quam repellat sint non voluptatum nihil?</p>
     <div className="quantity">
     <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev -1) )}>-</button>
    {quantity}
     <button onClick={() => setQuantity((prev)=>prev+1)}>+</button>
     </div>
     <button className='add'>
     <AddShoppingCartIcon />ADD TO CART
     </button>
     <div className="link">
     <div className="item">
     <FavoriteBorderIcon/> ADD TO WISHLIST
     </div>
     <div className="item"><BalanceIcon/> ADD TO COMPARE </div>
     </div>
     <div className="info">
     <span> Vendor: Polo</span>
     <spam> Product Type: T-Shirt</spam>
     <span> Tag: T-Shirt, Women, Top</span>
     </div>
    
     <div className="info">
     <span>DESCRIPTION</span>
     <hr />
     <span>ADDITIONAL INFORMATION</span>
     <hr />
     <span>FAQ</span>
     </div>
      </div>
    </div> 
  );
}

export default Product;
