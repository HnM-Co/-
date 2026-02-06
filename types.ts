import React from 'react';

export enum SoundCategory {
  HUMAN = 'HUMAN',   // 사람 소리
  NATURE = 'NATURE', // 자연의 소리
  DAILY = 'DAILY',   // 일상 소리
}

// Noise types for our synthesizer to emulate (fallback)
export enum SynthType {
  BROWN = 'brown', // Deep rumble (Vacuum, Thunder)
  PINK = 'pink',   // Balanced (Rain, Leaves)
  WHITE = 'white', // Harsh (Static, Fan)
  NONE = 'none',   // Complex sounds that can't be easily synthesized
}

export interface SoundItem {
  id: string;
  label: string;
  category: SoundCategory;
  icon: React.ReactNode;
  gradient: string;
  synthType: SynthType; // Fallback generation type
  src?: string;         // Path to the actual audio file
}

export interface AudioState {
  isPlaying: boolean;
  currentSoundId: string | null;
  volume: number;
}