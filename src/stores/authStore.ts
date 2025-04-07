import { setAccessToken } from "@/lib/auth";
import { User } from "@/types/User";
import { create } from "zustand";

type AuthState = {
  user: User | null;
  accessToken?: string;
  setUser: (user: User) => void;
  setUserToken: (token: string) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user: User) => {
    set((state) => ({ ...state, user }));
  },
  setUserToken: (token: string) => {
    setAccessToken(token);
    set((state) => ({ ...state, accessToken: token }));
  },
}));
