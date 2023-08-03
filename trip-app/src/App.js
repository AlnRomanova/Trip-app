import React from 'react';
import Modal from './components/Modal/Modal';
import FormSearch from './components/FormSearch/FormSearch';
import TripsList from './components/TripsList/TripsList';
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  return (
    <div className='container'>
  <h1>Weather Forecast</h1>
<FormSearch></FormSearch>
<TripsList></TripsList>
  <Modal></Modal>
<Sidebar/>
   </div>
  );
}

export default App;
