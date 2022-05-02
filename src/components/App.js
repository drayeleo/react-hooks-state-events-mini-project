import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All");

  const tasksToDisplay = tasks.filter((task) => category === "All" || task.category === category)

  //console.log(tasks);

  function onDeleteTask(deletedTaskText) {
    setTasks(tasks.filter(task => task.text !== deletedTaskText))
  }

  function onSetCategory(event) {
    //console.log("clicked ", event.target.name)
    setCategory(event.target.name);
    event.target.className = "selected";
    //() => console.log(category);
  }

  function onTaskFormSubmit(newTask) {
    console.log(newTask);
    // const newTask = {
    //   text: text,
    //   category: category
    // }
    setTasks([...tasks, newTask])

    //console.log(event.target.category.value);
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSetCategory={onSetCategory} categoryState={category} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;
