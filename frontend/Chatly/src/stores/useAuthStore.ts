
import { create } from "zustand";
import { axiosInstance } from "@/lib/axios.ts";
import { toast } from "sonner";
import { io, Socket } from "socket.io-client";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:3000" : "/";

interface User {
  _id: string;
  fullName: string;
  email: string;
  profilePic?: string;
}

interface AuthStore {
  user: User | null;
  isCheckingAuth: boolean;
  isLoggingIn: boolean;
  isSigningUp: boolean;
  isUpdatingProfile: boolean;

  socket: Socket | null;
  onlineUsers: string[];

  login: (email: string, password: string) => Promise<boolean>;
  signup: (fullName: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  updateProfile: (data: {
    fullName?: string;
    email?: string;
    password?: string;
    profilePic?: string;
  }) => Promise<boolean>;

  connectSocket: () => void;
  disconnectSocket: () => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isCheckingAuth: true,
  isLoggingIn: false,
  isSigningUp: false,
  isUpdatingProfile: false,

  socket: null,
  onlineUsers: [],

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("api/routes/check");
      set({ user: res.data.user });
      get().connectSocket();
    } catch {
      set({ user: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  login: async (email, password) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("api/routes/login", { email, password });
      set({ user: res.data.user });
      toast.success("Logged in successfully!");
      get().connectSocket();
      return true;
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed");
      return false;
    } finally {
      set({ isLoggingIn: false });
    }
  },

  signup: async (fullName, email, password) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("api/routes/signup", {
        fullName,
        email,
        password,
      });
      set({ user: res.data.user });
      toast.success("Account created!");
      get().connectSocket();
      return true;
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Signup failed");
      return false;
    } finally {
      set({ isSigningUp: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("api/routes/logout");
      set({ user: null });
      get().disconnectSocket();
      toast.success("Logged out");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Logout failed");
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("api/routes/update", data);
      set({ user: res.data.user });
      toast.success("Profile updated");
      return true;
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Update failed");
      return false;
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  connectSocket: () => {
    const { user, socket } = get();
    if (!user || socket?.connected) return;

    const newSocket = io(BASE_URL, {
      withCredentials: true,
      query: { userId: user._id },
    });

    newSocket.on("getOnlineUsers", (users: string[]) => {
      set({ onlineUsers: users });
    });

    set({ socket: newSocket });
  },

  disconnectSocket: () => {
    const socket = get().socket;
    if (socket) socket.disconnect();
    set({ socket: null, onlineUsers: [] });
  },
}));
