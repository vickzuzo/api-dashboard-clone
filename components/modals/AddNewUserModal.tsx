import { useMutationRequest } from "api/useMutationRequest";
import { onCloseAppLoader, onOpenAppLoader, updateAppUser } from "../../store";
import { useAppDispatch } from "../../utils/redux";
import AtmCard from "../cards/AtmCard";
import { Button, FormInput, PaleButton } from "../forms";
import { VAtmCardIcon, VPlusIcon } from "../icons";
import { Modal } from "./Modal";
import { ClientUserDtoIn } from "generated";
import { Form, Formik } from "formik";
import { FormSelect } from "components/forms/Select";
import Select from "components/forms/Select/ui/Select";
import { useGetRoles } from "hooks/app/useGetRoles";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewUserModal: React.FC<IProps> = ({ isOpen, onClose }) => {
  const { isLoading, trigger } = useMutationRequest<ClientUserDtoIn, any>({
    service: "/api/UserManagement",
    method: "post",
    tag: "UserManagementService",
  });

  const { data } = useGetRoles();

  const roles = data?.map((role) => ({
    title: role.name,
    value: role.id,
    selected: false,
  }));

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        roles: [],
      }}
      onSubmit={(values) => {
        trigger(values);
      }}
    >
      {({ values, handleSubmit, setFieldValue }) => (
        <Modal
          size="sm"
          isOpen={isOpen}
          onClose={onClose}
          showHeaderComponent={false}
          footer={
            <div className="w-full flex flex-row">
              <PaleButton onClick={onClose} className="uppercase text-xs">
                Close
              </PaleButton>
              <Button
                isLoading={isLoading}
                onClick={() => handleSubmit()}
                className="uppercase text-xs"
              >
                Create User
              </Button>
            </div>
          }
        >
          <Form>
            <div className="flex flex-col items-center gap-3 p-2">
              <div className="flex items-center gap-4 w-full">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <VAtmCardIcon />
                </div>
                <div>
                  <h1 className="font-bold text-lg">Add New User</h1>
                  <p className="text-xs">
                    Switch to another option to receive payment easily
                  </p>
                </div>
              </div>
              <div className="w-full">
                <FormInput
                  name="firstName"
                  label="First Name"
                  placeholder="Enter first name"
                />
                <FormInput
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter last name"
                />
                <FormInput
                  name="email"
                  label="Email"
                  placeholder="Enter email"
                  type="email"
                />
                <Select
                  data={roles}
                  multiple={true}
                  needSearch={true}
                  handleChange={(value) =>
                    setFieldValue(
                      "roles",
                      value.map((res) => res.value)
                    )
                  }
                />
              </div>
            </div>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

export default AddNewUserModal;
