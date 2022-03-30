import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
<img data-ils="4" jsaction="rcuQ6b:trigger.M8vzZb;" class="rg_i Q4LuWd" jsname="Q4LuWd" width="310" height="163" alt="Why We Use React JS for Clients' and Our Own Projects | Railsware Blog" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYMVTPWo-UpG-iTxD-i2KHiigTIboajgwVw&amp;usqp=CAU"></img>

  return (
    <div className="container">
      <h2 className='title'> React Checkpoint : Form </h2>
     <form>
  <div className="mb-3">
<label for="name" className="form-label"> Name</label>
<input type="text" className="form-control" />
<br/>
<label for="surename" className="form-label"> Surname</label>
<input  type="text"  className="form-control" />
<br/>
<label  className="form-label">Enter your age:
        <input 
         className="form-control"
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <br/>
    <label for="emails" className="form-label">Email address</label>
    <input type="email" className="form-control" id="emails" aria-describedby="emailHelp"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  <br/>
  <div className='image'>
  <img data-ils="4" jsaction="rcuQ6b:trigger.M8vzZb;" class="rg_i Q4LuWd" jsname="Q4LuWd" width="310" height="163" alt="Why We Use React JS for Clients' and Our Own Projects | Railsware Blog" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYMVTPWo-UpG-iTxD-i2KHiigTIboajgwVw&amp;usqp=CAU" ></img>
  </div>
</form>
    </div>
  );
  
}

export default App;
