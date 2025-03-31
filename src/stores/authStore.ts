import { api } from "@/lib/axiosInstance";
import { create } from "zustand";

export type User = {
  id: string;
  username: string;
};

type AuthState = {
  user: User | null;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (credentials) => {
    const { data } = await api.post("/auth/login", credentials);
    localStorage.setItem("token", data.token);
    set({ user: data.user });
  },
  logout: () => {
    set({ user: null });
  },
}));
