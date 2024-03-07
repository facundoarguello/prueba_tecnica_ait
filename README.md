# prueba_tecnica_ait

Este es proyecto es una prueba tecnica para la empres Ait solutions.Contiene dos carpetas Front end y Back end.
En si es una aplicacion que muestra una listados de articulos y su agregado, modificado y borrado de ellos.
El front end esta hecho con lenguaje Reactjs -
El back end esta hecho con django y con una base de datos mysql.
python version 3.8-
sistema operativo linux Ubuntu 22.04.1 LTS



### Pre-requisitos 📋

_Necesitaras para el funcionamiento del proyecto Docker_
para mas informacion les dejo la documentacion de docker :https://docs.docker.com/desktop/install/linux-install/
Habre tu consola de linux.
```

sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Instalación 🔧

_No necesitas intalar nada mas , ya uqe docker maneja todos los paquetes _



## Ejecutando las pruebas ⚙️

_Para levantar el proyecto debes solo pararte en la ruta donde esta el docker-compose.yml_

abres tu consola 
Te paras en la carpeta principal del docker-ompose.yml
```
docker compose up
```

### Analice las pruebas end-to-end 🔩

_Cuando este levantado eldocker le mostrara que la api de backend esta hosteado en localhost:9000_
_Que el front end esta hosteado en localhost:8000_



## Construido con 🛠️

* [Docker](https://docs.docker.com/manuals/) - Para el manejo de los contenedores
* [Python3.8](https://docs.python.org/3.8/) - Lenguaje para el back
* [Ddjango rest framework](https://www.django-rest-framework.org/) - Django framework
* [Reactjs](https://legacy.reactjs.org/docs/getting-started.html) - Usado para generar RSS
* [Vite](https://carlosazaustre.es/react-vite) - Usado para la compilación rapida de Reactjs
* [MUI](https://mui.com/material-ui/all-components/) - Usado para la seleccion de los componentes, esto me resulta mucho mas facil , por que tiene diseños predeterminados


## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Facundo Argüello** - *Trabajo Inicial* - [facundoarguello](https://github.com/facundoarguello)
**Andrés Villanueva** - *Plantilla de markdown* - [villanuevand](https://github.com/villanuevand)

## Expresiones de Gratitud 🎁

* Quiero agradecer a los chicos de Ait, por darme esta oportunidad. Es un reto que no es complicado pero te lleva tiempo y esfuerzo.📢

---
⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 