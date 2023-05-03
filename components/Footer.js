
import { FacebookIcon, WhatsappIcon,ViberIcon, TwitterIcon, EmailIcon } from 'react-share'
import { FacebookShareButton,WhatsappShareButton,
         ViberShareButton, TwitterShareButton, EmailShareButton } from 'react-share'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";



const Footer = () => {

const shareUrl = 'https://wolrd-cup-2023.vercel.app/'


  return (
  
      <>    
       <div className="share-us">
         <div className="iconsPanel">
            <FacebookShareButton 
                url={shareUrl}>
              <FacebookIcon size={25} className='share-icon'/>
           </FacebookShareButton>

           <WhatsappShareButton 
                url={shareUrl}
                className='mx-3'>
            <WhatsappIcon size={25} className='share-icon'/>
           </WhatsappShareButton>

           <ViberShareButton 
               url={shareUrl}>
            <ViberIcon size={25} className='share-icon'/>
           </ViberShareButton>

           <TwitterShareButton 
               url={shareUrl}
                className='mx-3'>
             <TwitterIcon size={25} className='share-icon'/>
           </TwitterShareButton>

           <EmailShareButton url={shareUrl}>
            <EmailIcon size={25} className='share-icon'/>
           </EmailShareButton>
        </div>
      </div>

        <div className='text-center mb-5 mt-2'>
          <Link href={'https://www.charismawebdevelopment.com/'}
                style={{ textDecoration: 'none', color: 'black' }}>
           <FaExternalLinkAlt/> 
           <span className='charisma fs-4'>  CharisMa Web Development</span>
          </Link>
        </div>
     

    <style>{`

      .charisma {
        position: relative;
        top: 5px;
        margin-left: 5px;
      }
      
      .share-icon {
        border-radius: 3px;
      }
      .share-icon:hover {
       border-radius: 50%;
       transition: .5s all;
      }

      .iconsPanel {
        position: relative;
        width: 191px;
        margin: 0 auto;
        justify-content: center;
      }
     
       .share-us {
        position: relative;
        width: 100%;
       }
     
      .fb-icon {
        font-size : 25px;
        color: #adadad;
        margin-right:5px;
        cursor:pointer;
      }
      .link-in-icon {
        font-size : 25px;
        color: #adadad;
        margin-left:5px;
        cursor:pointer;
      }
      .fb-icon:hover, .link-in-icon:hover {
        color:blue;
      }
    `}</style>
      </>
  );
}

export default Footer