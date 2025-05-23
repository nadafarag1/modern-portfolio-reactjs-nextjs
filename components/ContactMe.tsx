import React from 'react'
import { BeakerIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { Form } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  

type Props = {}

function ContactMe({}: Props) {

    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (formData) => 
      {
        window.location.href = `mailto:nada.4.farag@gmail.com?subject=${encodeURIComponent(formData.subject)}&
        body=${encodeURIComponent(`Hi, my name is ${formData.name}. ${formData.message}. ${formData.email}`)}`;
      }


  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
           Contact 
        </h3>


        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{' '}
                <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2xl'>+1234567890</p>
                </div>



                <div>
                 <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2xl'>nada.4.farag@gmail.com</p>
                </div>

               </div>


                <div>
                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2xl'>+123 Developer Lane</p>
                </div>

            </div>


                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='ContactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='ContactInput' type="email" />
                    </div>
                        <input  {...register('subject')}placeholder='Subject' className='ContactInput' type="text" />

                        <textarea {...register('message')} placeholder='Message' className='ContactInput' />

                    <button
                    type='submit'
                    className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>

            </div>
        </div>

    </div>
  )
}

export default ContactMe