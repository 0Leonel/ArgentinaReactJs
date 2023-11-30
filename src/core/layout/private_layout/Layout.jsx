import { Outlet } from 'react-router-dom'
import AppNavBar from '../../components/NavBar/app_navBar'
import Appfooter from '../../components/footer/appfooter'

export const Layout = () => {
  return (
    <>
    <AppNavBar/>
    <main className='min-h-screen bg-[#1F1F1F]'>
      <Outlet/>
    </main>
    <Appfooter/>
    </>
  )
}
