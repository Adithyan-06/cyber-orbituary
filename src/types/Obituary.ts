export interface Obituary {
  id: string;
  name: string;
  birthYear: number;
  deathYear: number;
  causeOfDeath: string;
  epitaph: string;
  emoji: string;
  isDefault?: boolean;
}