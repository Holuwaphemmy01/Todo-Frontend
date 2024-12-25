import React,  {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';



const DashBoard = ({ userName}) => {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [pendingTasks, setPendingTasks] = useState([]);
    const [activeTab, setActiveTab] = useState('pending');


    // const fetchTasks = async () =>{
    //     try{
    //         const completedResponse = await fetch ('')
    //     }
    // } 

    return(
        <div>
          <Header/>
          {/* <Footer/> */}
        </div>
        
    );

}

export default DashBoard;
