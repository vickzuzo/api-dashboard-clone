import * as Yup from "yup";

const roleOptions = [
  { key: "Super Admin", value: "Super Admin" },
  { key: "Customer Support", value: "Customer Support" },
  {
    key: "Account Sales Representative",
    value: "Account Sales Representative",
  },
  {
    key: "Database Management Permissions",
    value: "Database Management Permissions",
  },
];
export const registerSchema = Yup.object().shape({
  avatar: Yup.string().required("Avatar upload required"),
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required!."),
  phone_number: Yup.string().required("Phone Number is required!."),
  password: Yup.string().required("Password is required!."),
});

export const loginEmailSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required!."),
});

export const loginTokenSchema = Yup.object().shape({
  token: Yup.number().required("Token is required!."),
});

export const passwordSchema = Yup.object().shape({
  password: Yup.string().required("Password is required!."),
});

export const businessInfoSchema = Yup.object().shape({
  business_type: Yup.string().required("Business Type is required!."),
  business_name: Yup.string().required("Business Name is required!."),
  business_logo: Yup.string().required("Business Logo Upload is required!."),
  business_industry: Yup.string().required("Business Industry is required!."),
  business_location: Yup.string().required("Business Location is required!."),
});

export const businessIdentitySchema = Yup.object().shape({
  business_tpid: Yup.string().required("Business Tpid is required!."),
  branch_id: Yup.string().required("Branch Id is required!."),
  business_serial_number: Yup.string().required(
    "Business Serial Number is required!."
  ),
});

export const userSchema = Yup.object().shape({
  avatar: Yup.string().required("Avatar upload required"),
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required!."),
  roles: Yup.array().required("Roles is required!."),
});

export const appSchema = Yup.object().shape({
  app_name: Yup.string().required("App Name is required"),
  contact_email: Yup.string()
    .email("Email is invalid")
    .required("Email is required!."),
  app_description: Yup.array().required("App Description is required!."),
});

export const paymentSchema = Yup.object().shape({
  card_name: Yup.string().required("Card Name is required"),
  card_number: Yup.number().required("Card Number is required"),
  cvv: Yup.number().min(3).max(3).required("CVV is required"),
  expiry_date: Yup.date().required("Expiry Date is required"),
  default: Yup.boolean().default(false),
});

export const kycStepOneValidationSchema = Yup.object().shape({
  type: Yup.string().required("This field is required"),
  name: Yup.string().required("This field is required"),
  industry: Yup.string().required("This field is required"),
  location: Yup.string().required("This field is required"),
});

export const kycStepTwoValidationSchema = Yup.object().shape({
  branch_id: Yup.string().required("This field is required"),
  tp_id: Yup.string().required("This field is required"),
  serial_number: Yup.string().required("This field is required"),
});
