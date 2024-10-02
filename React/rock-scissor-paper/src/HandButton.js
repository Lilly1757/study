import HandIcon from "./HandIcon";

function HandButton({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default HandButton;
