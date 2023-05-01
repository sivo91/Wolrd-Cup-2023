/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';




const createNew = () => {

 const [vote, setVote] = useState('')
 const [name, setName] = useState('')
 const [img, setImg] = useState('')



 const data = {
  name, vote, img
}


 
/* const fetchTeam = async () => {
    try {
       const res = await axios.get('/api/createTeam')
       //console.log(res.data)
       const mongoData = res.data
      
       
    } catch (error) {
       console.log(error)
    }
  } */

  // CREATE ITEM
const handleCreate = async (e) => {
  e.preventDefault()

  //console.log(data)

   try {
     await axios.post('/api/createTeam', data)
     alert('added')

     setName('')
     setVote('')
     setImg('')
  
   } catch (error) {
    toast.error(getError(error))
    console.log(error)
   } 

}


/*  useEffect(() => {
  fetchTeam()
 },[]) */




  return (
   <>
 
    <h1 className='text-center my-5 pt-5'>Create Team for IIHF 2023</h1>
     
    <div className='forms' > 
      <form onSubmit={handleCreate} className='px-3 mb-3'>
        
        <input type="text"
                placeholder='Team'
                value={name}
                className='mt-2'
                onChange={e => setName(e.target.value)} />

         <input type="number"
                placeholder='Vote'
                className='my-2'
                value={vote}
                onChange={e => setVote(e.target.value)} />

         <input type="text"
                placeholder='Format = /img.png'
                value={img}
                onChange={e => setImg(e.target.value)} />
      
         <button type='submit' className='btn btn-primary my-3 rounded-0'>
           Add New 
         </button>       

      </form>
    </div>

     


      <style jsx>{`
    

        
        form {
          position: relative;
          width: 400px;
          border: 1px solid black;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          
        }
      `}</style>
   </>
  )
}

export default createNew