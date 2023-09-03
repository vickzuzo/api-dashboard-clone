import { Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { Button, FormInput } from "..";
import {
  VDirect,
  VEyeCloseIcon,
  VInfoIcon,
  VLockIcon,
  VNigeriaIcon,
} from "../../icons";
import { CaptionText, SubHeaderText } from "../../texts";

interface IProps {
  onSubmit: (values: {
    first_name: string;
    last_name: string;
    email: string;
  }) => void;
}
const convertToString = (image) => {
  return image as string;
};

export const RegisterForm = ({ onSubmit }: IProps) => {
  return (
    <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
      <div className="w-full rounded-lg p-5 bg-white">
        <SubHeaderText text="Create a new Account" />
        <div className="mt-3">
          <CaptionText text="Welcome to our service. We’re thrilled that you’re interested in using our service." />
        </div>

        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
          }}
          validationSchema={Yup.object().shape({
            first_name: Yup.string().required("First Name is required"),
            last_name: Yup.string().required("Last Name is required"),
            email: Yup.string()
              .email("Email is invalid")
              .required("This field is required!."),
            phone_number: Yup.string().required("This field is required!."),
            password: Yup.string().required("This field is required!."),
          })}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              {/* <FormInput
                LeftIcon={<VDirect />}
                label="Upload File"
                type="file"
                name="avatar"
                placeholder="Enter Email Address"
              /> */}
              <div className="flex flex-row justify-between gap-4">
                <FormInput
                  type="text"
                  name="first_name"
                  placeholder="Enter First Name"
                  className="w-full"
                />
                <FormInput
                  type="text"
                  name="last_name"
                  placeholder="Enter Last Name"
                  className="w-full"
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
                type="number"
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
              <div className="flex flex-row justify-start my-5">
                <VInfoIcon className="hover:bg-white cursor-pointer mr-2" />
                <CaptionText text="Have an Exiting Account?" />
                <Link
                  href={"/login"}
                  className="text-sm text-blue-500 font-bold underline underline-offset-4 ml-2"
                >
                  Sign in Here
                </Link>
              </div>
              <Button
                rounded
                className="uppercase"
                disabled={!props.dirty || !props.isValid}
                type="submit"
              >
                Create account
              </Button>
              <div className="flex flex-row justify-center my-5">
                <CaptionText text="(C) 2023. All Rights Reserved." />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
