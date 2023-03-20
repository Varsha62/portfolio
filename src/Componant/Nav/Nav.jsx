import React from 'react';
import Image_Main from './nav_Logo.png'
import "./Nav.css"
import { Link } from 'react-scroll';

const Nav = () => {

  return (
    <div>
      <div className='navbar'>

        <div className='navbar_logo'>
          <img src={Image_Main} alt='none' />

        </div>


        <div>
          <ul className='navbar_root'>
            <li>
              <Link activeClass="active" to="Hero" smooth={true} >
                HOME
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="About" smooth={true} >
                ABOUT
              </Link>

            </li>
            <li>
              <Link activeClass="active" to="Skill" smooth={true} >
                SKILL
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="Project" smooth={true} >
                PROJECT
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="Contact" smooth={true} >
                CONTACT US
              </Link>

            </li>
          </ul>
        </div>



      </div>
    </div>
  )
}

export default Nav
