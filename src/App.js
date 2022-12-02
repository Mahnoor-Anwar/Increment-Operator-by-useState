import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);

  const increment =() => {
    setCount(count+1);
  }
  return (

    <div className="App">
      {/* <h1>{count}</h1>
     <button onClick={increment()}>Clikck to inncrease</button>
     <button>Clikck to decrease</button> */}
     <h1>{count}</h1>
    <button onClick={increment}>Click</button>
    </div>
  );
}

export default App;
