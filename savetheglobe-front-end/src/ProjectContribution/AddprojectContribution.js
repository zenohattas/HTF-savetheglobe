import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddprojectContribution() {
 
  let navigate=useNavigate()

  const [projectContribution, setprojectContribution] = useState({
    place: "",
    contribution: "",
    location: "",
    carbonSaved: ""
  });

  const { place, contribution, location, carbonSaved } = projectContribution

  const onInputChange = (e) => {
    setprojectContribution({ ...tree, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");

  }

  return (
    <div>AddprojectContribution</div>
  )
}
