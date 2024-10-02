import Button from "./HandButton";
import HandIcon from "./HandIcon";

function App() {
  const handleButtonClick = (value) => console.log(value);
  const handleClearClick = () => console.log("처음부터");

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <HandIcon value="rock" />
      <HandIcon value="scissor" />
      <HandIcon value="paper" />
    </div>
  );
}

export default App;
