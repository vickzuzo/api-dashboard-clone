import AppHeader from "../AppHeader";
import Sidebar from "../Sidebar";
import { AppLoader } from "../loaders/AppLoading";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100">
      <AppHeader />
      <Sidebar>{children}</Sidebar>
    </div>
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
