import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  useEffect(()=>{
    window.parent.postMessage(count, 'https://parentapp.netlify.app/');
  },[count])
  return (
    <>
      <p>This is a child </p>
      <input type="button" onClick={()=>setCount(count+1)} value={count}/>
    </>
  )
}

export default App
