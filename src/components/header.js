import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/ss-primary-orange.svg'
import './Header.css'

const Header = ({ siteTitle }) => (
<div className="Header">
  <div className="HeaderGroup">
    <Link to="/"><img width="82" width="64" src={require('../images/ss-primary-orange.svg')} /></Link>
      <div className="HeaderLinks"></div>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
        <div className="Buy"></div>
        <Link to="/buy"><button>Buy</button></Link>     
        <Link to="/buy"><button>Buy</button></Link>     
  </div>
</div>
)

export default Header
