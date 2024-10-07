import { useState } from "react";
import "./ReviewForm.css";
import FileInput from "./FileInput";

function ReviewForm() {
  const [value, setValue] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form className="rewiewForm" onSubmit={handleSubmit}>
       <FileInput name="imgFile" value={value.imgFile} onChange={handleChange} />
      <input name="title" value={value.title} onChange={handleInputChange}></input>
      <input
        name="rating"
        type="number"
        value={value.rating}
        onChange={handleInputChange}
      />
      <textarea name="content" value={value.content} onChange={handleInputChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
