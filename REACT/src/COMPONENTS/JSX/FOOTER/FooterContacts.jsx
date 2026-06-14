import React from 'react'
import MediaList from './MediaList'


function FooterContacts() {
  return (
    <>

        <ul className='navlist'>

            <MediaList 
                href='https://www.booking.com'
                target='blank'
                alt='Booking'
                src='-' //Enlazar con img
            />  


            <MediaList 
                href='https://www.facebook.com'
                target='blank'
                alt='Facebook'
                src='-' //Enlazar con img
            />  

            <MediaList 
                href='https://www.instagram.com'
                target='blank'
                alt='Instagram'
                src='-' //Enlazar con img
            />

            <MediaList 
                href='https://www.whatsapp.com/?lang=es'
                target='blank'
                alt='Whatsapp'
                src='-' //Enlazar con img
            />        

        </ul>

    </>
  )
}

export default FooterContacts