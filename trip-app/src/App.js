import React, { useState } from 'react';
import FormSearch from './components/FormSearch/FormSearch';
import TripsList from './components/TripsList/TripsList';
import Sidebar from './components/Sidebar/Sidebar';
import WeekList from './components/WeekList/WeekList';



function App() {
  const [trips, setTrips] = useState([]);
  return (
    <div className='container'>
  <h1>Weather Forecast</h1>
<FormSearch></FormSearch>
< TripsList trips={trips} setTrips={setTrips}/>
<WeekList/>
<Sidebar/>
   </div>
  );
}

export default App;
