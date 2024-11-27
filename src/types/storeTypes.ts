export type AdviceStore = {
  advice: string;
  count: number;
  adviceHistory: string[];
  setAdvice: (newAdvice: string) => void;
};
