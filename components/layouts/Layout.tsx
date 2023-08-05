import Header from "../Header";
import Sidebar from "../Sidebar";
import React from "react";
import { AppLoader } from "../loaders/AppLoading";

export default function Layout({ children }) {
  return (
    <>
      <Header currentUser={null} />
      <Sidebar>
        <main>{children}</main>
      </Sidebar>
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
