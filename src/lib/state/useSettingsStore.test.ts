import { describe, it, expect, beforeEach } from 'vitest';
import { useSettingsStore } from '@/lib/state/useSettingsStore';

describe('settings store', () => {
  beforeEach(() => {
    useSettingsStore.setState({ notifications: true, compactMode: false });
  });

  it('toggles notifications', () => {
    expect(useSettingsStore.getState().notifications).toBe(true);
    useSettingsStore.getState().toggleNotifications();
    expect(useSettingsStore.getState().notifications).toBe(false);
  });

  it('toggles compact mode', () => {
    expect(useSettingsStore.getState().compactMode).toBe(false);
    useSettingsStore.getState().toggleCompactMode();
    expect(useSettingsStore.getState().compactMode).toBe(true);
  });
});
