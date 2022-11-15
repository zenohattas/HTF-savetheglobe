import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewProject() {

    const [Project, setProject]=useState({
        name:"",
        Projectname:"",
        email:""
    })

    const {id}=useParams();

    useEffect(()=>{
        loadProject(id)
    }, [])

    const loadProject = async ()=>{
        const result = await axios.get(`http://localhost:8080/Project/${id}`);
        setProject(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className='text-center m-4'>Project Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details of Project id: {Project.id} 
                            <ul className='list-group list-grou-flush'>
                                <li className='list-group-item'>
                                    <b>Name:</b>
                                    {Project.name}
                                </li>
                                <li className='list-group-item'>
                                    <b>Projectname:</b>
                                    {Project.Projectname}
                                </li>
                                <li className='list-group-item'>
                                    <b>E-mail:</b>
                                    {Project.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
                </div>
            </div>
        </div>
        )
}
