import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserRole = () => {

    const id = localStorage.getItem("user");
    const [role, setRole ] = useState("")
    const [user, setUser] = useState(null)
  

useEffect(()=>{

    const getUserDetails = async()=>{
        try{
            const response = await axios.get(`http://localhost:5000/api/user/find/${id}`,{
                withCredentials:true
            })
            setUser(response.data?.data)
            setRole(response.data?.data.role)
        }catch(err){
            console.log(err)
        }
    }
    getUserDetails()
}, [id, role])
  return {role, user}
}

export default UserRole