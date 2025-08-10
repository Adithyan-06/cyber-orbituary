import { Obituary } from '../types/Obituary';

const STORAGE_KEY = 'cyber-obituary-entries';

export const saveObituaries = (obituaries: Obituary[]): void => {
  try {
    const customObituaries = obituaries.filter(obit => !obit.isDefault);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customObituaries));
  } catch (error) {
    console.error('Failed to save obituaries:', error);
  }
};

export const loadObituaries = (): Obituary[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load obituaries:', error);
    return [];
  }
};