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
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;