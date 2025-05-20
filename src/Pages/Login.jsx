import React, { useState } from 'react'
import TileSection from '../Commponents/TitleSection'
import '../index.css'
const Login = () => {
  const [state,setState] = useState('Sign Up')
  const stateHandler = ()=>{
    if(state==='Sign Up'){
      setState('Log In')
    }
    else{
      setState('Sign Up')
    }
  }
  return (
    <div className='border-t border-gray-300 ' >
      <form action="" className=' border m-auto  w-90 sm:max-w-96 flex flex-col px-4 gap-4 py-2 mt-10 justify-between  '>
        <div className='prata-regular text-3xl' > 
          <TileSection text1={state} />
        </div>
        
        {state === 'Sign Up'?<input className='w-full px-4 py-2 border border-gray-400  ' type="text" required placeholder='Name'  />:null}
        <input className='w-full px-4 py-2 border border-gray-400  ' type="email" required placeholder='Enter Your Email'  />
        <input className='w-full px-4 py-2 border border-gray-400  ' type="password" placeholder='Password'  />
        {state === 'Sign Up'?<input className='w-full px-4 py-2 border border-gray-400  ' type="password" required placeholder='Confirm Password'  />:null}
        <div className='flex justify-between ' >
          <p>Forgot Password?</p>
          <p className='text-blue-600 cursor-pointer ' onClick={()=>stateHandler()} >{state === 'Sign Up'? 'Log In':'Sign Up'}</p>
        </div>
        <button type='submit' className='px-4 py-2 bg-black text-white'  >{state === 'Log In'? 'Sign In': 'Sign Up' }</button>
      </form>
    </div>
      
  )
}

export default Login
