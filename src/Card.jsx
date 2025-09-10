import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import Title from "./Title";
import ResetButton from "./ResetButton";
import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 7 ? true : false;

  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
}

export default Card;
