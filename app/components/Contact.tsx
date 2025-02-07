import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRef } from 'react'

const Contact = () => {

    const ref = useRef<HTMLFormElement>(null)

    const [result, setResult] = useState<string>("");

    const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setResult("Sending...");
      const formData = new FormData(event.target as HTMLFormElement);
  
      formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        ref.current?.reset()
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id='contact' className='py-10 scroll-mt-20 h-screen w-full px-[10%] bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Connect with me
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        Get in touch
      </h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I&apos;d love to hear from you! If you have any questions, comments, feedback or just want to know how Tosty and Simon(my cats) are doing, please use the form below.
      </p>
      <form ref={ref} onSubmit={(e)=>onSubmit(e)} className='flex flex-col gap-6 w-full'>
        <div className='flex flex-col lg:gap-6 lg:flex-row'>
            <input name='name' type='text' placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'/>
            <input name='email' type='email' placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'/>
        </div>
            <textarea name='message' rows={6} placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'/>
            <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>
                Submit now
                <Image src={assets.right_arrow_white} alt='submit now' className='w-4'/>
            </button>
            <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
