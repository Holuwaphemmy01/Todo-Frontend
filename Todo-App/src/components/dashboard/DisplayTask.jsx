import React from "react";
import TaskItem from "./TaskItem";




const DisplayTask = ({tasks}) =>{
    return (
        <div style={{ padding: "20px" }}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      );



    
};

export default DisplayTask;