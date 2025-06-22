import DigitalClock from "./DigitalClock";
import { useState } from "react";
function App()
{
  // let's set the initial state of time = new Date() which return an object
    let [time, setTime] = useState(new Date());

  return(
    <>
    <DigitalClock  time = {time} setTime = {setTime}/>
    </>
  );
}
export default App;