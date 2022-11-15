import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {

  let navigate=useNavigate()

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img style={{margin: "25px"}} src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <hr></hr>
        <h4>Since you joined you've planted <span style={{color: "lightgreen", fontWeight: "bold"}}>3</span> trees</h4>
        {/* <h2>Since you joined you've planted {Project.amount} trees</h2> */}
        <img style={{width: "40px", height: "40px"}} src="https://cdn-icons-png.flaticon.com/512/7963/7963920.png"></img>
        <img style={{width: "40px", height: "40px"}}src="https://cdn-icons-png.flaticon.com/512/7963/7963920.png"></img>
        <img style={{width: "40px", height: "40px"}} src="https://cdn-icons-png.flaticon.com/512/7963/7963920.png"></img>
      </div>
    )
  );
};

export default Profile;