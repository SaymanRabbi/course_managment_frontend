import { create } from "zustand";
import { User } from "../Types";
interface UserStoreState {
  user: User | null;
  loginuser: User | null;
  isLoading: boolean;
  serverError: any;
  createUser: (user: User) => Promise<void>;
  getUser: (user: User) => Promise<void>;
  logout: () => void;
  success: null;
  messages: string;
  verifyToken: (token: string) => Promise<void>;
  clearMessages: () => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
  user: null,
  loginuser: null,
  isLoading: false,
  serverError: null,
  success: null,
  messages: "",
  createUser: async (userData) => {
    try {
      set({ isLoading: true });
      const url = `http://localhost:5000/api/v1/user/register`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await resp.json();
      if (data) {
        set({
          user: data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  getUser: async (user: User) => {
    try {
      set({ isLoading: true });
      const url = ``;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await resp.json();
      if (data) {
        set({
          loginuser: data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  logout: () => set({ user: null }),
  verifyToken: async (token: string) => {
    try {
      set({ isLoading: true });
      const url = `http://localhost:5000/api/v1/user/verify-email/${token}`;
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      if (data?.status && data.message === "User verified successfully") {
        set((user: any) => {
          return {
            user: {
              ...user,
              user: {
                ...data.data.user,
                isVerified: true,
              },
            },
            isLoading: false,
            success: data?.status,
            messages: data.message,
            serverError: null,
          };
        });
      }
      if (!data?.status && data.message === "User already verified") {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
      if (!data?.status && data.message === "Invalid token") {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  clearMessages: () => set({ messages: "", serverError: null, success: null }),
}));
