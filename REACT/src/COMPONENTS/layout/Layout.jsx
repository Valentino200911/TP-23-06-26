
import Header from '../jsx/header/Header'
import Footer from '../jsx/footer/Footer'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>

        <Header/>

        <main>

        <Outlet />

        </main>

        <Footer />

    </div>
  )
}

export default Layout