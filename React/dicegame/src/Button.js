const baseButton = {
  padding: "14px 27px",
  outline: "none",
  cursor: "pointer",
  borderRadius: "9999px",
  fontSize: "17px",
};

const redButton = {
  ...baseButton,
  border: "solid 1px #7090ff",
  color: "#7090ff",
  backgroundColor: "rgba(0, 89, 255, 0.2)",
};

const blueButton = {
  ...baseButton,
  border: "solid 1px #ff4664",
  color: "#ff4664",
  backgroundColor: "rgba(255, 78, 78, 0.2)",
};

function Button({ children, onClick, color }) {
  const style = color === "red" ? redButton : blueButton;
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
