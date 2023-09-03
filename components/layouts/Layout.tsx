import AppHeader from "../AppHeader";
import Sidebar from "../Sidebar";
import { AppLoader } from "../loaders/AppLoading";

export default function Layout({ children }) {
  return (
    <>
      <AppHeader currentUser={null} />
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
