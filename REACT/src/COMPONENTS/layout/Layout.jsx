
import Header from '../jsx/HEADER/Header'
import Footer from '../jsx/FOOTER/Footer'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>

        <header>
          
          <h1>SOY UN HEADER</h1>

          <nav>
          <NavLink to="/"> Home</NavLink>


          </nav>
          
        </header>

        <main>

        <Outlet />

        </main>

        <Footer />

    </div>
  )
}

export default Layout