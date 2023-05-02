/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */


import  data  from '@/utils/data'
import Link from 'next/link'




export default function Home() {

 
  return (
    <>
    
    <div className="arena">

      <h1 className='text-center'>Group B</h1>


      <div className="mantinel">
          {

            data.map( (item, i) => {
              
              return (
                <>
                 <Link href={`/game/${item.even}`} key={i}>
                  <div className="card" key={item.even}>
                  <h6 className='text-center text-light mt-2'>{item.date}</h6>
                  <h6 className='text-center text-light mb-2'>{item.day}</h6>

                  <div className='section'>

                      <div className='imgBox'>
                        <img src={item.svkImg} alt="svkImg" />
                      </div>

                      <p className='vCharacter'>vs</p>

                      <div className='imgBox'>
                        <img src={item.teamImg} alt={item.teamImg} />
                      </div>

                  </div>
                  
                  <div className="taems ">
                    <p className='text-light'>{item.svk}</p>
                    <p className='text-light'>{item.team}</p>
                  </div>

                  <h5 className='text-center text-light'>{item.place}</h5>

                </div>
                </Link>
                </>
              )
            })
          }
      </div>
    </div>


      <style>{`

      .vCharacter {
        position: relative;
        top: 22px;
        color: white;
      }

      .taems {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-around!important;

      }

      .section {
        positioni: relative;
        display: flex;
        justify-content: space-evenly;
      }

      .imgBox {
        position: relative;
        width: 100px;
        height: 67px;
        overflow: hidden;
        background: red;
        border-radius: 6px;
      }

      .imgBox > img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        
      }

      .card {
        position: relative;
        width: 300px;
        height: 200px;
        margin: 15xp 20px;
        background-image: linear-gradient(to bottom right, #2a346e, #3f5d8c);
      }

      .card:hover {
        box-shadow: inset .0em .0em .7em 5px #0a1a36;
      }

        .arena {
          position: relative;
          width: 100%;
           margin-top: 100px;
        }
      
        .mantinel {
          position: relative;
          max-width: 1000px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 22px;
          margin: 0 auto;
          
        } 
       
      `}</style>
    </>
  )
}
