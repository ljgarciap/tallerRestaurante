# Sistema Integral de Gestión de Restaurante (SIGR) - "El Gourmet"

SIGR es una plataforma web integral desarrollada con estándares de diseño premium utilizando HTML5, CSS3 vanilla y JavaScript (ES6+). Está orientado a optimizar los flujos operativos en restaurantes mediante módulos enlazados e interactivos de pedidos, reservas, administración de menú, facturación y analíticas en tiempo real.

Este repositorio y su versión actual representan el establecimiento de la Línea Base del Software (Hito de Estabilidad Inicial v1.0.0) para la actividad grupal académica AA2.

---

## Características y Módulos Implementados

### 1. Autenticación y Control de Roles (Línea Base)
- Pantalla de inicio de sesión con diseño moderno y efectos visuales de cristal (Glassmorphism).
- **Acceso Directo por Roles**:
  - **Administrador / Gerente**: Acceso total al sistema.
  - **Mesero**: Acceso exclusivo a los módulos de Pedidos (para registrar comandas), Reservas e historial de Clientes.
  - **Cocinero**: Acceso exclusivo al módulo de Menú (para gestionar existencias) y a la vista de Pedidos (cola de producción).

### 2. Módulo de Pedidos y Seguimiento en Tiempo Real
- **Registrar Pedido**: Carrito de compras reactivo enlazado al catálogo de platos.
- **Cola de Pedidos**: Panel central para meseros y cocina donde se listan los pedidos activos, permitiendo cambiar su estado (Pendiente, Completado, Cancelado) en tiempo real.
- **Facturación Directa**: Posibilidad de autocompletar una factura en el módulo de contabilidad a partir de un pedido completado con un solo clic.

### 3. Reservas por Fecha y Hora
- Calendario de reservas con control de capacidad.
- Monitor de mesas interactivas que muestra visualmente cuáles mesas están libres u ocupadas según la fecha filtrada.

### 4. Menú Digital (CRUD)
- Catálogo interactivo de platos organizado por categorías (Entradas, Platos Fuertes, Bebidas, Postres).
- Panel de control administrativo para agregar, modificar, eliminar platillos y ajustar precios o disponibilidad de stock.

### 5. Cierre de Caja y Reportes de Ventas Diarios
- Métricas financieras y estadísticas del restaurante calculadas en tiempo real a partir del historial real en localStorage:
  - **Ventas**: Ingresos por comensales completados agrupados por día de la semana.
  - **Productos más vendidos**: Top 5 de platillos populares en comanda.
  - **Clientes frecuentes**: Ranking de gasto y fidelización.
  - **Reservas**: Conteo de reservas confirmadas agrupadas por día.

### 6. Facturación y Recibo Moderno
- Emisión y control de facturas (métodos de pago: contado o crédito).
- **Recibo Elegante**: Visualización de facturas en formato de ticket comercial detallado con desglose de ítems, subtotal, cálculo de IVA (16%), total final, sello de estado y botón directo de impresión física configurado con estilos CSS @media print.

---

## Estructura del Proyecto

La estructura de archivos de la línea base es limpia y modular:
```
TallerRestaurante/
├── index.html                  # Archivo raíz y estructura de módulos/modales
├── css/
│   └── styles.css              # Hoja de estilos premium (Glassmorphism, Responsive, Impresión)
├── js/
│   └── script.js               # Lógica del estado de la app, auth, CRUD, reportes y utilidades
├── assets/                     # Recursos visuales e imágenes de la marca
├── LICENSE.txt                 # Licencia oficial de distribución MIT
├── CHANGELOG.md                # Historial detallado de cambios y línea base
└── README.md                   # Manual técnico y guía de despliegue (Este archivo)
```

---

## Instrucciones para Clonación y Ejecución Local

### 1. Clonar el repositorio
Para clonar este proyecto de manera local, ejecuta la siguiente instrucción en tu consola de Git Bash:
```bash
git clone https://github.com/ljgarciap/tallerRestaurante.git
```

### 2. Cambiar de rama (Estable)
Accede a la carpeta del proyecto y asegúrate de estar ubicado en la rama oficial de la línea base:
```bash
cd TallerRestaurante
git checkout master
```

### 3. Ejecutar la Aplicación
Dado que el proyecto utiliza tecnologías nativas vanilla y almacena información de prueba de manera persistente en el navegador web con localStorage, no requiere de servidores complejos ni de bases de datos relacionales externas.

- Simplemente haz doble clic en index.html para abrir la aplicación directamente en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
- Recomendación opcional: Para una mejor experiencia de desarrollo, puedes usar la extensión Live Server en VS Code.

---

## Credenciales de Usuarios de Prueba (Persistencia Inicial)

Para probar los flujos restringidos por roles, puedes iniciar sesión utilizando las siguientes cuentas cargadas en el sistema (contraseña por defecto: 123456):

| Nombre de Usuario | Correo Electrónico | Rol Designado | Permisos en Barra Lateral |
| :--- | :--- | :--- | :--- |
| Carlos García | carlos@gourmet.com | Admin / Gerente | Módulos Completos (Vistas Totales) |
| María López | maria@gourmet.com | Mesero | Pedidos, Reservas, Clientes |
| José Martínez | jose@gourmet.com | Cocinero | Pedidos, Menú |

---

## Gestión de Configuración (Línea Base SIGR)

- **Repositorio Oficial**: https://github.com/ljgarciap/tallerRestaurante
- **Rama Estable de Referencia**: master
- **Hash del Último Commit del Hito**: 7a719be
- **Herramientas de Soporte**:
  - Control de Versiones: Git & GitHub.
  - Gestión de Incidencias: GitHub Issues (para el registro de bugs futuros).
  - Licencia de Software: MIT (Permite uso educativo y comercial libre).