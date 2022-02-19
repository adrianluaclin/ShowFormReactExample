
function Form({data}) {
  return (
    <div>
        <h3> {data} </h3> 
        <form>
           <div>
               <label> Name </label>
               <input name="name" style={{marginLeft:"1.5em"}} /> 
           </div>
           <div style={{marginTop:"1em"}}>
               <label> Surname </label>
               <input name="surname" style={{marginLeft:"0.1em"}}/> 
           </div>
           <div style={{marginTop:"1em"}}>
               <label> Email </label>
               <input name="email" style={{marginLeft:"1.95em"}}/> 
           </div>
        </form>
    </div>
  );
}

export default Form;
