import React from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { SubHeaderText, CaptionText } from '../../texts';
import * as Yup from "yup";
import { Button, FormInput } from "..";
import { VDirect, VEyeCloseIcon , VLockIcon } from '../../icons';
import { passwordSchema } from '../../../schemas';

interface IProps {
  onSubmit: ((values: { 
    password: string;
  }) => void
  )
}

export const LoginWithPasswordForm = ({ onSubmit }: IProps) => {
  return (
    <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
        <div className="w-full rounded-lg p-5 bg-white">
          <SubHeaderText text="Login to your account" />
          <CaptionText text="Welcome to our service. We're thrilled that you're interested in using our service" />
          <Formik
            initialValues={
                {
                  password: ""
                }
            }
            validationSchema={passwordSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <FormInput
                  LeftIcon={<VLockIcon />}
                  RightIcon={<VEyeCloseIcon />}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
                <CaptionText text="Forgot your password? Reset it Here" />
                <Button
                  disabled={!props.dirty || !props.isValid}
                  type="submit"
                >
                  {"SIGN IN"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
  );
}