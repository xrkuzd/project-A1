import Navbar from '@components/navigation/Navbar'
import Footer from '@components/navigation/Footer'
import { FunctionComponent } from 'react'

const Layout: FunctionComponent<any> = ({ children }) =>
{
  return (
    <>
      <div className='flex flex-col p-2 h-full w-full'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout