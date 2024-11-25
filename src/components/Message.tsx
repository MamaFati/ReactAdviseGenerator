import { FC } from "react";
import useAdviceStore from "../store/stateStore";

const Message: FC = () => {
  const count = useAdviceStore((state) => state.count);

  return (
    <div>
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </div>
  );
};

export default Message;
