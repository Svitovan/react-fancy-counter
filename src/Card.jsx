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
<<<<<<< HEAD
      <Count count={count}/>
      <ResetButton setCount={setCount}/>
      <CountButtons setCount = {setCount} />
=======
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountButtons setCount={setCount} />
>>>>>>> 87669412636a5d18d16f1e2840beff2b7f073bab
    </div>
  );
}

export default Card;
