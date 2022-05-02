import React, {useState} from "react";

function NewTaskForm( {categories, onTaskFormSubmit} ) {
  const [text, setTextInput] = useState("");
  const [category, setCategoryInput] = useState("Code");


  const categoriesExceptAll = categories.slice(1)

  function handleFormSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({text, category})
  }
  
  return (
    <form className="new-task-form" onSubmit={event => handleFormSubmit(event)} >
      <label>
        Details
        <input type="text" name="text" value={text} onChange={event => setTextInput(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={event => setCategoryInput(event.target.value)} >
          {categoriesExceptAll.map(category => <option key={category} value={category} >{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
