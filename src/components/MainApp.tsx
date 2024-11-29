import { useEffect, useCallback, useState } from "react";
// import Message from "./Message";
import axios from "axios";
import useAdviceStore from "../store/stateStore";

export default function MainApp() {
  const { advice, setAdvice } = useAdviceStore();
  const [advices, setAdvices] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getAdvice = useCallback(async () => {
    const result = await axios.get(import.meta.env.VITE_API_URL);
    const newAdvice = result.data.slip.advice;
    setAdvices((prevAdvices) => [...prevAdvices, newAdvice]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setAdvice(newAdvice);
  }, [setAdvice]);

  useEffect(() => {
    getAdvice();
  }, [getAdvice]);

  const displayPrevAdvice = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    setAdvice(advices[currentIndex - 1]);
  };

  const displayNextAdvice = () => {
    if (currentIndex < advices.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setAdvice(advices[currentIndex + 1]);
    } else {
      getAdvice();
    }
  };

  return (
    <div className="text-center">
      <h1 className="px-10">{advices[currentIndex]}</h1>
      <button onClick={displayPrevAdvice} className="my-5">
        <h1>{"<"}</h1>
      </button>
      <button onClick={displayNextAdvice} className="my-5">
        <h1>{">"}</h1>
      </button>
      {/* <Message /> */}
      {/* // <AdviceHistory /> */}
    </div>
  );
}
