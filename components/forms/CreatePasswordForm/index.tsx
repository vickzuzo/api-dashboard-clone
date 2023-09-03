import React from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { SubHeaderText } from '../../texts';
import * as Yup from "yup";
import { Button, FormInput } from "..";
import { VDirect, VEyeCloseIcon , VLockIcon } from '../../icons';

interface IProps {
  onSubmit: ((values: { 
    temporal_password: string; 
    new_password: string; 
    confirm_new_password: string; 
  }) => void
  )
}

export const CreatePasswordForm = ({ onSubmit }: IProps) => {
  return (
    <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
      <div className="w-full rounded-lg p-5 bg-white">
        <SubHeaderText text="Create Password" />
        <Formik
          initialValues={{
            temporal_password: "",
            new_password: "",
            confirm_new_password: "",
          }}
          validationSchema={Yup.object().shape({
            temporal_password: Yup.string().required(
              "This field is required!."
            ),
            new_password: Yup.string().required(
              "This field is required!."
            ),
            confirm_new_password: Yup.string()
              .oneOf(
                [Yup.ref("new_password"), null],
                "Passwords must match"
              )
              .required("This field is required!."),
          })}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <FormInput
                LeftIcon={<VLockIcon />}
                RightIcon={<VEyeCloseIcon />}
                type="password"
                name="temporal_password"
                placeholder="Enter Temporal Password"
              />
              <FormInput
                LeftIcon={<VLockIcon />}
                RightIcon={<VEyeCloseIcon />}
                type="password"
                name="new_password"
                placeholder="Enter New Password"
              />
              <FormInput
                LeftIcon={<VLockIcon />}
                RightIcon={<VEyeCloseIcon />}
                type="password"
                name="confirm_new_password"
                placeholder="Confirm New Password"
              />
              <Button
                disabled={!props.dirty || !props.isValid}
                type="submit"
              >
                CREATE NEW PASSWORD
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
