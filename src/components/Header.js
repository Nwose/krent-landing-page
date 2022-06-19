import React from 'react'
import {FaBars} from 'react-icons/fa'



const Header = () => {
    const showNav = () => {
        const menuBtn = document.querySelector('.mobile')
        const navbar = document.querySelector('.menu')

        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active')
            navbar.classList.toggle('active')

        })

    }

  return (
    <div className='header'>
        <div>
            <h1>Krent</h1>
        </div>
        <nav className='menu'>
            <ul className='nav-menu'>
                <li>
                    <button>Home</button>
                </li>
                 <li>
                    <button>Explore Listings</button>
                </li>
                 <li>
                    <button>List My property</button>
                </li>
            </ul>
            <ul className='nav-menu-2'>
                 <li>
                    <button>Sign In</button>
                </li>
                 <li className='btn'>
                    <button>Get Started</button>
                </li>
            </ul>
        </nav>
        <div className='mobile' onClick={() => showNav()}>
            <FaBars style={{width: '30px', height: '30px'}}/>
        </div>
    </div>
  )
}

export default Header