/* eslint-disable @next/next/no-img-element */
import React from 'react'


const Navbar = () => {
  return (
    <>
     <nav>
      <h2 className='text-center text-light titleNav'>2023 IIHF World Championship</h2>
     </nav>

     <style>{`

     .titleNav {
        position: relative;
        top: 9px;
        }

        nav {
        position: fixed;
        width: 98%;
        left: 1%;
        top: 6px;
        height: 55px;
        background: #0b1142;
        border: 1px solid white;
        border-radius: 6px;
        z-index: 500;
        box-shadow: 1px 1px 11px gray;
       }
      
     `}</style>
    </>
  )
}

export default Navbar