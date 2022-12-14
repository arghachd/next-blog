import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'

interface FormData {
  email: string
  password: string
}

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await login(formData.email, formData.password)
      router.push('/')
      toast.success('Login successful')
    } catch (error: any) {
      toast.error(error?.message)
    }
  }

  return (
    <Layout title='Login' description='Welcome to our app'>
      <div className='flex justify-center items-center'>
        <form
          onSubmit={handleSubmit}
          className='border p-4 flex flex-col shadow-md w-full sm:w-[600px] gap-4'
        >
          <h1 className='text-center text-3xl font-semibold'>Login Form</h1>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className='form-input'
          />
          <input
            type='password'
            name='password'
            value={formData.password}
            placeholder='password'
            onChange={handleInputChange}
            className='form-input'
          />

          <button type='submit' className='custom-button'>
            Login
          </button>

          <div>
            <p>
              New to our app ?{' '}
              <Link href='/signup'>
                <a className='underline'>Register</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login
