# CRUD Users API 🚀

API REST completa para gestionar usuarios, construida con **Node.js**, **Express**, **MongoDB Atlas**, **Mongoose** y testeada con **Jest**.

## 📌 Tecnologías usadas

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Jest
* Dotenv
* Thunder Client

---

## 📂 Estructura del proyecto

```bash
Proyecto
├── config
│   └── db.js
├── controllers
│   └── userController.js
├── models
│   └── User.js
├── routes
│   └── userRoutes.js
├── tests
│   └── userController.test.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

---

## ⚙️ Instalación

Clona el repositorio:

```bash
git clone TU_REPO_URL
```

Instala dependencias:

```bash
npm install
```

---

## 🔐 Variables de entorno

Crea un archivo `.env`:

```env
PORT=8080
MONGO_URI=tu_uri_de_mongodb_atlas
```

---

## ▶️ Ejecutar proyecto

Iniciar servidor:

```bash
node index.js
```

Servidor:

```text
http://localhost:8080
```

---

## 📡 Endpoints

### Obtener todos los usuarios

```http
GET /users
```

---

### Crear usuario

```http
POST /users
```

Body:

```json
{
  "name": "Carolina",
  "age": 30
}
```

---

### Obtener usuario por ID

```http
GET /users/:id
```

---

### Actualizar usuario

```http
PUT /users/:id
```

Body:

```json
{
  "name": "Carolina Updated",
  "age": 31
}
```

---

### Eliminar usuario

```http
DELETE /users/:id
```

---

## 🧪 Testing

Ejecutar tests:

```bash
npm test
```

Ejecutar coverage:

```bash
npx jest --coverage
```

---

## ✅ Cobertura

* Get all users
* Create user
* Get user by id
* Update user
* Delete user

Total: **5 tests passing**

---

## 📍 Estado del proyecto

✅ CRUD completo
✅ MongoDB Atlas conectado
✅ Tests unitarios completos
✅ API funcional
✅ Probado con Thunder Client
