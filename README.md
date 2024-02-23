<div align="center">
  <img src="https://res.cloudinary.com/dgxkfjsbz/image/upload/v1708676439/enerclic-removebg-preview_sbfjlm.png" alt="Enerclic" width="200">
</div>

# Prueba Enerclic

## Descripción

API desarrollada para la gestión de dispositivos y autenticación de usuarios. Permite crear usuarios, iniciar sesión y administrar dispositivos de forma segura y eficiente.

## Tecnologías Utilizadas

- Node.js
- Express
- Prisma
- SQLite
- JWT para autenticación

## Por qué he utilizado Prisma

Prisma es un ORM (Object-Relational Mapping) moderno y seguro que facilita el trabajo con bases de datos en aplicaciones Node.js.
Elegi utilizarlo en este proyecto por varias razones:

-Productividad y facilidad de uso.
-Seguridad.
-Migraciones declarativas y control de Esquemas.
-Lo he utilizado con anterioridad y además cuenta con una amplia documentación.

## Instalación

Para instalar las dependencias del proyecto, sigue estos pasos:

```bash
git clone https://github.com/tu-usuario/prueba-enerclic.git
cd prueba-enerclic
npm install
```

## Configuración

Crea un archivo `.env` en la raíz del proyecto y añada por ejemplo las siguientes variables de entorno:

```env
PORT=3000
JWT_SECRET=enerclic
```

Además, puede encontrar un ejemplo del .env en el archivo denominado env.example. Este archivo sirve como plantilla para su configuración.

## Ejecutar Migraciones

Para crear la base de datos y aplicar las migraciones:

```bash
npx prisma migrate dev
```

## Ejecutar la Aplicación

Para iniciar el servidor:

```bash
npm run dev
```

## Uso de la API

### Endpoints Disponibles

- **POST /createUser**: Registra un nuevo usuario.
- **POST /login**: Inicia sesión y devuelve un token JWT.
- **POST /dispositivo**: Se utilizó una sola vez para insertar todos los dispositivos en la base de datos.
- **GET /getData**: Obtiene datos de dispositivos de forma jerárquica (requiere autenticación).

### Autenticación

Para acceder a los endpoints protegidos, incluye el token JWT en el header `Authorization`:

```plaintext
Authorization: Bearer <tuTokenJWT>
```

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
