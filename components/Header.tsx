import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <header className='h-14 sticky top-0 left-0 w-full shadow-md'>
      <div className='px-6 flex items-center justify-between w-full h-full'>
        <Link href='/'>
          <a className='text-3xl font-bold'>
            <h1>ABlog</h1>
          </a>
        </Link>

        <div>
          {user ? (
            <div className='cursor-pointer' onClick={handleLogout}>
              <p>Logout</p>
            </div>
          ) : (
            <div className='flex items-center space-x-4'>
              <Link href='/login'>
                <a className='hover:underline'>
                  <p>Login</p>
                </a>
              </Link>
              <Link href='/signup'>
                <a className='hover:underline'>
                  <p>Sign Up</p>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
