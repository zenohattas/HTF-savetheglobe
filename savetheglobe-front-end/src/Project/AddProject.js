import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Addproject() {

  let navigate=useNavigate()

  const [project, setproject] = useState({
    projectType: "",
    description: "",
    picturePath: "",
    supporters: ""
  });

  const { projectType, projectname, amount } = project

  const onInputChange = (e) => {
    setproject({ ...project, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/project", project);
    navigate("/");

  }

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Register project</h2>

          <form onSubmit={(e)=> onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='projectType' className='form-label'>
                Soort Project
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder='bv. bomen, planten, etc'
                name='projectType'
                value={projectType}
                onChange={(e) => onInputChange(e)} />
            </div>

            <div className='mb-3'>
              <label htmlFor='projectname' className='form-label'>
                projectname
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder='Enter your projectname'
                name='projectname'
                value={projectname}
                onChange={(e) => onInputChange(e)} />
            </div>

            <div className='mb-3'>
              <label htmlFor='description' className='form-label'>
                description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder='Enter a description'
                name='description'
                value={description}
                onChange={(e) => onInputChange(e)} />
            </div>

            <div className='mb-3'>
              <label htmlFor='supporters' className='form-label'>
              supporters
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder='Enter a supporter'
                name='supporters'
                value={supporters}
                onChange={(e) => onInputChange(e)} />
            </div>
            <button type='sumbit' className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>

  )
}
