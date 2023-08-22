import React, { useEffect, useState } from 'react'
import './FeaturedProducts.scss'
import Card from '../../components/Card/Card'
import axios from 'axios'

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

useEffect(() =>{
const fetchData =async () =>{
  try{
const res = await axios.get(process.env.REACT_APP_API_URL+`/products?population=*&[filters] [type][$eq]=${type}`,{
  headers:{Authorization: `bearer $(process.env.REACT_APP_API_TOKEN)`,}
});
setData(res.data.data)
  }catch(err){
    console.log(err)
  }
};
fetchData();
}, []);

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
        {data.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
