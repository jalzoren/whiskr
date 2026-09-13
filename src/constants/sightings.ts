export type Vibe = 'chill' | 'spicy' | 'sleepy' | 'mysterious' | 'playful';

export type Sighting = {
  id: string;
  name: string;
  photo: string;
  place: string;
  time: string;
  vibe: Vibe;
  note: string;
  visits: number;
};

export const sightings: Sighting[] = [
  { id: 'miso', name: 'Miso', photo: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=85', place: 'Maple & 3rd', time: 'Today, 8:42 AM', vibe: 'sleepy', note: 'Curled up in the warmest patch of sidewalk.', visits: 7 },
  { id: 'pepper', name: 'Pepper?', photo: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85', place: 'Juniper Lane', time: 'Yesterday, 6:16 PM', vibe: 'mysterious', note: 'Watched the bakery door like it held a secret.', visits: 3 },
  { id: 'toast', name: 'Toast', photo: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=85', place: 'Willow Park', time: 'May 28, 4:03 PM', vibe: 'playful', note: 'A very serious investigation of one fallen leaf.', visits: 11 },
];

export const vibeColors: Record<Vibe, string> = { chill: '#8BAF9D', spicy: '#E99569', sleepy: '#9E8CC2', mysterious: '#63789C', playful: '#D4A23A' };
export const vibeLabels: Record<Vibe, string> = { chill: 'Chill', spicy: 'Spicy', sleepy: 'Sleepy', mysterious: 'Mysterious', playful: 'Playful' };