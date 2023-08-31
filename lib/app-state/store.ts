import { create } from "zustand";

type featureStore = {
  inViewFeature: string | null;
  setInViewFeature: (feature: string | null) => void;
};

export const useStore = create<featureStore>((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature: string | null) => set({ inViewFeature: feature }),
}));
