import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Box from './components/Box';
import { useState } from 'react'

function App() {
  const [boxes, setBoxes] = useState([]);
  const [form, setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newState = [...boxes, form];
    setBoxes(newState)
    setForm(" ")
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input value={form} onChange={(event) => { setForm(event.target.value) }} type="text" className=" w-50 mx-auto form-control my-5" placeholder="Type a Color" />
        <input type="submit" className='btn btn-primary btn-lg d-block mx-auto my-2' />
      </form>
      <div className= "d-flex justify-content-center mx-2" >
      {
        boxes.map((item, i) => {
          return <Box key={i} name={item} />
        })
      }
      </div>
      <Box />
    </div>
  );
}

export default App;
