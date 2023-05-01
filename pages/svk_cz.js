/* eslint-disable @next/next/no-img-element */



import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Link from 'next/link';
import { FiExternalLink } from "react-icons/fi";
//import  Chart  from "react-apexcharts";

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false }); 




const SVK_CZ = () => {

 const [teams, setTeams] = useState([])
 const [loading, setLoading] = useState(false)
 const [disable, setDisable] = useState(false)
 const [voted, setVoted] = useState(0)
 const [total, setTotal] = useState(0)
 const [grafSVK, setGrafSVK] = useState([])
 const [grafOponent, setGrafOponent] = useState([])
 const [slovakia, setSlovakia] = useState('')
 const [druhyTeam, setDrugyTeam] = useState('')
 const [svkColor, setSvkColor] = useState('')
 const [oponentColor, setOponentColor] = useState('')


/* if(slovakia) {
  setSvkColor()
} */

const svk = Number(voted[0] / Number(total) * 100).toFixed(0) 
const oponent = Number(voted[1] / Number(total) * 100).toFixed(0)  


//console.log(voted)


const fetchTeams = async () => {

  const sk = []
  const rival = []
  const x = []

    try {
       setLoading(true)
       const res = await axios('/api/getTeam/SVK_CZ')
       const mongo = res.data
       //console.log(mongo)
       
       /* 
         x.push(mongo[0])
         x.push(mongo[1]) 
       */

       let x = mongo.slice(0,2) // copy 
       setTeams(x)              // data
       setVoted(x.map(item => item.vote))
    
        // FOR GRAF PIE
        for(let i = 0; i < x.length; i++) {
        sk.push(Number(x[i].vote))
        rival.push(Number(x[i].vote))
       } 

      // GRAF NAMES
      setSlovakia(x[0].name)
      setDrugyTeam(x[1].name)

      setGrafSVK(sk)  
      setGrafOponent(rival)  

     setLoading(false)
      
    } catch (error) {
       console.log(error)
       setLoading(false)
    }
  }
 

useEffect(() => {
 fetchTeams()
},[]) 


useEffect(() => {
 setTotal(voted[0] + voted[1])
},[voted])


const handleUpdate = async (id) => {

  console.log(typeof id, id)

   try {
    await axios.put(`/api/team/${id}/SVK_CZ`, {data: {id}} )
    
    setDisable(true)
    fetchTeams()

     /* if(id === '644e8f3a938c9c9f481dc46d'){
      toast.success('Domaci ziskali dalsi hlas.')
     } else if(id === '644e8f6d938c9c9f481dc46e'){
      toast.success('Hostial ziskalil dalsi hlas.')
     } */

  } catch (error) {
    console.log(error)
  } 
}  
 
  return (
    <>
       <h1 className='text-center mt-5 pt-5'>Slovakia vs Czech Rep.</h1>
       <h3 className='text-center  my-3'>Vote for team</h3>

    

      

       {  //  IMG & BTN
        loading ? <p className='text-center mt-5'>...</p> :
        (
          <div className='box p-2'>
        {
          teams.map(team => (
            <div key={team._id}>
              
              <div className="imgBox">
                <img src={team.img} alt={team.name} />
              </div>

              <button 
                    className='btn btn-primary rounded-0 w-100 mt-3 shadow' 
                    disabled={disable}
                    onClick={ () => handleUpdate(team._id)}  >
                    {team.name}
                  </button>

            </div>
          ))
        }
      </div>
        )
      }
        
      {   // PERCENTAGE
        loading ? <p className='text-center'>...</p> :
         (
          <>
            <div className='box-percentage'>
             
                  <h4 >{ svk }%</h4>
                  <h4 >{ oponent }%</h4>
            </div>
          </>
         )
      }
     
      {   // GRAF
        loading ? <p className='text-center'>...</p> :
         (
          <>
           <div className='box-percentage'>
            <Chart 
                type="pie"
                width={375}
                height={375}

                series={  grafSVK }  // domaci , hostia              

                options={{
                        title:{ text:"Data Visualization"
                        } , 
                       noData:{text:"Empty Data"},                        
                       colors:[ '#0800ff' ,"#ff0026"],   //  "#ff0026"               
                       labels: [ `${slovakia}` , `${druhyTeam}` ]    // 
                       
                 }}   
                >           
                </Chart>
            </div>  
          </>
         )
      }
 

        {   // TOTAL VOTES
        loading ? <p className='text-center'>...</p> : 
        <h2 className='text-center my-5'>Total votes: 
            <span className='ms-2 border border-dark px-3 pb-1 rounded-1'>
              {voted[0] + voted[1]}  
            </span> 
        </h2>
       }
   
       <Link href={'/'}>
         <button className='btn btn-primary vstack mx-auto rounded-0 px-5'>
          Back
         </button>
       </Link>

        
      <ToastContainer position='top-center' limit={1} />


       <style>{`
  
           .imgBox {
            position: relative;
            width: 150px;
            height: 100px;
            overflow: hidden;
            border: 1px solid black;
           }

           .imgBox > img {
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: cover;
           }
         
          .box-charisma {
            position: relative;
            width: 100px;
            margin:0 auto;
          }
          .box-charisma > img {
            position: relative;
            width: 100%;
            object-fit: cover;
          }
          .graf {
            position: relative;
            margin: 0 auto;
          }
          .icon {
            position: relative;
            top: -3px;
            margin-right: 5px;
          }
         
          .link {
            color: black;
            font-size: 20px;
          }
          .blocked:hover {
            cursor: not-allowed;
          }
         .box {
          position: relative;
          width: 350px;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
         }
         .box-percentage {
          position: relative;
          width: 350px;
          margin: 0 auto;
         
          display: flex;
          justify-content: space-around;
         }
       `}</style> 

    </>
  )
}

export default SVK_CZ