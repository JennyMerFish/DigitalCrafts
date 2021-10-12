
import "./App.css"
import SignUpForm from './components/SignUpForm';
import { useEffect } from "react"
import { useDispatch } from "react-redux"
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getWeather()
  }, [])
  const getWeather = async() => {
   const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=houston&appid=ff1cadec65d9f10c3aafc2a01b14612c")
   const jsonData = await data.json()
   dispatch({type: "WEATHER_DATA", payload: {jsonData}})
   
  }
  return (
    <div className="App">
   <SignUpForm />
    </div>
  );
}

export default App;

