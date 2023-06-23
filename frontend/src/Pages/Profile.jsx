import React,{useEffect} from 'react';
import { Checkbox,Navs,Tabs } from '../Components';


import { useAuth0 } from "@auth0/auth0-react";




const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();



  useEffect(() => {

   async ()=> {
    try {
      const response = await fetch("http://localhost:8080/new-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          intrests:[]

        }),
      });

      await response.json();
      alert("Success");
     
    } catch (error) {
      alert(error);
    } finally {
      
    }
  }




  }
  
  
  )
  
    



  return (
    <div className='flex w-full bg-indigo-50'>
      <div   className='mr-12' > 
        <Navs/>
        </div>
       
<Tabs />
        
       
        </div>
  )
}

export default Profile
