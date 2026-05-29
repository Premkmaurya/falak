export interface StoryChapter {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  startFrame: number;
  endFrame: number;
  position: 'left' | 'right' | 'center-bottom' | 'asymmetric-right';
}

export const storyChapters: StoryChapter[] = [
  {
    id: 'exterior',
    title: 'THE SILENT RESIDENCE',
    subtitle: 'CHAPTER 01 / EXTERIOR',
    description: 'An imposing form carved into the natural landscape. Raw concrete and glass dialogues with light, marking the boundary of a private sanctuary.',
    startFrame: 4, // Shifted to 4 to provide breathing room after Hero text fades
    endFrame: 9,
    position: 'left',
  },
  {
    id: 'entrance',
    title: 'THE TRESHOLD OF SILENCE',
    subtitle: 'CHAPTER 02 / ENTRANCE',
    description: 'A heavy metal portal pivots smoothly, separating the dynamic outer world from a quiet atmosphere of intentional geometry and calm.',
    startFrame: 10,
    endFrame: 15,
    position: 'right',
  },
  {
    id: 'hallway',
    title: 'SHADOWS AND LIGHT',
    subtitle: 'CHAPTER 03 / THE TRANSITION',
    description: 'Linear corridors framed by textured stone. A gallery where shadow acts as form and light leads the way with architectural cadence.',
    startFrame: 16,
    endFrame: 21,
    position: 'asymmetric-right',
  },
  {
    id: 'living',
    title: 'SPACES THAT BREATHE',
    subtitle: 'CHAPTER 04 / LIVING VOLUME',
    description: 'A grand expansive salon of double-height scale. Where minimalist furniture behaves like sculptures, encouraging effortless dialogue.',
    startFrame: 22,
    endFrame: 26,
    position: 'left',
  },
  {
    id: 'details',
    title: 'TACTILE RESTRAINT',
    subtitle: 'CHAPTER 05 / MATERIALS',
    description: 'Bespoke marble surfaces, brushed metals, and dark oak. Craftsmanship of absolute precision, celebrating the elegance of silence.',
    startFrame: 27,
    endFrame: 31,
    position: 'right',
  },
  {
    id: 'closeups',
    title: 'SCULPTED FORCES',
    subtitle: 'CHAPTER 06 / DETAILS',
    description: 'Every seam, every junction, completely flush. Restraint is not the absence of design, but the perfection of its essential core.',
    startFrame: 32,
    endFrame: 35,
    position: 'left',
  },
  {
    id: 'reveal',
    title: 'THE ARCHITECTURE OF STILLNESS',
    subtitle: 'CHAPTER 07 / THE REVEAL',
    description: 'A final panoramic frame. Welcome to Sequel, where premium volume, meticulous detail, and human experience dwell in ultimate harmony.',
    startFrame: 36,
    endFrame: 39,
    position: 'center-bottom',
  },
];
