import { Outlet, Link } from 'react-router-dom'

// import {BrowserRouter,Route,Routes} from 'react-router-dom'

function Nav() {

  const navStyle = {

    color: 'white'

  };

  return (

    <>

      <nav className='nav'>

        <Link style={navStyle} to="/"><h1 >Logo</h1></Link>

        <ul className='nav-links'>

          <li>

            <Link style={navStyle} to="/about">About</Link>

          </li>

          <li>

            <Link style={navStyle} to="/services">Services</Link>

          </li>

          <li>

            <Link style={navStyle} to="/shop">Shop</Link>

          </li>

        </ul>

      </nav>

      <Outlet />
      
    </>

  );

}

export default Nav;
