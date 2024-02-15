import React, { useState } from 'react'
import ChianLogo from '../assets/chianpng.png'
import { UserAuth } from '../context/AuthContext'




const LoginPage = () => {

    const { login } = UserAuth();

    const { user } = UserAuth()

    const adminEmail = "info@chiantechhub.com"
const adminPassword = "#chiantech@"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isCorrect, setIsCorrect] = useState("")

  const  handleEmailChange = (e) => {
    setEmail(e.target.value)
    console.log(email)

  }

  const  handlePasswordChange = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (email == adminEmail && password == adminPassword) {
            console.log("correct password")
            await login()
        } else {
            console.log("Is not correct")
        }
    }

  return (
        <section className="bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex flex-col items-center mb-6 text-2xl font-semibold text-white">
          <img className="w-14 h-8 mr-2" src={ChianLogo} alt="logo" />
         <p>Chian Tech Hub </p>  
      </a>
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  Sign in to your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                      <input onChange={handleEmailChange} type="email" name="email" id="email" className="bg-gray-50 border sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">Password</label>
                      <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="••••••••" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember"  aria-describedby="remember" type="checkbox" className="w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className=" text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium hover:underline text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Sign in</button>
                  {/*<p className="text-sm font-light text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium hover:underline text-primary-500">Sign up</a>
                  </p>*/}
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default LoginPage