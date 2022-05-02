import React from "react";
import Task from "./Task";

function TaskList( {tasks, onDeleteTask} ) {
  // console.log(tasks);

  return (
    <div className="tasks">
      {tasks.map((task, index) => <Task key={index} text={task.text} category={task.category} onDeleteTask={onDeleteTask} />)}
    </div>
  );
}

export default TaskList;
