import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import axios from "axios";

import "../../styles/dashboard/addTask.css";

const AddTask = ({ username, fetchPendingTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const formatDate =  (date) =>{
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const task ={
      title, 
      description, 
      dueDate, 
      startDate: formatDate(new Date()),
      completed:false, 
      user_id: username,
    };
    try {
      

      const response = await axios.post('http://localhost:8083/to-do-app/create-task', task);
      console.log(response.data)
      if(response.data === 'Task added successfully'){
        setTitle("");
        setDescription("");
        setDueDate("");
        setError("");
        alert('Task created successfully');
      }
      else{
        console.error("Error creating task: ", error);
      }
      if (fetchPendingTasks) fetchPendingTasks();
    } catch (error) {
      console.error("Error creating task: ", error);
      setError('Failed to create the task. Please try again.');
    }

    
  };


  


  return (
    <div style={{padding:'20px', backgroundColor:'#f9f9f9', borderRadius:'8px', boxShadow:'0 2px 4px  rgba(0, 0, ,0, 0.1)'}}>
      <h3 style={{ marginBottom:'15px'}}> Create a New Task </h3>
      {error && <p style={{color:'red', fontSize:'14px'}}> {error} </p>}
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom:'10px'}}>
          <label style={{display:'block', marginBottom:'5px'}}>Title</label>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            style={{width:'100%', padding:'8px', borderRadius:'4px', border:'1px solid #ccc'}}
            required
          />
        </div>

        <div style={{marginBottom:'10px'}}>
          <label style={{display:'block', marginBottom:'5px'}}>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", minHeight: "80px" }}
            required
          ></textarea>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            required
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "#4caf50", color: "white", padding: "10px 15px", borderRadius: "4px", border: "none", cursor: "pointer" }}
        >
          Add Task
        </button>
      </form>

       

        
      
    </div>
  );
};

export default AddTask;
