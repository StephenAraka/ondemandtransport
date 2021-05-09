import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../Navbar'
import Header from '../Header';
import Button from '../Button';
import InputTextField from '../InputText';
import { ReactComponent as Save } from '../../assets/images/save-sec.svg';
import './EvidencePage.css';
import API_URL from '../../config';

const EvidencePage = (props) => {
  const [incident, setincident] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e;
    if (name === "incident") {
      setincident(value);
    } else {
      setDescription(value);
    }
  };

  const handleFileUpload = ({ target }) => {
    let filesTarget = target.files;
    console.log(filesTarget);
    let filesArr = Array.prototype.slice.call(filesTarget);
    console.log(filesArr);
    setFiles([...files, ...filesArr]);  
  
  }

  const handleSubmit = () => {
    console.log(files);
    let formData = new FormData();

    for(let file in files ) {
      formData.append("image", file);
    }

    console.log(formData);

    axios.post(`${API_URL}/api/media/${props.user.data.id}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }  
    })
      .then(res => {
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="UploadPage Page">
      <Navbar showClose />

      <Header label="Evidence tracking" icon={<Save className="Icon" />} />

      <section>
        <div className="Form">
          <InputTextField
            type="text"
            placeholder="Incident"
            name="incident"
            value={incident}
            onChange={handleInputChange}
            />

          <input
            className="InputFileUpload"
            type="file"
            multiple
            onChange={handleFileUpload}
          />

          <textarea
            placeholder="Description"
            rows="8"
            className="Description"
            onChange={handleInputChange}
            value={description}
            name="description"
          />

        <Button
          label="Upload"
          onClick={handleSubmit}
        />

        <div className="ViewFilesLink">
          <Link to="/support/evidence/history">View Uploads History</Link>
        </div>
        </div>
      </section>
    </div>
)};

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps)(withRouter(EvidencePage));
