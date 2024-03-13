import { create } from "zustand";
import { Assignment, Quiz, Video } from "../Types";

interface AddModuleStore {
  video: Video[];
  addVideo: (video: Video) => void;
  removeVideo: (index: number) => void;
  quiz: Quiz[];
  addQuiz: (quiz: Quiz) => void;
  removeQuiz: (index: number) => void;
  assignment: Assignment;
  addAssignment: (assignment: Assignment) => void;
}

export const useAddModuleStore = create<AddModuleStore>((set) => ({
  video: [],
  addVideo: (video: Video) =>
    set((state) => ({ video: [...state.video, video] })),
  removeVideo: (index: number) =>
    set((state) => ({
      video: state.video.filter((_, i) => i !== index),
    })),
  quiz: [],
  addQuiz: (quiz: Quiz) => set((state) => ({ quiz: [...state.quiz, quiz] })),
  removeQuiz: (index: number) =>
    set((state) => ({
      quiz: state.quiz.filter((_, i) => i !== index),
    })),
  assignment: {
    title: "",
    type: "",
    isWatched: false,
    assignmentDetails: {
      deadline: "",
      instructions: "",
    },
  },
  addAssignment: (assignment: Assignment) =>
    set((state) => ({ assignment: assignment })),
}));
