
import React,{useState}from 'react'
import Form from './Form';
import Weather from './Weather'

function App() {

  const [weather, setWeather] = useState([])

  const APIKEY = '1b35946338ca3fcda3983d4f3fec742d';


  async function fetchData(e) {

     const city = e.target.elements.city.value
     const country = e.target.elements.country.value

    e.preventDefault()

    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)


        .then(res => res.json())
        .then(data => data)
        if(city && country) {
        setWeather({

          data:apiData,
          city:apiData.city,
          country: apiData.sys.country,
          description: apiData.weather[0].description,
          temperature: Math.round(apiData.main.temp * 9/5 - 459.67),
                    // temperature: Math.round(apiData.main.temp  ),

          error:''
        })

  }

  else {
    setWeather({
      data: '',
      city:'',
      country: '',
      description: '',
      temperature: '',
      error: 'Please Type A city And country'
      
    })
  }
  }

  return (
    <>
    <div>
     <h3>Weather App</h3> 
     <hr/>
      
    
    <Form getWeather={fetchData}/>
    <Weather
      city={weather.city}
      country={weather.country}
      temperature={weather.temperature}
      description={weather.description}
      error={weather.error}
      />
      {console.log(weather.data)}
</div>
</>
  );
}

export default App;
