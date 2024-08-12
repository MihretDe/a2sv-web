"use client";
import React from "react";
import {useForm , SubmitHandler} from "react-hook-form";
import { useUser } from "@/contexts/UserContext"; 
import { useState } from "react";
import { useRouter } from 'next/navigation';
const Verify = () => {
  const {register , handleSubmit , formState: {errors}} = useForm();
  const {user , isLoggedIn , setIsLoggedIn } = useUser();

  const curr_email = user?.email;
  const [otpValues, setOtpValues] = useState<string[]>(['', '', '', '']);
  const router = useRouter();
  const handleChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };
  
  const onSumbit = async () =>{

    try {
      const otpString: string = otpValues.join('');
      console.log(otpString)
      const response = await fetch('https://akil-backend.onrender.com/verify-email' , {
        method : 'POST' , 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: curr_email,
          OTP: otpString,
        }),
      })
      if (response.ok){
        const result = await response.json();
        setIsLoggedIn(true)
        console.log("submitted")
        alert("success")
        router.push("/")
      }
      else{
        alert(curr_email) 
        console.log("Not success")
      }
    }
    catch(error){
      alert("Error")
      console.error("Error during sign-in" , error)
    }};
  return (
  
    <div className="flex flex-col items-center min-h-screen my-48">
    <div className="flex flex-col items-center  w-40p gap-9">
      <p className="text-[#25324B] font-black text-[32px] leading-10 ">Verify Email</p>
      <p className="text-[#7C8493] font-normal text-sm leading-6">
        We've sent a verification code to the email address you provided. To
        complete the verification process, please enter the code here.
      </p>
      <form onSubmit={handleSubmit(onSumbit)} className="flex  flex-col gap-5 mt-6 justify-between w-100p" >
        <div className="flex gap-5 justify-between ">
        {otpValues.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          className="border-2 rounded px-3 py-2 text-center max-w-20 font-epilogue text-[#D6DDEB] font-medium text-[34px] bg-[#F8F8FD] border-[#b1aff1] focus:border-[#b1aff1]"
          pattern="[0-9]*"
          inputMode="numeric"
          onKeyDown={(e) => {
            
            if (e.key === 'Backspace' && value === '') {
              const previousInput = e.target.previousElementSibling as HTMLInputElement;
              if (previousInput) previousInput.focus();
            }
            if (e.key === 'ArrowRight') {
              const nextInput = e.target.nextElementSibling as HTMLInputElement;
              if (nextInput) nextInput.focus();
            }
          }}
        />
      ))}
        
        </div>
        <p className="font-epilogue text-sm font-normal text-[#7C8493] text-center">You can request to <a className="font-semibold text-[#2d298e]">Resend Code</a> in <span className="block text-[#2d298e] font-semibold">0:30</span></p>
        <button type="submit" className="border rounded-3xl border-[#c8c6f6] bg-[#c8c6f6] px-3 py-4 text-white font-bold text-base" >Continue</button>
      </form>
      
    </div>
    </div>
  );
};

export default Verify;
