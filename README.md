# Sistema de Gestión de Restaurante - El Gourmet

Sistema integral de gestión para restaurantes desarrollado con HTML, CSS y JavaScript vanilla.

## Características

### Módulos Implementados
- **Pedidos**: Gestión de pedidos con carrito de compras, confirmación y estadísticas en tiempo real
- **Reservas**: Sistema de reservas con calendario de mesas y estados (confirmada, pendiente, cancelada)
- **Menú**: CRUD completo de platillos con categorías, precios, disponibilidad e imágenes
- **Usuarios**: Gestión de empleados con roles (admin, mesero, cocinero)
- **Clientes**: Registro de clientes con historial de pedidos, paginación y filtros
- **Facturación**: Generación de facturas con cálculo automático de IVA
- **Reportes**: Gráficos de ventas, productos más vendidos, clientes frecuentes y reservas

### Funcionalidades
- Diseño responsivo (móvil y escritorio)
- Persistencia de datos en localStorage
- Búsqueda y filtros en tiempo real
- Paginación en módulos de clientes
- Validación de formularios
- Notificaciones toast
- Datos de prueba precargados

## Estructura del Proyecto

```
TallerRestau/
├── index.html          # Archivo principal
├── css/
│   └── styles.css      # Estilos del proyecto
├── js/
│   └── script.js       # Lógica JavaScript
└── assets/             # Recursos adicionales (imágenes)
```

## Cómo Usar

1. **Ejecutar**: Abre `index.html` directamente en tu navegador
2. **Navegar**: Usa el menú lateral para acceder a los diferentes módulos
3. **Gestionar**: Cada módulo permite CRUD (Crear, Leer, Actualizar, Eliminar)

## Datos de Prueba

El sistema incluye datos de ejemplo para todas las entidades:
- 16 platillos en el menú
- 5 usuarios del sistema
- 25 clientes registrados
- 15 pedidos de prueba
- 15 reservas
- 13 facturas

**Nota**: Los datos se cargan automáticamente. Para restaurar los datos originales, limpia el localStorage del navegador.

## Tecnologías

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript ES6+
- Font Awesome 6.4 (Iconos)
- Google Fonts (Poppins)

## Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Sin necesidad de servidor - funciona directamente desde archivos locales

## Licencia

MIT License - Uso自由