import { useState } from "react";
import "./ReviewForm.css";

function ReviewForm() {
  const [value, setValue] = useState({
    title: "",
    rating: 0,
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form className="rewiewForm" onSubmit={handleSubmit}>
      <input name="title" value={value.title} onChange={handleChange}></input>
      <input
        name="rating"
        type="number"
        value={value.rating}
        onChange={handleChange}
      />
      <textarea name="content" value={value.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
