import { Link, useLocation } from "react-router";
import { Icon } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import { WaveIcon } from "@/lib/customIconList";

const navList = [
  {
    id: "friend",
    path: "/channels/@me",
    icon: WaveIcon,
    title: "好友",
  },
  {
    id: "Nitro",
    path: "/store",
    icon: WaveIcon,
    title: "Nitro",
  },
  {
    id: "shop",
    path: "/shop",
    icon: WaveIcon,
    title: "商店",
  },
  {
    id: "quest-task",
    path: "/quest-home",
    icon: WaveIcon,
    title: "任务",
  },
];

export default function SidebarList() {
  const location = useLocation();

  return (
    <div className="flex-1 rounded-ss-xl border border-r-0 border-b-0">
      <div className="flex h-12 items-center border-b px-2">
        <Button variant={"outline"} className="h-8 w-full font-semibold">
          寻找或开始新的对话
        </Button>
      </div>
      <nav>
        <ul className="space-y-0.5 p-2">
          {navList.map((navItem) => (
            <li key={navItem.id}>
              <Link
                to={navItem.path}
                className={clsx(
                  "hover:bg-discord-color-1 flex h-10 items-center gap-x-3 rounded-xl",
                  { "bg-discord-color-2": location.pathname === navItem.path },
                )}
              >
                <Icon iconNode={navItem.icon} stroke="none" size={20} />
                <span className="font-medium">{navItem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
