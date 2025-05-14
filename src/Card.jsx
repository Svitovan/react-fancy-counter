import Count from "./Count";
import CountButtons from "./CountButtons";
import Title from "./Title";
import ResetButton from "./ResetButton";

function Card() {
  return (
    <div>
      <Title />
      <Count number={7}/>
      <ResetButton />
      <CountButtons />
    </div>
  );
}

export default Card;
