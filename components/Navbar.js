/* eslint-disable @next/next/no-img-element */
import React from 'react'


const Navbar = () => {
  return (
    <>
     <nav>
       <div className="menu">
          <div className="finFlag">
            <img src="/fin.png" alt="finland flag" />
          </div>
          <h2 className='text-light pt-1'>Finland | Latvia</h2>
          <div className="latviaFlag">
             <img src="/lat.png" alt="latvia flag" />
          </div>
       </div>
     </nav>

     <style>{`
     
     .finFlag, .latviaFlag {
      position: relative;
      width: 50px;
      height: 33px;
      overflow: hidden;
      top: 10px;
      margin-right: 15px;
     }

     .latviaFlag {
      margin-left: 15px;
     }

     .finFlag img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
     }

     .latviaFlag img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
     }


 
     .menu {
      position: relative;
      
      margin: 0 auto;
      display: flex;
      justify-content: center;
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
      
       .link {
        text-decoration: none;
        color: white;
        position: relative;
        padding-top: 12px;
        margin-left: 15px;
       }
       .link:hover {
        transition: all .4s;
        color: #ababab;
       }
       .active-link {
        color: white;
       }

      @media only screen and (max-width: 600px) {
        h2 {
          position: relative;
          top: 5px;
        }
       }


      
     `}</style>
    </>
  )
}

export default Navbar