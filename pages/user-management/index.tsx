import { useGetRequest } from "api/useGetRequest";
import { useMutationRequest } from "api/useMutationRequest";
import { Spinner } from "components/loaders";
import AddNewUserModal from "components/modals/AddNewUserModal";
import { ClientUserDtoIn } from "generated";
import Link from "next/link";
import { Avatar, AvatarGroup } from "../../components/avatar";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { EmptyState } from "../../components/emptyState";
import {
  EditIcon,
  EmailVerifiedIcon,
  HomeIcon,
  TrashIcon,
} from "../../components/icons";
import Layout from "../../components/layouts/Layout";
import ActionSuccessfulModal from "../../components/modals/ActionSuccessfulModal";
import ConfirmationModal from "../../components/modals/ConfirmationModal";
import Pagination from "../../components/pagination";
import { SectionHeader } from "../../components/sectionHeader";
import { Tab, Tabs } from "../../components/tab";
import Table, { TableData, TableHead, TableRow } from "../../components/table";
import { HeaderText } from "../../components/texts";
import { onCloseAppLoader } from "../../store";
import { useAppDispatch } from "../../utils/redux";
import useDisclosure from "../../utils/useDisclosure";

const UserManagement = () => {
  const dispatch = useAppDispatch();
  const imageSources = [];

  const newUserModalHandler = useDisclosure();
  const userDeletedModalHandler = useDisclosure();
  const userInvitationResentModalHandler = useDisclosure();
  const userDeleteConfirmationModalHandler = useDisclosure();

  const { isLoading, data } = useGetRequest<
    undefined,
    { data: ClientUserDtoIn[] }
  >({
    service: "/api/UserManagement",
    tag: "UserManagementService",
  });

  const { isLoading: isDeleting, trigger: triggerDelete } = useMutationRequest<
    undefined,
    ClientUserDtoIn
  >({
    service: "/api/UserManagement",
    tag: "UserManagementService",
    method: "delete",
    onSuccess: (val) => {
      dispatch(onCloseAppLoader());
      userDeleteConfirmationModalHandler.onClose();
      userDeletedModalHandler.onOpen();
    },
  });

  const handleDeleteUser = () => {
    triggerDelete(undefined);
    userDeleteConfirmationModalHandler.onClose();
  };

  return (
    <div>
      <div className="my-7">
        <Breadcrumbs
          items={[
            { title: "Home", icon: <HomeIcon />, to: "/dashboard" },
            { title: "User Management", to: "/user-management" },
          ]}
        />
      </div>
      <SectionHeader
        title="Users"
        btnText="Add New User"
        onButtonPress={() => newUserModalHandler.onOpen()}
        rightContent={
          <div className="w-[100px] h-10 bg-white rounded-md flex items-center justify-center">
            <select
              value="popular"
              className="ring-0 shadow-none border-none outline-none"
            >
              <option value="popular">popular</option>
            </select>
          </div>
        }
      />
      <div className="my-5 bg-white rounded-lg p-6 w-full">
        <div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold">User Roles Available</h2>
            <p className="text-sm text-gray-400">
              A role provides access to predefined menus and features so that
              depending on the assigned role (Super Admin, Manager, Customer
              Support), a user can have access to what they needs
            </p>
          </div>
          <div className="w-full flex gap-4 flex-wrap">
            <div className="w-full lg:w-[25%] rounded-md border border-gray-300 border-dashed p-2 flex items-center">
              <div className="w-[60%]">
                <h3 className="text-lg font-semibold">Super Admin</h3>
                <p className="text-sm">0 Users</p>
                <Link href="#" className="text-blue-500 text-xs">
                  Learn More
                </Link>
              </div>
              <div className="w-[40%]">
                <AvatarGroup number={3} images={imageSources.slice(0, 3)} />
              </div>
            </div>
            <div className="w-full lg:w-[25%] rounded-md border border-gray-300 border-dashed p-2 flex items-center">
              <div className="w-[60%]">
                <h3 className="text-lg font-semibold">Customer Support</h3>
                <p className="text-sm">0 Users</p>
                <Link href="#" className="text-blue-500 text-xs">
                  Learn More
                </Link>
              </div>
              <div className="w-[40%]">
                <AvatarGroup number={3} images={imageSources.slice(0, 9)} />
              </div>
            </div>
            <div className="w-full lg:w-[25%] rounded-md border border-gray-300 border-dashed p-2 flex items-center">
              <div className="w-[60%]">
                <h3 className="text-lg font-semibold">Database Manager</h3>
                <p className="text-sm">0 Users</p>
                <Link href="#" className="text-blue-500 text-xs">
                  Learn More
                </Link>
              </div>
              <div className="w-[40%]">
                <AvatarGroup number={3} images={imageSources.slice(0, 4)} />
              </div>
            </div>
            <div className="w-full lg:w-[25%] rounded-md border border-gray-300 border-dashed p-2 flex items-center">
              <div className="w-[60%]">
                <h3 className="text-lg font-semibold">Moderation Office</h3>
                <p className="text-sm">0 Users</p>
                <Link href="#" className="text-blue-500 text-xs">
                  Learn More
                </Link>
              </div>
              <div className="w-[40%]">
                <AvatarGroup number={3} images={imageSources.slice(0, 6)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 bg-white rounded-lg p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">User Roles Available</h2>
          <p className="text-sm text-gray-400 my-2">
            View all your users and their verification status below in each tabs
          </p>
        </div>
        <Tabs>
          {isLoading ? (
            <div>
              <Spinner />
            </div>
          ) : data?.data?.length > 0 ? (
            <Tab label={`All Users (${data?.data?.length})`}>
              <Table
                tableHeader={
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email Address</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                }
                tableBody={data?.data?.map((item, index) => (
                  <TableRow key={index}>
                    <TableData>
                      <Link
                        href={`/user-management/${item?.["id"]}/${item?.firstName}`}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <Avatar src={imageSources[0]} size="md" />
                        <p className="text-sm font-bold">
                          {item?.firstName} {item?.lastName}
                        </p>
                      </Link>
                    </TableData>
                    <TableData>
                      <div className="flex items-center gap-2">
                        {item?.["verified"] ? <EmailVerifiedIcon /> : null}{" "}
                        <p>{item?.email}</p>
                      </div>
                    </TableData>
                    <TableData>
                      {item?.roles?.map((role) => role).join(",")}
                    </TableData>
                    <TableData>
                      <div className="flex items-center gap-3">
                        <div className="cursor-pointer">
                          <EditIcon />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={userDeleteConfirmationModalHandler.onOpen}
                        >
                          <TrashIcon />
                        </div>
                      </div>
                    </TableData>
                  </TableRow>
                ))}
              />
              <Pagination
                currentPage={1}
                itemsPerPage={10}
                onPageChange={(page) => console.log(page)}
                totalItems={100}
                totalPages={10}
              />
            </Tab>
          ) : (
            <EmptyState
              title="There are no users yet."
              info="Click “Add New User” to create new users"
            />
          )}
          {isLoading ? (
            <div>
              <Spinner />
            </div>
          ) : data?.data?.length > 0 ? (
            <Tab label={`Verified (${data?.data?.length})`}>
              <Table
                tableHeader={
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email Address</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                }
                tableBody={data?.data?.map((item, index) => (
                  <TableRow key={index}>
                    <TableData>
                      <Link
                        href={`/user-management/${item?.["id"]}/${item?.firstName}`}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <Avatar src={imageSources[0]} size="md" />
                        <p className="text-sm font-bold">
                          {item?.firstName} {item?.lastName}
                        </p>
                      </Link>
                    </TableData>
                    <TableData>
                      <div className="flex items-center gap-2">
                        {item?.["verified"] ? <EmailVerifiedIcon /> : null}{" "}
                        <p>{item?.email}</p>
                      </div>
                    </TableData>
                    <TableData>
                      {item?.roles?.map((role) => role).join(",")}
                    </TableData>
                    <TableData>
                      <div className="flex items-center gap-3">
                        <div className="cursor-pointer">
                          <EditIcon />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={userDeleteConfirmationModalHandler.onOpen}
                        >
                          <TrashIcon />
                        </div>
                      </div>
                    </TableData>
                  </TableRow>
                ))}
              />
              <Pagination
                currentPage={1}
                itemsPerPage={10}
                onPageChange={(page) => console.log(page)}
                totalItems={100}
                totalPages={10}
              />
            </Tab>
          ) : (
            <EmptyState
              title="There are no users yet."
              info="Click “Add New User” to create new users"
            />
          )}
          {isLoading ? (
            <div>
              <Spinner />
            </div>
          ) : data?.data?.length > 0 ? (
            <Tab label={`Unverified (${data?.data?.length})`}>
              <Table
                tableHeader={
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email Address</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                }
                tableBody={data?.data?.map((item, index) => (
                  <TableRow key={index}>
                    <TableData>
                      <Link
                        href={`/user-management/${item?.["id"]}/${item?.firstName}`}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <Avatar src={imageSources[0]} size="md" />
                        <p className="text-sm font-bold">
                          {item?.firstName} {item?.lastName}
                        </p>
                      </Link>
                    </TableData>
                    <TableData>
                      <div className="flex items-center gap-2">
                        {item?.["verified"] ? <EmailVerifiedIcon /> : null}{" "}
                        <p>{item?.email}</p>
                      </div>
                    </TableData>
                    <TableData>
                      {item?.roles?.map((role) => role).join(",")}
                    </TableData>
                    <TableData>
                      <div className="flex items-center gap-3">
                        <div className="cursor-pointer">
                          <EditIcon />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={userDeleteConfirmationModalHandler.onOpen}
                        >
                          <TrashIcon />
                        </div>
                      </div>
                    </TableData>
                  </TableRow>
                ))}
              />
              <Pagination
                currentPage={1}
                itemsPerPage={10}
                onPageChange={(page) => console.log(page)}
                totalItems={100}
                totalPages={10}
              />
            </Tab>
          ) : (
            <EmptyState
              title="There are no users yet."
              info="Click “Add New User” to create new users"
            />
          )}
        </Tabs>
      </div>
      <AddNewUserModal
        isOpen={newUserModalHandler.isOpen}
        onClose={newUserModalHandler.onClose}
      />
      <ActionSuccessfulModal
        isOpen={userDeletedModalHandler.isOpen}
        onClose={userDeletedModalHandler.onClose}
        onProceed={() => console.log("proceeding")}
        proceedButtonText="Add New"
        content={
          <>
            <HeaderText text="Action Successful" className="text-blue-500" />
            <p className="text-center text-sm">
              Users have been deleted from your account. You can still add new
              users by clicking the “Add New” button below.
            </p>
          </>
        }
      />
      <ConfirmationModal
        isOpen={userDeleteConfirmationModalHandler.isOpen}
        onClose={userDeleteConfirmationModalHandler.onClose}
        onProceed={handleDeleteUser}
        title="ARE YOU SURE?"
        titleColor="text-red-600"
        info="DELETE USER"
        description="When you delete these users, their roles and permissions will be vacated and their logs will be lost forever"
      />
    </div>
  );
};

export default UserManagement;

UserManagement.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
