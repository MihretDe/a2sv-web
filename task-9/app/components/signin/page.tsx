"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Cookie from "js-cookie";
import { signIn } from 'next-auth/react';
import { useUser } from '@/contexts/UserContext';



const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const {setIsLoggedIn} = useUser();
  const onSubmit = async (data:any) => {
    try {
      const response = await fetch('https://akil-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
     
      if (response.ok) {
        const result = await response.json();
        console.log(result) 
        localStorage.setItem('accessToken' , result.data.accessToken)
        Cookie.set('currentUser', result.data.accessToken, { expires: 30 / 1440, path: '/' });
        alert("log in")
        setIsLoggedIn(true)
        router.push('../components/Home');
        
      } else {
        console.error('Sign-in failed:', response.statusText);
        alert("not logged in")
        
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <div className='flex flex-col items-end mr-60'>
      <div className="flex flex-col gap-4 w-40p my-32">
        <p className='text-center text-[#202430] text-[32px] font-black'>Welcome Back,</p>
        <div className='flex'>
          <hr className="flex-grow border-t border-gray-300" />
          <p className='mx-32'></p>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label htmlFor="email" className="text-[#515B6F] font-semibold text-base font-epilogue leading-[25.6px]">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="border rounded-md px-3 py-4"
              {...register('email', { required: 'Email is required' })}
            />
            
          </div>
          <div className='flex flex-col'>
            <label htmlFor="password" className="text-[#515B6F] font-semibold text-base font-epilogue leading-[25.6px]">Password</label>
            <input
              type="password"
              id="password"
              placeholder='Enter password'
              className="border rounded-md px-3 py-4"
              {...register('password', { required: 'Password is required' })}
            />
            
          </div>
          <button type='submit' className="border rounded-3xl border-[#2d298e] bg-[#2d298e] px-3 py-4 text-white font-bold text-base">Login</button>
        </form>
        <p className="text-[#8f9197] font-normal text-base">
          Don't have an account? <a className="text-[#2d298e] text-[14px] font-semibold" href="./components/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
