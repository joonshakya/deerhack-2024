import { create } from "zustand";

import { UserData } from "~/utils/trpcDataTypes";
import authStorage from "../auth/storage";

interface BearState {
  disabledNotifications: string[];
  setDisabledNotifications: (disabledNotifications: string[]) => void;
  loadingVisible: boolean;
  setLoadingVisible: (loadingVisible: boolean) => void;
  initialLoaded: boolean;
  setInitialLoaded: (initialLoaded: boolean) => void;
  userRole: string;
  setUserRole: (userRole: string) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  disabledNotifications: [],
  setDisabledNotifications: (disabledNotifications) => {
    set({ disabledNotifications });
  },
  loadingVisible: false,
  setLoadingVisible: (loadingVisible) => set({ loadingVisible }),
  initialLoaded: false,
  setInitialLoaded: (initialLoaded) => set({ initialLoaded }),
  userRole: "ORGANIZER",
  setUserRole: (userRole) => set({ userRole }),
}));

interface AuthStore {
  user: UserData;
  setUser: (user: UserData) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
