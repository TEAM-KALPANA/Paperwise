import { useState } from 'react'
// import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import { Hero,Profile } from './Pages'
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [count, setCount] = useState(0)
  const { user, isAuthenticated, isLoading } = useAuth0()
  return (
   
     
     <>

{isAuthenticated?( <Profile/> ):(<Hero/>)}
    
     {/* */}
      
     </>
     
 
     
    
  )
}

export default App
