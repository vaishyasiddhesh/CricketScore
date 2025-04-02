import React, { useEffect, useState } from 'react'
import './Home.css'

import AdComponent from '../../adcomponent/Adcomponent';
import { useNavigate } from 'react-router-dom';


const Home = ({ curVal, matchDate, today }) => {
   
    const navigate =useNavigate();
    const [data,setData]= useState([]);
    const getData = async()=>{
        try {
            const response =await fetch("https://api.cricapi.com/v1/cricScore?apikey=f4b97228-f441-43e4-88c0-80f44077cb6f")
            const data = await response.json();
            console.log(data)
            setData(data.data)
        } catch (error) {
            console.log(error)   
        }
    }

    useEffect(()=>{
       getData() 
    },[])
   
  return (
    <div className='main-container2'>
    <div className='main-container'>
    {data ? data.map((curVal)=>{
        console.log(curVal)
        const today = new Date().toISOString().split('T')[0];
        const matchDate = new Date(curVal.dateTimeGMT).toISOString().split('T')[0];
        if(matchDate === today || !curVal.status.includes("Match not started")){
            return(
                <>
                <AdComponent adSlot="YOUR_ADSENSE_SLOT_ID" />
                <div className='card' onClick={() => navigate(`/match/${curVal.id}`, { state: curVal })} style={{ cursor: "pointer" }}>
                    <h3 className='title'>{curVal.series}</h3>
                    
                    <div className='img'>
                        <div>
                            <img src={curVal.t1img}  className='teamLogo'></img>
                            <p className='teamName'>{curVal.t1}</p>
                            <p className='score'>{curVal.t1s}</p>
                        </div>
                        <p className='vs'>V/S</p>
                        <div>
                            <img src={curVal.t2img} className='teamLogo'></img>
                            <p className='teamName'>{curVal.t2}</p>
                            <p className='score'>{curVal.t2s}</p>
                        </div>
                    </div>
                    <br></br>
                <p className='time'>Date:  {matchDate}</p>
                <p className='status'>{curVal.status}</p>
                 </div>
                 </>
            )
        }
        
       
        
    })


    
    
    
    : <p>Data NOT Found</p>}
     </div>
     </div>
    
  )
}

export default Home
