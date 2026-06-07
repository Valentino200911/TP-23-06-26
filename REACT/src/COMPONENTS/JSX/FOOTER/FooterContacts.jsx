import React from 'react'
import LI from '../HEADER/LI'

function FooterContacts() {
  return (
    <div>
        <ul>

            <LI 
                href='https://www.booking.com'
                target='blank'
                title='Booking'
                src='-' //Enlazar con img
                imgClass='media' //Enlazar con css
            />  


            <LI 
                href='https://www.facebook.com'
                target='blank'
                title='Facebook'
                src='-' //Enlazar con img
                imgClass='media' //Enlazar con css
            />  

            <LI 
                href='https://www.instagram.com'
                target='blank'
                title='Instagram'
                src='-' //Enlazar con img
                imgClass='media' //Enlazar con css
            />

            <LI 
                href='https://www.whatsapp.com/?lang=es'
                target='blank'
                title='Whatsapp'
                src='-' //Enlazar con img
                imgClass='media' //Enlazar con css
            />        

        </ul>

    </div>
  )
}

export default FooterContacts