import React, { useState } from 'react';
import "./CSS/announce_add.css"
import axios from "axios";

const Ann = () => {
  const [data,setData]=useState({});
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data);
    axios.post('http://localhost:8000/announcements/add',{"description":data})
    .then((data)=>{
      alert("Added Succesfully");
    })
    .catch((err)=>{
      console.log(err);
    })

  }
  return (
    <div>
      <div className='main' align={"center"}>
        <p style={{ fontSize: '40px', color: "black" }} align="center">Announcements</p>
        <form onSubmit={handleSubmit}>
          <table align="center">
            <tr><th>Description</th><td><textarea onChange={(e) => { setData(e.target.value) }} /></td></tr>
            <tr><td colspan="2" align="center"><input type="submit" /></td></tr>
          </table>

        </form>
      </div>
    </div>
  )
}

export default Ann
