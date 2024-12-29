import React,  {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import Calendar from './Calendar';
import AddTask from './AddTask';
import PendingTasks from './PendingTasks';
import CompletedTasks from './CompletedTask';
import Footer from './Footer';
import axios from "axios";
import '../../styles/dashboard/dashboard.css'



const DashBoard = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [pendingTasks, setPendingTasks] = useState([]);
    const [activeTab, setActiveTab] = useState('pending');
    const location = useLocation();
    const {username} = location.state;


    const handleAddTask = async (taskData) =>{
        const response = await fetch ('hhhh',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(taskData)
        });
        const newTask = await response.json();
        setPendingTasks((prev) => [newTask, ...prev]);
    }

    const fetchPendingTasks = async () => {
      try {
        const response = await axios.get(`/http://localhost:8083/to-do-app/pendingtasks/${username}`);
        setPendingTasks(response.data);
      } catch (error) {
        console.error('Error fetching pending tasks:', error);
      }
    };

    useEffect(() => {
      if (username) {
        fetchPendingTasks();
        // fetchCompletedTasks();
      }
    }, [username]);
  

    return(
        <div className='dashboard-container'>
          <Header/> 
          <div style={{width:'90%'}}>
                 <WelcomeSection/>
          </div>
          
          <div style={{display:'flex', }}> 
            <Calendar/>
            <div style={{width:'100%'}}>
                <AddTask fetchPendingTasks={fetchPendingTasks} username={username}/>
            </div>
          </div>
          <div>
              <PendingTasks pendingTasks={pendingTasks} />
            </div>
            <div>
              <CompletedTasks/>
            </div>
          <div style={{width:'100%'}}>
            <Footer />
          </div>
        </div>
        
    );

}

export default DashBoard;



// import React, { useState } from "react";
// import AddTask from "./AddTask";
// import PendingTasks from "./PendingTasks";
// import CompletedTask from "./CompletedTask";
// import Calendar from "./Calendar";
// // import QuoteRotator from "./QuoteRotator";
// import Footer from "./Footer";

// const Dashboard = ({ username }) => {
//   const [refreshPendingTasks, setRefreshPendingTasks] = useState(false);
//   const [refreshCompletedTasks, setRefreshCompletedTasks] = useState(false);

//   const handleTaskAdded = () => {
//     setRefreshPendingTasks((prev) => !prev); // Toggle to refresh pending tasks
//   };

//   const handleTaskDeleted = () => {
//     setRefreshPendingTasks((prev) => !prev); // Refresh pending tasks
//     setRefreshCompletedTasks((prev) => !prev); // Refresh completed tasks
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//       {/* Header Section */}
//       <header style={{ padding: "20px", backgroundColor: "#f4f4f4" }}>
//         <h1>Welcome, {username}!</h1>
//       </header>

//       {/* Main Content Section */}
//       <main style={{ flex: 1, display: "flex", padding: "20px", gap: "20px" }}>
//         {/* Calendar and Add Task Form */}
//         <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
//           <Calendar />
//           <AddTask username={username} onTaskAdded={handleTaskAdded} />
//         </div>

//         {/* Tasks Display Section */}
//         <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: "20px" }}>
//           {/* Quote Rotator */}
//           {/* <div style={{ marginBottom: "20px" }}>
//             <QuoteRotator />
//           </div> */}

//           {/* Tasks Tabs */}
//           <div>
//             <PendingTasks
//               refreshTrigger={refreshPendingTasks}
//                onTaskDeleted={handleTaskDeleted}
//             />
//             <CompletedTask
//               refreshTrigger={refreshCompletedTasks}
//               onTaskDeleted={handleTaskDeleted}
//             />
//           </div>
//         </div>
//       </main>

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default Dashboard;


