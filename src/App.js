import './App.css';
import TopButtons from "./components/TopButtons";
import UilReact from "@iconscout/react-unicons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/wetherService";
import getFormattedWeatherData from "./services/wetherService";
import {useEffect, useId, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

    const [query, setQuery] = useState({q:'berlin'})
    const [units, setUnits] = useState('metric')
    const [weather, setWeather] = useState(null)

    useEffect(()=>{
        const fetchWeather = async () => {
            const  message = query.q ? query.q : 'current location.'

            toast.info('Fetching weather  for ' + message)
             await getFormattedWeatherData({...query,...units}).then((data) => {
                 setWeather(data);
                 toast.success(`Succeess fetched weather for ${data.name},${data.country}`)
             });

        }
        fetchWeather();
    },[query,units]);


  return (
      <div className="mx-auto max-w-screen-md mt-4 py-5
      px-32 bg-gradient-to-br from-cyan-700
      to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons setQuery={setQuery}/>
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
          {weather && (
              <div>
                  <TimeAndLocation weather = {weather} />
                  <TemperatureAndDetails weather = {weather}/>

                  <Forecast title="hourly forecast" items={weather.hourly}/>
                  <Forecast title="daily forecast" items={weather.daily}/>
              </div>
          )}
          <ToastContainer autoClose={5000} theme={"colored"} newestOnTop={true}/>
      </div>
  );
}

export default App;
