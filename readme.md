# PROYECTO FORMATIVO

> Backend REST API en Node.js con MongoDB (ES6)

---

## Tabla de contenidos

1. [Instructor](#instructor)  
2. [Descripción](#descripción)  
3. [Tecnologías](#tecnologías)  
4. [Arquitectura](#arquitectura)  
5. [Requisitos](#requisitos)  
6. [Instalación](#instalación)  
7. [Notas del proyecto](#notas-del-proyecto)  
8. [Documentación](#documentación-de-mongodb)

---

## Instructor

- **GitHub**: <a href="https://github.com/WalterArias" target="_blank" rel="noopener noreferrer">Walter Arias</a>

---

## Descripción

Este proyecto es una **API REST** construida con **Node.js** (ES6) y **MongoDB**, siguiendo arquitectura orientada a servicios y patrón MVC (sin vistas, sólo rutas). Permite gestionar recursos mediante peticiones HTTP.

---

## Tecnologías

- **Node.js** (ES6)  
- **Express**  
- **MongoDB**  
- **Mongoose**  
- **JWT** para autenticación  
- **bcryptjs** para encriptar contraseñas  
- **multer** para gestión de archivos (subidas)  
- **cors** para manejo de CORS  

---

## Arquitectura

- **Orientada a Servicios (API REST)**  
- **Modelo–Vista–Controlador (MVC)**  
  - `controllers/` → Lógica de negocio  
  - `models/`      → Definición de esquemas Mongoose  
  - `routes/`      → Definición de rutas y middlewares  

---

## Requisitos

- **Node.js** v14+  
- **npm** o **yarn**  
- **MongoDB** (local o Atlas)

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/NicolasMoralesC10/eTienda-ecmaScript-6.git
   cd eTienda-ecmaScript-6

---

## Notas-del-proyecto

- Si Node.js no corre en Windows 11, habilita la ejecución de scripts:
  ```powershell
  Set-ExecutionPolicy Unrestricted
  
---

## Documentación de MongoDB

### MongoDB (referencia oficial)
- [Manual de métodos de MongoDB](https://www.mongodb.com/docs/manual/reference/method/)

### Mongoose (librería de Node.js para MongoDB)
- [Guía de métodos en Mongoose](https://mongoosejs.com/docs/guide.html#methods)

  
