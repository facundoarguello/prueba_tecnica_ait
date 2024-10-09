# prueba_tecnica_ait

Este proyecto es una prueba técnica para la empresa AIT Solutions. Contiene dos carpetas: Frontend y Backend. Es una aplicación que muestra un listado de artículos y permite agregar, modificar y borrar dichos artículos.

* Frontend: desarrollado con React.js.
* Backend: desarrollado con Django y utiliza una base de datos MySQL.
* Versión de Python: 3.8.
* Sistema Operativo: Linux Ubuntu 22.04.1 LTS.



### Pre-requisitos 📋

_Necesitaras Docker para el funcionamiento del proyecto _
para mas información les dejo la documentación de docker :https://docs.docker.com/desktop/install/linux-install/

_Asegúrate de que los puertos 8000, 9000 y 3306 no estén ocupados_

```
sudo lsof -i:3306 
sudo lsof -i:8000 
sudo lsof -i:9000 
```

_Si alguno de los puertos está ocupado, puedes liberar el puerto con el siguiente comando_

```
kill -9 PID
```

## Levantar localmente el proyecto ⚙️

_Para levantar el proyecto, colócate en la ruta donde está el archivo docker-compose.yml. Luego abre tu terminal y ejecuta:_

```
docker compose up
```
| CONTAINER ID  | IMAGE                        | COMMAND                   | CREATED         | STATUS        | PORTS                                                 | NAMES     |
|---------------|------------------------------|---------------------------|-----------------|---------------|-------------------------------------------------------|-----------|
| 52e927950795  | prueba_tecnica_ait-frontend  | docker-entrypoint.sh      | 7 seconds ago  | Up 6 seconds  | 0.0.0.0:8000->8000/tcp, :::8000->8000/tcp            | app_fe    |
|               |                              |                           |                 |               |                                                       |           |
| 051d571d5624  | prueba_tecnica_ait-backend   | sh -c 'python3 manage.py' | 24 minutes ago | Up 5 seconds  | 8000/tcp, 0.0.0.0:9000->9000/tcp, :::9000->9000/tcp | api_be    |
|               |                              |                           |                 |               |                                                       |           |
| b5bae3e3a8e1  | mysql:5.7                    | docker-entrypoint.sh      | 34 minutes ago | Up 6 seconds  | 0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp | db_mysql_dk|

### Analice las pruebas end-to-end 🔩

_CUna vez que los contenedores estén en funcionamiento:

* El backend estará disponible en: localhost:9000.
* El frontend estará disponible en: localhost:8000.


* Accede a localhost:8000
![Home](/images_mk/home.png)- Un pequeño inicio con un mensaje
* Haz clic en el botón Comenzar o en el botón List (arriba a la derecha).
![Pantalla que lista todos los articulos](/images_mk/list.png) - Pantalla que muestra todos los artículos

* Para exportar artículos, haz clic en el botón Export. Al hacerlo, se descargará un archivo Excel.
![Archivo descargado](/images_mk/exceldown.png)- Archivo descargado
![Un vistazo del archivo](/images_mk/excelfile.png) -Un vistazo del archivo
* Para importar artículos, haz clic en el botón Import. Aparecerá una ventana para seleccionar un archivo.
![Archivo xlsx que debe respertar este formato y el nombre de las columnas](/images_mk/fileprueba.png) -El archivo Excel debe respetar este formato y los nombres de las columnas.-

![Datos insertados](/images_mk/listinsert.png) - Resultado

* Pantalla para insertar un articulo
![Pantalla para insertar un articulo](images_mk/add.png)

* Pantalla para modificar un articulo
![Pantalla para modificar un articulo](images_mk/up.png)

* Para borrar un artículo, haz clic en el siguiente icono

  
![Para borrar se debe clickear este icono](images_mk/del.png)

## Pruebas e Integración Continua 🚀
    Este proyecto utiliza GitHub Actions para la ejecución automatizada de tests. Las pruebas se ejecutan en cada push o pull request gracias a un workflow definido en el archivo .github/workflows/test.yml.
## Construido con 🛠️

* [Docker](https://docs.docker.com/manuals/) - Para la gestión de contenedores.
* [Python3.8](https://docs.python.org/3.8/) -  Lenguaje de programación utilizado para el backend.
* [Ddjango rest framework](https://www.django-rest-framework.org/) -  Framework de Django utilizado para crear la API.
* [Reactjs](https://legacy.reactjs.org/docs/getting-started.html) - Framework para el desarrollo del frontend.
* [Vite](https://carlosazaustre.es/react-vite) - Utilizado para la compilación rápida de React.js.
* [MUI](https://mui.com/material-ui/all-components/) - Utilizado para los componentes UI del frontend, con diseños predefinidos.
* [POSTMAN](https://documenter.getpostman.com/view/25670044/2sA2xk1roH) - Documentación de la API del backend.

## Arquitectura del Proyecto 🏗️

Este proyecto sigue los principios de una **arquitectura limpia** tanto en el **backend** como en el **frontend**, asegurando una separación clara de responsabilidades y facilitando el mantenimiento, la escalabilidad y las pruebas.

#### Backend

En el backend, desarrollado con **Django**, la arquitectura limpia está organizada en las siguientes capas:

- **Data**: Manejo de las interacciones con la base de datos y otras fuentes de datos externas.
- **Domain**: Contiene la lógica de negocio principal y las entidades del dominio.
- **Interfaces**: Define los controladores, APIs y cualquier comunicación con otros sistemas o interfaces de usuario.
- **UseCases**: Contiene los casos de uso que orquestan las interacciones entre las entidades de dominio y las interfaces.

#### Frontend

En el frontend, desarrollado con **React.js**, también se sigue una estructura modular y desacoplada, organizando el código en:

- **Componentes**: UI reutilizable y centrada en la presentación.
- **Servicios**: Lógica de negocio y llamadas a la API.
- **Hooks personalizados**: Encapsulan lógica reutilizable que gestiona el estado y los efectos.
- **Pages**: Organizan las paginas que el proyecto tiene.

Este enfoque permite un código más mantenible y extensible, adecuado para proyectos que requieren crecimiento continuo.


## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Facundo Argüello** - *Trabajo Inicial* - [facundoarguello](https://github.com/facundoarguello)
* **Andrés Villanueva** - *Plantilla de markdown* - [villanuevand](https://github.com/villanuevand)

## Expresiones de Gratitud 🎁

* Quiero agradecer a los chicos de Ait, por darme esta oportunidad. Es un reto que no es complicado pero te lleva tiempo y esfuerzo.📢

---
⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 
