import { useState } from "react";
import "./FoodForm.css";

function FoodForm() {
  const [value, setValue] = useState({
    title: "",
    calorie: 0,
    content: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form className="foodForm" onSubmit={handleSubmit}>
      <input name="title" value={value.title} onChange={handleChange} />
      <input
        type="number"
        name="calorie"
        value={value.calorie}
        onChange={handleChange}
      />
      <input name="content" value={value.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default FoodForm;
