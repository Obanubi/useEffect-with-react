import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
      fetchData()
    },[])
  const fetchData= async()=>{
    setLoading(true)
    try{
      await fetch("https://660e65026ddfa2943b36a37f.mockapi.io/batchb")
      .then (async (res)=>{
          setResult( await res.json());
          setLoading(false);
        }
      );
        // let userData = await resp.json()
        // console.log(userData)
        // setResult(userData) 
        
    } 
    catch {
      (err)=>{
        setLoading(false)
        return console.log(err)
      }
    }
  }
 
  return (
    <>
      <h1> This is my useEffect fetch data example</h1>
      {result.length}
      {
        loading ? <p style={{textAlign:"center"}}>please wait, loading.... </p>:
     <div style={{display:"flex", gap: "70px", flexWrap:"wrap"}}>
        {
          result.map((user)=>{
            return(
            <Card key={user.id} name={user.name} gender={user.gender} email={user.email} image={user.avatar}/>
            )
          })
        }
     </div>

      }
      
      
      

    </>
  )
}

export default App
