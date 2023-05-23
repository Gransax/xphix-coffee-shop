import { create } from "zustand";

interface NavigationStore {
  active: string;
  set: (name: string) => void;
}

const useNavigation = create<NavigationStore>((set) => ({
  active: "home",
  set: (name) =>
    set(() => {
      return {
        active: name,
      };
    }),
}));

export default useNavigation;
