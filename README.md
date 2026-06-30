# Proyecto con React: Cabañas Aguaribay

## 0.⚠️ Aclaración Importante

En la carpeta "server", así como en los hooks de CRUD de Naturaleza, "products" (ver db.json y use--Method--Nature) fue renombrado como "naturalElements".

## 1. 💡 La Idea del Proyecto

Éste es un proyecto realizado en REACT con Vite que sirve como integración y práctica para los conceptos de HTML, CSS y JS vistos durante la cursada.

## 2. 🏢 La Estructura del Proyecto

El proyecto consta de dos partes: la "Maquetación", expresada en las carpetas "REACT" y "CSS" (estilos), y la "API", expresada en la carpeta "server"

### La Maquetación

La Maquetación, como ya se mencionó, se da un proyecto realizado en REACT con Vite que consta tanto de páginas, como componentes, además de archivos CSS importados en un CSS General que actúa para todo del sitio. 

Cada clase en CSS, nombrado en estilo camelCase, se encuentra registrado en cada uno de los archivos .css correspondientes a la página.

**Ejemplo:**

* Pagina_Principal.css
* Naturaleza.css
* Cabañas.css

#### La Estructura de Carpetas
```text
PROYECTO/               # CARPETA RAÍZ
├REACT/                 # Carpeta que contiene la totalidad del proyecto
├   ├ assets/            
├   ├   ├ CSS/
├   ├ 
├   ├ node_modules/         
├   ├ public/
├   ├   ├ cabaña1/
├   ├   ├ cabaña2/
├   ├   ├ cardImages/
├   ├   ├ footerImages/
├   ├   ├ heroSection.png    
├   ├   ├ loadingImage.gif
├   ├   ├ logo.png
├   ├   
├   ├ src
├   ├   ├ components/
├   ├   ├          ├generalComponents/ 
├   ├   ├          ├   ├cards/
├   ├   ├          ├   ├   ├Button.jsx
├   ├   ├          ├   ├   ├Card.jsx
├   ├   ├          ├   ├   ├NatureCard.jsx
├   ├   ├          ├   ├   
├   ├   ├          ├   ├form/
├   ├   ├          ├   ├   ├ContactForm.jsx
├   ├   ├          ├   ├   ├Input.jsx
├   ├   ├          ├   ├   ├Option.jsx
├   ├   ├          ├   ├   ├ReservationForm.jsx
├   ├   ├          ├   ├   ├Select.jsx
├   ├   ├          ├   ├   ├SelectorInput.jsx
├   ├   ├          ├   ├   ├Textarea.jsx
├   ├   ├          ├   ├   
├   ├   ├          ├   ├galleries/
├   ├   ├          ├   ├   ├FirstGallery.jsx
├   ├   ├          ├   ├   ├Images.jsx
├   ├   ├          ├   ├   ├SecondGallery.jsx
├   ├   ├          ├   ├   
├   ├   ├          ├   ├messages/
├   ├   ├          ├      ├GeneralError.jsx
├   ├   ├          ├      ├GeneralLoading.jsx
├   ├   ├          ├      
├   ├   ├          ├   
├   ├   ├          ├jsx/
├   ├   ├          ├   ├footer/
├   ├   ├          ├   ├   ├Footer.jsx
├   ├   ├          ├   ├   ├MediaList.jsx
├   ├   ├          ├   ├   
├   ├   ├          ├   ├header/
├   ├   ├          ├      ├Header.jsx
├   ├   ├          ├      ├Logo.jsx
├   ├   ├          ├      ├Nav.jsx
├   ├   ├          ├      ├RouteNavList.jsx
├   ├   ├          ├     
├   ├   ├          ├layout/
├   ├   ├          ├   ├Layout.jsx
├   ├   ├          ├   
├   ├   ├          ├pages/
├   ├   ├             ├Cabañas.jsx
├   ├   ├             ├Contacto.jsx
├   ├   ├             ├Editor.jsx
├   ├   ├             ├Error.jsx
├   ├   ├             ├Home.jsx
├   ├   ├             ├Indice.jsx
├   ├   ├             ├Login.jsx
├   ├   ├             ├Naturaleza.jsx
├   ├   ├             ├Register.jsx
├   ├   ├             ├ServiciosTurísticos.jsx
├   ├   ├  
├   ├   ├ hooks/
├   ├   ├    ├ nature/
├   ├   ├    ├      ├useDeleteNature.jsx 
├   ├   ├    ├      ├useGetNature.jsx 
├   ├   ├    ├      ├useGetNatureById.jsx 
├   ├   ├    ├      ├usePatchNature.jsx 
├   ├   ├    ├      ├usePostNature.jsx 
├   ├   ├    ├  
├   ├   ├    ├ user/
├   ├   ├    ├      ├useAuth.jsx 
├   ├   ├    ├      ├useGetNatureByEmail.jsx    #Aplicar funcionalidad en useLoginUser.jsx 
├   ├   ├    ├      ├useLoginUser.jsx 
├   ├   ├    ├      ├useRegisterUser.jsx 
├   ├   ├    ├
├   ├   ├    ├ contact/
├   ├   ├    ├      ├useContact.jsx         #Hook que regula el envío de info. hacia la API desde ContactForm.jsx
├   ├   ├    ├
├   ├   ├    ├ reservation/
├   ├   ├         ├useReservation.jsx       #Hook que regula el envío de info. hacia la API desde Reservation.jsx
├   ├   ├         
├   ├   ├ App.jsx
├   ├   ├ config.js
├   ├   ├ index.css    # Archivo .css general para las páginas
├   ├   ├ main.jsx
├   ├   ├ ProtectedRoute.jsx
├   ├   ├ router.jsx   # Ruteo de las páginas          
├   ├        
├   ├ .env             # .env privada, excluida según el .gitignore   
├   ├ .env.example     # Ejemplo de la .env   
├   ├ .gitignore   
├   ├ src
├   ├ index.html   
├   ├ package-lock.json   
├   ├ package.json   
├   ├ README.md   
├   ├ vite.config.js     
├
├ server                # Carpeta de la API local
├   ├ node_modules/  
├   ├ .gitignore 
├   ├ db.json           # Archivo de la API local
├   ├ package-lock.json
├   ├ package.json 
├   ├ README.md          
├   
├ README.md             # Este README en sí mismo

```

---

### Funcionalidades del Proyecto

Entre las funcionalidades del proyecto se encuentran:

* El control de la totalidad de los formularios del proyecto.
* La comunicación correcta entre la API Local y el Frontend.
* Registración, Inicio y Cierre de Sesión de Usuario.
* Funcionalidades específicas de usuarios (renderizado condicional).

#### Colecciones del server

Entre las colecciones funcionales que admite el server (db.json), se encuentran:

```
  http://0.0.0.0:3000/naturalElements
  http://0.0.0.0:3000/user
  http://0.0.0.0:3000/reservation
  http://0.0.0.0:3000/contact
```
