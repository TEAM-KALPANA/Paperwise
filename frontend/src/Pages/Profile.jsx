import React from 'react';
import { Checkbox,Navs,Tabs } from '../Components';


import { useAuth0 } from "@auth0/auth0-react";




const Profile = () => {
  
    



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
