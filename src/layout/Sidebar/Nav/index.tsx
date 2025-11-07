import { useState } from "react";
import { Icon } from "lucide-react";
import { Link } from "react-router";
import { clsx } from "clsx";
import {
  DiscordIcon,
  DiscordPlusIcon,
  DiscordCompassIcon,
  DiscordDownloadIcon,
} from "@/lib/customIconList";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function SidebarNav() {
  const [chatActive] = useState<"me" | "easyEmbodied">("me");

  return (
    <nav className="h-full w-18">
      <ul className="space-y-2">
        <li className="flex gap-x-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/channels/@me"
                className={clsx(
                  "peer order-2 flex h-10 w-10 items-center justify-center rounded-xl duration-150",
                  chatActive === "me" ? "bg-discord-primary" : "bg-[#121213]",
                  { "hover:bg-discord-primary": chatActive !== "me" },
                )}
              >
                <Icon
                  size={24}
                  iconNode={DiscordIcon}
                  stroke="none"
                  className={clsx(
                    chatActive === "me" ? "fill-current" : "fill-[#DBDCDF]",
                  )}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-lg font-medium">私信</p>
            </TooltipContent>
          </Tooltip>
          <div className="peer order-1 -ms-1 flex w-2 items-center peer-hover:[&>span]:ms-0 peer-hover:[&>span]:rounded-tr-sm peer-hover:[&>span]:rounded-br-sm">
            <span
              className={clsx("-ms-2 block h-5 w-2 bg-[#E3E3E6] duration-200", {
                "ms-0 h-10 rounded-tr-sm rounded-br-sm": chatActive === "me",
              })}
            ></span>
          </div>
        </li>
        <div className="mx-auto h-px w-1/2 border-t"></div>
        <li className="flex gap-x-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/t" className="peer order-2">
                <img
                  src="https://cdn.discordapp.com/icons/1420323456716902462/d13807d83a418b12cf4924e8604473f0.png?size=160&quality=lossless"
                  className="h-10 w-10 rounded-xl"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-lg font-medium">EasyEmbodied</p>
            </TooltipContent>
          </Tooltip>
          <div className="order-1 -ms-1 flex w-2 items-center peer-hover:[&>span]:ms-0 peer-hover:[&>span]:rounded-tr-sm peer-hover:[&>span]:rounded-br-sm">
            {/* <span className="-ms-2 block h-5 w-2 rounded-tr-xl rounded-br-xl bg-[#E3E3E6] duration-200"></span> */}
            <span
              className={clsx("-ms-2 block h-5 w-2 bg-[#E3E3E6] duration-200", {
                "ms-0 h-10 rounded-tr-sm rounded-br-sm":
                  chatActive === "easyEmbodied",
              })}
            ></span>
          </div>
        </li>
        {/* 添加服务器 */}
        <li className="pl-4">
          <Tooltip>
            <TooltipTrigger className="hover:bg-discord-primary bg-discord-color-1 flex size-10 items-center justify-center rounded-xl duration-200">
              <Icon iconNode={DiscordPlusIcon} stroke="none" size={20}></Icon>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-lg font-medium">添加服务器</p>
            </TooltipContent>
          </Tooltip>
        </li>
        {/* 发现 */}
        <li className="pl-4">
          <Tooltip>
            <TooltipTrigger className="hover:bg-discord-primary bg-discord-color-1 flex size-10 items-center justify-center rounded-xl duration-200">
              <Icon
                iconNode={DiscordCompassIcon}
                size={20}
                stroke="none"
                fill="currentColor"
              />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-lg font-medium">发现</p>
            </TooltipContent>
          </Tooltip>
        </li>
        {/* 下载 */}
        <li className="pl-4">
          <Tooltip>
            <TooltipTrigger className="hover:bg-discord-primary bg-discord-color-1 flex size-10 items-center justify-center rounded-xl duration-200">
              <Icon
                iconNode={DiscordDownloadIcon}
                size={20}
                stroke="none"
                fill="currentColor"
              />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-lg font-medium">下载APP</p>
            </TooltipContent>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
}
