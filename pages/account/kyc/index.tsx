import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { FormSelect } from "../../../components/forms/Select";
import { VLocationPin } from "../../../components/icons";
import AccountKycLayout from "../../../components/layouts/AccountKycLayout";
import { CaptionText, HeaderText } from "../../../components/texts";
import {
  kycStepOneValidationSchema,
  kycStepTwoValidationSchema,
} from "../../../schemas";
import { Button, FormInput } from "../../../components/forms";
import { onCloseAppLoader, onOpenAppLoader } from "../../../store";
import useDisclosure from "../../../utils/useDisclosure";
import { useAppDispatch } from "../../../utils/redux";
import BusinessOnboardedModal from "../../../components/modals/BusinessOnboardedModal";

const AccountKYCScreen = () => {
  const router = useRouter();
  const onBoarder = useDisclosure();
  const dispatch = useAppDispatch();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className="w-full">
        <HeaderText
          text="Welcome Nusaiba, Tell us about yor company"
          className="mb-3"
        />
        <CaptionText text="Enter appropriate and official information about your business below" />
        {router.query?.step === "business_information" ? (
          <Formik
            initialValues={{ type: "", name: "", location: "", industry: "" }}
            validationSchema={kycStepOneValidationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <>
                  <FormSelect
                    name="type"
                    label="What kind of business do you run?"
                    labelClassName="text-lg font-bold"
                    options={[
                      { label: "Company", value: "company" },
                      { label: "Individual", value: "individual" },
                    ]}
                    placeholder="Select Business Type"
                  />
                  <FormInput name="name" placeholder="Your Business Name" />
                  <FormSelect
                    name="industry"
                    label="Business Industry"
                    subtitle="Choose the industry closest to the one in which your business operates"
                    labelClassName="text-lg font-bold"
                    options={[
                      { label: "Company", value: "company" },
                      { label: "Individual", value: "individual" },
                    ]}
                    placeholder="Select Industry"
                  />
                  <FormSelect
                    name="location"
                    label="Verify your business location"
                    labelClassName="text-lg font-bold"
                    options={[
                      { label: "Dubai", value: "Dubai" },
                      { label: "Canada", value: "Canada" },
                      { label: "Nigeria", value: "Nigeria" },
                      { label: "United Kingdom", value: "United Kingdom" },
                    ]}
                    LeftIcon={<VLocationPin />}
                    placeholder="Country"
                  />
                  <Button
                    rounded
                    className="uppercase"
                    disabled={!props.dirty || !props.isValid}
                    onClick={() =>
                      router.push(
                        "/account/kyc?step=business_identity&step_1=completed"
                      )
                    }
                  >
                    Continue
                  </Button>
                </>
              </Form>
            )}
          </Formik>
        ) : router.query?.step === "business_identity" ? (
          <Formik
            initialValues={{ tp_id: "", branch_id: "", serial_number: "" }}
            validationSchema={kycStepTwoValidationSchema}
            onSubmit={(values) => {
              dispatch(onOpenAppLoader());
              setTimeout(() => {
                dispatch(onCloseAppLoader());
                onBoarder.onOpen();
              }, 3000);
            }}
          >
            {(props) => (
              <Form>
                <>
                  <FormInput
                    name="tp_id"
                    labelClassName="text-lg font-bold text-black"
                    label="Your Business TPID"
                    subtitle="Enter your business TPID which can be found on your business registration form"
                    placeholder="Your Business Name"
                  />
                  <FormInput
                    name="branch_id"
                    label="Branch ID"
                    labelClassName="text-lg font-bold text-black"
                    subtitle="Your branch ID is located in the certificate offered by the CAC"
                    placeholder="Your Business Name"
                  />
                  <FormInput
                    name="serial_number"
                    labelClassName="text-lg font-bold text-black"
                    label="Business Serial Number"
                    subtitle="Your CAC Serial Number is important for verifying the owner of the business as legally recognised by the government"
                    placeholder="Your Business Name"
                  />
                  <Button
                    rounded
                    className="uppercase"
                    disabled={!props.dirty || !props.isValid}
                    type="submit"
                  >
                    Continue
                  </Button>
                </>
              </Form>
            )}
          </Formik>
        ) : (
          <div>UNABLE TO PARSE URL</div>
        )}
      </div>
      <BusinessOnboardedModal
        isOpen={onBoarder.isOpen}
        onClose={onBoarder.onClose}
      />
    </>
  );
};

AccountKYCScreen.getLayout = function getLayout(page) {
  return <AccountKycLayout>{page}</AccountKycLayout>;
};

export default AccountKYCScreen;
