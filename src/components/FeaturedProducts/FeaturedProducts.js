import React from 'react';
import "./FeaturedProducts.scss";
import Card from "../../components/Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/17833257/pexels-photo-17833257.jpeg?auto=compress&cs=tinysrtb&w=1600',
      img2: 'https://images.pexels.com/photos/17830128/pexels-photo-17830128.jpeg?auto=compress&cs=tinysrtb&w=1600',
      title: 'Long Sleeve Graphic T-shirt',
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrtb&w=1600',
      title: 'Coat',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrtb&w=1600',
      title: 'Skirt',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrtb&w=1600',
      title: 'Hat',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu
          neque, egestas at nulla vel, imperdiet dictum elit. Sed diam risus,
          imperdiet sed orci sit amet, ultrices facilisis diam. Cras nisi leo,
          mollis in risus eget, consectetur vulputate est. Ut sodales tempor
        </p>
      </div>
      <div className='bottom'>
        {data.map(item=> (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;