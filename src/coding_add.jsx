import React, { useState } from 'react';
import "./CSS/coding_add.css"
import axios from "axios"

const Add = () => {
  const [imagewinner, setWimage] = useState()
  const [imagerunner, setRImage] = useState()
  const [staff, setStaff] = useState()
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
    cordinator: '',
    participants: '',
    location: "",
    report: '',
    dept_conducted: '',
    'coordinator_image': "",
    qualification:''
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
          .catch((err) => {
            console.log(err)
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
  const getCoordinator = async (image) => {
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
        img.append("upload_preset", "gsl6t3si");
        await axios.post(`https://api.cloudinary.com/v1_1/dwfgxy6dy/image/upload`, img)
          .then((res) => {
            setStaff(res.data.url)
            alert("Staff Image Uploaded Succesfully")
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
    if(name==='coordinator_image')
    {
      getCoordinator(e.target.files[0])
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
    data['w-image'] = imagewinner
    data['r-image'] = imagerunner
    data['coordinator_image'] = staff
    const new_data = {
      winner: {
        name: data.winnername || ' ',
        dept: data.winnerbranch || ' ',
        roll: data.winneroll || ' ',
        image: data['w-image'] || ' '
      },
      runner: {
        name: data.runnername || ' ',
        dept: data.runnerbranch || ' ',
        roll: data.runneroll || ' ',
        image: data['r-image'] || ' '
      },
      _id: format_date(data.date),
      dept_conducted: data.dept_conducted,
      date: format_date(data.date),
      coordinator: data.cordinator,
      participants: data.participants || ' ',
      location: data.location,
      report: data.report || ' ',
      completed: false,
      coordinator_image: data.coordinator_image || " ",
      questions: [],
      qualification:data.qualification
    }
    console.log(new_data)
    await axios.post("http://localhost:8000/coding/insert", new_data)
      .then((res) => {
        alert("Successs");
        window.location.reload()
      })
      .catch((err) => {
        if (err.response.status == 501) {
          alert("Already exists")
          window.location.reload()
        }
        else {

          alert("Failed");
          window.location.reload()
        }
      })
  }
  return (
    <div >
      <center>
        <div className='main' align="center">
          <p style={{ fontSize: '40px', color: "black", fontWeight: "bold" }} align="center">Coding</p>
          <form onSubmit={handleSubmit}>
            <table align="center">
              <tr><th>Dept. Conducted:</th><td>

                <select name='dept_conducted' onChange={handleChange}>
                  <option value={"null"}>SELECT DEPARTMENT</option>
                  <option>CSE</option>
                  <option>IT</option>
                  <option>AIML</option>
                </select>


              </td></tr>
              <tr><th>Date:</th><td><input type='date' name="date" required onChange={handleChange}></input></td></tr>
              <tr><th>Name of the Cordinator:</th><td><input type='text' required name="cordinator" onChange={handleChange}></input></td></tr>
              <tr><th>Dept. Conducted:</th><td>

                <select name='qualification' onChange={handleChange}>
                  <option value={"null"}>SELECT Qualification</option>
                  <option>Assistant Professor</option>
                  <option>Sr.Assistant Professor</option>
                  <option>Associate Professor</option>
                  <option>Professor</option>
                </select>


              </td></tr>
              {/* <tr><th>No of Participants:</th><td><input type='text'  name="participants" onChange={handleChange}></input></td></tr> */}
              <tr><th>Location and Venue:</th><td><input type='text' name="location" onChange={handleChange}></input></td></tr>
              {/* <tr><th>Report:</th><td><textarea name='report'  onChange={handleChange}></textarea></td></tr> */}
              {/* <tr><th colspan="2" align="center">Upload Winner Details</th></tr> */}
              {/* <tr><th>YearMonthWeek(yyyymmw)</th><td><input type="text" name="yearweek" onChange={handleChange} /></td></tr> */}
              {/* <tr><th>WinnerName: </th><td><input type="text"  name="winnername" onChange={handleChange} /></td></tr> */}
              {/* <tr><th>WinnerRollNo:</th> <td><input type="text"  name="winneroll" onChange={handleChange} /></td></tr> */}
              {/* <tr><th>WinnerBranch:</th> <td><input type="text"  name="winnerbranch" onChange={handleChange} /></td></tr> */}
              <tr><p style={{color:"red"}}>Please upload the images in PNG format</p></tr>
              <tr><th>Add Organiser Image</th><td><input type="file" name="coordinator_image" onChange={handleChange} /></td></tr>

              {/* <tr><th colspan="2" align="center">Upload Runner details </th></tr> */}

              {/* <tr><th>Date</th><td><input type="date" /></td></tr> */}
              {/* <tr><th>RunnerName:</th> <td><input type="text"  name="runnername" onChange={handleChange} /></td></tr> */}
              {/* <tr><th>RunnerRollNo:</th> <td><input type="text"  name="runneroll" onChange={handleChange} /></td></tr> */}
              {/* <th>RunnerBranch: </th><td><input type="text"  name="runnerbranch" onChange={handleChange} /></td> */}
              {/* <tr><th>AddRunnerImage</th><td><input type="file"  name="r-image" onChange={handleChange} /></td></tr> */}
              <tr><td colspan="2" align="right"><input type="submit" /></td></tr>

            </table>
          </form>
        </div>
      </center>
    </div>
  )
}

export default Add
