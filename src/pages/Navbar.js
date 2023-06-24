import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbar1 = () => {
  return (
    
<Fragment>
<div class="header">
        <nav>
            <input type="checkbox" id="show-search"/>
            <input type="checkbox" id="show-menu"/>
            <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
            <div class="content">
                <div class="logo"><h3>Furniture</h3></div>

                <ul class="links">
                    <li><a href="#" id="first">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#product">Products</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#review">Reviews</a></li>
                </ul>
            </div>
            <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
            <form action="#" class="search-box">
                <input type="text" placeholder="Search" required />
                <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
            </form>

        </nav>
    </div>
</Fragment>
  )
}

export default Navbar1