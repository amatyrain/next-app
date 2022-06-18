import '../styles/globals.css'
import Layout from '../components/Layout';

function MyApp({ pageProps, Component }: { pageProps: any, Component: any }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
