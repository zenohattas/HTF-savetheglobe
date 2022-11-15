import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Editproject() {

  let navigate=useNavigate();

  const {id} = useParams();

  const [project, setproject] = useState({
    projectType: "",
    description: "",
    picturePath: "",
    supporters: ""
  });

  const { name, projectname, email } = project

  const onInputChange = (e) => {
    setproject({ ...project, [e.target.name]: e.target.value })
  }

  useEffect(()=>{
    loadproject();

  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/project/${id}`, project);
    navigate("/");

  }

  const loadproject = async ()=>{
    const result = await axios.get(`http://localhost:8080/project/${id}`) 
    setproject(result.data);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Edit project</h2>

          <form onSubmit={(e)=> onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder='Enter your name'
                name='name'
                value={name}
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
              <label htmlFor='Email' className='form-label'>
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder='Enter your e-mail address'
                name='email'
                value={email}
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
