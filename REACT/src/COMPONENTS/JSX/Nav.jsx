import Logo from '../../assets/Logo.png'; 

export function Nav({navClassName, ulClassName, href, src, alt, imgClassName}) {
    
    return(

        <>
        <nav classNameName= {navClassName}>

                <ul classNameName= {ulClassName} >

                    <li>

                        <a href={href}>

                            <img src="logo.png" alt="Cabañas Aguaribay" className="logo"/>

                        </a>
                    </li>

                    <li>
                        <i className="fa-solid fa-bars" style="color: rgb(0, 147, 255);"></i>

                        <a href="../index.html" title="Página Principal" className="domine-bold">Página Principal</a>
                    </li>

                    <li>
                        <i className="fa-regular fa-solid fa-house" style="color: rgb(210, 171, 28)"></i>

                        <a href="#Cabañas.html" title="Cabañas" className="domine-bold">Cabañas</a>
                    </li>

                    <li>
                        <i className="fa-duotone fa-solid fa-location-dot" style="color: rgb(191, 36, 36);"></i>

                        <a href="Servicios_Turisticos_Ubicación.html" title="Servicios Turísticos y Ubicación"
                            className="domine-bold">Servicios Turísticos y Ubicación</a>
                    </li>

                    <li>
                        <i className="fa-regular fa-envelope" style="color: rgb(187, 86, 77);"></i>

                        <a href="Contacto_Dudas.html" title="Contacto & Dudas" className="domine-bold">Contacto & Dudas</a>
                    </li>

                </ul>

        </nav>
        
        
        
        </>

    );
};