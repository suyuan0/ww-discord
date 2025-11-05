import SidebarNav from "./Nav";
import SidebarUser from "./User";

export default function Sidebar() {
  return (
    <aside className="relative h-full w-66">
      <SidebarNav />
      <SidebarUser />
    </aside>
  );
}
