// stores/useAppStore.ts
import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  // UI State
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;

  // User State
  user: User | null;
  setUser: (user: User | null) => void;

  // Theme State
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppStore = create<AppState>((set) => ({
  // UI State
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  // User State
  user: null,
  setUser: (user) => set({ user }),

  // Theme State
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}));
