import { useState } from 'react'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

const App = () => {
  const [city,setCity] = useState('')
  const [desc,setDesc] = useState({
    description : "",
    temp : ""
  })
  console.log("Desc...", desc)
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=589cac185f9cd3ff90aca96a52be1a39`)
    setDesc((prev) => ({...prev,temp : response.data.main.temp,description :response.data.weather[0].description}))
     
  }
 
  return(
    <div>
      <center>
        <div className="card"> 
        <div className="card-body">
          <h3 className="card-title">Weather App</h3>
          <form onSubmit={handleSubmit}>
            <input type ="text" onChange={(e) => setCity(e.target.value)} name="city"/> <br/>
            <input type="submit" value="Get Tempeturature"/>  
            <h4>Temperature :{desc.temp}°C</h4>
            <h4>Description : {desc.description}</h4>
          </form>
        </div>

        </div>
      </center>
    </div>
    
  )
}
export default App
