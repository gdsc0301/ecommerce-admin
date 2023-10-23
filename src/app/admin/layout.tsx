import Header from './components/Header'
import Footer from './components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visie Ecommerce - Products',
  description: 'Store products list',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  }
}

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <Header/>
      <main className="container">
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout;