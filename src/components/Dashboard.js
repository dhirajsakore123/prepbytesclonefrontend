import React, { useEffect } from 'react'
import axios from 'axios'
const Dashboard = () => {
    useEffect(()=>{
        const token=localStorage.getItem("token")
        const token1=window.atob(token.split(".")[1])
        const jsonString = `${token1}`;
        const obj = JSON.parse(jsonString);
        const userId = obj._id;

     axios.post("http://localhost:4000/api/dashboard",{userId:userId})
     .then(res=>console.log(res.data))
     .catch(err=>console.log(err))
    },[])
  return (
    <div>
      this is dashboard
    </div>
  )
}

export default Dashboard
