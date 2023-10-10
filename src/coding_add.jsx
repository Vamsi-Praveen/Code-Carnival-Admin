import React, { useState } from 'react';
import "./CSS/coding_add.css"
import axios from "axios"

const Add = () => {
  const [imagewinner, setWimage] = useState()
  const [imagerunner, setRImage] = useState()
  const [data, setData] = useState({
    winnername: '',
    winneroll: "",
    winnerbranch: '',
    'w-image': "",
    runnername: '',
    runneroll: "",
    runnerbranch: '',
    'r-image': "",
    yearweek: ""
  });
  const getUrl = async (image) => {
    try {
      if (
        image && (
          image.type === "image/png" ||
          image.type === "image/jpg" ||
          image.type === "image.jpeg"
        )
      ) {
        const img = new FormData();
        img.append("file", image);
        img.append("cloud_name", "dwfgxy6dy");
        img.append("upload_preset", "uocagty5");
        await axios.post(`https://api.cloudinary.com/v1_1/dwfgxy6dy/image/upload`, img)
          .then((res) => {
            setWimage(res.data.url)
          })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getUrl1 = async (image) => {
    try {
      if (
        image && (
          image.type === "image/png" ||
          image.type === "image/jpg" ||
          image.type === "image.jpeg"
        )
      ) {
        const img = new FormData();
        img.append("file", image);
        img.append("cloud_name", "dwfgxy6dy");
        img.append("upload_preset", "uocagty5");
        await axios.post(`https://api.cloudinary.com/v1_1/dwfgxy6dy/image/upload`, img)
          .then((res) => {
            setRImage(res.data.url)
          })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'w-image') {
      getUrl(e.target.files[0]);
    }
    if (name === 'r-image') {
      getUrl1(e.target.files[0]);
    }
    setData((prev) => {
      return { ...prev, [name]: value };
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    data['w-image'] = imagewinner
    data['r-image'] = imagerunner
    const new_data = {
      winner: {
        name: data.winnername,
        dept: data.winnerbranch,
        roll: data.winneroll,
        image: data['w-image']
      },
      runner: {
        name: data.runnername,
        dept: data.runnerbranch,
        roll: data.runneroll,
        image: data['r-image']
      },
      _id: data.yearweek
    }
    if (new_data.winner.image && new_data.runner.image) {
      await axios.post("http://localhost:8000/coding/insert", new_data)
        .then((res) => {
          alert("Successs");
        })
        .catch((err) => {
          alert("Failed");
        })
    }

  }
  return (
    <div >
      <center>
        <div className='main' align="center">
          <p style={{ fontSize: '40px', color: "black", fontWeight: "bold" }} align="center">Coding</p>
          <form onSubmit={handleSubmit}>
            <table align="center">
              <tr><th colspan="2" align="center">Upload Winner Details</th></tr>

              <tr><th>YearMonthWeek(yyyymmw)</th><td><input type="text" name="yearweek" onChange={handleChange} /></td></tr>
              <tr><th>WinnerName: </th><td><input type="text" name="winnername" onChange={handleChange} /></td></tr>
              <tr><th>WinnerRollNo:</th> <td><input type="text" name="winneroll" onChange={handleChange} /></td></tr>
              <tr><th>WinnerBranch:</th> <td><input type="text" name="winnerbranch" onChange={handleChange} /></td></tr>
              <tr><th>AddWinnerImage</th><td><input type="file" name="w-image" onChange={handleChange} /></td></tr>

              <tr><th colspan="2" align="center">Upload Runner details </th></tr>

              {/* <tr><th>Date</th><td><input type="date" /></td></tr> */}
              <tr><th>RunnerName:</th> <td><input type="text" name="runnername" onChange={handleChange} /></td></tr>
              <tr><th>RunnerRollNo:</th> <td><input type="text" name="runneroll" onChange={handleChange} /></td></tr>
              <th>RunnerBranch: </th><td><input type="text" name="runnerbranch" onChange={handleChange} /></td>
              <tr><th>AddRunnerImage</th><td><input type="file" name="r-image" onChange={handleChange} /></td></tr>
              <tr><td colspan="2" align="right"><input type="submit" /></td></tr>

            </table>
          </form>
        </div>
      </center>
    </div>
  )
}

export default Add
