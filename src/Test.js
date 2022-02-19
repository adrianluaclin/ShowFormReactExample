
import {useState, useEffect} from "react";
import Form from "./Form";

function Test({show}) {
  const [data,setData] = useState()
  useEffect(() =>{
   show.current = (data) => { setData(data)}
  },[])

  return (
    <div>
       { data && <Form data={data} />}
    </div>
  );
}

export default Test;
