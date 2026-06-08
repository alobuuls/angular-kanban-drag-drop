<h1 align="center">📋 Angular Kanban Drag & Drop</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-12-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Angular%20CDK-Drag%20%26%20Drop-blue" alt="Angular CDK" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular-kanban-drag-drop" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular-kanban-drag-drop/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular-kanban-drag-drop?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular-kanban-drag-drop/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular-kanban-drag-drop" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [📋 Angular Kanban Drag & Drop](#-angular-kanban-drag--drop)

  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [▶️ Run the Project](#️-run-the-project)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [🔥 Best Practices Implemented](#-best-practices-implemented)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular-kanban-drag-drop/

---

## 📖 Description

> [!NOTE]
> Angular 12 application that implements a Kanban board with Drag & Drop functionality using Angular CDK.

The project allows users to reorder columns, move tasks between columns, and organize information visually through a Trello-style interface while demonstrating reusable components, modular architecture, and drag-and-drop interactions.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

* 📦 **Node.js:** `v12.14.x – v14.x` *(recommended: v14.21.3 LTS)*
* 📦 **npm:** `v6+`
* 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular-kanban-drag-drop.git

cd angular-kanban-drag-drop
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## 🧠 Project Architecture

The application follows a modular component-based architecture focused on Drag & Drop interactions.

### 📦 Kanban Dashboard Component

Responsible for:

* Board state management
* Column organization
* Drag & Drop orchestration
* Task movement handling
* Data synchronization

### 📦 Kanban Column Component

Responsible for:

* Column rendering
* Task grouping
* Drop zone management
* Column interactions

### 📦 Kanban Item Component

Responsible for:

* Task rendering
* Task information display
* Drag item behavior
* UI consistency

### 📦 Menu Component

Responsible for:

* Navigation rendering
* Application structure
* User interaction entry points

### 📦 Interfaces

Responsible for:

* Kanban data contracts
* Type safety
* Board structure definition

---

## ✨ Features

* 📋 Kanban board interface
* 🧩 Angular CDK Drag & Drop
* ↔️ Column reordering
* 📌 Task movement between columns
* 🔄 Task reordering inside columns
* 🎯 Drag handles for tasks and columns
* 📦 Local JSON data source
* 🧠 Dynamic board updates
* 🎨 Trello-style user interface
* 🚀 Modular component architecture

---

## 🛠 Technologies Used

| Technology              | Purpose                   |
| ----------------------- | ------------------------- |
| Angular 12              | Framework                 |
| TypeScript              | Application Logic         |
| Angular CDK Drag & Drop | Drag & Drop Functionality |
| JSON Data               | Mock Data Source          |
| HTML5                   | Structure                 |
| CSS3                    | Styling                   |

---

## 📁 Project Structure

```text
angular-kanban-drag-drop/

├── src/
│
├── app/
│   │
│   ├── components/
│   │   ├── kanban/
│   │   │   ├── kanban-dashboard.component.*
│   │   │   ├── kanban-column/
│   │   │   └── kanban-item/
│   │   │
│   │   ├── list/
│   │   └── menu/
│   │
│   ├── interfaces/
│   │   └── kanban.interface.ts
│   │
│   ├── app.component.ts
│   └── app.module.ts
│
├── assets/
│   └── json/
│       └── data.json
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔥 Best Practices Implemented

* Component-based architecture
* Separation of concerns
* Strong typing with TypeScript interfaces
* Angular CDK integration
* Reusable UI components
* Modular project organization
* Drag & Drop abstraction
* Scalable board structure
* Data-driven UI rendering
* Maintainable code organization

---

## 🎯 Project Goal

Practice and strengthen Angular UI interaction concepts through the implementation of a Kanban board application:

* Angular CDK
* Drag & Drop
* Component Communication
* TypeScript Interfaces
* Reusable Components
* Dynamic Rendering
* State Management
* Front-End Architecture
* User Experience Design
* Modular Development

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.
