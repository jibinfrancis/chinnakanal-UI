import React,{useState} from 'react';
import Logo from '../assets/pngPalm.png'
// import './navBar.css'
const NavBar = () => {
    const [toggleMenu,setToggleMenu] = useState(false)
    return(
        <div className="navBar">
         <div className="navContainer">
             <img src={Logo} className="nav-logo"/>
             {/* <button onClick={()=>setToggleMenu(!toggleMenu)} className="bar">open</button> */}
             <div class={toggleMenu?'navbar-togglebtn active':'navbar-togglebtn' } onClick={()=>setToggleMenu(!toggleMenu)}>
          <span class="bar"></span> <span class="bar"></span>
          <span class="bar"></span>
        </div>
                 <ul className={toggleMenu?'navbar-menu active':"navbar-menu"}>
                     <li>Gallery</li>
                     <li>Contact</li>
                     <button className='btn-book-now'>Book Now</button>
                 </ul>
         </div>
        </div>
    )
}
export default NavBar;