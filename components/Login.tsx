'use client'

import { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Eye, EyeOff } from 'lucide-react'
import { useToast } from './toastProvider'
import { useRouter } from 'next/navigation'
import { useAuth } from './Auth_Context'    
import { motion} from 'framer-motion'

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Too short').required('Password is required')
})

const signupValidationSchema = Yup.object().shape({
  fullName: Yup.string().min(2, 'Too short').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Too short').required('Password is required'),
  confirmpassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
  phone: Yup.string().min(10, 'Too short').required('Phone number is required'),
  
  role: Yup.string().required('Role is required')
})

export default function AuthForm() {
  const { showToast } = useToast()
  const [loggingIn, setLoggingIn] = useState(false)


  //ui
  const [isLoginMode, setIsLoginMode] = useState(false)

  const {user,setUser} = useAuth();

  // Router for navigation
const router = useRouter()


  
  const [signUpData, setSignUpData] = useState({})
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  
  // Show password states
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showSignupPassword, setShowSignupPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleGoogleAuth = () => {
    
  }
   
  //signUp function
  const signUp = async(signUpData:any) => {
      setIsLoginMode(true)
    if(!signUpData) return;
    try {   
      const res  = await fetch('https://api.recyco.me/auth/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      })
      if(!res.ok){
        const Errordata = await res.json()
        if( res.status == 409){
          console.log(Errordata)
        }
        showToast('Signup failed', 'error')
        throw new Error('Signup failed')
      }
      const data = await res.json()
      showToast('You have created your account successfully', 'success')
      console.log('Signup successful:', data)
    } catch (error) {
      showToast('Signup failed', 'error')
      console.log('Signup error:', error)
    } finally{
      setIsLoginMode(false)
      setLoggingIn(false)
    }
    console.log(isLoginMode)
  }

  //Login Function
  const login = async(loginData: { email: string; password: string }) => {
    setIsLoginMode(true)
    try{
      const res  = await fetch('https://api.recyco.me/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:new URLSearchParams({
          'username': loginData.email,
          'password': loginData.password 
        }),
          credentials: "include"
   
      })

      if(!res.ok){
        const Errordata = await res.json()
        if( res.status == 409){
          console.log(Errordata)
        }
        showToast('Login failed', 'error')
        throw new Error('Login failed')
      }
      const data = await res.json()
       setUser(data);
      showToast('Welcome back', 'success')
      router.push('/buy')
      console.log('Login successful:', data)
    }catch(error){
    
      console.log('Login error:', error)
    }finally{
      setIsLoginMode(false)
    }
  }
   




  return (
    <div className="min-h-screen w-full flex justify-center
     items-center bg-linear-to-br from-green-400 to-blue-500 p-10">
      <motion.button 
       whileHover={{scale:0.95}}
      whileTap={{scale:1}}
      
      onClick={()=> router.replace('/')} className='text-[10px]  md:text-[16px] absolute top-2 md:top-6 px-4 left-1 bg-gray-300 p-2 rounded cursor-pointer' >
      Back
      </motion.button>

      {!loggingIn ? (
        <Formik
          key="login"
          initialValues={{ email: '', password: '' }}
          validationSchema={loginValidationSchema}
          onSubmit={(values, { resetForm }) => {console.log('Login', values)
            setLoginData(values)
            login(values)
            resetForm()
          }}
        >
          {({ dirty, isValid, isSubmitting }) => (
            <Form className="md:w-1/2 w-full h-fit flex flex-col gap-4 bg-white shadow-lg p-6 rounded-[10px] md:py-30">
              <h2 className="text-center font-bold text-2xl text-gray-800">Welcome Back</h2>

              <div className="w-full">
                <label className="text-gray-700">Email <span className="text-red-500">*</span></label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mt-1"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="w-full">
                <div className="w-full flex justify-between">
                  <label className="text-gray-700">Password <span className="text-red-500">*</span></label>
                  <button className='cursor-pointer text-[16px]
                   text-green-500 hover:text-green-600' onClick={()=>router.push('/forgotPassword')}>Forgot password</button>
                </div>
                <div className="relative">
                  <Field
                    type={showLoginPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="w-full border  border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mt-1 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-2 top-1/2 
                    -translate-y-1/2 text-gray-500
                     cursor-pointer
                     hover:text-gray-700 mt-1"
                  >
                    {showLoginPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <motion.button 
              whileHover={{scale:0.95}}
              whileTap={{scale:1}}
             type="submit" disabled={!isValid || isSubmitting || !dirty} className={` ${ !dirty || !isValid ? 'bg-gray-600  cursor-not-allowed ' : 
                'bg-green-400 cursor-pointer '}  text-white p-2 rounded transition-colors`}>
              {isLoginMode ? 'Processing...': 'Login'}
              </motion.button>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  Don't have an account?{' '}
                  <span
                    className="text-green-500 cursor-pointer hover:text-green-600"
                    onClick={() => {
                      setLoggingIn(true)
                    }}
                  >
                  Sign Up
                  </span>
                </span>
                
                
              </div>






            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          key="signup"
          initialValues={{ fullName: '', email: '', password: '', phone: '', confirmpassword: '', role: '' }}
          validationSchema={signupValidationSchema}
          onSubmit={(values, { resetForm }) => {console.log('Signup', values)
            const  {confirmpassword, ...data }= values;
            setSignUpData(data)
            signUp(data)
            resetForm()

          }}
        >
          {({ isSubmitting, dirty,isValid }) => (
            <Form className="w-full  md:w-1/2  h-fit  flex flex-col gap-4 bg-white shadow-lg  rounded-[10px] px-10 py-10">
              <h2 className="text-center font-bold text-2xl text-gray-800">Create an Account</h2>

              <div className="w-full">
                <label className="text-gray-700">Full Name <span className="text-red-500">*</span></label>
                <Field
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mt-1"
                />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="w-full">
                <label className="text-gray-700">Email <span className="text-red-500">*</span></label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mt-1"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="w-full">
                <label className="text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                <Field
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mt-1"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="w-full">
                <label className="text-gray-700">Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Field
                    type={showSignupPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mt-1 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                    className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 mt-1"
                  >
                    {showSignupPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="w-full">
                <label className="text-gray-700">Confirm Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mt-1 pr-10"
                  />
                   <motion.button 
       whileHover={{scale:0.95}}
      whileTap={{scale:1}}
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 mt-1"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </motion.button>
                </div>
                <ErrorMessage name="confirmpassword" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="w-full">
                <label className="text-gray-700">Role <span className="text-red-500">*</span></label>
                <Field
                  as="select"
                  name="role"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mt-1"
                >
                  <option value="">Select Role</option>
                  <option value="user">User/Seller</option>
                  <option value="vendor">Agent</option>
                </Field>
                <ErrorMessage name="role" component="div" className="text-red-500 text-sm mt-1" />
              </div>

               <motion.button 
       whileHover={{scale:0.95}}
      whileTap={{scale:1}} type="submit" disabled={!isValid || isSubmitting || !dirty} className={` ${ !dirty || !isValid ? 'bg-gray-600  cursor-not-allowed ' : 
                'bg-green-400 cursor-pointer '}  text-white p-2 rounded transition-colors`}>
               {isLoginMode ? 'Creating your account...' : 'Sign Up'}
              </ motion.button>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  Already have an account?{' '}
                  <span
                    className="text-green-500 font-bold cursor-pointer hover:text-green-600"
                    onClick={() => {
                      setLoggingIn(false)
                    }}
                  >
                    Login
                  </span>
                </span>

              </div>


              
                  <motion.button 
                whileHover={{scale:0.95}}
                whileTap={{scale:1}}
                  type="button"
                  onClick={handleGoogleAuth}
                  className="flex justify-center cursor-pointer items-center gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <svg width="50" height="18" viewBox="0 0 18 18">
                    <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
                    <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
                    <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"/>
                    <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
                  </svg>
                  <span className="text-sm text-gray-700"> {isLoginMode ? 'Logging in with Google...' : 'Continue with Google'}</span>
                </motion.button>

            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}