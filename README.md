# MI API REST Node.js

Esta es una API RESTful desarrollada con Node.js, Express y TypeScript, siguiendo una arquitectura clara y buenas prácticas. Este proyecto cumple con los requerimientos establecidos para la presentación del aprendiz.

## Requerimientos Cumplidos

- ✅ **Código completo de la API:** Disponible en el directorio `src/`.
- ✅ **Archivo `package.json` con dependencias:** Incluido en la raíz del proyecto, configurado con scripts para desarrollo y compilación.
- ✅ **Archivo JSON con la colección:** Se adjunta el archivo `postman_collection.json` en la raíz del repositorio. Puedes importarlo directamente a Postman, Insomnia o herramientas similares para probar los endpoints.
- ✅ **Instrucciones de instalación y ejecución:** Detalladas a continuación.
- ✅ **Estructura clara del proyecto:** El código está organizado con una separación lógica (controladores, modelos, rutas) que se explica más adelante.

---

## Instrucciones de Instalación y Ejecución

Para correr este proyecto en tu entorno local, asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, sigue estos pasos:

### 1. Clonar el repositorio
Si aún no lo has hecho, clona este repositorio en tu máquina y navega al directorio del proyecto.

### 2. Instalar dependencias
Abre una terminal en la raíz del proyecto y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias definidas en el `package.json` (Express, TypeScript, CORS, etc.).

### 3. Ejecución en Modo Desarrollo
Para ejecutar el servidor con recarga automática (ideal cuando estás modificando código), usa:

```bash
npm run dev
```
La API estará disponible en `http://localhost:3000`.

### 4. Compilación y Ejecución en Producción
Para compilar el código TypeScript a JavaScript puro y correr la versión final de producción, ejecuta:

```bash
npm run build
npm start
```

---

## Estructura Clara del Proyecto

El proyecto está organizado de la siguiente manera para mantener un código limpio, escalable y mantenible:

```text
mi-api-rest-node-js/
│
├── src/                    # Código fuente principal de la API
│   ├── controllers/        # Lógica de los endpoints (User Controller)
│   ├── models/             # Modelos de datos e interfaces (User Model)
│   ├── routes/             # Definición de las rutas/endpoints de la API
│   └── index.ts            # Punto de entrada de la aplicación y configuración de Express
│
├── dist/                   # Archivos JavaScript compilados (se genera con npm run build)
├── node_modules/           # Dependencias del proyecto
├── postman_collection.json # Colección de pruebas para importar a Postman
├── package.json            # Configuración de dependencias y scripts
└── tsconfig.json           # Configuración del compilador de TypeScript
```

## Endpoints Disponibles (Rutas)

La API cuenta con las operaciones CRUD completas para la entidad `Users`:

- **GET /api/users** - Obtiene todos los usuarios.
- **GET /api/users/:id** - Obtiene un usuario específico por su ID.
- **POST /api/users** - Crea un nuevo usuario.
- **PUT /api/users/:id** - Actualiza la información de un usuario existente.
- **DELETE /api/users/:id** - Elimina un usuario.
- **GET /** - Ruta de prueba que retorna el estado de la API.
