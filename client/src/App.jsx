import React, { useEffect, useState } from "react";
import './App.css'
import Profiles from './components/Profiles';
import RegisterLogin from './components/RegisterLogin';
import FindMatch from './components/FindMatch';
import Matches from './components/Matches';
import Error404 from "./components/Error404";
import CaloriesBurned from "./components/CaloriesBurned";
import { Routes, Route,  NavLink, useNavigate } from "react-router-dom";




//hello
// HOW THEY HAD IT ON THE WEBSITE
// const CALORIES_URL = 'https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=padel&weight=158&duration=60';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9ddfa3aca8msh93ac7640b86c16ep1d2d33jsnd7899770eb42',
// 		'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
// 	}
// };

//MY WAY
//const CALORIES_URL = 'https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=padel&weight=158&duration=60';

//const API_KEY = '9ddfa3aca8msh93ac7640b86c16ep1d2d33jsnd7899770eb42';
//const PARAMS = `appid=${API_KEY}&units=metric&q=`; //JIMS WEATHER EXAMPLE. WHAT DO I DO??
// MY REQUIRED PARAMS ARE ACTIVITY(PADEL),WEIGHT(158LBS) AND DURATION(60).
// /v1/caloriesburned?activity=padel&weight=158&duration=60' JUST COPIED THE LAST BIT OF LINK

function App() {
  // const [calories, setCalories] = useState(null);

  //Fitness API 
  //Everything API related will happen here
  // const getCalories = async (??) => {
    //Put together places to get our complete url
    // let url = `${CALORIES_URL}${PARAMS}${??}`;

    // setLoading(true);

    //Reset everything(before you make a new request)
    // setCalories(null);
    // setError('');

   
    // try {
    //Make request to fitness site(always use async with await-in above function)
    // let response = await fetch(url, options);
    // if(response.ok){
    //Server understood/accepted the request: now we wait for data
    // let data = await response.json(); 
    //Save weather data in state
    // setCalories(data);
    // } else {
    //Server was reached but returns reason(s) as to why are request was not met
    // setError(`Server error: ${response.status}${response.statusText}`);
    // }
    //Network error: server was not reached
  //   setError(`Network error: ${err.message}`);
  //   } catch(err) {

  //   }
  //   setLoading(false);
  // };
 

  //I want to display the calories burned on the profile page when you click on that user.


 return (
     <div className="App">
      <nav>
        <button>
          <NavLink to="/">Register/Login</NavLink>
          </button>

          <button>
          <NavLink to="/findmatch">FindMatch</NavLink>
          </button>

      </nav> 

      <Routes>
        <Route path="/" element={<RegisterLogin /> } />
        <Route path="/profiles" element={<Profiles /> } />
        <Route path="/findmatch" element={<FindMatch /> } />
        <Route path="/matches" element={<Matches /> } />
        <Route path="/*" element={<Error404 /> } />
      </Routes>
 </div>
 );

}



export default App

