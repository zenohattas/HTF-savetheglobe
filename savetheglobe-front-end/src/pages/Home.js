import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [project, setProject] = useState([]);

    const {id} = useParams

    useEffect(() => {
        loadProject();
    }, []);

    const loadProject = async () => {
        const result = await axios.get("http://localhost:8080/Project");
        setProject(result.data);
    }

    const deleteProject= async (id)=>{
        await axios.delete(`http://localhost:8080/project/${id}`);
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
                            <th scope="col">picturePath</th>
                            <th scope="col">supporters</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            project.map((project, index) => (
                                <tr>
                                    <th scope="row" key={index}> {index + 1} </th>
                                    <td>{project.projectType}</td>
                                    <td>{project.description}</td>
                                    <td>{project.picturePath}</td>
                                    <td>{project.supporters}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2" to={`/viewproject/${project.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mx-2" to={`/editproject/${project.id}`}>Edit</Link>
                                        <button className="btn btn-danger mx-2" onClick={() => deleteProject(project.id)}>Delete</button>
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
