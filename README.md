# 🚀 Angular Kanban Drag & Drop

Aplicación desarrollada en **Angular 12** que implementa un tablero tipo Kanban con funcionalidad de drag & drop utilizando **Angular CDK**.

Permite mover columnas y tareas de forma dinámica dentro de un sistema visual tipo board.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- 📦 **Node.js:** `v14.x` o `v16.x` *(preferiblemente `v24.13.0`)*
- 📦 **npm:** `v6+`
- 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verificar versiones instaladas

Ejecuta en la terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación del proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone <URL_DEL_REPO>
cd angular-kanban-drag-drop
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecutar el proyecto

```bash
ng serve
```

Luego abre en tu navegador:

```bash
http://localhost:4200
```

---

## 🧠 Arquitectura del proyecto

Este proyecto está basado en componentes modulares.

### 📦 KanbanDashboardComponent

- Controla el estado del board
- Maneja columnas y tareas
- Implementa drag & drop entre columnas

### 📦 KanbanColumnComponent

- Renderiza cada columna del tablero
- Contiene las tareas asociadas

### 📦 KanbanItemComponent

- Representa cada tarea
- Muestra título, descripción y prioridad

---

## ⚙️ Funcionalidades principales

- 📦 Reordenar columnas *(drag horizontal)*
- 📌 Mover tareas entre columnas
- 🔄 Reordenar tareas dentro de la misma columna
- 🎯 Drag handle para columnas y cards
- 🧩 UI tipo Kanban *(estilo Trello)*
- 📁 Datos en memoria *(JSON mock)*

---

## 🧰 Tecnologías utilizadas

- 🅰️ Angular 12
- 🧩 Angular CDK Drag & Drop
- ⚡ TypeScript
- 🎨 CSS puro
- 📦 JSON local data

---

## 📁 Estructura del proyecto

```bash
src/app/
├── components/
│   ├── kanban/
│   │   ├── kanban-dashboard/
│   │   ├── kanban-column/
│   │   └── kanban-item/
│   ├── list/
│   └── menu/
├── interfaces/
│   └── kanban.interface.ts
```

---

## 🔥 Conceptos implementados

- Angular CDK Drag & Drop
- Componentes reutilizables
- Comunicación con `@Input`
- Manejo de arrays en memoria
- Transferencia entre listas
- Arquitectura modular

---

## 📄 Licencia

Este proyecto es de uso educativo y forma parte de un portafolio personal.
