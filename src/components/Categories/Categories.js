import React from "react";
import "./Categories.scss";
import {Link} from "react-router-dom"


const Categories = () => {
  return(
    <div className='categories'>
    <div className='col'>
    <div className='row'>
         <img src='https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrtb&w=1600' alt='Women Categorie' />
      <button>
      <Link className='link'  to='/products/1'>Sale</Link>
      </button> 
    </div>
      <div className='row'>
         <img src='https://images.pexels.com/photos/17413023/pexels-photo-17413023.jpeg?auto=compress&cs=tinysrtb&w=1600' alt='Women Categorie' />
      <button>
      <Link className='link'  to='/products/1'>New Season</Link>
      </button>
      </div>
    </div>
      <div className='col'>
      <div className='row'>
         <img src='https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrtb&w=1600' alt='Women Categorie' />
         <img src='' alt='Men Clothes' />
      <button>
      <Link className='link'  to='/products/1'>Men</Link>
      </button>
      </div>
      </div>
      <div className='col col-l'>
      <div className='row'>
        <div className='col'>
        <div className='row'>
         <img src='https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg?auto=compress&cs=tinysrtb&w=1600' alt='Women Categorie' />
      <button>
      <Link className='link'  to='/products/1'>Accesories</Link>
      </button>
        </div>
        </div>
         <div className='col'>
         <div className='row'>
         <img src='https://images.pexels.com/photos/17802930/pexels-photo-17802930.jpeg?auto=compress&cs=tinysrtb&w=1600' alt='Women Categorie' />
      <button>
      <Link className='link'  to='/products/1'>Women</Link>
      </button>
         </div>
         </div>
      </div>
        <div className='row'>
        <img src='https://images.pexels.com/photos/2731977/pexels-photo-2731977.jpeg?auto=compress&cs=tinysrtb&w=1600' alt='Shoes Categorie' />
      <button>
      <Link className='link'  to='/products/1'>Shoes</Link>
      </button>
        </div>
      </div>
    </div>
  )
}

export default Categories

