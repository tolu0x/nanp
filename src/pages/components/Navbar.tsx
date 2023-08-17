"use client"

import React, {useState} from 'react';
import Hamburger from './Hamburger';
import NavLink from './NavLink';

interface Props {}


const Navbar = () => {
    
const [isOpen, setisOpen] = useState(false);

  return (
    <>
          <header className={`${isOpen && 'active'} flex flex-col justify-between rounded-3xl h-14 overflow-hidden fixed min-w-[92%] h-16 px-[6vw] py-2 menu left-4 right-4 z-50 lg:mx-8 lg:flex-row`}>
              <div className="flex items-center justify-between">
                  <div className="font-bold text-3xl">
                      RM
                  </div>

                  <Hamburger onClick={() => setisOpen(!isOpen)} />
              </div>
              {isOpen && (
                  <nav className={`${!isOpen && 'opacity'} pt-9 flex flex-col items-start justify-start md:w-[75%]  lg:w-max lg:flex-row lg:opacity-100 lg:items-center lg:justify-between`} role="navigation">
                      <NavLink href="/">Home</NavLink>
                      <NavLink href="https://">Features</NavLink>
                      <NavLink href="https://">Bot</NavLink>
                  </nav>
              )}
          </header>

          <style jsx>{`
            header {
                background-color: rgba(39,42,42,.66);
                border: 1px solid hsla(0,0%,100%,.1);
                -webkit-backdrop-filter: blur(20px) saturate(180%);
                backdrop-filter: blur(20px) saturate(180%);
                max-width: calc(1440px - 180px);
            }

            .menu{
                transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

                /* to stop flickering of text in safari */
                -webkit-font-smoothing: antialiased;
            }

            .menu.active{
                height: 18rem;
            }

            .opacity{
                opacity: 1 !important;
            }
      `}</style>
    </>
  )
}

export default Navbar