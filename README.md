<<<<<<< HEAD
# 🖥 Sistema Web de Monitoreo y Control de Servidores TI

![HTML5](https://img.shields.io/badge/HTML5-Structure-orange)
![CSS3](https://img.shields.io/badge/CSS3-Design-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-Dynamic-yellow)
![API REST](https://img.shields.io/badge/API-REST-green)



## 📌 Descripción General

El **Sistema Web de Monitoreo y Control de Servidores TI** es una aplicación desarrollada con tecnologías web que permite administrar, controlar y monitorear servidores en tiempo real mediante una API REST.

Este sistema simula un entorno empresarial donde es necesario supervisar constantemente el estado de los servidores para prevenir fallas, sobrecalentamiento o consumo excesivo de recursos.

La aplicación está compuesta por tres módulos principales:

- 🛠 Administración
- 🎛 Control
- 📊 Monitoreo



## 🎯 Objetivo del Proyecto

Desarrollar una plataforma web interactiva que permita:

- Gestionar servidores (crear, editar y eliminar).
- Controlar su estado (activo/inactivo).
- Visualizar métricas en tiempo real.
- Presentar información en un dashboard moderno y profesional.
- Simular un entorno real de supervisión tecnológica.



## 🛠 Tecnologías Utilizadas

- **HTML5** – Estructura del sistema.
- **CSS3** – Estilos personalizados.
- **Bootstrap 5** – Diseño responsive y componentes visuales.
- **JavaScript (Vanilla JS)** – Lógica dinámica.
- **Fetch API** – Comunicación con la API.
- **MockAPI** – API REST simulada para almacenamiento de datos.
- **Git & GitHub** – Control de versiones.



## 📂 Estructura del Proyecto

## 📁 Sistema-Monitoreo-Servidores/
- │
- ├── index.html → Menú principal del sistema
- ├── admin.html → Administración de servidores (CRUD)
- ├── control.html → Activar / desactivar servidores
- ├── monitoreo.html → Visualización de métricas
- └── README.md



## ⚙️ Funcionalidades Principales

### 🛠 1. Administración de Servidores
- Crear nuevos servidores.
- Editar información existente.
- Eliminar servidores.
- Guardado dinámico mediante API REST.

### 🎛 2. Control de Servidores
- Activar o desactivar servidores.
- Cambio de estado en tiempo real.
- Interfaz tipo panel administrativo moderno.

### 📊 3. Monitoreo en Tiempo Real
- Visualización de métricas:
  - CPU
  - RAM
  - Temperatura
- Indicadores visuales de estado.
- Actualización dinámica.
- Visualización clara y organizada.



## 🌎 Problema que Resuelve

En muchas organizaciones pequeñas y medianas no existe un sistema claro de supervisión de servidores. Esto puede provocar:

- 🔥 Sobrecalentamiento.
- ⚠️ Uso excesivo de CPU o RAM.
- ❌ Caídas inesperadas del sistema.
- 📉 Pérdida de rendimiento.
- 💰 Pérdidas económicas por interrupciones.

Este proyecto propone una solución simple y accesible desde cualquier navegador, permitiendo monitorear y controlar dispositivos de forma remota.



## 💡 Justificación

Este sistema fue desarrollado con el propósito de simular una herramienta real utilizada en departamentos de Tecnología de la Información (TI).

En entornos reales como:

- 🏢 Empresas corporativas.
- 🏥 Hospitales.
- 🏦 Bancos.
- 🏫 Universidades.
- ☁ Plataformas en la nube.

Es fundamental contar con monitoreo constante para evitar fallas críticas.

Este proyecto demuestra cómo se puede construir una solución funcional utilizando tecnologías web básicas pero bien estructuradas.


# 🖥 Sistema Web de Monitoreo y Control de Servidores TI

Sistema web interactivo que simula un entorno profesional tipo NOC (Network Operations Center) para la gestión, monitoreo y control de servidores distribuidos por pisos dentro de una infraestructura TI.

![HTML5](https://img.shields.io/badge/HTML5-Structure-orange)
![CSS3](https://img.shields.io/badge/CSS3-Design-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-Dynamic-yellow)
![API REST](https://img.shields.io/badge/API-REST-green)

## 🚀 Descripción General

Este proyecto permite:

- 📊 Monitorear servidores en tiempo real
- ⚡ Simular carga automática
- 🚨 Detectar anomalías
- 🔌 Encender y apagar servidores manualmente
- 🏢 Gestionar servidores por piso
- ☁ Persistir datos en MockAPI (API REST simulada)

Todo el sistema está sincronizado mediante una API REST, permitiendo que los cambios se reflejen automáticamente en todos los módulos.



## 🏗 Estructura del Proyecto

- `piso.html` → Gestión y simulación de servidores por piso  
- `control.html` → Centro de control general (encendido / apagado)  
- `monitoreo.html` → Panel visual en tiempo real tipo dashboard  
- `README.md` → Documentación del proyecto  



## 🧠 Funcionalidades Implementadas

### 🏢 Gestión por Piso (piso.html)

- Agregar servidores dinámicamente
- Eliminar servidores
- Simulación automática de carga cada pocos segundos
- Generación intencional de anomalías para demostración
- Actualización automática en MockAPI
- Detección automática de estado:
  - 🟢 Estable
  - 🟡 Medio
  - 🔴 Crítico
- Notificación visual cuando un servidor entra en estado crítico



### 🎛 Centro de Control (control.html)

- Visualización global de todos los servidores
- Ordenamiento automático por piso
- Encendido y apagado manual
- Cambio de estado reflejado en MockAPI
- Sincronización automática con monitoreo y piso
- Indicador visual cuando el servidor está en estado crítico



### 📊 Panel de Monitoreo (monitoreo.html)

- Visualización por piso
- Tarjetas uniformes para presentación profesional
- Indicadores visuales de estado
- Gráficas tipo doughnut con Chart.js
- Actualización automática en tiempo real
- Alerta visual cuando un servidor entra en estado crítico
- Si un servidor está apagado → muestra mensaje independiente de "Servidor Apagado"



## 🔄 Flujo del Sistema
piso.html → Simulación de carga
↓
MockAPI actualiza datos
↓
monitoreo.html detecta anomalía
↓
control.html permite apagar servidor
↓
MockAPI actualiza estado
↓
Todos los módulos se sincronizan automáticamente



## 🌡 Lógica de Estados

| Carga (%) | Estado   |
|-----------|----------|
| 0 – 69%   | Estable  |
| 70 – 89%  | Medio    |
| 90 – 100% | Crítico  |

Cuando un servidor entra en estado crítico:

- Se muestra alerta visual
- Se genera notificación tipo toast
- Puede apagarse desde el Centro de Control


## ⚙ Tecnologías Utilizadas

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Vanilla JS)
- Chart.js
- MockAPI (API REST simulada)



## 🛠 Estructura de Datos en MockAPI

Ejemplo de registro de servidor:

```json
{
  "id": "1",
  "name": "SRV-P1-101",
  "floor": 1,
  "carga": 75,
  "status": "Medio",
  "power": true
}

