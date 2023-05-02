/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */



import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'
//import  Chart  from "react-apexcharts";
import { Loading } from "@nextui-org/react";


import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false }); 


const Index = () => {

const { query } = useRouter();
const id = query.id
//console.log(id)

 const [x, setX] = useState({})    // SLOVAKIA
 const [y, setY] = useState({})    // OPONENT
 const [loading, setLoading] = useState(false)
 const [disable, setDisable] = useState(false)
 const [grafSVK, setGrafSVK] = useState([])
 const [grafOponent, setGrafOponent] = useState([])

 

// FOR PERCENTAGE
 const svk = Number(x.vote / (x.vote + y.vote) * 100).toFixed(0) || 0
 const oponent = Number(y.vote / (x.vote + y.vote) * 100).toFixed(0) || 0 
 



// FETCH DATA FROM MOGNO
 const fetchSlovakia = async () => {
  let x = []
 

  try {

       setLoading(true)
       const { data } = await axios('/api/getTeam/data')
       const mongo = data
      // console.log(mongo)

        if(id === 'svk_cz') {
          x.push(mongo[0])
          x.push(mongo[1])
        } else if (id === 'svk_latvia') {
          x.push(mongo[2])
          x.push(mongo[8])
        } else if (id === 'svk_ca') {
          x.push(mongo[3])
          x.push(mongo[9])
        } else if (id === 'svk_swi') {
          x.push(mongo[4])
          x.push(mongo[10])
        } else if (id === 'svk_kaz') {
          x.push(mongo[5])
          x.push(mongo[11])
        } else if (id === 'svk_slo') {
          x.push(mongo[6])
          x.push(mongo[12])
        } else if (id === 'svk_nor') {
          x.push(mongo[7])
          x.push(mongo[13])
        }
          
      setX(x[0])
      setY(x[1])

     /*  // FOR GRAF PIE
      for(let i = 0; i < x.length; i++) {
        sk = x[i].vote
        rival = x[i].vote
        } */

      setGrafSVK(sk)  
      setGrafOponent(rival)

      setLoading(false)

    } catch (error) {
       console.log(error)
       setLoading(false)
    }
  }
 

useEffect(() => {
 fetchSlovakia()
}, [])  



// UPDATES
const handleUpdate = async (id) => {

 
try {
    await axios.put(`/api/team/${id}/edit`, {id} )
    
    setDisable(false)
    if(x._id === id) toast.success(`${x.name} received extra vote !`)
    if(y._id === id) toast.success(`${y.name} received extra vote !`)
    fetchSlovakia()
  } catch (error) {
    console.log(error)
  }  
}  
 
 
 
 return (
     <>
       <h1 className='text-center mt-5 pt-5'>{x.name} vs {y.name}</h1>
       <h3 className='text-center  my-3'>Vote for your team</h3>

      {
        loading ? <p className='text-center'><Loading type="points"/></p> :
        (
          <>
            
            <div className="currentBox">

                <div>
                  <div className="imgBox2">
                        <img src={x.img} alt={x.name} />
                  </div>

                  <button 
                        className='btn btn-primary rounded-0 w-100 mt-3 shadow' 
                        disabled={disable}
                        onClick={ () => handleUpdate(x._id)}  >
                        {x.name}
                  </button>
                </div>

                <div>
                  <div className="imgBox2">
                        <img src={y.img} alt={y.name} />
                  </div>

                  <button 
                        className='btn btn-primary rounded-0 w-100 mt-3 shadow' 
                        disabled={disable}
                        onClick={ () => handleUpdate(y._id)}  >
                        {y.name}
                  </button>
                </div>

             </div>

          </>

        )
      }
      

       {   // PERCENTAGE
        loading ? '' :
         (
          <>
            <div className='percantaPanel'>
             
                  <h5 >{ svk }% | {x.vote} votes</h5>
                  <h5 >{ oponent }% | {y.vote} votes</h5> 
            </div>
          </>
         )
      }

     
      {   // GRAF
        loading ? '' :
         (
          <>
           <div className='box-percentage'>
            <Chart 
                type="pie"
                width={375}
                height={375}

                // ABY SA SPRAVNE ZOBRAZOVAL GRAF MUSIA BYT HOSTIA PRVY !!!
                series={[ y.vote, x.vote] }  // domaci , hostia              

                options={{
                        title:{ text:"Data Visualization"
                        } , 
                       noData:{text:"Empty Data"},                        
                       colors:[ `${y.color}` , `${x.color}`],   //  "#ff0026"               
                       labels: [ `${y.name}` , `${x.name}` ]    // 
                       
                 }}   
                >           
                </Chart>
            </div>  
          </>
         )
      }


       {   // TOTAL VOTES
        loading ? '' : 
        <h2 className='text-center my-5'>Total votes: 
            <span className='ms-2 border border-dark px-3 py-1 rounded-1'>
              {x.vote + y.vote}  
            </span> 
        </h2>
       } 
   
       <Link href={'/'}>
         <button className='btn btn-primary vstack mx-auto rounded-0 mb-5 px-5'>
          Back
         </button>
       </Link>

        
       <ToastContainer position='top-center' limit={1} />


       <style>{`

           .percantaPanel {
            position: relative;
            width: 375px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            padding: 0 17px;
           }

           .currentBox {
            position: relative;
            width : 375px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            padding: 20px 0 ;
            gap: 20px;
           }
         
           .teamBox {
            position: relative;
            width: 40%;
            background: red;
            overflow: hidden;
           }
  
           .imgBox2 {
            position: relative;
            width: 150px;
            height: 100px;
            overflow: hidden;
            border: 1px solid black;
           }

           .imgBox2 > img {
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
         
          
          .blocked:hover {
            cursor: not-allowed;
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

export default Index