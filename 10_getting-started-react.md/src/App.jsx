import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h2>About Me</h2>
      <p><strong>Name:</strong> Margarette A. Calumpiano</p>
      <p><strong>Course & Year:</strong> Bachelor of Science in Information Systems, 3rd Year</p>
      <p><strong>Fun Fact:</strong> I want to learn front-end, but front-end doesn't like me!</p>
      
      <h2>Why I Want to Learn React</h2>
      <p>
        I want to learn React because it is one of the most popular libraries for building modern web 
        applications. Learning React will help me improve my skills in front-end development, 
        create interactive user interfaces, and prepare me for future projects and career opportunities 
        in web development.
      </p>
    </div>
  )
}

export default App
