import {useState} from 'react';
import './App.css';

function App() {

  const [text, settext] = useState(0);

  const incval = () =>{
    settext(text+1)
  }

  const decval = () =>{
    settext(text-1)
  }
  return (
    <div className="App">
      <h2 className='h'>COUNTER</h2>
      <button onClick={incval}>+</button>
      <h2>{text}</h2>
      <button onClick={decval}>-</button>
    </div>
  );
}

export default App;
