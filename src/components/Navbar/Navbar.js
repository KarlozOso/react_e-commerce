import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import Cart from '../Cart/Cart';


const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src='/img/en.png' alt='English flag' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <Link className="link" to='/products/1'>Women</Link>
          </div>
          <div className='item'>
            <Link className="link" to='/products/2'>Men</Link>
          </div>
          <div className='item'>
            <Link className="link" to='/products/3'>Children</Link>
          </div>
        </div>
        <div className='center'>
        <Link className="link" to='/'>MYSTORE</Link>
        </div>
        <div className='right'>
        <div className='item'>
        <Link className="link" to='/'>Homepage</Link>
        </div>
        <div className='item'></div>
        <div className='item'>
        <Link className="link" to='/about'>About</Link>
        </div>
        <div className='item'>
        <Link className="link" to='/contact'>Contact</Link>
        </div>
        <div className='item'>
        <Link className="link" to='/stores'>Stores</Link>
        </div>
        <div className='icons'>
        <SearchIcon />
        <PersonOutlineIcon />
        <FavoriteIcon /> 
        <div className='cartIcon' onClick={() =>setOpen(!open)}>
        <ShoppingCartIcon/>
        <span>0</span>
        </div>
        </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar
