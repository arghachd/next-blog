import Link from 'next/link'

const Header = () => {
  return (
    <header className='h-14 sticky top-0 left-0 w-full shadow-md'>
      <div className='px-6 flex items-center w-full h-full'>
        <Link href='/'>
          <a className='text-3xl font-bold'>
            <h1>ABlog</h1>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
