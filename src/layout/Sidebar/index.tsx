import { useState, useRef, useEffect, useCallback } from "react";
import SidebarNav from "./Nav";
import SidebarUser from "./User";
import MeProfile from "./MeProfile";
import { useGlobalStore } from "@/store/global";

export default function Sidebar() {
  const asideRef = useRef<HTMLElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const { asideWidth, updateAsideWidth } = useGlobalStore();

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const asideRect = asideRef.current!.getBoundingClientRect();
      const newWidth = e.clientX - asideRect.left;

      updateAsideWidth(newWidth);
    },
    [isDragging, updateAsideWidth],
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "ew-resize";
      document.body.style.userSelect = "none";
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging, handleMouseUp, handleMouseMove]);

  return (
    <aside
      ref={asideRef}
      className="relative flex h-full"
      style={{ width: `${asideWidth}px` }}
    >
      <SidebarNav />
      <SidebarUser />
      <MeProfile />
      <div
        className="bg-border w-px cursor-ew-resize duration-200 hover:w-1"
        onMouseDown={handleMouseDown}
      ></div>
    </aside>
  );
}
