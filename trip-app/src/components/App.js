import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FormSearch from "./FormSearch/FormSearch";
import TripsList from "./TripsList/TripsList";
import WeekList from "./WeekList/WeekList";
import Sidebar from "./Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import { searchTrips } from "../redux/tripsOperation";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchTrips(""));
  }, [dispatch]);


  return (
    <div className="container">
      <h1>Weather Forecast</h1>
      <FormSearch />
      <TripsList />
      <WeekList />
      <Sidebar />
      <ToastContainer />
    </div>
  );
}

export default App;
