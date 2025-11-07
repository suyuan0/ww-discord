import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type GlobalStoreState = {
  asideWidth: number;
};

interface GlobalStoreActions {
  updateAsideWidth: (value: number) => void;
}

export const useGlobalStore = create(
  persist<GlobalStoreState & GlobalStoreActions>(
    (set) => ({
      asideWidth: 432,

      updateAsideWidth: (newWidth: number) =>
        set({ asideWidth: Math.max(264, Math.min(432, newWidth)) }),
    }),
    {
      name: "ww-discord-global",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
