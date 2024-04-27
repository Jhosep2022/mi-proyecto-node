# Nombre de Tu Proyecto

Breve descripción de lo que hace tu proyecto y qué problemas resuelve.
link de la elaboracion del proyecto
https://drive.google.com/file/d/1K4arT12CQsLzM9TLHj64N_GiHHexK66_/view?usp=sharing

## Comenzando

Estas instrucciones te proporcionarán una copia del proyecto en funcionamiento en tu máquina local para fines de desarrollo y pruebas.

### Prerrequisitos

Lo que necesitas para instalar el software y cómo instalarlos.

```bash
node.js
npm
MySQL
```

### Instalación

Una serie de ejemplos paso a paso que te dicen qué hacer para tener un entorno de desarrollo ejecutándose.

1. Clona el repositorio

git clone https://github.com/Jhosep2022/mi-proyecto-node.git

2. Instala las dependencias NPM

```bash
npm install
```

3. Configura las variables de entorno creando un archivo `.env` en la raíz del proyecto y completándolo con tus configuraciones.
```bash
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos
```


4. Ejecuta las migraciones de la base de datos o configura manualmente utilizando el siguiente query SQL para crear tu tabla `users`.

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    edad INT NOT NULL
);
```

5. Inicia el servidor
```bash
npm start
```

Uso
Descripción de cómo usar la aplicación con algunos ejemplos prácticos.

## Crear un Usuario
Para crear un nuevo usuario, envía una solicitud POST a:
```bash
POST http://localhost:3000/users
```
```json
{
  "nombre": "Nombre de Usuario",
  "edad": 30
}
```

## Obtener Usuarios
Para obtener todos los usuarios:

```bash
GET http://localhost:3000/users
```
Para obtener un usuario específico por ID:

```bash
GET http://localhost:3000/users/:id
```

## Actualizar un Usuario
Para actualizar un usuario existente:

```bash
PUT http://localhost:3000/users/:id
```

```json
{
  "nombre": "Nuevo nombre",
  "edad": 30
}
```

## Eliminar un Usuario
Para eliminar un usuario:

```bash
DELETE http://localhost:3000/users/:id
```
