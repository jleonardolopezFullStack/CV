import create from "zustand";

export const useButtonStore = create((set, get) => ({
  stateAbout: false,
  stateSkill: false,
  stateExperience: false,
  stateEducation: false,
  hanldeStateAboutTrue: (value) => {
    set((state) => ({
      //count: state.count + value,
      stateAbout: true,
    }));
  },
  hanldeStateAboutFalse: (value) => {
    set((state) => ({
      stateAbout: false,
    }));
  },
  hanldeStateSkillTrue: (value) => {
    set((state) => ({
      stateSkill: true,
    }));
  },
  hanldeStateSkillFalse: (value) => {
    set((state) => ({
      stateSkill: false,
    }));
  },
  hanldeStateExperienceTrue: (value) => {
    set((state) => ({
      stateExperience: true,
    }));
  },
  hanldeStateExperienceFalse: (value) => {
    set((state) => ({
      stateExperience: false,
    }));
  },
  hanldeStateEducationTrue: (value) => {
    set((state) => ({
      stateEducation: true,
    }));
  },
  hanldeStateEducationFalse: (value) => {
    set((state) => ({
      stateEducation: false,
    }));
  },
}));

export const useInfoStore = create((set, get) => ({
  stateInfo: false,
  hanldeStateInfoTrue: (value) => {
    set((state) => ({
      stateInfo: true,
    }));
  },
  hanldeStateInfoFalse: (value) => {
    set((state) => ({
      stateInfo: false,
    }));
  },
}));
