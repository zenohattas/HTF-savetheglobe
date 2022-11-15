import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Overview() {

    let navigate=useNavigate()

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
  <div className="col">
    <div className="card">
      <img src="https://images.unsplash.com/photo-1558022103-603c34ab10ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">First planted forrest by donators</h5>
        <p className="card-text">Thanks to our donators we can proudly say we planted a whole forrest!</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://images.unsplash.com/photo-1560279966-2d681f3d4dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Water makes Power!</h5>
        <p className="card-text">Planting trees isn't the only source to which you can donate, we also invest in sustainable energies!</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Be The Change!</h5>
        <p className="card-text">Since starting we've invested in more than 60 wind turbines</p>
      </div>
    </div>
  </div>
</div>
  )
}
