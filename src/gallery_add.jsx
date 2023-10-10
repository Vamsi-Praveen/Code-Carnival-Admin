import React, { useState } from 'react';
import "./CSS/gallery_add.css"
import axios from 'axios';

const Insert = () => {
  const [image, setImage] = useState();
  const [url, setUrl] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
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
        img.append("upload_preset", "tjylgg3p");
        await axios.post(`https://api.cloudinary.com/v1_1/dwfgxy6dy/image/upload`, img)
          .then((res) => {
            // console.log(res.data.url)
            axios.post('http://localhost:8000/gallery/insert', { "imageurl": [res.data.url] })
              .then((data) => {
                alert("Success")
                console.log(data);
              })
              .catch((err) => {
                alert("Failed")
                console.log(err)
              })
            // setUrl(res.data.url)
          })
      }
    } catch (error) {
      alert("Error Occured")
    }
  }
  const handleChange = (e) => {
    setImage(e.target.files[0])
  }
  return (
    <div>
      <div className='main'>
        <p style={{ fontSize: '40px', color: "black" }} align="center">Gallery</p>
        <form onSubmit={handleSubmit}>
          <table align="center">
            {/* <tr><th>Date</th><td><input type="date" /></td></tr> */}
            <tr><th>AddImage</th><td><input type="file" accept='image/*' name='image' onChange={handleChange} /></td></tr>
            <tr><td align="center"><input type="submit" /></td></tr>
          </table>
        </form>
      </div>
    </div>
  )
}

export default Insert
