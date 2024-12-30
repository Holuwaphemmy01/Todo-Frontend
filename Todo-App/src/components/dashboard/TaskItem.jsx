import React from "react";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, onToggleComplete, onEditTask, onDeleteTask }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5deb3",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "15px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
        opacity: task.completed ? 0.6 : 1,
        
      }}
    >
      <h3 style={{ margin: "0 0 5px 0", color: "#000" }}>{task.title}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <span style={{ fontSize: "14px", color: "#333" }}>
          <b>Task Id:</b> {task.taskId}
        </span>
      </div>
      <p style={{ margin: "0 0 10px 0", color: "#555", fontSize: "14px" }}>
        <b style={{ color: "black" }}>Description: </b>
        {task.description}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <span style={{ fontSize: "14px", color: "#333" }}>
          <b>Start Date:</b> {task.startDate}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <span style={{ fontSize: "14px", color: "#333" }}>
          <b>Due Date:</b> {task.dueDate}
        </span>
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <FaCheckCircle
          style={{ color: "green", cursor: "pointer" }}
          title="Mark as completed"
          onClick={() => onToggleComplete(task.taskId)}
        />
        <FaEdit
          style={{ color: "blue", cursor: "pointer" }}
          title="Edit Task"
          onClick={() => onEditTask(task.taskId,  task.description)}
        />
        <FaTrash
          style={{ color: "red", cursor: "pointer" }}
          title="Delete Task"
          onClick={() => onDeleteTask(task.taskId)}
        />
      </div>
    </div>
  );
};

export default TaskItem;
