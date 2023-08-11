import React from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { SubHeaderText } from '../../texts';
import * as Yup from "yup";
import { Button, FormInput } from "..";
import { VDirect, VEyeCloseIcon , VLockIcon } from '../../icons';

interface IProps {
  email?: string | string[];
  onSubmit: ((values: { 
    email: string; 
    new_password: string; 
    confirm_new_password: string; 
  }) => void
  )
}

export const LoginForm = ({ email, onSubmit }: IProps) => {
  return (
    <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
              <div className="w-full rounded-lg p-5 bg-white">
                <SubHeaderText text="Login to your account" />
                <Formik
                  initialValues={
                    email
                      ? { email: email ? email : "", password: "" }
                      : { email: "" }
                  }
                  validationSchema={Yup.object().shape(
                    email
                      ? {
                          email: Yup.string()
                            .email("Email is invalid")
                            .required("This field is required!."),
                          password: Yup.string().required(
                            "This field is required!."
                          ),
                        }
                      : {
                          email: Yup.string()
                            .email("Email is invalid")
                            .required("This field is required!."),
                        }
                  )}
                  onSubmit={onSubmit}
                >
                  {(props) => (
                    <Form>
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