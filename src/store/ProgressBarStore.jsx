import create from "zustand";

export const useProgressStore = create((set, get) => ({
  stateProgress: 0,
  stateProgressList: [],
  hanldeStateProgress: (value) => {
    set((state) => ({
      //count: state.count + value,
      stateProgress: state.stateProgress + value,
    }));
  },
  hanldeStateProgressList: (value) => {
    set((state) => ({
      //count: state.count + value,
      stateProgressList: [...state.stateProgressList, value],
    }));
  },
}));
