import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Editproject() {

  let navigate = useNavigate();

  const { id } = useParams();

  const [projectcontribution, setproject] = useState({
    project: "",
    amountContributed: ""
  });

  const [projectList, setprojects] = useState({
    projects: []
  });

  const { project, amountContributed } = projectcontribution

  const onInputChange = (e) => {
    setproject({ ...projectcontribution, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadproject();
    loadprojects();
  }, []);


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/projectcontribution/${id}`, project);
    navigate("/");

  }

  const loadproject = async () => {
    const result = await axios.get(`http://localhost:8080/projectcontribution/${id}`)
    setproject(result.data);
  }

  const loadprojects = async () => {
    const result = await axios.get(`http://localhost:8080/projectcontribution/${id}`)
    setproject(result.data);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Edit project contribution</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='projectname' className='form-label'>
                projectname
              </label>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  value={project}
                  placeholder="Choose you project">
                    Select project
                </button>
                <ul class="dropdown-menu">
                  {
                    projectList.projects.map((projectList, index) => (
                      <li><a class="dropdown-item" href="#" onClick={(e) => onInputChange(e)}>{projectList.projects[index]}</a></li>
                    ))
                  }
                </ul>
              </div>
              <div className='mb-3'>
                <label htmlFor='Project' className='form-label'>
                  Amount Contributed
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder='Enter your amount to contribute'
                  name='amountContributed'
                  value={amountContributed}
                  onChange={(e) => onInputChange(e)} />
              </div>


            </div>

            <button type='sumbit' className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-2' to="/ViewProjects">Cancel</Link>
          </form>
        </div>
      </div >
    </div >

  )
}
