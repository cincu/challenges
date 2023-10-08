import { create } from "zustand";
import { produce } from "immer";

const initialLights = [
  {
    id: 1,
    name: "Kitchen",
    isOn: false,
  },
  {
    id: 2,
    name: "Living Room",
    isOn: false,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    name: "Garage",
    isOn: false,
  },
  {
    id: 6,
    name: "Porch",
    isOn: false,
  },
  {
    id: 7,
    name: "Garden",
    isOn: false,
  },
  {
    id: 8,
    name: "Office",
    isOn: false,
  },
];

export const useLightsStore = create((set, get) => ({
  lights: initialLights,
  numOfSwitchedOnLights: () =>
    get().lights.reduce((prev, curr) => prev + (curr.isOn ? 1 : 0), 0),
  handleToggle: (lightId) =>
    set((state) => ({
      lights: produce(state.lights, (draft) => {
        const light = draft.find((light) => light.id === lightId);
        light.isOn = !light.isOn;
      }),
    })),
  switchAllLights: (shouldSwitchOn) =>
    set((state) => ({
      lights: produce(state.lights, (draft) => {
        draft.forEach((light) => (light.isOn = shouldSwitchOn));
      }),
    })),
}));
