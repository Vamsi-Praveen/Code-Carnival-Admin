import React from 'react'
import './CSS/questions.css'
import { useState } from 'react'
import axios from "axios";

const Questions = () => {
    const [data, setData] = useState({
        _id: '',
        round: '',
        name: '',
        link: ''
    })
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const new_data = {
            questions: [
                {
                    round: data.round,
                    name: data.name,
                    link: data.link
                }
            ]
        }
        console.log(new_data)
        await axios.put(`http://localhost:8000/coding/updatequestions/${format_date(data._id)}`, new_data)
            .then((data) => {
                alert("Question Added Succesfully")
                setData({
                    _id: '',
                    round: '',
                    name: '',
                    link: ''
                })

            })
            .catch((err) => {
                if (err.response.status == 404) {
                    alert("No data Found")
                    setData({
                        _id: '',
                        round: '',
                        name: '',
                        link: ''
                    })
                }
                else {

                    alert("Failed Error Occured")
                    setData({
                        _id: '',
                        round: '',
                        name: '',
                        link: ''
                    })
                }
            })

    }
    return (
        <div >
            <center>
                <div className='main' align="center">
                    <p style={{ fontSize: '40px', color: "black", fontWeight: "bold" }} align="center">Add Questions</p>
                    <form onSubmit={handleSubmit}>
                        <table align="center">
                            <tr><th>Date of Event:</th><td><input type='date' required name="_id" value={data._id} onChange={handleChange}></input></td></tr>
                            <tr><th>Question Title:</th><td><textarea name='name' required value={data.name} onChange={handleChange}></textarea></td></tr>
                            <tr><th>Round:</th><td><input type="text" name="round" required value={data.round} onChange={handleChange} /></td></tr>
                            <tr><th>Link:</th><td><input type="text" name="link" required value={data.link} onChange={handleChange} /></td></tr>
                            <tr><td colspan="2" align="right"><input type="submit" /></td></tr>

                        </table>
                    </form>
                </div>
            </center>
        </div>

    )
}

export default Questions
