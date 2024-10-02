import Dice from "./Dice";
import Button from "./Button";

function App() {
  return (
    <div>
      <Button>던지기</Button>
      <Button>처음부터</Button>
      <Dice color="red" num={2} />
    </div>
  );
}

export default App;
