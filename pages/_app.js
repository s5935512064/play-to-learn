import { useEffect } from "react";
import '../styles/globals.css'
import Layout from '../layout/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => { AOS.init() }, 0)
  }, [])
  return (
    <Layout>

      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
