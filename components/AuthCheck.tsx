import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const AuthCheck = ({ children }: { children: JSX.Element }) => {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) router.push('/login')
  }, [user])

  return <div>{children}</div>
}

export default AuthCheck
