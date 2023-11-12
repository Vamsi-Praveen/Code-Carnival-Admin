import React, { useState } from 'react'
import './CSS/event_dates.css'
import axios from "axios"

const Upcoming = () => {
    const [data, setData] = useState(
        {
            date: '',
            dept: ''
        }
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        data.date = format_date(data.date)
        axios.post('http://localhost:8000/upcoming', data)
            .then((data) => {
                alert("Date inserted")
                setData({
                    date: '',
                    dept: ''
                })
            })
            .catch((err) => {
                alert("Failed")
                console.log(err)
            })
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => {
            return { ...prev, [name]: value };
        })
    }
    const format_date = (oldDate) => {
        var p = oldDate.split(/\D/g)
        return [p[2], p[1], p[0]].join("-")
    }
    return (
        <div className='main'>
            <h1>ADD UPCOMING CONTEST</h1>
            <form onSubmit={handleSubmit}>
                <table align="center">
                    <tr><th>Date of Event:</th><td><input type='date' name="date" value={data.date} onChange={handleChange}></input></td></tr>
                    <tr><th>Department Conducted:</th><td>
                        <select onChange={handleChange} name="dept" value={data.dept}>
                            <option value="null">--SELECT DEPT--</option>
                            <option value="cse">CSE</option>
                            <option value="it">IT</option>
                            <option value="aiml">AIML</option>
                        </select>
                    </td></tr>
                    <tr><td colspan="2" align="right"><input type="submit" /></td></tr>

                </table>
            </form>
        </div>
    )
}

export default Upcoming
