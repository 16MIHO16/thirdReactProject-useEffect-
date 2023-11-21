import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data,setData] = useState({})
  const [number,setNumber] = useState(1)
  const [click , setClick] = useState(false)


  async function fetchData(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
    const oBject = await response.json()
    setData(oBject)  
  }

  useEffect(()=>{
    if(number<10){
      fetchData()
      }else{
        alert("maximum number should be 10")
      }
  }, [click])

  const valuesList = Object.values(data);

  return (
    <div>
    
    <input type="text" onChange={(e) => setNumber(e.target.value)}/>
    <br />
    <button onClick={() => setClick(!click)}>Click me</button>

    <ul>
      {valuesList.map((value, index) => (
      <li key={index}>{String(value)}</li>
    ))}
    </ul>

    </div>
  )
}
export default App