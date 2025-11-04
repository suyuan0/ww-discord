import { Icon } from "lucide-react";
import { WaveIcon, InboxIcon, HelpIcon } from "@/lib/customIconList";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Header() {
  return (
    <header className="relative flex h-8 items-center justify-center">
      <div className="flex items-center space-x-2">
        <Icon iconNode={WaveIcon} stroke="none" size={16} />
        <span className="text-sm font-medium">好友</span>
      </div>
      <div className="absolute right-4.5 flex items-center space-x-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <Icon
              iconNode={InboxIcon}
              stroke="none"
              fill="#85868E"
              className="cursor-pointer hover:fill-[#E3E3E6]"
            />
          </TooltipTrigger>
          <TooltipContent>收件箱</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Icon
              iconNode={HelpIcon}
              stroke="none"
              fill="#85868E"
              size={20}
              className="cursor-pointer hover:fill-[#9e9fa8]"
            />
          </TooltipTrigger>
          <TooltipContent>帮助</TooltipContent>
        </Tooltip>
      </div>
    </header>
  );
}
