import React,{useState,useEffect} from 'react'
import Select from 'react-select'
import Cards from './Cards'
import axios from 'axios'

const Tabs = () => {

  const [category,setCategory] = useState("Chemistry");
  const [dataarray,setdataarray] = useState([])
  const api=`https://api.springernature.com/openaccess/json?q=subject:${category}&api_key=723f83940e8fc354725401cc9ac552d0`

  const interest=[
{value: "Chemistry",label: "Chemistry"},
{value: "Mathematics",label: "Mathematics"},
{value: "Climate",label: "Climate"},
{value: "Economics",label: "Economics"},
{value: "ComputerScience",label: "Computer Science"},
{value: "Physics",label: "Physics"},


  ]


  const handleChange=(selectedOption)=>{
    console.log(selectedOption);
    setCategory(selectedOption.value);
    console.log("category",category);


  }


    
useEffect(() =>{
axios.get(api).then(response=>{setdataarray(response.data.records)
  console.log(dataarray[1].title)

}).then(dataarray)
    
},[dataarray,category]);



  return (
<>

<div className='flex flex-col-reverse w-[95%] ml-[145px] bg-indigo-50'>
    <div className='w-full mt-4 bg-indigo-50'>
    <div className='ww-full'>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="grid grid-cols-3 ">

{

  

dataarray.map((data)=>(
     <Cards title={data.title} url={data.url} coverDate={data.coverDate} publicationName={data.publicationName} />


))


}



    
    </div>
  </div>
</section>
</div>
</div>

<div className=" ml-[60px] w-full"> 
<div className=' w-full h-[30%] '>

  


<Select options={interest} onChange={handleChange} />
 
    </div>
    </div>




    </div>
</>
  )
}

export default Tabs
