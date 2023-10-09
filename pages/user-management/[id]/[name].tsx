import React from "react";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { HomeIcon } from "../../../components/icons";
import { useRouter } from "next/router";
import Layout from "../../../components/layouts/Layout";

const UserDetails = () => {
  const router = useRouter();
  const query = router.query;
  return (
    <div>
      <div className="my-7">
        <Breadcrumbs
          items={[
            { title: "Home", icon: <HomeIcon />, to: "/dashboard" },
            { title: "User Management", to: "/user-management" },
            {
              title: query?.name as string,
              to: `/user-management/${query?.id}/${query?.name}`,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default UserDetails;

UserDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
