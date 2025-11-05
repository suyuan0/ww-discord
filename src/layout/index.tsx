import Header from "./Header";
import Sidebar from "./Sidebar";

export const Layout = () => {
  return (
    <main className="flex h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Sidebar />
      </div>
    </main>
  );
};
