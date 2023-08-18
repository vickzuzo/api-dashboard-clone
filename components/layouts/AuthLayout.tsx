import Header from "../Header";
import Sidebar from "../Sidebar";
import React from "react";
import { AppLoader } from "../loaders/AppLoading";
import AuthHeader from "../AuthHeader";

export default function AuthLayout({ children }) {
  return (
    <>
      <AuthHeader currentUser={null} />
      <main>{children}</main>
    </>
  );
}

export const AppLayout = ({ children }) => {
  return (
    <main className="relative">
      {children}
      <AppLoader />
    </main>
  );
};
