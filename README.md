# Proyecto con React: Cabañas Aguaribay

## 0.⚠️ Aclaración Importante

En la carpeta "server", así como en los hooks de CRUD de Naturaleza, "products" (ver db.json y use--Method--Nature) fue renombrado como "naturalElements"

## 1. 💡 La Idea del Proyecto

Éste es un proyecto realizado en REACT con Vite que sirve como integración y práctica para los conceptos de HTML, CSS y JS vistos durante la cursada.

## 2. 🏢 La Estructura del Proyecto

El proyecto consta de dos partes: la "Maquetación", expresada en las carpetas "REACT" y "CSS" (estilos), y la "API", expresada en la carpeta "server"

### La Maquetación

La Maquetación, como ya se mencionó, se da un proyecto realizado en REACT con Vite que consta, además de archivos CSS para los estilos particulares de cada elemento, componente o página del sitio... 

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
├   ├   ├    ├      ├generalComponents/ 
├   ├   ├    ├      ├   ├cards/
├   ├   ├    ├      ├   ├   ├Button.jsx
├   ├   ├    ├      ├   ├   ├Card.jsx
├   ├   ├    ├      ├   ├   ├NatureCard.jsx
├   ├   ├    ├      ├   ├   
├   ├   ├    ├      ├   ├form/
├   ├   ├    ├      ├   ├   ├ContactForm.jsx
├   ├   ├    ├      ├   ├   ├Input.jsx
├   ├   ├    ├      ├   ├   ├Option.jsx
├   ├   ├    ├      ├   ├   ├ReservationForm.jsx
├   ├   ├    ├      ├   ├   ├Select.jsx
├   ├   ├    ├      ├   ├   ├SelectorInput.jsx
├   ├   ├    ├      ├   ├   ├Textarea.jsx
├   ├   ├    ├      ├   ├   
├   ├   ├    ├      ├   ├galleries/
├   ├   ├    ├      ├   ├   ├FirstGallery.jsx
├   ├   ├    ├      ├   ├   ├Images.jsx
├   ├   ├    ├      ├   ├   ├SecondGallery.jsx
├   ├   ├    ├      ├   ├   
├   ├   ├    ├      ├   ├messages/
├   ├   ├    ├      ├   ├   ├GeneralError.jsx
├   ├   ├    ├      ├   ├   ├GeneralLoading.jsx
├   ├   ├    ├      ├   ├   
├   ├   ├    ├      ├   
├   ├   ├    ├      ├jsx/
├   ├   ├    ├      ├   ├footer/
├   ├   ├    ├      ├   ├   ├Button.jsx
├   ├   ├    ├      ├   ├   ├Card.jsx
├   ├   ├    ├      ├   ├   ├NatureCard.jsx
├   ├   ├    ├      ├   ├   
├   ├   ├    ├      ├   ├header/
├   ├   ├    ├      ├   ├   ├ContactForm.jsx
├   ├   ├    ├      ├   ├   ├Input.jsx
├   ├   ├    ├      ├   ├   ├Option.jsx
├   ├   ├    ├      ├   ├   ├ReservationForm.jsx
├   ├   ├    ├      ├   ├   ├Select.jsx
├   ├   ├    ├      ├   ├   ├SelectorInput.jsx
├   ├   ├    ├      ├   ├   ├Textarea.jsx
├   ├   ├    ├      ├   ├   
├   ├   ├    ├      ├layout/
├   ├   ├    ├      ├pages/
├   ├   ├    ├      
├   ├   ├    ├  
├   ├   ├    ├ user/
├   ├   ├    ├      ├useAuth.jsx 
├   ├   ├    ├      ├useGetNatureByEmail.jsx #Aplicar funcionalidad en l.58
├   ├   ├    ├      ├useLoginUser.jsx 
├   ├   ├    ├      ├useRegisterUser.jsx 
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
├   ├   ├    ├      ├useGetNatureByEmail.jsx #Aplicar funcionalidad en L.57
├   ├   ├    ├      ├useLoginUser.jsx 
├   ├   ├    ├      ├useRegisterUser.jsx 
├   ├   ├    
├   ├   ├ App.jsx
├   ├   ├ config.js
├   ├   ├ index.css    # Archivo .css general para las páginas
├   ├   ├ main.jsx
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




