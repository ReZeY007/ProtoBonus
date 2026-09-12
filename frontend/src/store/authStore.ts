import { create } from "zustand";

export interface User {
  id: number;
  name: string;
  surname: string;
  balance: number;
}

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  setUser: (user) =>
    set(() => ({
      user,
    })),
}));
