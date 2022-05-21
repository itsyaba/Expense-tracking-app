import React from 'react'
import Logo from '../images/logo.svg'

function Nav() {
  return (
    <nav >
          <div className="container-one">
                <h4>My balance</h4>
                  <h1>$921.848</h1>
              </div>
              <div className="container-two">
                    <img src={Logo} alt="" />
              </div>
    </nav>
  )
}

export default Nav