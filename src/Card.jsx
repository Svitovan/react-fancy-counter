import Count from "./Count";
import CountButtons from "./CountButtons";
import Title from "./Title";
import ResetButton from "./ResetButton";
import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0); 
  return (
    <div className="card">
      <Title />
      <Count count={count}/>
      <ResetButton setCount={setCount}/>
      <CountButtons setCount = {setCount} />
    </div>
  );
}

export default Card;
