import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import {  useState } from "react";
import './App.css';

function App() {



  const [City, setCity] = useState("mumbai")
  const [data, setData] = useState({})


  const getWether = (cityName) => {
    if (!cityName) return
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=700cd2716d1ea414ff0fe1483e04908c`
    axios.get(apiURL).then((res) => {
  
      setData(res.data)
    }).catch((err) => {
      
    })
  }

  const ChangeInput = (e) => {
    console.log("value", e.target.value)
    setCity(e.target.value)
  }

  const Search = () => {
    getWether(City)
  }


  return (
    <div>
      <div className="wetherBg">
        <h1 className="heading">React Weather App</h1>

        <div className="inputt">
          <input type="text" className="form-control"
            value={City}
            onChange={ChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={Search}
          >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="display">

          <div className="shadow rounded wetherResultBox">
           

            <h5 className="weatherCity">
              {data?.name}
            </h5>
            <h6 className="weatherTemp">{((data.main.temp))}°C</h6>
            <div className="minmax">
                         <h2>Min-Temp <h4 >|| {data.main.temp_min}°C ||</h4></h2>
             
                    
                     <h2>Max-Temp<h4>|| {data.main.temp_max}°C ||</h4>  </h2>
                     
                     <h2>Humidity<h4> ||{data.main.humidity} ||</h4></h2>
                      
                     </div>
          </div>
        </div>
      }

    </div>
  );
}

export default App;
