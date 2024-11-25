import { create } from "zustand";
import { AdviceStore } from "../types/storeTypes";
import { devtools } from "zustand/middleware";
// create types for the store
const useAdviceStore = create<AdviceStore>()(
  devtools((set) => ({
    advice: "",
    count: 0,
    setAdvice: (newAdvice: string) =>
      set((state) => ({
        advice: newAdvice,
        count: state.count + 1,
      })),
  }))
);
//   )
// )
export default useAdviceStore;
