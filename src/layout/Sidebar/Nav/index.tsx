import { useState } from "react";
import { Icon } from "lucide-react";
import { Link } from "react-router";
import { clsx } from "clsx";
import { DiscordIcon } from "@/lib/customIconList";
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
                to="/@me"
                className="peer order-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#5965F2]"
              >
                <Icon
                  size={24}
                  iconNode={DiscordIcon}
                  stroke="none"
                  fill="currentColor"
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
      </ul>
    </nav>
  );
}
