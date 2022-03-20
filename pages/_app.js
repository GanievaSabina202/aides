import AppProvider from '../app/AppProvider'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider >
  )
}

export default MyApp
