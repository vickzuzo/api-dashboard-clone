import React from 'react'
import Image from 'next/image'
import headerImage from '../../assets/login-page-header.png';
import { HeaderText, CaptionText, SubHeaderText, Text } from '../../components/texts';

const Login = () => {
    return (
        <section className="flex items-center justify-center h-screen">
            <div className="container">
                <div className="flex justify-between border rounded-md">
                    <div className="flex-auto w-64 m-4">
                        <CaptionText text='Api Management App' />

                        <div className='pt-8'>
                            <HeaderText text='Create An Account' />
                        </div>
                        <div className='py-4'>
                            <Text text="Welcome to our service. We’re thrilled that you’re interested in using our service. By signing up for an account, you’ll be able to access a wealth of business-related resources that can help you achieve your daily business goals with minimal effort. So why wait? Setup your account using the form on this page" />
                        </div>
                        <Image
                        src={headerImage}
                        alt="Header Image"
                        />
                        <div className='w-full text-center p-4'>
                            <CaptionText text='(C) 2023. All Rights Reserved.' />
                        </div>
                    </div>
                    <div className="flex-auto w-32 m-4">
                        <div className='card bg-gray-400'>
                            <SubHeaderText text='Login Header' />
                            <form>
                                <label className="block">
                                    <input type="email" className="peer p-2 my-2 rounded-md w-full" placeholder='Email'/>
                                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm w-full">
                                    Please provide a valid email address.
                                    </p>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login