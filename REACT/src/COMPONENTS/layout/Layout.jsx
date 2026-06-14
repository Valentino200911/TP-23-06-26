
import Header from '../jsx/header/Header'
import Footer from '../jsx/footer/Footer'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>

        <Header/>

        <main>

        <Outlet />

        </main>

        <Footer />

    </>
  )
}

export default Layout