import { Link, useLocation } from "react-router";
import { Icon, PlusIcon, XIcon } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  WaveIcon,
  DiscordNitroIcon,
  DiscordShopIcon,
  DiscordQuestHomeIcon,
  IdleIcon,
} from "@/lib/customIconList";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    icon: DiscordNitroIcon,
    title: "Nitro",
  },
  {
    id: "shop",
    path: "/shop",
    icon: DiscordShopIcon,
    title: "商店",
  },
  {
    id: "quest-task",
    path: "/quest-home",
    icon: DiscordQuestHomeIcon,
    title: "任务",
  },
];

export default function SidebarList() {
  const location = useLocation();

  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-ss-xl border border-r-0 border-b-0">
      <div className="flex h-12 items-center border-b px-2">
        <Button variant={"outline"} className="h-8 w-full font-semibold">
          寻找或开始新的对话
        </Button>
      </div>
      <nav className="flex flex-1 flex-col overflow-hidden">
        <ul className="space-y-px p-2">
          {navList.map((navItem) => (
            <li key={navItem.id}>
              <Link
                to={navItem.path}
                className={clsx(
                  "hover:bg-discord-color-1 flex h-10 items-center gap-x-3 rounded-lg p-2",
                  {
                    "bg-discord-color-2": location.pathname === navItem.path,
                  },
                )}
              >
                <Icon
                  iconNode={navItem.icon}
                  stroke="none"
                  size={20}
                  className={clsx("fill-(--interactive-normal)", {
                    "fill-current": location.pathname === navItem.path,
                  })}
                />
                <span className="font-medium">{navItem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mb-12 flex flex-1 flex-col overflow-hidden pt-3 pr-2 pl-4.5">
          <div className="group mb-3 flex items-center">
            <span className="text-discord-color-3 flex-1 cursor-default text-sm font-medium group-hover:text-current">
              私信
            </span>
            <Tooltip>
              <TooltipTrigger>
                <PlusIcon size={16} className="text-discord-color-3" />
              </TooltipTrigger>
              <TooltipContent>
                <p>创建私信</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <ScrollArea className="flex-1 overflow-hidden pb-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((v) => (
              <li className="-ml-2" key={v}>
                <div className="group hover:bg-discord-color-1 flex h-10.5 w-full cursor-pointer items-center space-x-2 overflow-hidden rounded-lg px-2">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src="https://cdn.discordapp.com/avatars/1052125390237335642/853e3490ea26c0c2518e730ff3ef45e7.webp?size=64" />
                      <AvatarFallback>N</AvatarFallback>
                    </Avatar>
                    <Icon
                      iconNode={IdleIcon}
                      size={16}
                      stroke="none"
                      className="absolute -right-0.75 -bottom-0.75 rounded-full bg-[#FBFBFB] dark:bg-black"
                    />
                  </div>
                  <p className="text-discord-color-3 flex-1 truncate font-medium group-hover:text-current">
                    NeoLee
                  </p>
                  <XIcon
                    size={20}
                    className="text-discord-color-3 hidden group-hover:block hover:text-current"
                  />
                </div>
              </li>
            ))}
          </ScrollArea>
        </ul>
      </nav>
    </div>
  );
}
