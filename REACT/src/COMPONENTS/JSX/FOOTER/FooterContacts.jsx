import React from 'react'
import MediaList from './MediaList'


function FooterContacts() {
  return (
    <>

        <ul className='navlist'>

            <MediaList 
                href='https://www.booking.com'
                alt='Booking'
                src='footerImages/booking.png' //Enlazar con img
            />  


            <MediaList 
                href='https://www.facebook.com'
                alt='Facebook'
                src='-' //Enlazar con img
            />  

            <MediaList 
                href='https://www.instagram.com'
                alt='Instagram'
                src='-' //Enlazar con img
            />

            <MediaList 
                href='https://www.whatsapp.com/?lang=es'
                alt='Whatsapp'
                src='-' //Enlazar con img
            />        

        </ul>

    </>
  )
}

export default FooterContacts