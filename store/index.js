import { create } from 'zustand';

export const useSidebarStore = create((set) => ({
  showSidebar: false,
  setShowSidebar: (value) => set({ showSidebar: value }),
}));

export const useThemeStore = create((set) => ({
  darkTheme: true,
  setDarkTheme: (value) => set({ darkTheme: value }),
}));
