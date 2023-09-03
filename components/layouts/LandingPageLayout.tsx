import React from "react";
import Header from "../Header";

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <Header currentUser={null} />
      <main className="w-full max-w-7xl mx-auto px-4 lg:px-0">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPageLayout;
