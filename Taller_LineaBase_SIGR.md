# TALLER GRUPAL: ESTABLECIMIENTO DE LA LÍNEA BASE DEL SOFTWARE (SIGR)

---

## 1. PORTADA

* **Título del Taller:** AA2: Taller Grupal – Línea Base Software de Restaurante
* **Proyecto:** Sistema Integral de Gestión de Restaurante (SIGR)
* **Integrante:** Luis José García Pinzón
* **Curso:** Gestión de Configuración y Control de Versiones
* **Docente:** Coordinador de Curso / Rol de Aprobación Académica
* **Institución:** Facultad de Ingeniería de Sistemas y Computación
* **Fecha de Entrega:** 24 de mayo de 2026

---

## 2. INTRODUCCIÓN

En la ingeniería de software moderna, la construcción de sistemas robustos demanda una gestión disciplinada de sus componentes a lo largo del ciclo de vida del desarrollo. El **Sistema Integral de Gestión de Restaurante (SIGR)**, bautizado comercialmente como *"El Gourmet"*, es una aplicación web concebida para automatizar, unificar y agilizar los flujos operativos críticos de un establecimiento gastronómico, tales como el registro de comandas en tiempo real, el control de reservas físicas por capacidad de mesas, la contabilidad interna de facturación y el análisis estadístico diario de ventas.

Establecer una **Línea Base (Baseline)** del código fuente en las etapas tempranas del desarrollo de este sistema constituye una práctica fundamental de la **Gestión de Configuración del Software (SCM)**. La línea base representa un hito o punto de referencia oficial y estable, aprobado tras un riguroso proceso de validación técnica. Su importancia radica en que actúa como un "ancla" de estabilidad frente al caos potencial que conllevan los cambios continuos de código. Al definir formalmente los archivos, la estructura de directorios y los componentes funcionales iniciales, garantizamos:

* **Trazabilidad:** Capacidad de auditar y retroceder el sistema hacia un estado conocido y funcional ante cualquier error catastrófico en futuros ciclos de desarrollo.
* **Control de Cambios:** Un marco rígido pero ágil para proponer, evaluar y aplicar modificaciones sobre el código sin romper el núcleo básico de la aplicación.
* **Colaboración Eficiente:** Una base estable compartida que minimiza los conflictos de fusión (*merge conflicts*) en entornos de trabajo en equipo.

---

## 3. OBJETIVO DEL TALLER

El propósito fundamental de este taller práctico es guiar y estructurar el levantamiento, análisis, estabilización y documentación formal de la versión inicial estable del **SIGR**, consolidándola como la primera línea base oficial del proyecto.

### Competencias Reforzadas
* **Gestión de la Configuración de Software (SCM):** Identificar, estructurar y controlar los elementos de configuración de software (ECS) que conforman el núcleo operativo del restaurante.
* **Control de Versiones Grupal:** Utilizar herramientas modernas de control de versiones distribuidas (Git y GitHub) para gestionar ramas estables de desarrollo, flujos de integración y etiquetado de versiones (*releases*).
* **Planificación de Versiones y Hitos:** Aprender a definir los criterios técnicos de aceptación que determinan cuándo una entrega de software es lo suficientemente estable como para marcar un hito o línea base inicial.
* **Documentación Técnica Rigurosa:** Desarrollar habilidades de redacción formal de ingeniería de software mediante la creación de manuales de despliegue, archivos de cambios y licencias que acompañen el ciclo de distribución del software.

---

## 4. CONTENIDO TÉCNICO

### 4.1. Descripción del Proyecto
* **Nombre del Sistema:** Sistema Integral de Gestión de Restaurante (SIGR) - *"El Gourmet"*
* **Breve Descripción:** El SIGR es una aplicación web moderna, ágil y responsiva construida con tecnologías nativas del lado del cliente (HTML5, CSS3, y JavaScript vanilla ES6+). El sistema está diseñado para integrarse con la operatoria diaria del restaurante y permite digitalizar los pedidos de mesa y comandas a domicilio, llevar un control riguroso de las reservas físicas vinculadas al inventario de mesas, administrar de forma dinámica el catálogo de platillos del menú, registrar la facturación de consumo con cálculo tributario automático (IVA del 16%) y proveer a la administración un panel analítico en tiempo real sobre el comportamiento financiero de caja del negocio. Al utilizar persistencia directa mediante la API de `localStorage` del navegador, el sistema opera con total autonomía en dispositivos locales sin dependencia estricta de bases de datos relacionales tradicionales externas para su despliegue inicial.

---

### 4.2. Componentes Incluidos en la Línea Base
La línea base estable v1.0.0 del SIGR incluye los siguientes módulos funcionales, todos integrados de forma síncrona en una interfaz única (*Single Page Dashboard*):

1. **Módulo de Autenticación de Usuarios por Roles:**
   * Pantalla de login de inicio de sesión con diseño moderno y efectos visuales de cristal esmerilado (*Glassmorphism*).
   * Validación interactiva de perfiles de prueba precargados en la persistencia del sistema.
   * Restricciones de acceso y filtrado de barra lateral de navegación según rol asignado:
     * **Administrador (Admin/Gerente):** Acceso total sin restricciones a la totalidad de vistas y operaciones.
     * **Mesero (Operaciones):** Acceso exclusivo a los módulos de *Pedidos* (registro de comandas), *Reservas* e historial de *Clientes*.
     * **Cocinero (Producción):** Acceso exclusivo al catálogo de *Menú* (ajustes de stock y precios) y a la vista de *Pedidos* (cola de producción).
2. **Módulo de Menú Digital con CRUD de Platos y Categorías:**
   * Catálogo de comensal organizado en cuatro categorías: Entradas, Platos Fuertes, Bebidas y Postres.
   * Interfaz administrativa de gestión para registrar nuevos platos, editar descripciones, modificar imágenes, ajustar precios y marcar la disponibilidad inmediata en stock.
3. **Módulo de Registro y Seguimiento de Pedidos en Tiempo Real:**
   * **Mesa de Entrada:** Carrito de compras reactivo enlazado a la base de clientes y selección de entrega (para mesa física o a domicilio).
   * **Cola de Control:** Panel centralizado e interactivo de seguimiento donde meseros y cocina pueden visualizar la cola de comandas registradas, permitiendo cambiar su estado (*Pendiente*, *Completado*, *Cancelado*) en tiempo real.
   * **Integración de Clientes:** Aumento automático del gasto acumulado y número de visitas del cliente en su historial al momento de confirmar un pedido.
4. **Módulo de Reservas Dinámicas con Monitor de Mesas:**
   * Registro estructurado de reservas detallando cliente, teléfono de contacto, fecha, hora de reserva y cantidad de personas.
   * Monitor visual de capacidad de mesas que asigna automáticamente mesas y marca de forma interactiva (en color ámbar o verde) el inventario de mesas ocupadas o libres según la fecha seleccionada.
5. **Módulo de Cierre de Caja e Informes Financieros:**
   * Gráficos estadísticos dinámicos y reportes construidos a partir de la información real procesada en `localStorage`:
     * **Ventas Diarias:** Ingresos acumulados de comandas completadas agrupados por día de la semana.
     * **Top Platillos:** Métrica de los cinco platos más populares y su volumen de consumo comendado.
     * **Fidelización:** Ranking de los mejores comensales basados en gasto.

---

### 4.3. Versionado del Código
La gestión de configuración y control de versiones del proyecto se rige bajo los siguientes parámetros de Git:

* **Herramienta de Control de Versiones:** Git (Sistema de Control de Versiones Distribuido).
* **Repositorio Oficial de Desarrollo:** [https://github.com/equipoX/sigr](https://github.com/equipoX/sigr)
* **Rama Principal Estable:** `main` (Rama protegida sobre la cual se declara la estabilidad y se realizan despliegues de producción).
* **Commits Incluidos en la Línea Base:** Historial completo del código fuente inicial estable desde el commit de inicialización de estructura hasta el commit identificado con el Hash de Git: `a93b4f1`.
* **Esquema de Versionado:** Versionamiento Semántico (SemVer) bajo el hito **v1.0.0**.

---

### 4.4. Criterios para Establecer la Línea Base
Para que esta entrega de software sea declarada formalmente como la **Línea Base del SIGR**, se cumplieron y validaron los siguientes criterios de aceptación técnica:

1. **Compilación y Carga al 100% de Éxito:** Se corrigió un error de referencia de JavaScript heredado en el archivo `js/script.js` (llamada a la función inexistente `renderPedidos()` durante la inicialización). El sistema carga e inicializa la lógica y componentes sin ninguna excepción ni error de consola, logrando un estado limpio de ejecución.
2. **Operatividad de Funcionalidades Críticas:** Los cinco módulos base especificados en el apartado 4.2 se encuentran completamente funcionales, interactivos y con validación de formularios activa.
3. **Integración Completa de Estado:** Se completó con éxito la prueba de integración de datos entre los módulos. Al ingresar o modificar un pedido, el cambio se propaga de manera consistente a la contabilidad de facturas, los gastos del cliente en el historial y el cálculo dinámico del panel de informes.
4. **Estructura de Directorios Estandarizada:** El repositorio cuenta con una organización lógica orientada a buenas prácticas de desarrollo web, separando la estructura (HTML), la presentación (CSS), la lógica operativa (JS) y los activos multimedia (assets).
5. **Documentación Técnica Integrada:** El código fuente se encuentra acompañado en su raíz por los documentos de soporte técnico mínimos requeridos (`README.md`, `CHANGELOG.md` y `LICENSE.txt`).

---

### 4.5. Herramientas de Soporte
* **Git & GitHub:** Herramientas troncales para el almacenamiento del código fuente, ramificación (`branching`), control de versiones distribuidas y etiquetado de hitos estables (*releases*).
* **GitHub Issues:** Plataforma para el registro, categorización y seguimiento detallado de mejoras funcionales, refactorización de código y corrección de bugs (*bug tracking*).
* **Jenkins / GitHub Actions (Despliegue Futuro):** Herramientas opcionales proyectadas para automatizar la integración continua (CI) y entrega continua (CD) una vez que se inicie el desarrollo sobre la línea base.

---

### 4.6. Documentación Asociada
Los siguientes archivos se encuentran creados e integrados en la raíz del proyecto para gobernar el control de cambios de la línea base:

1. **[README.md](file:///Users/lgarcia/Documents/GitHub/TallerRestaurante/README.md):** Manual técnico que provee las instrucciones detalladas para la clonación local del repositorio, despliegue inmediato sin servidor de base de datos externa, explicación de la estructura de directorios y listado de las credenciales y perfiles de prueba de los roles de usuario.
2. **[CHANGELOG.md](file:///Users/lgarcia/Documents/GitHub/TallerRestaurante/CHANGELOG.md):** Registro histórico y detallado que documenta de forma explícita todos los cambios introducidos, adiciones de módulos, estabilización de código y resolución de bugs que se aplicaron para constituir el hito v1.0.0.
3. **[LICENSE.txt](file:///Users/lgarcia/Documents/GitHub/TallerRestaurante/LICENSE.txt):** Contrato de Licencia del Software. Se ha seleccionado la **Licencia MIT**, garantizando una distribución de código abierto permisiva que facilita el uso educativo y la reutilización del código.

---

### 4.7. Validación y Aprobación de la Línea Base
* **Fecha de Creación y Establecimiento:** 24 de mayo de 2026.
* **Validado por:** Luis José García Pinzón (Grupo de Desarrollo SIGR).
* **Responsable de Aprobación:** Coordinador del Equipo / Docente Asignado del Curso de Gestión de Configuración.
* **Estado de la Línea Base:** **APROBADO Y BLOQUEADO** (Ningún cambio posterior podrá aplicarse de forma directa sobre la rama `main` sin pasar por un proceso formal de solicitud de cambio, ramificación en `feature-branch` y aprobación de *Pull Request*).

---
*Fin del Documento de Reporte Académico - SIGR Linea Base v1.0.0*
