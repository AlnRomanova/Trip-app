import React from "react";
import FormSearch from "./FormSearch/FormSearch";
import TripsList from "./TripsList/TripsList";
import WeekList from "./WeekList/WeekList";
import Sidebar from "./Sidebar/Sidebar"

function App() {
  return (
    <div className="container">
      <h1>Weather Forecast</h1>
      <FormSearch/>
      <TripsList/>
      <WeekList/>
      <Sidebar/>
    </div>
  );
}

export default App;