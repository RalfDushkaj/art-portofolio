import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { socialLinks } from '../contsants/links'
import { navLinks } from '../contsants/navLinks'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-white flex flex-row justify-between items-center py-5 px-5 sticky top-0 max-[1300px]:flex-col max-[1300px]:gap-5 z-50'>
      <div className='flex flex-row items-center justify-between max-[1300px]:justify-center max-[1000px]:justify-between w-full'>
       <Link to={'/home'}>
         <img
          src={logo}
          alt='site logo'
          className='w-30 cursor-pointer' 
          onClick={() => setIsOpen(false)}
         />
       </Link>

       <button className='hidden max-[1000px]:block text-3xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
         ☰
       </button>
      </div>

      <div
        className={`
          flex gap-6 items-center
          max-[1000px]:w-full
          max-[1000px]:flex-col
          ${isOpen ? "max-[1000px]:flex" : "max-[1000px]:hidden"}
        `}>
          
        <div className='flex flex-row gap-4 max-[1000px]:flex-col max-[1000px]:items-center'>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-xl font-semibold border-b border-transparent
              hover:border-gray-400 transition [&.active]:border-black">
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className='flex flex-row gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
             <a
              key={link.name}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={link.name}
              >
              <i 
                className={`fa-brands ${link.icon} text-black text-lg cursor-pointer hover:animate-bounce`}
              />
             </a>
          ))}
        </div>
      </div> 
    </nav>
  )
}

export default Navbar;