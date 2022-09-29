import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../context/AuthContext'

interface FormData {
  email: string
  password: string
}

const Signup = () => {
  const router = useRouter()
  const { user, signup } = useAuth()
  console.log(user)
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
      await signup(formData.email, formData.password)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout title='Signup' description='Register to our app'>
      <div className='h-screen w-screen flex justify-center items-center px-6'>
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
            Sign Up
          </button>

          <div>
            <p>
              New to our app ?{' '}
              <Link href='/login'>
                <a className='underline'>Login</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Signup
