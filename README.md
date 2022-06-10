# PaymentProcessor

## Instrucciones para correr el proyecto
- Descargar o clonar el repositorio
- Ubicarse en la carpeta de API-BackEnd, abrir terminal y correr **npm i**
- Ubicarse en la carpeta de API-BackEnd, ejecutar **npm run devstart**
- Ubicarse en la carpeta de front-end, abrir terminal y correr **npm i**
- Ubicarse en la carpeta de front-end, ejecutar **npm run devstart**

## Instrucciones para ejecutar pruebas de Cypress
- Se requiere tener corriendo el proyecto en local, es decir, seguir los pasos anteriores
- Ubicarse en la carpeta de front-end **(se requiere haber hecho previamente una instalación de las dependencias)** 
- Ejecutar el comando **npm run cypress**
- Abrir el espacio de pruebas E2E
- Seleccionar el navegador Chrome
- Seleccionar el archivo ubicado en *e2e/user-access.cy.js*

## Consideraciones especiales
- Para la creación de perfiles contamos con 3 perfiles: "Cliente", "Admin" y "Superadmin", cada uno con diferentes permisos
- El perfil de cliente se puede crear desde el registro del sitio web
- El perfil de admin se puede crear al iniciar sesión desde otro usuario Superadmin o Admin
- El perfil de superadmin se puede crear al iniciar sesión desde otro usuario Superadmin
- **Importante**: con la finalidad de que solo un administrador del sistema pueda crear a los admin y superadmin (evita brechas de seguridad), en ambiente local para crear el primer usuario admin o superadmin se deberá cambiar en base de datos de **rol** de **Cliente** a **Superadmin** o **Admin** (respetar mayúsculas), para algún usuario previamente registrado.

## URL a producción en HEROKU
- API o Backend (cuenta con protección de JSON Tokens): https://payment-p-api.herokuapp.com
- Sistema o Frontend: https://payment-p.herokuapp.com
- **Importante**: para facilitar el uso de perfiles en producción, se cuenta ya en base de datos con un **perfil superadmin: (email: superadmin@yopmail.com, password: asdf)** y con un **perfil admin: (email: admin@yopmail.com, password: asdf)**
