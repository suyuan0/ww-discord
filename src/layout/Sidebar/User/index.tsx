import { clsx } from "clsx";
import { Icon, MicOffIcon, HeadphonesIcon, SettingsIcon } from "lucide-react";
import { useRef, useEffect } from "react";
import { animate, createScope, Scope } from "animejs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { IdleIcon } from "@/lib/customIconList";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SidebarUser() {
  const userStatusRef = useRef<HTMLParagraphElement>(null);
  const userIdNameRef = useRef<HTMLParagraphElement>(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    scope.current = createScope().add((self) => {
      const animateElements = (
        statusTranslateY: string,
        idNameTranslateY: string,
      ) => {
        animate(userStatusRef.current!, {
          translateY: statusTranslateY,
          duration: 0,
        });

        animate(userIdNameRef.current!, {
          translateY: idNameTranslateY,
          duration: 0,
        });
      };

      self?.add("displayUserIdName", () => {
        animateElements("-100%", "-100%");
      });

      self?.add("displayUserState", () => {
        animateElements("0", "0");
      });
    });

    return () => scope.current?.revert();
  }, []);

  const handleUserMouseEnter = () => {
    scope.current?.methods.displayUserIdName();
  };

  const handleUserMouseLeave = () => {
    scope.current?.methods.displayUserState();
  };

  return (
    // <section className="dark:bg-discord-background border-discord-border absolute start-2 bottom-2 w-[calc(100%-var(--spacing)*4)] rounded-md border bg-[#FBFBFB]">
    <section className="bg-discord-background border-discord-border absolute start-2 bottom-2 w-[calc(100%-var(--spacing)*4)] rounded-lg border">
      <div
        className={clsx(
          "-ms-px grid h-14 grid-cols-[1fr_auto] space-x-2 overflow-hidden p-3",
        )}
      >
        {/* avatar & name */}
        <div
          className="-ms-1 -mt-1.5 grid cursor-pointer grid-cols-[32px_auto] items-center gap-x-2 rounded-sm px-1 py-[5px] duration-300 hover:bg-[rgba(151,151,159,0.2)]"
          onMouseEnter={handleUserMouseEnter}
          onMouseLeave={handleUserMouseLeave}
        >
          <div className="relative">
            <Avatar>
              <AvatarImage
                src={
                  "https://cdn.discordapp.com/avatars/1258254157861752926/4c28fbe4eaae9dd0084e911b50f2bf4d.webp?size=56"
                }
              />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <Icon
              iconNode={IdleIcon}
              size={16}
              stroke="none"
              className="absolute -right-0.75 -bottom-0.75 rounded-full bg-[#FBFBFB] dark:bg-black"
            />
          </div>
          <div className="overflow-hidden">
            <p className="truncate font-medium">Sakura</p>
            <div className="relative h-4 overflow-hidden text-xs text-[#9d9c9c]">
              <p
                ref={userStatusRef}
                className="truncate transition-[opacity,transform] duration-300"
              >
                闲置
              </p>
              <p
                ref={userIdNameRef}
                className="truncate text-ellipsis transition-[opacity,transform] duration-300"
              >
                wanwan013846
              </p>
            </div>
          </div>
        </div>
        <ul className="-mt-1 grid grid-cols-3 items-center gap-x-2">
          <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-[rgba(210,45,57,0.12)]">
            <Tooltip>
              <TooltipTrigger>
                <MicOffIcon stroke="#DA3E44" size={20} />
              </TooltipTrigger>
              <TooltipContent>取消静音</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg hover:bg-[rgba(151,151,159,0.2)]">
            <Tooltip>
              <TooltipTrigger>
                <HeadphonesIcon size={20} />
              </TooltipTrigger>
              <TooltipContent>耳机静音</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg hover:bg-[rgba(151,151,159,0.2)]">
            <Tooltip>
              <TooltipTrigger>
                <SettingsIcon size={20} />
              </TooltipTrigger>
              <TooltipContent>用户设置</TooltipContent>
            </Tooltip>
          </li>
        </ul>
      </div>
    </section>
  );
}
