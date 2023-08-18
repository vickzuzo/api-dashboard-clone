import React from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { SubHeaderText } from '../../texts';
import * as Yup from "yup";
import { Button, FormInput } from "..";
import { VDirect, VEyeCloseIcon , VLockIcon } from '../../icons';

interface IProps {
  email?: string | string[];
  onSubmit: ((values: { 
    avatar: string; 
    first_name: string; 
    last_name: string;
    email: string; 
    phone_number: string; 
    password: string; 
  }) => void
  )
}

export const RegisterForm = ({ email, onSubmit }: IProps) => {
  return (
    <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
              <div className="w-full rounded-lg p-5 bg-white">
                <SubHeaderText text="Login to your account" />
                <Formik
                  initialValues={
                    {
                      avatar: "",
                      first_name: "",
                      last_name: "",
                      email: "", 
                      phone_number: "", 
                      password: "" 
                    }
                  }
                  validationSchema={Yup.object().shape(
                    {
                      avatar: Yup.string().required("avatar upload required"),
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
                        LeftIcon={<VLockIcon />}
                        RightIcon={<VEyeCloseIcon />}
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                      />
                      <FormInput
                        LeftIcon={<VLockIcon />}
                        RightIcon={<VEyeCloseIcon />}
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                      />
                      <FormInput
                        LeftIcon={<VDirect />}
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                      />
                      {email ? (
                        <FormInput
                          LeftIcon={<VDirect />}
                          RightIcon={<VEyeCloseIcon />}
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                        />
                      ) : null}
                      <Button
                        disabled={!props.dirty || !props.isValid}
                        type="submit"
                      >
                        {email ? "LOGIN" : "VERIFY EMAIL ADDRESS"}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
  );
}