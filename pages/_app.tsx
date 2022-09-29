import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../context/AuthContext'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const progress = new ProgressBar({
  size: 4,
  color: '#3B82F6',
  className: 'z-50',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <>
        <ToastContainer />
        <Component {...pageProps} />
      </>
    </AuthContextProvider>
  )
}

export default MyApp
