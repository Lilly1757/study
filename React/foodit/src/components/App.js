import { useState } from "react";
import FoodList from "./FoodList";
import { getFood } from "../api";

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const handleLoadClick = async () => {
    const { foods } = await getFood();
    setItems(foods);
  };

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <button onClick={handleLoadClick}>불러오기</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
