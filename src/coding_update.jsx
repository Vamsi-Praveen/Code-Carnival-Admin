import React, { useState } from 'react';
import "./CSS/coding_add.css"
import axios from "axios"

const Update = () => {
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
    date: '',
    participants: '',
    location: "",
    report: '',
    dept_conducted: ''
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
            alert("Winner Image Uploaded")
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
            alert("Runner Image Uploaded")
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
  const format_date = (oldDate) => {
    var p = oldDate.split(/\D/g)
    return [p[2], p[1], p[0]].join("-")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!data.runnerbranch || !data.winnerbranch)
    {
      alert("all feilds are required")
      return
    }
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
      _id: format_date(data.date),
      date: format_date(data.date),
      participants: data.participants,
      report: data.report,
      completed: true
    }
    if (new_data.winner.image && new_data.runner.image) {

      console.log(new_data)
      await axios.put(`http://localhost:8000/coding/update/${new_data.date}`, new_data)
        .then((res) => {
          alert("Successs");
          window.location.reload()
        })
        .catch((err) => {
          if (err.response.status == 404) {
            alert(err.response.data)
            window.location.reload()
          }
          else {
            alert("Failed");
          }
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
              <tr><th>Date:</th><td><input type='date' name="date" required onChange={handleChange}></input></td></tr>
              {/* <tr><th>Dept. Conducted:</th><td>
                <select name='dept_conducted' onChange={handleChange}>
                  <option value={"null"}>SELECT DEPARTMENT</option>
                  <option>CSE</option>
                  <option>IT</option>
                  <option>AIML</option>
                </select>

              </td></tr> */}
              {/* <tr><th>Name of the Cordinator:</th><td><input type='text' required name="cordinator" onChange={handleChange}></input></td></tr> */}
              <tr><th>No of Participants:</th><td><input type='text' required name="participants" onChange={handleChange}></input></td></tr>
              {/* <tr><th>Location and Venue:</th><td><input type='text' name="location" onChange={handleChange}></input></td></tr> */}
              <tr><th>Report:</th><td><textarea name='report' required onChange={handleChange}></textarea></td></tr>
              <tr><th colspan="2" align="center">Upload Winner Details</th></tr>
              {/* <tr><th>YearMonthWeek(yyyymmw)</th><td><input type="text" name="yearweek" onChange={handleChange} /></td></tr> */}
              <tr><th>WinnerName: </th><td><input required type="text" name="winnername" onChange={handleChange} /></td></tr>
              <tr><th>WinnerRollNo:</th> <td><input required type="text" name="winneroll" onChange={handleChange} /></td></tr>
              <tr><th>WinnerBranch:</th> <td>

                <select name='winnerbranch' required onChange={handleChange}>
                  <option value={"null"}>SELECT DEPARTMENT</option>
                  <option>CSE</option>
                  <option>IT</option>
                  <option>AIML</option>
                  <option>ECE</option>
                  <option>EEE</option>
                  <option>MECH</option>
                  <option>PT</option>
                  <option>AGRI</option>
                  <option>CIVIL</option>
                </select>

              </td></tr>
              <tr><p style={{ color: "red" }}>Please upload the images in PNG format</p></tr>

              <tr><th>AddWinnerImage</th><td><input type="file" name="w-image" required onChange={handleChange} /></td></tr>

              <tr><th colspan="2" align="center">Upload Runner details </th></tr>

              {/* <tr><th>Date</th><td><input type="date" /></td></tr> */}
              <tr><th>RunnerName:</th> <td><input type="text" name="runnername" required onChange={handleChange} /></td></tr>
              <tr><th>RunnerRollNo:</th> <td><input type="text" name="runneroll" required onChange={handleChange} /></td></tr>
              <th>RunnerBranch: </th><td>
                <select name='runnerbranch' required onChange={handleChange}>
                  <option value={"null"}>SELECT DEPARTMENT</option>
                  <option>CSE</option>
                  <option>IT</option>
                  <option>AIML</option>
                  <option>ECE</option>
                  <option>EEE</option>
                  <option>MECH</option>
                  <option>PT</option>
                  <option>AGRI</option>
                  <option>CIVIL</option>
                </select>
              </td>
              <tr><p style={{ color: "red" }}>Please upload the images in PNG format</p></tr>

              <tr><th>AddRunnerImage</th><td><input type="file" name="r-image" required onChange={handleChange} /></td></tr>
              <tr><td colspan="2" align="right"><input type="submit" /></td></tr>

            </table>
          </form>
        </div>
      </center>
    </div>
  )
}

export default Update
