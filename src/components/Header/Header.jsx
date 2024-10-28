// import React from 'react'
import 'animate.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='flex justify-between items-center mt-6'>
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "logo-active" : ""}
      >
        <h1 className='text-3xl font-bold animate__animated animate__fadeInDown'>AI Doctor</h1>
      </NavLink>

      <div className='animate__animated animate__fadeInDown flex font-semibold'>
        <NavLink
          to="/predict"
          className={({ isActive }) =>
            isActive ? "underline" : ""
          }
        >
          <motion.button
            className="px-6 py-2 mr-8"
            whileHover={{
              borderRadius: '4px',
              scale: 1.05,
              backgroundColor: 'black',
              color: 'white',
              borderColor: 'black',
              transition: {
                duration: 0.5,
                type: 'spring',
              },
            }}
            whileTap={{
              scale: 0.9,
              transition: {
                duration: 0.2,
              },
            }}
          >
            Predict Disease
          </motion.button>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "underline" : ""}`
          }
        >
          <motion.button
            className="px-6 py-2"
            whileHover={{
              borderRadius:'4px',
              scale: 1.05,
              backgroundColor: 'black',
              color: 'white',
              borderColor: 'black',
              transition: {
                duration: 0.5,
                type: 'spring',
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                duration: 0.2,
              },
            }}
          >
            About Us
          </motion.button>
        </NavLink>

      </div>
    </div>
  )
}

export default Header
