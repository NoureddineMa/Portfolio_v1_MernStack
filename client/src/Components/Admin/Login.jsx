import axios from 'axios'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const API = 'http://localhost:3001/api/users/Login'
  const HandleLogin = async (e) => {
    e.preventDefault()
    const data = {
      email,
      password
    }
    try {
      const response = await axios.post(API, data)
      console.log(response)
      if (response.data.status === 'success') {
        localStorage.setItem('token', response.data.token)
        navigate('/Dashboard')
      } else {
        setError(response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
<div className="mx-auto bg-dark max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <form   className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <div className="relative mt-1">
          <input type="email" id="email" value={email} onChange={handleEmail} className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter email" />
          <span className="absolute inset-y-0 right-4 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="password" className="text-sm font-medium">Password</label>
        <div className="relative mt-1">
          <input type="password" id="password" value={password} onChange={handlePassword} className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter password" />
        </div>
      </div>
      <button  onClick={HandleLogin} className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
        Sign in
      </button>
    </form>
  </div>
</div>
    </>
  )
}

export default Login