import { useState } from 'react';
import './App.css'


function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

 function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
    </div>
  );
}
export default MyApp;
