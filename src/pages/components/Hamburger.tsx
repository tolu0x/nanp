"use client"

import { ButtonHTMLAttributes, FC } from 'react'

interface HamburgerProps {
  onClick: () => void
}

const Hamburger: FC<HamburgerProps> = ({onClick}) => {
  return (
      <>
        <button onClick={onClick} className="absolute right-8 z-50 " id="hamburger">
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <style jsx>{`
          #hamburger:hover{
            cursor: pointer;
          }

          #hamburger.is-active {
              -webkit-transition: all 0.3s ease-in-out;
              -o-transition: all 0.3s ease-in-out;
              transition: all 0.3s ease-in-out;
              -webkit-transition-delay: 0.6s;
              -o-transition-delay: 0.6s;
              transition-delay: 0.6s;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              -o-transform: rotate(45deg);
              transform: rotate(45deg);
          }

          #hamburger.is-active .line:nth-child(1),
          #hamburger.is-active .line:nth-child(2) {
              -webkit-transition-delay: 0.3s;
              -o-transition-delay: 0.3s;
              transition-delay: 0.3s;
          }

          #hamburger.is-active .line:nth-child(1) {
              -webkit-transform: translateY(11px);
              -ms-transform: translateY(11px);
              -o-transform: translateY(11px);
              transform: translateY(11px);
          }

          #hamburger.is-active .line:nth-child(2) {
              -webkit-transform: translateY(0px) rotate(90deg);
              -ms-transform: translateY(0px) rotate(90deg);
              -o-transform: translateY(0px) rotate(90deg);
              transform: translateY(0px) rotate(90deg);
          }

          @media screen and (min-width: 599px) {
              #hamburger {
                  display: none;
              }
          }

        `}</style>
      </>
  )
}

export default Hamburger