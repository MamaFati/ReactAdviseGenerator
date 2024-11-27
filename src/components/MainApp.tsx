import { useEffect, useCallback } from "react";
import Message from "./Message";
import axios from "axios";
import useAdviceStore from "../store/stateStore";
import AdviceHistory from "./AdviceHistor";

export default function MainApp() {
  const { advice, setAdvice } = useAdviceStore();
  // const storeAdvice = advice;

  const getAdvice = useCallback(async () => {
    const result = await axios.get(import.meta.env.VITE_API_URL);

    setAdvice(result.data.slip.advice);
  }, [setAdvice]);
  useEffect(
    function () {
      getAdvice();
    },
    [getAdvice]
  );
  return (
    <div className="text-center ">
      <h1 className="px-10">{advice}</h1>
      <button onClick={getAdvice} className="my-5">
        Get Advice
      </button>

      <Message />
      <AdviceHistory />
    </div>
  );
}
