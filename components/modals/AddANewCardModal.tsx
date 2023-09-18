import React from "react";
import { Modal } from "./Modal";
import { Button, DangerPaleButton, FormInput } from "../forms";
import { useAppDispatch } from "../../utils/redux";
import { onCloseAppLoader, onOpenAppLoader } from "../../store";
import { HeaderText } from "../texts";
import { Form, Formik } from "formik";
import { paymentSchema } from "../../schemas";
import { VAtmCardIcon } from "../icons";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
}

const AddANewCardModal = ({ isOpen, onClose, onProceed }) => {
  const dispatch = useAppDispatch();

  const onAddNewCard = () => {
    onClose();
    dispatch(onOpenAppLoader());
    setTimeout(() => {
      dispatch(onCloseAppLoader());
      onProceed();
    }, 3000);
  };

  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      showHeaderComponent={false}
      footer={
        <div className="flex flex-row w-full">
          <DangerPaleButton onClick={onClose} className="py-5">
            CANCEL
          </DangerPaleButton>
          <Button className="rounded-[0px] py-5" onClick={onAddNewCard}>
            CONTINUE
          </Button>
        </div>
      }
    >
      <div className="flex flex-col items-center gap-3 p-2">
        <div className="flex items-center gap-4 w-full">
          <div className="bg-gray-100 p-3 rounded-lg">
            <VAtmCardIcon />
          </div>
          <div>
            <h1 className="font-bold text-lg">Add a New Card</h1>
            <p className="text-xs">
              Define a new payment option to be used for transactions.
            </p>
          </div>
        </div>
        <Formik
          initialValues={{ card_name: "", card_number: "" }}
          validationSchema={paymentSchema}
          onSubmit={() => console.log("vales")}
        >
          {(props) => (
            <Form className="w-full">
              <FormInput name="card_name" placeholder="Enter Card Name" />
              <FormInput name="card_number" placeholder="Enter Card Number" />
              <div className="w-full flex flex-row items-center gap-4">
                <FormInput
                  name="cvv"
                  placeholder="Enter CVV"
                  className="w-full"
                />
                <FormInput
                  name="expiry_date"
                  placeholder="Enter Expiry Date"
                  className="w-full"
                />
              </div>
              <div>
                {/* <Switch /> */}
                <p>Make Default</p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default AddANewCardModal;
