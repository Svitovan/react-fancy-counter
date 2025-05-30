import { ResetIcon } from "@radix-ui/react-icons";

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
  );
}

export default resetButton;
