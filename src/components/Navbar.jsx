import React, { useState } from 'react'
import {navLinks} from '../constants'
import {close, menu} from '../assets'

const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  return(
    <nav className='w-full flex py-6 navbar'>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) =>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-grey hover:text-dimBlack ${index === navLinks.length - 1 ? 'mr-0' : 'mr-[30px]' }`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-start items-center'>
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />

          <div className={`${toggle ? "flex" : "hidden"} p-6 bg-dimBlack absolute top-20 left-0 mx-4 my-2 min-w-[320px] rounded-xl sidebar `}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) =>(
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-grey ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4  ' }`} >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
)
}

export default NavBar