import React, { useEffect, useState } from "react";
import "./Profiles.css";
import { useNavigate, useLocation } from 'react-router-dom';
import BackToTop from "./BackToTop";

function Profiles() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const { state } = useLocation() || {};
  const { location } = state || {};


  useEffect(() => {
    getUsers();
  }, [location]); // Add location to the dependency array

  const handleSubmit = (user) => {
    navigate('/matches', { state: { location, userId: user.id } });
  };

  const getUsers = async () => {
    try {
      
      
      let apiUrl = "/api/profile";
      if (location) {
        apiUrl += `?location=${encodeURIComponent(location)}`;
      }

        // Fetch profiles with location filter
        let response = await fetch(apiUrl);
        if (response.ok) {
          let data = await response.json();
          setUsers(data);
      } else {
        console.log(`Server Error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };


  return (
    <div className="cardcontainer">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <img className="cardimg" src={user.imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{user.firstname} {user.lastname}</h5>
            <div>
              <ul className="card-text">
                <a onClick={() => handleSubmit(user)} href="#" className="btn btn-danger">Challenge {user.firstname}!</a>
                <li>Age: {user.age}</li>
                <li>Location: {user.location}</li>
                <li>Match Wins: {user.wins}</li>
                <li>Match Losses: {user.losses}</li>
                <li>Match Draws: {user.draws}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
      <BackToTop />
    </div>
  );
}




export default Profiles;
