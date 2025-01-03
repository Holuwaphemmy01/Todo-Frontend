import React,  {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import Calendar from './Calendar';
import AddTask from './AddTask';
import PendingTasks from './PendingTasks';
import CompletedTasks from './CompletedTask';
import Footer from './Footer';
import Quotes from './Quotes';
import axios from "axios";
import '../../styles/dashboard/dashboard.css'



const DashBoard = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [pendingTasks, setPendingTasks] = useState([]);
    const [taskUpdated, setTaskUpdated] = useState(false);
    const location = useLocation();
    const {username} = location.state;



    const handleTaskAdded = () => {
      setTaskUpdated((prev) => !prev); 
    };

    const handleRefreshCompleteTask = () =>{
      setCompletedTasks((prev) => !prev)
    }
    

    return(
        <div className='dashboard-container'>
          <Header/> 
          <div style={{width:'90%'}}>
                 <WelcomeSection/>
          </div>
          
          <div style={{display:'flex', }}> 
            <Calendar/>
            <div style={{width:'100%'}}>
                <AddTask username={username} onTaskAdded={handleTaskAdded} />
            </div>
          </div>
          <div>
              <PendingTasks username={username} taskUpdated={taskUpdated} refreshCompletedTask={handleRefreshCompleteTask} />
            </div>
            <div>
              <CompletedTasks    username={username} completedTasksUpdate={completedTasks}/>
            </div>
          <div style={{width:'100%'}}>
            <div>
                    <Quotes/>
            </div>
            <Footer style={{bottom:'0'}}/>
          </div>
        </div>
        
    );

}

export default DashBoard;



