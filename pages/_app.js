import axios from 'axios'
import App from 'next/app'
import Layout from '../Components/Layout'

axios.defaults.baseURL = process.env.API_URL



function MyApp({ Component, pageProps }) {
  //let { pageProps } = this.props
  const headerStyle = pageProps.headerStyle ? pageProps.headerStyle : ''
  //console.log(pageProps.headerStyle)
  return (
    <Layout headerStyle={headerStyle}>
      <Component {...pageProps} />
    </Layout>
  )
}

//MyApp.getInitialProps =  ({Component, ctx}) => {
//  let pageProps = {}
//  return   {pageProps}
//}

export default MyApp
