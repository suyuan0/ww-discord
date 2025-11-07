import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const Layout = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="h-full">
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
