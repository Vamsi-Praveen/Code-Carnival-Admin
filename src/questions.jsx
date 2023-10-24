import React from 'react'
import './CSS/questions.css'
import { useState } from 'react'
import axios from "axios";

const Questions = () => {
    const [data, setData] = useState({
        _id: '',
        description: '',
        marks: '',
        round: ''
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => {
            return { ...prev, [name]: value };
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const new_data = {
            _id: data._id,
            questions: [
                {
                    description: data.description,
                    marks: data.marks,
                    round: data.round
                }
            ]
        }
        await axios.post('http://localhost:8000/questions/addquestions', new_data)
            .then((data) => {
                alert("Question Added Succesfully")
                setData({
                    _id: '',
                    description: '',
                    marks: '',
                    round: ''
                })

            })
            .catch((err) => {
                alert("Failed Error Occured")
                console.log(err)
            })

    }
    return (
        <div >
            <center>
                <div className='main' align="center">
                    <p style={{ fontSize: '40px', color: "black", fontWeight: "bold" }} align="center">Add Questions</p>
                    <form onSubmit={handleSubmit}>
                        <table align="center">
                            <tr><th>Date of Event:</th><td><input type='date' name="_id" value={data._id} onChange={handleChange}></input></td></tr>
                            <tr><th>Question Description:</th><td><textarea name='description' value={data.description} onChange={handleChange}></textarea></td></tr>
                            <tr><th>Round:</th><td><input type="text" name="round" value={data.round} onChange={handleChange} /></td></tr>
                            <tr><th>Marks:</th><td><input type="text" name="marks" value={data.marks} onChange={handleChange} /></td></tr>
                            <tr><td colspan="2" align="right"><input type="submit" /></td></tr>

                        </table>
                    </form>
                </div>
            </center>
        </div>

    )
}

export default Questions
