import { ResetIcon } from "@radix-ui/react-icons";

<<<<<<< HEAD
function resetButton({setCount}) {
  
  return (
     <button onClick={()=> {setCount(0)}} className="reset-btn">
      <ResetIcon className='reset-btn-icon'/>
     </button>
=======
function resetButton({ setCount }) {
  return (
    <button
      onClick={() => {
        setCount(0);
      }}
      className="reset-btn"
    >
      <ResetIcon className="reset-btn-icon" />
    </button>
>>>>>>> 87669412636a5d18d16f1e2840beff2b7f073bab
  );
}

export default resetButton;
