import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TripsList from "./TripsList/TripsList";
import Sidebar from "./Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import { searchTrips } from "../redux/trips/tripsOperation";
import SearchInput from "./SearchInput/SearchInput";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchTrips(""));
  }, [dispatch]);


  return (
    <div className="container">
      <h1>Weather Forecast</h1>
      <SearchInput/>
      <TripsList />
      <Sidebar />
      <ToastContainer />
    </div>
  );
}

export default App;
