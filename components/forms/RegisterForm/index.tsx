import React, { useState } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { CaptionText, SubHeaderText } from '../../texts';
import * as Yup from "yup";
import { Button, FormInput } from "..";
import { VDirect, VEyeCloseIcon , VInfoIcon, VLockIcon, VNigeriaIcon } from '../../icons';
import { AvatarInput } from '../AvatarInput';
import Link from 'next/link';

interface IProps {
  onSubmit: ((values: { 
    first_name: string; 
    last_name: string;
    email: string; 
  }) => void
  )
}
const convertToString = (image) => {
  return image as string;
}

export const RegisterForm = ({ onSubmit }: IProps) => {
  
  return (
    <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
              <div className="w-full rounded-lg p-5 bg-white">
                <SubHeaderText text="Create a new Account" />
                <CaptionText text="Welcome to our service. We’re thrilled that you’re interested in using our service." />
                
                
                <Formik
                  initialValues={
                    {
                      first_name: "",
                      last_name: "",
                      email: "",
                    }
                  }
                  validationSchema={Yup.object().shape(
                    {
                      first_name: Yup.string().required("First Name is required"),
                      last_name: Yup.string().required("Last Name is required"),
                      email: Yup.string()
                        .email("Email is invalid")
                        .required("This field is required!."),
                      phone_number: Yup.string().required("This field is required!."),
                      password: Yup.string().required(
                        "This field is required!."
                      ),
                    }
                  )}
                  onSubmit={onSubmit}
                >
                  {(props) => (
                    <Form>
                      <FormInput
                        LeftIcon={<VDirect />}
                        label='Upload File'
                        type="file"
                        name="avatar"
                        placeholder="Enter Email Address"
                      />
                      <div className='flex flex-row justify-between'>
                          <FormInput
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            className='w-full mr-4'
                          />
                          <FormInput
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            className='w-full ml-4'
                          />
                      </div>
                      <FormInput
                        LeftIcon={<VDirect />}
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                      />
                      <FormInput
                        LeftIcon={<VNigeriaIcon />}
                        type='text'
                        name="phone_number"
                        placeholder="Enter Phone Number"
                      />
                      <FormInput
                        LeftIcon={<VLockIcon />}
                        RightIcon={<VEyeCloseIcon />}
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                      />
                      <div className='flex flex-row justify-start my-5'>
                          <VInfoIcon className='hover:bg-white cursor-pointer mr-2' />
                          <CaptionText text="Have an Exiting Account?"/> 
                          <Link href={'/login'} className='text-sm text-blue-500 underline mx-2'>
                            Sign in Here
                          </Link>
                      </div>
                      <Button
                        disabled={!props.dirty || !props.isValid}
                        type="submit"
                      >
                        {"SIGN UP"}
                      </Button>
                      <div className='flex flex-row justify-center my-5'>
                          <CaptionText text="(C) 2023. All Rights Reserved."/>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
  );
}