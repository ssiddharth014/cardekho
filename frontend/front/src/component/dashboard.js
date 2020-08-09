import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';                     //formfeedback 

export default function Dashboard({match}) {

  

  
  const [all,setall] =React.useState([]);
  const [all1,setall1] =React.useState([]);
  const [all2,setall2] =React.useState([]);
  const [all3,setall3] =React.useState([]);
  const [all4,setall4] =React.useState([]);
  const [all5,setall5] =React.useState([]);
  const [all6,setall6] =React.useState([]);

const [loading,setloading] =React.useState(false)
const [change,setchange] =React.useState(false)
const [setmake,make]=React.useState('')
const [setmodel,model]=React.useState('')
const [setgeneration,generation]=React.useState('')
const [settrim,trim]=React.useState('')
const [setseries,series]=React.useState('')
const [setequipment,equipment]=React.useState('')

  useEffect(() => {
    setloading(true)
    async function fetchcar(){
  let {data} =  await axios.get(` https://localhost:7000/car/all/${match.params.id}`)

setall(data.makers)
set(!change)
return
}
fetchUser()

  },[change])


  const handlemake=make=>{
      let {data} =  await axios.get(` https://localhost:7000/car/details/?make=${make}`)

     setall(data.filterCar)
     setall1(data.filterCar)
     setmake(make)
     set(!change)
  }
  
  const handlemodel=model=>{
    let {data} =  await axios.get(` https://localhost:7000/car/details/?make=${make}&model=${model}`)

     setall(data.filterCar)
     setall2(data.filterCar)
     setmodel(model)
     set(!change)
  }
  const handlegeneration=generation=>{
    let {data} =  await axios.get(` https://localhost:7000/car/details/?make=${make}&model=${model}&generation=${generation}`)

     setall(data.filterCar)
     setall3(data.filterCar)
     setgeneration(generation)
     set(!change)
  }
  const handletrim=trim=>{
    let {data} =  await axios.get(` https://localhost:7000/car/details/?make=${make}&model=${model}&generation=${generation}&trim=${trim}`)

     setall(data.filterCar)
     setall4(data.filterCar)
     settrim(trim)
     set(!change)
  }
  const handleseries=series=>{
    let {data} =  await axios.get(` https://localhost:7000/car/details/?make=${make}&model=${model}&generation=${generation}&trim=${trim}&series=${series}`)

     setall(data.filterCar)
     setall5(data.filterCar)
     setseries(series)
     set(!change)
  }
  const handleequipment=equipment=>{
    let {data} =  await axios.get(` https://localhost:7000/car/details/?make=${make}&model=${model}&generation=${generation}&trim=${trim}&series=${series}&equipment=${equipment}`)

     setall(data.filterCar)
     setall6(data.filterCar)
     setequipment(equipment)
     set(!change)
  }

  return (
  <>
  <div>
  <select  className="input"  
           onChange={(event) => {handlemake(event.target.value)}}>
          <option>Select</option>
          {
            all.map((list.index) => {
              return <option key={index}
              value={list.make} >{list.make}</option>;
            })
          }
  </select>


  <select  className="input"  
           onChange={(event) => {handlemodel(event.target.value)}}>
          <option>Select</option>
          {
            all1.map((list.index) => {
              return <option key={index}
              value={list.model} >{list.model}</option>;
            })
          }
  </select>



  <select  className="input"  
           onChange={(event) => {handlegeneration(event.target.value)}}>
          <option>Select</option>
          {
            all2.map((list.index) => {
              return <option key={index}
              value={list.generation} >{list.generation}</option>;
            })
          }
  </select>



  <select  className="input"  
           onChange={(event) => {handleseries(event.target.value)}}>
          <option>Select</option>
          {
            all3.map((list.index) => {
              return <option key={index}
              value={list.series} >{list.series}</option>;
            })
          }
  </select>


  <select  className="input"  
           onChange={(event) => {handletrim(event.target.value)}}>
          <option>Select</option>
          {
            all4.map((list.index) => {
              return <option key={index}
              value={list.trim} >{list.trim}</option>;
            })
          }
  </select>



  <select  className="input"  
           onChange={(event) => {handleequipment(event.target.value)}}>
          <option>Select</option>
          {
            all5.map((list.imdex) => {
              return <option key={index}
              value={list.equipment} >{list.equipment}</option>;
            })
          }
  </select>

  </div>
    <div>
       
       
<div className="container-fluid mt-4" id="accordionExample">
<div className="row d-flex justify-content-around">
 {all.length==0 ? (<h1 className="text-primary">No Cars </h1>) : (null)}

      {all.map((ann,index) => {
    return(

      
  
  <div key={index} className="col-lg-3 col-md-4 col-10  m-2 text-dark card">
    
       
    </div>


       
     )
    })
  }
</div>


  </div>
      
</div>
</>

  )


}