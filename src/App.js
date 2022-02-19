
import {useRef} from "react";
import Test from "./Test";

function App() {
  const show = useRef()
  const formData = (value) => {
    show.current(value)
  }

  return (
    <div style={{marginTop: "1em", textAlign : "center"}}>
       <button onClick={(event) => { event.preventDefault(); event.stopPropagation(); formData("Form Test") }}> Show form </button>
       <button onClick={(event) => { event.preventDefault(); event.stopPropagation(); formData("") }} style={{marginLeft: "1em"}}> Hide form </button> 
       <Test show={show}/>
    </div>
  );
}

export default App;
