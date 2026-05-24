# Changelog (Historial de Cambios) - SIGR

Todos los cambios notables realizados en el proyecto **Sistema Integral de Gestión de Restaurante (SIGR)** serán documentados en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto se adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [1.0.0] - 2026-05-24
### Hito: Línea Base del Software (AA2)
Esta versión representa la primera versión estable del código fuente (Línea Base) y sirve como punto de partida para el control de versiones y gestión de configuración grupal.

#### Añadido
- **Módulo de Autenticación de Usuarios**: Incorporación de pantalla de Login elegante con diseño glassmorphic y validación de correo electrónico de prueba.
- **Control de Roles**: Lógica para filtrar los módulos de la barra lateral dependiendo del rol (`admin` accede a todo, `mesero` a operaciones, `cocinero` a producción y catálogo).
- **Módulo de Gestión de Pedidos en Tiempo Real**: Nueva vista "Administrar Pedidos" con tabla dinámica de control, cola de pedidos y actualizaciones de estado.
- **Facturación Automática desde Pedidos**: Vinculación que permite autocompletar y emitir facturas con 1 solo clic desde la lista de pedidos completados.
- **Vinculación de Clientes Dinámica**: Registro automático de consumos en el historial del cliente (gasto y pedidos totales) al confirmar pedidos.
- **Buscador Global Contextual**: Lógica en JavaScript que filtra listas de forma inteligente y reactiva en función del módulo activo.
- **Modal de Detalle de Factura**: Vista estilizada en formato de ticket/recibo comercial moderno con cálculos fiscales reales y botón directo para impresión física.
- **Licencia y Changelog**: Adición de `LICENSE.txt` (Licencia MIT) y `CHANGELOG.md` para cumplir con las directrices de Gestión de Configuración.

#### Corregido
- **Error Crítico de Inicialización (Console Crash)**: Reparado el fallo en `js/script.js` que llamaba a una función no definida `renderPedidos()` en el inicio de la app, permitiendo que el software cargue y compile/ejecute al 100% de manera impecable.

#### Cambiado
- **Alineación de Autoría en Footer**: Ajustado el pie de página de la aplicación a "Realizado por Carlos Carrascal y Ajustado por Luis García" para mantener la trazabilidad de los desarrolladores.
- **Visuales Premium**: Modernización de CSS con variables de color HSL, gradientes, bordes suaves y transiciones sutiles en todos los botones y tablas.
