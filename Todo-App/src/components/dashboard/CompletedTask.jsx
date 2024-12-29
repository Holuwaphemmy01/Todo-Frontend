import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

const CompletedTasks = ({ onTaskDeleted }) => {
const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    fetchCompletedTasks();
  }, []);

  const fetchCompletedTasks = async () => {
    try {
      const username = location.state?.username 
      const response = await axios.get(`/http://localhost:8083/to-do-app/completedtasks/${username}`);
      setCompletedTasks(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching completed tasks:", error);
      setCompletedTasks([])
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await axios.delete(`/api/tasks/${taskId}`);
      fetchCompletedTasks(); 
      onTaskDeleted(); 
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Completed Tasks</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        { completedTasks.length > 0 ? (
          completedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={null} 
            onEditTask={null} 
            onDeleteTask={handleDeleteTask}
          />
        ))
      ):(
        <p>No completed task available</p>
      )}
      </div>
    </div>
  );
};

export default CompletedTasks;

