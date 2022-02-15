import Footer from '../components/Footer'
import Header from '../components/Header'
import 'antd/dist/antd.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />

    </>

  )
}

export default MyApp
