import HandIcon from "./HandIcon";
import Purple from "./assets/purple.svg";

const ButtonStyle = {
  width: "166px",
  height: "166px",
  border: "none",
  outline: "none",
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: "transparent",
  backgroundImage: `url('${Purple}')`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
};

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button style={ButtonStyle} onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
