import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ViewProjects() {
  
    const [projectcontribution, setProject] = useState([]);

    const { project, amountContributed } = projectcontribution

    const {id} = useParams

    useEffect(() => {
        loadProject();
    }, []);

    const loadProject = async () => {
        const result = await axios.get("http://localhost:8080/projectcontributions");
        setProject(result.data);
    }

    const deleteProject= async (id)=>{
        await axios.delete(`http://localhost:8080/projectcontribution/${id}`);
        loadProject();
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">projectType</th>
                            <th scope="col">description</th>
                            <th scope="col">pledged</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projectcontribution.map((projectcontribution, index) => (
                                <tr>
                                    <th scope="row" key={index}> {index + 1} </th>
                                    <td>{projectcontribution.project.projectType}</td>
                                    <td>{projectcontribution.project.description}</td>
                                    <td>{projectcontribution.amountContributed}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2" to={`/viewproject/${projectcontribution.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mx-2" to={`/editproject/${projectcontribution.id}`}>Edit</Link>
                                        <button className="btn btn-danger mx-2" onClick={() => deleteProject(projectcontribution.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
  )
}
