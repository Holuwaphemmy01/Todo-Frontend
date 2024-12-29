import React, { useState, useEffect } from "react";
import { data, useLocation } from "react-router-dom";

import axios from "axios";
import TaskItem from "./TaskItem";

const PendingTasks = ({ onTaskUpdated, onTaskDeleted, taskUpdated }) => {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const username = location.state?.username;



  useEffect(() => {
    fetchPendingTasks();
  }, []);


  useEffect(() => {
    fetchPendingTasks();
  }, [taskUpdated]);

  

  const fetchPendingTasks = async () => {
    
    try {
      const response = await axios.get(`http://localhost:8083/to-do-app/pendingtasks/${username}`);
      setPendingTasks(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.log("Error fetching pending tasks:", error);
      setPendingTasks([]);
    }
  };




  const handleMarkAsCompleted = async (taskId, description) => {
    const username = location.state?.username 
    try {
      const payload = {
           userName: username,
            taskId,
            description,
            completed:true,
      };
     const response =  await axios.put(`http://localhost:8083/to-do-app/update`, payload);
      fetchPendingTasks();
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };





  const handleDeleteTask = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    const payload = {
      taskId: taskId,
      userId:username,
    };
    try {
       await axios.delete(`http://localhost:8083/to-do-app/delete`, {data: payload});
      fetchPendingTasks(); 
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };




  const handleEditTask = (taskId, currentDescription) => {
    console.log("Editing Task ID:", taskId);
  console.log("Current Description:", currentDescription);
    setEditingTask(taskId);
    setNewDescription(currentDescription);
    setError("");
  };

  const handleSaveEdit = async () => {
    if (!newDescription.trim()) {
      setError("Description cannot be empty.");
      return;
    }

    try {
        await axios.put(`/api/tasks/${editingTask}`, { description: newDescription });
        setEditingTask(null);
        setNewDescription("");
        fetchPendingTasks();
      } catch (error) {
        console.error("Error updating task:", error);
      }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Pending Tasks</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {pendingTasks.length > 0 ? (
           pendingTasks.map((task) => (
          <TaskItem
            key={task.taskId}
            task={task}
            onToggleComplete={(taskId, description) => handleMarkAsCompleted(task.taskId, task.description)}
            onEditTask={(taskId, description) => handleEditTask(task.id, task.description)}
            onDeleteTask={handleDeleteTask}
          />
        ))
      ) : (
        <p> No pending tasks available. </p>
      )}


      </div>
      {editingTask && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h4>Edit Task</h4>
            {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              style={{ width: "100%", minHeight: "80px", padding: "8px" }}
            ></textarea>
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
              <button
                onClick={handleSaveEdit}
                style={{ backgroundColor: "#4caf50", color: "white", padding: "8px 12px", border: "none", borderRadius: "4px" }}
              >
                Save
              </button>
              <button
                onClick={() => setEditingTask(null)}
                style={{ backgroundColor: "#f44336", color: "white", padding: "8px 12px", border: "none", borderRadius: "4px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingTasks;

