import Header from './components/Header'
import Footer from './components/Footer'

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