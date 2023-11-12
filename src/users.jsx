import React, { useEffect, useState } from 'react'
import './CSS/users.css'
import axios from 'axios';

const Users = () => {
    const [data, setData] = useState(null);
    const format_date = (oldDate) => {
        var p = oldDate.split(/\D/g)
        return [p[2], p[1], p[0]].join("-")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8000/user/downloadexcel/data/${format_date(data)}`)
            .then((result) => {
                if (result.data.length == 0) { 
                    alert("No Data Found")

                }
                else {
                    window.location.href = `http://localhost:8000/user/downloadexcel/${format_date(data)}`;
                }
            })


    }
    return (
        <div className='main'>
            <h1>Registrations</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Choose Date</label>
                    <input type='date' name='date' onChange={(e) => setData(e.target.value)} />
                </div>
                <input type='submit' value={"Download Excel Data"}></input>
            </form>
        </div>
    )
}

export default Users
