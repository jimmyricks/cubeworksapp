import { create } from "zustand";

// Define Zustand store

export const useTodoStore = create((set) => ({
  todos: [],
  topics: [],

  waters: [],
  wtopics: [],

  data: {},
  key: null,

  objkey: [],

  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  addTopic: (topic) => set((state) => ({ topics: [...state.topics, topic] })),

  addWater: (water) => set((state) => ({ waters: [...state.waters, water] })),
  addWtopic: (wtopic) =>
    set((state) => ({ wtopics: [...state.wtopics, wtopic] })),

  setData: (newData) => set({ data: newData }),
  setKey: (newKey) => set({ key: newKey }),

  setObjkey: (newObjkey) => set({ objkey: newObjkey }),

  removeTodo: (todo) =>
    set((state) => ({ todos: state.todos.filter((t) => t !== todo) })),
  removeTopic: (topic) =>
    set((state) => ({ topics: state.topics.filter((t) => t !== topic) })),

  removeWater: (water) =>
    set((state) => ({ waters: state.waters.filter((w) => w !== water) })),
  removeWtopic: (wtopic) =>
    set((state) => ({ wtopics: state.wtopics.filter((w) => w !== wtopic) })),
}));
