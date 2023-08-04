import React from 'react';
import FormSearch from './components/FormSearch/FormSearch';
import TripsList from './components/TripsList/TripsList';
import Sidebar from './components/Sidebar/Sidebar';
import WeekList from './components/WeekList/WeekList';



function App() {
  return (
    <div className='container'>
  <h1>Weather Forecast</h1>
<FormSearch></FormSearch>
<TripsList></TripsList>
<WeekList/>
<Sidebar/>
   </div>
  );
}

export default App;
