import React from 'react';
import "./Cart.scss";
import DeletedOulinedIcon from "@mui/icons-material/DeleteOutlined"

const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/17833257/pexels-photo-17833257.jpeg?auto=compress&cs=tinysrtb&w=1600',
            img2: 'https://images.pexels.com/photos/17830128/pexels-photo-17830128.jpeg?auto=compress&cs=tinysrtb&w=1600',
            title: 'Long Sleeve Graphic T-shirt',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde laborum officia, esse molestiae sequi! Commodi, ea? Sunt tempora nihil culpa est, sit quo aperiam ab provident, non recusandae quidem?",
            isNew:true,
            oldPrice: 19,
            price: 12,
          },
          {
            id: 2,
            img: 'https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrtb&w=1600',
            title: 'Coat',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde laborum officia, esse molestiae sequi! Commodi, ea? Sunt tempora nihil culpa est, sit quo aperiam ab provident, non recusandae quidem?",
            isNew: false,
            oldPrice: 19,
            price: 12,
          },
    ];
  return (
    <div className='cart'>
    <h1>Products in Cat </h1>
    {data?.map((item) => (
        <div className="item" key={item.id}>
        <img src={item.img} alt={item.title} />
        <div className="details">
        <h1>{item.title}</h1>
        <p>{item.desc.substring(0, 100)}</p>
        <div className="price"> 1x ${item.price}</div>
        </div>
        <DeletedOulinedIcon className='delete'/>
        </div>
    ))}
    <div className="total">
    <span>SUBTOTAL</span>
    <span>$123</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span>Reset Cart</span>
    </div>
  );
};

export default Cart