import { create } from 'zustand';

export type SettingsState = {
  notifications: boolean;
  compactMode: boolean;
  toggleNotifications: () => void;
  toggleCompactMode: () => void;
};

export const useSettingsStore = create<SettingsState>((set) => ({
  notifications: true,
  compactMode: false,
  toggleNotifications: () =>
    set((state) => ({
      notifications: !state.notifications
    })),
  toggleCompactMode: () =>
    set((state) => ({
      compactMode: !state.compactMode
    }))
}));
