 
import MediaList from './MediaList'

function Footer() {
  return (
    <>

    <footer className='footbar'>

    <h2 className='domine-bold title'>Contáctanos</h2>

    <div>

    <p className='domine-bold'>Número Telefónico: +54 9 381 ### ####</p>

    <p className='domine-bold'>E-mail: g#######@gmail.com</p>

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

    </div>

    </footer>

    </>
  )
}

export default Footer