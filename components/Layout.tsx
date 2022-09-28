import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

interface IProps {
  title?: string
  description?: string
  children: JSX.Element
}

const Layout = ({ title, description, children }: IProps) => {
  return (
    <div>
      <Head>
        <title>{title ? `${title} | Blog` : 'Blog'}</title>
        <meta
          name='description'
          content={description ? description : 'This is a blog website'}
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header />
      <main className='min-h-[calc(100vh-6rem)] max-w-7xl mx-auto px-4 py-6'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
