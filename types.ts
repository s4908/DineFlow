import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SoundMode {
  id: string;
  name: string;
  bpm: number;
  description: string;
  color: string;
}

export interface FoodAnalysisResult {
  foodName: string;
  calories: number;
  macros: {
    protein: string;
    carbs: string;
    fats: string;
  };
  textureAnalysis: string;
  sonicPairing: {
    bpm: number;
    reasoning: string;
    mood: string;
  };
}

export enum NavLink {
  FEATURES = 'features',
  SCIENCE = 'science',
  WAITLIST = 'waitlist',
}