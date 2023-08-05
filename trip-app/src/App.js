import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import FormSearch from "./components/FormSearch/FormSearch";
import TripsList from "./components/TripsList/TripsList";
import Sidebar from "./components/Sidebar/Sidebar";
import WeekList from "./components/WeekList/WeekList";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Weather Forecast</h1>
        <FormSearch></FormSearch>
        <TripsList />
        <WeekList />
        <Sidebar />
      </div>
    </Provider>
  );
}

export default App;
