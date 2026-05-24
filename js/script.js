// DATOS INICIALES
const defaultMenuData = [
    { id: 1, name: "Bruschetta Italiana", description: "Pan artesanal con tomates frescos y albahaca", price: 89.00, category: "entradas", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop", available: true },
    { id: 2, name: "Bowl de Hummus", description: "Crema de garbanzo con aceite de oliva y pan pita", price: 79.00, category: "entradas", image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop", available: true },
    { id: 3, name: "Croquetas de Jamón", description: "Croquetas crujientes de jamón ibérico con alioli", price: 95.00, category: "entradas", image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&h=300&fit=crop", available: true },
    { id: 4, name: "Ribeye Steak", description: "Corte premium de res a la parrilla con verduras", price: 285.00, category: "platos-fuertes", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop", available: true },
    { id: 5, name: "Salmón Grillado", description: "Filete de salmón con salsa de limón y eneldo", price: 245.00, category: "platos-fuertes", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop", available: true },
    { id: 6, name: "Pasta Carbonara", description: "Spaghetti con tocino, yolk y parmesano", price: 175.00, category: "platos-fuertes", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop", available: true },
    { id: 7, name: "Pollo al Horno", description: "Pollo marinada en hierbas con papas doradas", price: 195.00, category: "platos-fuertes", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop", available: true },
    { id: 8, name: "Burger Gourmet", description: "Doble carne Angus con queso y tocino", price: 165.00, category: "platos-fuertes", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", available: true },
    { id: 9, name: "Limonada Natural", description: "Limonada casera con menta y miel", price: 45.00, category: "bebidas", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop", available: true },
    { id: 10, name: "Café Latte", description: "Espresso con leche vaporizada y vainilla", price: 55.00, category: "bebidas", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop", available: true },
    { id: 11, name: "Smoothie de Fruits", description: "Fresas, plátano y mango con leche de almendra", price: 65.00, category: "bebidas", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop", available: true },
    { id: 12, name: "Tiramisú Clásico", description: "Postre italiano con café y mascarpone", price: 85.00, category: "postres", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop", available: true },
    { id: 13, name: "Brownie de Chocolate", description: "Pastel de chocolate con nueces y vainilla", price: 75.00, category: "postres", image: "https://images.unsplash.com/photo-1564355808539-22fda35fff7e?w=400&h=300&fit=crop", available: true },
    { id: 14, name: "Cheesecake de Fresa", description: "Tarta de queso con coulis de fresas", price: 79.00, category: "postres", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop", available: true },
    { id: 15, name: "Churros con Chocolate", description: "Churros crujientes con chocolate caliente", price: 69.00, category: "postres", image: "https://images.unsplash.com/photo-1624371414361-e670d8cfe81a?w=400&h=300&fit=crop", available: true },
    { id: 16, name: "Paella Valenciana", description: "Arroz con mariscos y pollo en estilo español", price: 225.00, category: "platos-fuertes", image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop", available: true }
];

const defaultUsuarios = [
    { id: 1, nombre: "Carlos", apellido: "García", email: "carlos@gourmet.com", telefono: "555-1234", rol: "admin" },
    { id: 2, nombre: "María", apellido: "López", email: "maria@gourmet.com", telefono: "555-2345", rol: "mesero" },
    { id: 3, nombre: "José", apellido: "Martínez", email: "jose@gourmet.com", telefono: "555-3456", rol: "cocinero" },
    { id: 4, nombre: "Ana", apellido: "Rodríguez", email: "ana@gourmet.com", telefono: "555-4567", rol: "mesero" },
    { id: 5, nombre: "Luis", apellido: "Hernández", email: "luis@gourmet.com", telefono: "555-5678", rol: "cocinero" }
];

const defaultClientes = [
    { id: 1, nombre: "Juan", apellido: "Pérez", email: "juan.perez@email.com", telefono: "552-111-1111", direccion: "Av. Principal 123, Col. Centro", estado: "activo", totalPedidos: 15, gastoTotal: 4250.00 },
    { id: 2, nombre: "Sofia", apellido: "Gómez", email: "sofia.gomez@email.com", telefono: "552-222-2222", direccion: "Calle Norte 456, Col. Norte", estado: "activo", totalPedidos: 22, gastoTotal: 6800.50 },
    { id: 3, nombre: "Miguel", apellido: "Torres", email: "miguel.torres@email.com", telefono: "552-333-3333", direccion: "Blvd. Sur 789, Col. Sur", estado: "activo", totalPedidos: 8, gastoTotal: 1890.00 },
    { id: 4, nombre: "Laura", apellido: "Martínez", email: "laura.m@email.com", telefono: "552-444-4444", direccion: "Av. Este 321, Col. Este", estado: "activo", totalPedidos: 31, gastoTotal: 9250.75 },
    { id: 5, nombre: "Roberto", apellido: "Sánchez", email: "r.sanchez@email.com", telefono: "552-555-5555", direccion: "Calle Oeste 654, Col. Oeste", estado: "inactivo", totalPedidos: 5, gastoTotal: 1250.00 },
    { id: 6, nombre: "Carmen", apellido: "López", email: "carmen.l@email.com", telefono: "552-666-6666", direccion: "Av. Central 111, Col. Centro", estado: "activo", totalPedidos: 18, gastoTotal: 5400.25 },
    { id: 7, nombre: "Fernando", apellido: "Rivera", email: "fernando.r@email.com", telefono: "552-777-7777", direccion: "Calle Sur 222, Col. Sur", estado: "activo", totalPedidos: 12, gastoTotal: 3600.00 },
    { id: 8, nombre: "Patricia", apellido: "Flores", email: "patricia.f@email.com", telefono: "552-888-8888", direccion: "Blvd. Norte 333, Col. Norte", estado: "activo", totalPedidos: 27, gastoTotal: 8100.50 },
    { id: 9, nombre: "Alberto", apellido: "Mendoza", email: "alberto.m@email.com", telefono: "552-999-9999", direccion: "Av. Poniente 444, Col. Poniente", estado: "inactivo", totalPedidos: 3, gastoTotal: 750.00 },
    { id: 10, nombre: "Isabel", apellido: "Cruz", email: "isabel.c@email.com", telefono: "553-111-1111", direccion: "Calle Oriente 555, Col. Oriente", estado: "activo", totalPedidos: 19, gastoTotal: 5700.00 },
    { id: 11, nombre: "Diego", apellido: "Morales", email: "diego.m@email.com", telefono: "553-222-2222", direccion: "Av. Sur 666, Col. Sur", estado: "activo", totalPedidos: 14, gastoTotal: 4200.75 },
    { id: 12, nombre: "Monica", apellido: "Reyes", email: "monica.r@email.com", telefono: "553-333-3333", direccion: "Calle Norte 777, Col. Norte", estado: "activo", totalPedidos: 25, gastoTotal: 7500.25 },
    { id: 13, nombre: "Oscar", apellido: "Guerrero", email: "oscar.g@email.com", telefono: "553-444-4444", direccion: "Blvd. Centro 888, Col. Centro", estado: "activo", totalPedidos: 9, gastoTotal: 2700.00 },
    { id: 14, nombre: "Sandra", apellido: "Navarro", email: "sandra.n@email.com", telefono: "553-555-5555", direccion: "Av. Este 999, Col. Este", estado: "inactivo", totalPedidos: 6, gastoTotal: 1500.00 },
    { id: 15, nombre: "Rafael", apellido: "Ortiz", email: "rafael.o@email.com", telefono: "553-666-6666", direccion: "Calle Oeste 101, Col. Oeste", estado: "activo", totalPedidos: 16, gastoTotal: 4800.50 },
    { id: 16, nombre: "Gloria", apellido: "Vega", email: "gloria.v@email.com", telefono: "553-777-7777", direccion: "Av. Norte 202, Col. Norte", estado: "activo", totalPedidos: 20, gastoTotal: 6000.00 },
    { id: 17, nombre: "Hugo", apellido: "Ramos", email: "hugo.r@email.com", telefono: "553-888-8888", direccion: "Calle Sur 303, Col. Sur", estado: "activo", totalPedidos: 11, gastoTotal: 3300.25 },
    { id: 18, nombre: "Teresa", apellido: "Jiménez", email: "teresa.j@email.com", telefono: "553-999-9999", direccion: "Blvd. Poniente 404, Col. Poniente", estado: "activo", totalPedidos: 23, gastoTotal: 6900.75 },
    { id: 19, nombre: "Arturo", apellido: "Herrera", email: "arturo.h@email.com", telefono: "554-111-1111", direccion: "Av. Oriente 505, Col. Oriente", estado: "inactivo", totalPedidos: 4, gastoTotal: 1000.00 },
    { id: 20, nombre: "Verónica", apellido: "Campos", email: "veronica.c@email.com", telefono: "554-222-2222", direccion: "Calle Centro 606, Col. Centro", estado: "activo", totalPedidos: 28, gastoTotal: 8400.00 },
    { id: 21, nombre: "Eduardo", apellido: "Luna", email: "eduardo.l@email.com", telefono: "554-333-3333", direccion: "Av. Sur 707, Col. Sur", estado: "activo", totalPedidos: 13, gastoTotal: 3900.50 },
    { id: 22, nombre: "Alicia", apellido: "Silva", email: "alicia.s@email.com", telefono: "554-444-4444", direccion: "Calle Norte 808, Col. Norte", estado: "activo", totalPedidos: 17, gastoTotal: 5100.25 },
    { id: 23, nombre: "Marco", apellido: "Aguilar", email: "marco.a@email.com", telefono: "554-555-5555", direccion: "Blvd. Este 909, Col. Este", estado: "activo", totalPedidos: 10, gastoTotal: 3000.00 },
    { id: 24, nombre: "Daniela", apellido: "Rojas", email: "daniela.r@email.com", telefono: "554-666-6666", direccion: "Av. Oeste 1010, Col. Oeste", estado: "inactivo", totalPedidos: 7, gastoTotal: 1750.00 },
    { id: 25, nombre: "Gustavo", apellido: "Medina", email: "gustavo.m@email.com", telefono: "554-777-7777", direccion: "Calle Poniente 1111, Col. Poniente", estado: "activo", totalPedidos: 21, gastoTotal: 6300.75 }
];

// DATOS DE PEDIDOS
const defaultPedidos = [
    { id: 1001, cliente: "Juan Pérez", tipo: "mesa", mesa: "3", items: [{ id: 4, name: "Ribeye Steak", price: 285, quantity: 2 }, { id: 10, name: "Café Latte", price: 55, quantity: 2 }], total: 680, estado: "completado", fecha: getDateOffset(0) },
    { id: 1002, cliente: "Sofia Gómez", tipo: "domicilio", mesa: null, items: [{ id: 6, name: "Pasta Carbonara", price: 175, quantity: 1 }, { id: 12, name: "Tiramisú Clásico", price: 85, quantity: 1 }], total: 260, estado: "completado", fecha: getDateOffset(0) },
    { id: 1003, cliente: "Laura Martínez", tipo: "mesa", mesa: "5", items: [{ id: 5, name: "Salmón Grillado", price: 245, quantity: 1 }, { id: 11, name: "Smoothie de Fruits", price: 65, quantity: 1 }, { id: 14, name: "Cheesecake de Fresa", price: 79, quantity: 1 }], total: 389, estado: "pendiente", fecha: getDateOffset(0) },
    { id: 1004, cliente: "Fernando Rivera", tipo: "domicilio", mesa: null, items: [{ id: 8, name: "Burger Gourmet", price: 165, quantity: 3 }], total: 495, estado: "completado", fecha: getDateOffset(-1) },
    { id: 1005, cliente: "Patricia Flores", tipo: "mesa", mesa: "2", items: [{ id: 16, name: "Paella Valenciana", price: 225, quantity: 2 }, { id: 9, name: "Limonada Natural", price: 45, quantity: 2 }], total: 540, estado: "completado", fecha: getDateOffset(-1) },
    { id: 1006, cliente: "Diego Morales", tipo: "mesa", mesa: "1", items: [{ id: 7, name: "Pollo al Horno", price: 195, quantity: 1 }, { id: 1, name: "Bruschetta Italiana", price: 89, quantity: 1 }], total: 284, estado: "completado", fecha: getDateOffset(-2) },
    { id: 1007, cliente: "Monica Reyes", tipo: "domicilio", mesa: null, items: [{ id: 4, name: "Ribeye Steak", price: 285, quantity: 1 }, { id: 13, name: "Brownie de Chocolate", price: 75, quantity: 1 }], total: 360, estado: "completado", fecha: getDateOffset(-2) },
    { id: 1008, cliente: "Hugo Ramos", tipo: "mesa", mesa: "4", items: [{ id: 6, name: "Pasta Carbonara", price: 175, quantity: 2 }, { id: 15, name: "Churros con Chocolate", price: 69, quantity: 2 }], total: 488, estado: "pendiente", fecha: getDateOffset(-3) },
    { id: 1009, cliente: "Verónica Campos", tipo: "domicilio", mesa: null, items: [{ id: 5, name: "Salmón Grillado", price: 245, quantity: 2 }, { id: 10, name: "Café Latte", price: 55, quantity: 2 }], total: 600, estado: "completado", fecha: getDateOffset(-3) },
    { id: 1010, cliente: "Eduardo Luna", tipo: "mesa", mesa: "3", items: [{ id: 8, name: "Burger Gourmet", price: 165, quantity: 1 }, { id: 2, name: "Bowl de Hummus", price: 79, quantity: 1 }, { id: 11, name: "Smoothie de Fruits", price: 65, quantity: 1 }], total: 309, estado: "completado", fecha: getDateOffset(-4) },
    { id: 1011, cliente: "Alicia Silva", tipo: "domicilio", mesa: null, items: [{ id: 7, name: "Pollo al Horno", price: 195, quantity: 1 }], total: 195, estado: "completado", fecha: getDateOffset(-4) },
    { id: 1012, cliente: "Marco Aguilar", tipo: "mesa", mesa: "2", items: [{ id: 16, name: "Paella Valenciana", price: 225, quantity: 1 }, { id: 12, name: "Tiramisú Clásico", price: 85, quantity: 1 }], total: 310, estado: "completado", fecha: getDateOffset(-5) },
    { id: 1013, cliente: "Carmen López", tipo: "mesa", mesa: "5", items: [{ id: 4, name: "Ribeye Steak", price: 285, quantity: 1 }, { id: 9, name: "Limonada Natural", price: 45, quantity: 2 }], total: 375, estado: "completado", fecha: getDateOffset(-5) },
    { id: 1014, cliente: "Rafael Ortiz", tipo: "domicilio", mesa: null, items: [{ id: 6, name: "Pasta Carbonara", price: 175, quantity: 2 }], total: 350, estado: "pendiente", fecha: getDateOffset(-6) },
    { id: 1015, cliente: "Gloria Vega", tipo: "mesa", mesa: "1", items: [{ id: 5, name: "Salmón Grillado", price: 245, quantity: 1 }, { id: 14, name: "Cheesecake de Fresa", price: 79, quantity: 1 }, { id: 10, name: "Café Latte", price: 55, quantity: 1 }], total: 379, estado: "completado", fecha: getDateOffset(-6) }
];

// DATOS DE RESERVAS
const defaultReservas = [
    { id: 2001, cliente: "Juan Pérez", telefono: "552-111-1111", fecha: getDateOffset(0), hora: "20:00", personas: 4, mesa: 3, notas: "Aniversario de bodas", estado: "confirmada" },
    { id: 2002, cliente: "Sofia Gómez", telefono: "552-222-2222", fecha: getDateOffset(0), hora: "19:30", personas: 2, mesa: 1, notas: "", estado: "confirmada" },
    { id: 2003, cliente: "Laura Martínez", telefono: "552-444-4444", fecha: getDateOffset(1), hora: "13:00", personas: 6, mesa: 4, notas: "Celebración de cumpleaños", estado: "pendiente" },
    { id: 2004, cliente: "Fernando Rivera", telefono: "552-777-7777", fecha: getDateOffset(1), hora: "20:30", personas: 8, mesa: 5, notas: "Cena de empresa", estado: "pendiente" },
    { id: 2005, cliente: "Patricia Flores", telefono: "552-888-8888", fecha: getDateOffset(2), hora: "12:00", personas: 4, mesa: 2, notas: "", estado: "confirmada" },
    { id: 2006, cliente: "Diego Morales", telefono: "553-222-2222", fecha: getDateOffset(2), hora: "19:00", personas: 2, mesa: 1, notas: "Cita romántica", estado: "confirmada" },
    { id: 2007, cliente: "Monica Reyes", telefono: "553-333-3333", fecha: getDateOffset(3), hora: "13:30", personas: 4, mesa: 3, notas: "", estado: "pendiente" },
    { id: 2008, cliente: "Hugo Ramos", telefono: "553-888-8888", fecha: getDateOffset(3), hora: "20:00", personas: 6, mesa: 4, notas: "Reunión familiar", estado: "confirmada" },
    { id: 2009, cliente: "Verónica Campos", telefono: "554-222-2222", fecha: getDateOffset(4), hora: "19:30", personas: 2, mesa: 1, notas: "", estado: "pendiente" },
    { id: 2010, cliente: "Eduardo Luna", telefono: "554-333-3333", fecha: getDateOffset(4), hora: "12:30", personas: 4, mesa: 2, notas: "Almuerzo de negocios", estado: "confirmada" },
    { id: 2011, cliente: "Alicia Silva", telefono: "554-444-4444", fecha: getDateOffset(-1), hora: "20:00", personas: 4, mesa: 3, notas: "", estado: "completada" },
    { id: 2012, cliente: "Marco Aguilar", telefono: "554-555-5555", fecha: getDateOffset(-2), hora: "13:00", personas: 2, mesa: 1, notas: "", estado: "cancelada" },
    { id: 2013, cliente: "Carmen López", telefono: "552-666-6666", fecha: getDateOffset(-3), hora: "19:00", personas: 6, mesa: 5, notas: "Cena de navidad", estado: "completada" },
    { id: 2014, cliente: "Rafael Ortiz", telefono: "553-666-6666", fecha: getDateOffset(-4), hora: "12:00", personas: 4, mesa: 2, notas: "", estado: "completada" },
    { id: 2015, cliente: "Gloria Vega", telefono: "553-777-7777", fecha: getDateOffset(-5), hora: "20:30", personas: 8, mesa: 5, notas: "Celebración de graduación", estado: "completada" }
];

// DATOS DE FACTURAS
const defaultFacturas = [
    { id: 5001, cliente: "Juan Pérez", tipo: "contado", fecha: getDateOffset(0), vencimiento: null, items: [{ descripcion: "Ribeye Steak", cantidad: 2, precio: 285 }, { descripcion: "Café Latte", cantidad: 2, precio: 55 }], subtotal: 680, iva: 108.80, total: 788.80, estado: "pagada" },
    { id: 5002, cliente: "Sofia Gómez", tipo: "crédito", fecha: getDateOffset(0), vencimiento: getDateOffset(30), items: [{ descripcion: "Pasta Carbonara", cantidad: 1, precio: 175 }, { descripcion: "Tiramisú", cantidad: 1, precio: 85 }], subtotal: 260, iva: 41.60, total: 301.60, estado: "pendiente" },
    { id: 5003, cliente: "Laura Martínez", tipo: "contado", fecha: getDateOffset(-1), vencimiento: null, items: [{ descripcion: "Salmón Grillado", cantidad: 1, precio: 245 }, { descripcion: "Smoothie", cantidad: 1, precio: 65 }, { descripcion: "Cheesecake", cantidad: 1, precio: 79 }], subtotal: 389, iva: 62.24, total: 451.24, estado: "pagada" },
    { id: 5004, cliente: "Fernando Rivera", tipo: "contado", fecha: getDateOffset(-2), vencimiento: null, items: [{ descripcion: "Burger Gourmet", cantidad: 3, precio: 165 }], subtotal: 495, iva: 79.20, total: 574.20, estado: "pagada" },
    { id: 5005, cliente: "Patricia Flores", tipo: "crédito", fecha: getDateOffset(-3), vencimiento: getDateOffset(27), items: [{ descripcion: "Paella Valenciana", cantidad: 2, precio: 225 }, { descripcion: "Limonada", cantidad: 2, precio: 45 }], subtotal: 540, iva: 86.40, total: 626.40, estado: "pagada" },
    { id: 5006, cliente: "Diego Morales", tipo: "contado", fecha: getDateOffset(-4), vencimiento: null, items: [{ descripcion: "Pollo al Horno", cantidad: 1, precio: 195 }, { descripcion: "Bruschetta", cantidad: 1, precio: 89 }], subtotal: 284, iva: 45.44, total: 329.44, estado: "pagada" },
    { id: 5007, cliente: "Monica Reyes", tipo: "contado", fecha: getDateOffset(-5), vencimiento: null, items: [{ descripcion: "Ribeye Steak", cantidad: 1, precio: 285 }, { descripcion: "Brownie", cantidad: 1, precio: 75 }], subtotal: 360, iva: 57.60, total: 417.60, estado: "pagada" },
    { id: 5008, cliente: "Hugo Ramos", tipo: "crédito", fecha: getDateOffset(-6), vencimiento: getDateOffset(24), items: [{ descripcion: "Pasta Carbonara", cantidad: 2, precio: 175 }, { descripcion: "Churros", cantidad: 2, precio: 69 }], subtotal: 488, iva: 78.08, total: 566.08, estado: "pendiente" },
    { id: 5009, cliente: "Verónica Campos", tipo: "contado", fecha: getDateOffset(-7), vencimiento: null, items: [{ descripcion: "Salmón Grillado", cantidad: 2, precio: 245 }, { descripcion: "Café Latte", cantidad: 2, precio: 55 }], subtotal: 600, iva: 96.00, total: 696.00, estado: "pagada" },
    { id: 5010, cliente: "Eduardo Luna", tipo: "contado", fecha: getDateOffset(-10), vencimiento: null, items: [{ descripcion: "Burger Gourmet", cantidad: 1, precio: 165 }, { descripcion: "Bowl Hummus", cantidad: 1, precio: 79 }, { descripcion: "Smoothie", cantidad: 1, precio: 65 }], subtotal: 309, iva: 49.44, total: 358.44, estado: "pagada" },
    { id: 5011, cliente: "Alicia Silva", tipo: "contado", fecha: getDateOffset(-12), vencimiento: null, items: [{ descripcion: "Pollo al Horno", cantidad: 1, precio: 195 }], subtotal: 195, iva: 31.20, total: 226.20, estado: "pagada" },
    { id: 5012, cliente: "Marco Aguilar", tipo: "crédito", fecha: getDateOffset(-15), vencimiento: getDateOffset(15), items: [{ descripcion: "Paella Valenciana", cantidad: 1, precio: 225 }, { descripcion: "Tiramisú", cantidad: 1, precio: 85 }], subtotal: 310, iva: 49.60, total: 359.60, estado: "pendiente" },
    { id: 5013, cliente: "Carmen López", tipo: "contado", fecha: getDateOffset(-20), vencimiento: null, items: [{ descripcion: "Ribeye Steak", cantidad: 1, precio: 285 }, { descripcion: "Limonada", cantidad: 2, precio: 45 }], subtotal: 375, iva: 60.00, total: 435.00, estado: "pagada" }
];

// Función auxiliar para obtener fechas
function getDateOffset(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
}

// INICIALIZACIÓN DEL STATE
let menuData = JSON.parse(localStorage.getItem('menuData')) || defaultMenuData;
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || defaultUsuarios;
let clientes = JSON.parse(localStorage.getItem('clientes')) || defaultClientes;
let pedidos = JSON.parse(localStorage.getItem('pedidos')) || defaultPedidos;
let reservas = JSON.parse(localStorage.getItem('reservas')) || defaultReservas;
let facturas = JSON.parse(localStorage.getItem('facturas')) || defaultFacturas;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentModule = 'pedidos';

// Paginación clientes
let clientesCurrentPage = 1;
let clientesPerPage = 10;
let clientesFiltered = [];

const categoryLabels = {
    entrdas: "Entradas",
    entradas: "Entradas",
    "platos-fuertes": "Platos Fuertes",
    bebidas: "Bebidas",
    postres: "Postres"
};

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    setupNavigation();
    setupEventListeners();
    renderPedidos();
    renderReservas();
    renderMenuManagement();
    renderUsuarios();
    renderClientes();
    renderFacturas();
    updateStats();
}

function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const module = item.dataset.module;
            switchModule(module);
        });
    });

    document.getElementById('menuToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.add('open');
    });

    document.getElementById('closeSidebar').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
    });
}

function switchModule(moduleName) {
    currentModule = moduleName;
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.module === moduleName);
    });
    
    document.querySelectorAll('.module').forEach(mod => {
        mod.classList.add('hidden');
    });
    
    document.getElementById(`module-${moduleName}`).classList.remove('hidden');
    
    const titles = {
        pedidos: 'Pedidos',
        reservas: 'Reservas',
        menu: 'Gestión de Menú',
        usuarios: 'Usuarios',
        facturas: 'Facturación',
        reportes: 'Reportes'
    };
    
    document.getElementById('moduleTitle').textContent = titles[moduleName];
    document.getElementById('sidebar').classList.remove('open');
}

function setupEventListeners() {
    // Pedidos
    document.getElementById('categoryFilter').addEventListener('change', renderMenu);
    document.getElementById('clearCart').addEventListener('click', clearCart);
    document.getElementById('confirmarPedido').addEventListener('click', confirmPedido);
    document.getElementById('tipoPedido').addEventListener('change', (e) => {
        document.getElementById('mesaGroup').style.display = 
            e.target.value === 'mesa' ? 'block' : 'none';
    });

    // Reservas
    document.getElementById('nuevaReserva').addEventListener('click', () => openModal('reservaModal'));
    document.getElementById('reservaFecha').addEventListener('change', renderReservas);
    document.getElementById('reservaForm').addEventListener('submit', saveReserva);

    // Menú
    document.getElementById('nuevoPlatillo').addEventListener('click', () => {
        document.getElementById('platilloModalTitle').textContent = 'Nuevo Platillo';
        document.getElementById('platilloForm').reset();
        document.getElementById('platilloId').value = '';
        openModal('platilloModal');
    });
    document.getElementById('menuCategoryFilter').addEventListener('change', renderMenuManagement);
    document.getElementById('platilloForm').addEventListener('submit', savePlatillo);

    // Usuarios
    document.getElementById('nuevoUsuario').addEventListener('click', () => {
        document.getElementById('usuarioModalTitle').textContent = 'Nuevo Usuario';
        document.getElementById('usuarioForm').reset();
        document.getElementById('usuarioId').value = '';
        openModal('usuarioModal');
    });
    document.getElementById('usuarioForm').addEventListener('submit', saveUsuario);

    // Clientes
    document.getElementById('nuevoCliente').addEventListener('click', () => {
        document.getElementById('clienteModalTitle').textContent = 'Nuevo Cliente';
        document.getElementById('clienteForm').reset();
        document.getElementById('clienteId').value = '';
        openModal('clienteModal');
    });
    document.getElementById('clienteForm').addEventListener('submit', saveCliente);
    document.getElementById('clienteSearch').addEventListener('input', filterClientes);
    document.getElementById('clienteFiltroEstado').addEventListener('change', filterClientes);
    document.getElementById('perPageSelect').addEventListener('change', (e) => {
        clientesPerPage = parseInt(e.target.value);
        clientesCurrentPage = 1;
        renderClientes();
    });
    document.getElementById('prevPage').addEventListener('click', () => {
        if (clientesCurrentPage > 1) {
            clientesCurrentPage--;
            renderClientes();
        }
    });
    document.getElementById('nextPage').addEventListener('click', () => {
        const totalPages = Math.ceil(clientesFiltered.length / clientesPerPage);
        if (clientesCurrentPage < totalPages) {
            clientesCurrentPage++;
            renderClientes();
        }
    });

    // Facturas
    document.getElementById('nuevaFactura').addEventListener('click', () => {
        document.getElementById('facturaModalTitle').textContent = 'Nueva Factura';
        document.getElementById('facturaForm').reset();
        document.getElementById('facturaId').value = '';
        renderFacturaItems();
        openModal('facturaModal');
    });
    document.getElementById('facturaForm').addEventListener('submit', saveFactura);
    document.getElementById('addFacturaItem').addEventListener('click', addFacturaItem);

    // Modals
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.close;
            closeModal(modalId);
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay.closest('.modal').id);
            }
        });
    });

    // Reportes
    document.getElementById('generarReporte').addEventListener('click', generarReporte);
}

// ============= MODULO PEDIDOS =============

function renderMenu() {
    const grid = document.getElementById('menuGrid');
    const category = document.getElementById('categoryFilter').value;
    
    let filtered = menuData;
    if (category !== 'all') {
        filtered = menuData.filter(item => item.category === category);
    }
    
    grid.innerHTML = filtered.map(dish => `
        <div class="menu-card ${dish.available ? '' : 'unavailable'}">
            <div class="card-image">
                <img src="${dish.image}" alt="${dish.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Plato'">
            </div>
            <div class="card-content">
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <div class="card-footer">
                    <span class="price">$${dish.price.toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart(${dish.id})" ${dish.available ? '' : 'disabled'}>
                        <i class="fas fa-plus"></i> Agregar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(dishId) {
    const dish = menuData.find(d => d.id === dishId);
    if (!dish) return;

    const existing = cart.find(item => item.id === dishId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            image: dish.image,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    showToast(`${dish.name} agregado`);
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const empty = document.getElementById('cartEmpty');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cart.length === 0) {
        container.innerHTML = '';
        empty.style.display = 'flex';
    } else {
        empty.style.display = 'none';
        container.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/50?text='">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

function updateCartQuantity(dishId, change) {
    const item = cart.find(i => i.id === dishId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(dishId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

function removeFromCart(dishId) {
    cart = cart.filter(item => item.id !== dishId);
    saveCart();
    renderCart();
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
    showToast('Carrito limpiado');
}

function confirmPedido() {
    if (cart.length === 0) {
        showToast('El carrito está vacío', 'error');
        return;
    }

    const cliente = document.getElementById('clientePedido').value;
    const tipo = document.getElementById('tipoPedido').value;
    const mesa = document.getElementById('numeroMesa').value;

    if (!cliente) {
        showToast('Ingrese nombre del cliente', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const pedido = {
        id: Date.now(),
        cliente,
        tipo,
        mesa: tipo === 'mesa' ? mesa : null,
        items: [...cart],
        total,
        estado: 'pendiente',
        fecha: new Date().toISOString()
    };

    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    clearCart();
    document.getElementById('clientePedido').value = '';
    document.getElementById('numeroMesa').value = '';

    updateStats();
    showToast(`Pedido #${pedido.id} confirmado`);
}

function updateStats() {
    const today = new Date().toDateString();
    const todayPedidos = pedidos.filter(p => new Date(p.fecha).toDateString() === today);
    
    const pendientes = todayPedidos.filter(p => p.estado === 'pendiente').length;
    const completados = todayPedidos.filter(p => p.estado === 'completado').length;
    const ventas = todayPedidos.reduce((sum, p) => sum + p.total, 0);

    document.getElementById('pedidosPendientes').textContent = pendientes;
    document.getElementById('pedidosCompletados').textContent = completados;
    document.getElementById('ventasDia').textContent = `$${ventas.toFixed(2)}`;
}

// ============= MODULO RESERVAS =============

function renderReservas() {
    const tbody = document.getElementById('reservasTableBody');
    const fecha = document.getElementById('reservaFecha').value || new Date().toISOString().split('T')[0];

    let filtered = reservas;
    if (fecha) {
        filtered = reservas.filter(r => r.fecha === fecha);
    }

    tbody.innerHTML = filtered.map(reserva => `
        <tr>
            <td>${reserva.cliente}</td>
            <td>${reserva.telefono}</td>
            <td>${formatDate(reserva.fecha)}</td>
            <td>${reserva.hora}</td>
            <td>Mesa ${reserva.mesa}</td>
            <td>${reserva.personas}</td>
            <td><span class="status-badge status-${reserva.estado}">${reserva.estado}</span></td>
            <td>
                ${reserva.estado === 'pendiente' ? `
                    <button class="btn-edit" onclick="updateReservaEstado(${reserva.id}, 'confirmada')" title="Confirmar">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn-delete" onclick="updateReservaEstado(${reserva.id}, 'cancelada')" title="Cancelar">
                        <i class="fas fa-times"></i>
                    </button>
                ` : ''}
            </td>
        </tr>
    `).join('');

    renderMesas(fecha);
}

function renderMesas(fecha) {
    const grid = document.getElementById('mesasGrid');
    const mesasOcupadas = reservas
        .filter(r => r.fecha === fecha && r.estado === 'confirmada')
        .map(r => r.mesa);

    const mesas = [
        { id: 1, capacidad: 2 },
        { id: 2, capacidad: 4 },
        { id: 3, capacidad: 4 },
        { id: 4, capacidad: 6 },
        { id: 5, capacidad: 8 }
    ];

    grid.innerHTML = mesas.map(mesa => `
        <div class="mesa-card ${mesasOcupadas.includes(mesa.id) ? 'occupied' : ''}">
            <i class="fas fa-chair"></i>
            <span>Mesa ${mesa.id} (${mesa.capacidad} pers.)</span>
        </div>
    `).join('');
}

function saveReserva(e) {
    e.preventDefault();

    const reserva = {
        id: Date.now(),
        cliente: document.getElementById('reservaCliente').value,
        telefono: document.getElementById('reservaTelefono').value,
        fecha: document.getElementById('reservaFechaInput').value,
        hora: document.getElementById('reservaHora').value,
        personas: parseInt(document.getElementById('reservaPersonas').value),
        mesa: document.getElementById('reservaMesa').value || asignarMesa(),
        notas: document.getElementById('reservaNotas').value,
        estado: 'pendiente'
    };

    reservas.push(reserva);
    localStorage.setItem('reservas', JSON.stringify(reservas));

    closeModal('reservaModal');
    document.getElementById('reservaForm').reset();
    renderReservas();
    showToast('Reserva creada');
}

function asignarMesa() {
    return Math.floor(Math.random() * 5) + 1;
}

function updateReservaEstado(id, estado) {
    const reserva = reservas.find(r => r.id === id);
    if (reserva) {
        reserva.estado = estado;
        localStorage.setItem('reservas', JSON.stringify(reservas));
        renderReservas();
        showToast(`Reserva ${estado}`);
    }
}

// ============= MODULO MENU =============

function renderMenuManagement() {
    const grid = document.getElementById('menuManagementGrid');
    const category = document.getElementById('menuCategoryFilter').value;

    let filtered = menuData;
    if (category !== 'all') {
        filtered = menuData.filter(item => item.category === category);
    }

    grid.innerHTML = filtered.map(dish => `
        <div class="menu-management-card">
            <img src="${dish.image}" alt="${dish.name}" onerror="this.src='https://via.placeholder.com/80?text=Plato'">
            <div class="menu-management-info">
                <h3>${dish.name}</h3>
                <span class="category-badge">${categoryLabels[dish.category]}</span>
                <span class="price">$${dish.price.toFixed(2)}</span>
                <div class="menu-management-actions">
                    <button class="btn-edit" onclick="editPlatillo(${dish.id})" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-delete" onclick="deletePlatillo(${dish.id})" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function editPlatillo(id) {
    const dish = menuData.find(d => d.id === id);
    if (!dish) return;

    document.getElementById('platilloModalTitle').textContent = 'Editar Platillo';
    document.getElementById('platilloId').value = dish.id;
    document.getElementById('platilloNombre').value = dish.name;
    document.getElementById('platilloCategoria').value = dish.category;
    document.getElementById('platilloDescripcion').value = dish.description;
    document.getElementById('platilloPrecio').value = dish.price;
    document.getElementById('platilloImagen').value = dish.image;
    document.getElementById('platilloDisponibilidad').value = dish.available ? 'disponible' : 'no-disponible';

    openModal('platilloModal');
}

function savePlatillo(e) {
    e.preventDefault();

    const id = document.getElementById('platilloId').value;
    const platillo = {
        id: id ? parseInt(id) : Date.now(),
        name: document.getElementById('platilloNombre').value,
        category: document.getElementById('platilloCategoria').value,
        description: document.getElementById('platilloDescripcion').value,
        price: parseFloat(document.getElementById('platilloPrecio').value),
        image: document.getElementById('platilloImagen').value || 'https://via.placeholder.com/400x300?text=Plato',
        available: document.getElementById('platilloDisponibilidad').value === 'disponible'
    };

    if (id) {
        const index = menuData.findIndex(d => d.id === parseInt(id));
        if (index !== -1) menuData[index] = platillo;
    } else {
        menuData.push(platillo);
    }

    localStorage.setItem('menuData', JSON.stringify(menuData));

    closeModal('platilloModal');
    document.getElementById('platilloForm').reset();
    renderMenuManagement();
    renderMenu();
    showToast('Platillo guardado');
}

function deletePlatillo(id) {
    if (confirm('¿Eliminar este platillo?')) {
        menuData = menuData.filter(d => d.id !== id);
        localStorage.setItem('menuData', JSON.stringify(menuData));
        renderMenuManagement();
        renderMenu();
        showToast('Platillo eliminado');
    }
}

// ============= MODULO USUARIOS =============

function renderUsuarios() {
    const grid = document.getElementById('usuariosGrid');

    grid.innerHTML = usuarios.map(user => `
        <div class="usuario-card">
            <div class="usuario-avatar">
                <i class="fas fa-user"></i>
            </div>
            <h3>${user.nombre} ${user.apellido}</h3>
            <p class="usuario-email">${user.email}</p>
            <span class="usuario-role">${user.rol}</span>
            <div class="usuario-actions">
                <button class="btn-edit" onclick="editUsuario(${user.id})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-delete" onclick="deleteUsuario(${user.id})" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function editUsuario(id) {
    const user = usuarios.find(u => u.id === id);
    if (!user) return;

    document.getElementById('usuarioModalTitle').textContent = 'Editar Usuario';
    document.getElementById('usuarioId').value = user.id;
    document.getElementById('usuarioNombre').value = user.nombre;
    document.getElementById('usuarioApellido').value = user.apellido;
    document.getElementById('usuarioEmail').value = user.email;
    document.getElementById('usuarioTelefono').value = user.telefono;
    document.getElementById('usuarioRol').value = user.rol;

    openModal('usuarioModal');
}

function saveUsuario(e) {
    e.preventDefault();

    const id = document.getElementById('usuarioId').value;
    const usuario = {
        id: id ? parseInt(id) : Date.now(),
        nombre: document.getElementById('usuarioNombre').value,
        apellido: document.getElementById('usuarioApellido').value,
        email: document.getElementById('usuarioEmail').value,
        telefono: document.getElementById('usuarioTelefono').value,
        rol: document.getElementById('usuarioRol').value
    };

    if (id) {
        const index = usuarios.findIndex(u => u.id === parseInt(id));
        if (index !== -1) usuarios[index] = usuario;
    } else {
        usuarios.push(usuario);
    }

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    closeModal('usuarioModal');
    document.getElementById('usuarioForm').reset();
    renderUsuarios();
    showToast('Usuario guardado');
}

function deleteUsuario(id) {
    if (confirm('¿Eliminar este usuario?')) {
        usuarios = usuarios.filter(u => u.id !== id);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        renderUsuarios();
        showToast('Usuario eliminado');
    }
}

// ============= MODULO FACTURAS =============

function renderFacturas() {
    const tbody = document.getElementById('facturasTableBody');

    tbody.innerHTML = facturas.map(factura => `
        <tr>
            <td>#${factura.id}</td>
            <td>${factura.cliente}</td>
            <td>${formatDate(factura.fecha)}</td>
            <td>${factura.tipo}</td>
            <td>$${factura.total.toFixed(2)}</td>
            <td><span class="status-badge status-${factura.estado}">${factura.estado}</span></td>
            <td>
                <button class="btn-edit" onclick="viewFactura(${factura.id})" title="Ver">
                    <i class="fas fa-eye"></i>
                </button>
                ${factura.estado === 'pendiente' ? `
                    <button class="btn-edit" onclick="updateFacturaEstado(${factura.id}, 'pagada')" title="Pagar">
                        <i class="fas fa-check"></i>
                    </button>
                ` : ''}
            </td>
        </tr>
    `).join('');

    const total = facturas.reduce((sum, f) => sum + f.total, 0);
    const pagadas = facturas.filter(f => f.estado === 'pagada').length;
    const pendientes = facturas.filter(f => f.estado === 'pendiente').length;

    document.getElementById('totalFacturado').textContent = `$${total.toFixed(2)}`;
    document.getElementById('facturasPagadas').textContent = pagadas;
    document.getElementById('facturasPendientes').textContent = pendientes;
}

let facturaItems = [{ descripcion: '', cantidad: 1, precio: 0 }];

function renderFacturaItems() {
    const tbody = document.getElementById('facturaItemsBody');
    facturaItems = [{ descripcion: '', cantidad: 1, precio: 0 }];
    
    tbody.innerHTML = facturaItems.map((item, index) => `
        <tr>
            <td><input type="text" value="${item.descripcion}" onchange="updateFacturaItem(${index}, 'descripcion', this.value)"></td>
            <td><input type="number" value="${item.cantidad}" min="1" onchange="updateFacturaItem(${index}, 'cantidad', this.value)"></td>
            <td><input type="number" value="${item.precio}" step="0.01" onchange="updateFacturaItem(${index}, 'precio', this.value)"></td>
            <td>$${(item.cantidad * item.precio).toFixed(2)}</td>
            <td><button class="btn-delete" onclick="removeFacturaItem(${index})"><i class="fas fa-times"></i></button></td>
        </tr>
    `).join('');

    updateFacturaTotals();
}

function addFacturaItem() {
    facturaItems.push({ descripcion: '', cantidad: 1, precio: 0 });
    renderFacturaItems();
}

function updateFacturaItem(index, field, value) {
    if (field === 'cantidad' || field === 'precio') {
        facturaItems[index][field] = parseFloat(value) || 0;
    } else {
        facturaItems[index][field] = value;
    }
    renderFacturaItems();
}

function removeFacturaItem(index) {
    facturaItems.splice(index, 1);
    renderFacturaItems();
}

function updateFacturaTotals() {
    const subtotal = facturaItems.reduce((sum, item) => sum + (item.cantidad * item.precio), 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    document.getElementById('facturaSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('facturaIVA').textContent = `$${iva.toFixed(2)}`;
    document.getElementById('facturaTotal').textContent = `$${total.toFixed(2)}`;
}

function saveFactura(e) {
    e.preventDefault();

    const validItems = facturaItems.filter(i => i.descripcion && i.cantidad > 0 && i.precio > 0);
    if (validItems.length === 0) {
        showToast('Agregue al menos un item', 'error');
        return;
    }

    const subtotal = validItems.reduce((sum, item) => sum + (item.cantidad * item.precio), 0);
    const iva = subtotal * 0.16;

    const factura = {
        id: Date.now(),
        cliente: document.getElementById('facturaCliente').value,
        tipo: document.getElementById('facturaTipo').value,
        fecha: document.getElementById('facturaFechaEmision').value,
        vencimiento: document.getElementById('facturaFechaVencimiento').value,
        items: validItems,
        subtotal,
        iva,
        total: subtotal + iva,
        estado: 'pendiente'
    };

    facturas.push(factura);
    localStorage.setItem('facturas', JSON.stringify(facturas));

    closeModal('facturaModal');
    document.getElementById('facturaForm').reset();
    renderFacturas();
    showToast('Factura generada');
}

function updateFacturaEstado(id, estado) {
    const factura = facturas.find(f => f.id === id);
    if (factura) {
        factura.estado = estado;
        localStorage.setItem('facturas', JSON.stringify(facturas));
        renderFacturas();
        showToast(`Factura marcada como ${estado}`);
    }
}

function viewFactura(id) {
    const factura = facturas.find(f => f.id === id);
    if (!factura) return;
    alert(`Factura #${factura.id}\nCliente: ${factura.cliente}\nTotal: $${factura.total.toFixed(2)}\nEstado: ${factura.estado}`);
}

// ============= MODULO REPORTES =============

function generarReporte() {
    const tipo = document.getElementById('reporteTipo').value;
    const container = document.getElementById('chartContainer');
    const summary = document.getElementById('reportSummary');

    let reportData = [];
    let reportTitle = '';

    switch (tipo) {
        case 'ventas':
            reportTitle = 'Reporte de Ventas';
            reportData = [
                { label: 'Lunes', value: 1250 },
                { label: 'Martes', value: 980 },
                { label: 'Miércoles', value: 1560 },
                { label: 'Jueves', value: 1420 },
                { label: 'Viernes', value: 2100 },
                { label: 'Sábado', value: 2800 },
                { label: 'Domingo', value: 1950 }
            ];
            break;
        case 'productos':
            reportTitle = 'Productos Más Vendidos';
            reportData = [
                { label: 'Ribeye Steak', value: 45 },
                { label: 'Pasta Carbonara', value: 38 },
                { label: 'Burger Gourmet', value: 35 },
                { label: 'Salmón Grillado', value: 28 },
                { label: 'Tiramisú', value: 22 }
            ];
            break;
        case 'clientes':
            reportTitle = 'Clientes Frecuentes';
            reportData = [
                { label: 'Carlos García', value: 12 },
                { label: 'María López', value: 9 },
                { label: 'José Martínez', value: 7 },
                { label: 'Ana Rodríguez', value: 6 },
                { label: 'Luis Hernández', value: 5 }
            ];
            break;
        case 'reservas':
            reportTitle = 'Reservas por Día';
            reportData = [
                { label: 'Lunes', value: 8 },
                { label: 'Martes', value: 5 },
                { label: 'Miércoles', value: 7 },
                { label: 'Jueves', value: 10 },
                { label: 'Viernes', value: 15 },
                { label: 'Sábado', value: 20 },
                { label: 'Domingo', value: 12 }
            ];
            break;
    }

    const maxValue = Math.max(...reportData.map(d => d.value));

    container.innerHTML = `
        <div class="bar-chart">
            ${reportData.map(d => `
                <div class="bar-item">
                    <div class="bar-label">${d.label}</div>
                    <div class="bar-container">
                        <div class="bar" style="width: ${(d.value / maxValue) * 100}%">
                            <span>${d.value}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    const total = reportData.reduce((sum, d) => sum + d.value, 0);
    const promedio = (total / reportData.length).toFixed(1);

    summary.innerHTML = `
        <div class="report-summary-grid">
            <div class="stat-card">
                <div class="stat-info">
                    <span class="stat-value">${total}</span>
                    <span class="stat-label">Total ${tipo}</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-info">
                    <span class="stat-value">${promedio}</span>
                    <span class="stat-label">Promedio</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-info">
                    <span class="stat-value">${reportData.length}</span>
                    <span class="stat-label">Registros</span>
                </div>
            </div>
        </div>
    `;
}

// ============= UTILIDADES =============

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES');
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = toast.querySelector('i');
    
    toast.querySelector('#toastMessage').textContent = message;
    icon.className = type === 'error' ? 'fas fa-exclamation-circle' : 'fas fa-check-circle';
    icon.style.color = type === 'error' ? '#e74c3c' : '#00b894';
    
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============= MODULO CLIENTES =============

function renderClientes() {
    const tbody = document.getElementById('clientesTableBody');
    const searchTerm = document.getElementById('clienteSearch').value.toLowerCase();
    const estadoFiltro = document.getElementById('clienteFiltroEstado').value;

    clientesFiltered = clientes.filter(cliente => {
        const matchSearch = cliente.nombre.toLowerCase().includes(searchTerm) ||
            cliente.apellido.toLowerCase().includes(searchTerm) ||
            cliente.email.toLowerCase().includes(searchTerm) ||
            cliente.telefono.includes(searchTerm);
        const matchEstado = estadoFiltro === 'all' || cliente.estado === estadoFiltro;
        return matchSearch && matchEstado;
    });

    const totalItems = clientesFiltered.length;
    const totalPages = Math.ceil(totalItems / clientesPerPage);
    const startIndex = (clientesCurrentPage - 1) * clientesPerPage;
    const endIndex = Math.min(startIndex + clientesPerPage, totalItems);
    const pageItems = clientesFiltered.slice(startIndex, endIndex);

    if (pageItems.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-light);">
                    <i class="fas fa-users" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
                    No se encontraron clientes
                </td>
            </tr>
        `;
    } else {
        tbody.innerHTML = pageItems.map(cliente => `
            <tr>
                <td>${cliente.id}</td>
                <td>${cliente.nombre} ${cliente.apellido}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefono}</td>
                <td>${cliente.direccion || '-'}</td>
                <td>${cliente.totalPedidos}</td>
                <td>$${cliente.gastoTotal.toFixed(2)}</td>
                <td><span class="status-badge status-${cliente.estado}">${cliente.estado}</span></td>
                <td>
                    <button class="btn-edit" onclick="editCliente(${cliente.id})" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-delete" onclick="deleteCliente(${cliente.id})" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    // Actualizar info de paginación
    const infoText = totalItems === 0 
        ? 'No hay clientes' 
        : `Mostrando ${startIndex + 1} - ${endIndex} de ${totalItems} clientes`;
    document.getElementById('paginationInfo').textContent = infoText;

    // Actualizar botones de paginación
    document.getElementById('prevPage').disabled = clientesCurrentPage === 1;
    document.getElementById('nextPage').disabled = clientesCurrentPage === totalPages || totalPages === 0;

    // Renderizar páginas
    renderPaginationPages(totalPages);
}

function renderPaginationPages(totalPages) {
    const container = document.getElementById('paginationPages');
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        if (clientesCurrentPage <= 3) {
            pages = [1, 2, 3, 4, '...', totalPages];
        } else if (clientesCurrentPage >= totalPages - 2) {
            pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            pages = [1, '...', clientesCurrentPage - 1, clientesCurrentPage, clientesCurrentPage + 1, '...', totalPages];
        }
    }

    container.innerHTML = pages.map(page => {
        if (page === '...') {
            return `<span class="page-ellipsis">...</span>`;
        }
        return `<button class="page-btn ${page === clientesCurrentPage ? 'active' : ''}" onclick="goToPage(${page})">${page}</button>`;
    }).join('');
}

function goToPage(page) {
    clientesCurrentPage = page;
    renderClientes();
}

function filterClientes() {
    clientesCurrentPage = 1;
    renderClientes();
}

function editCliente(id) {
    const cliente = clientes.find(c => c.id === id);
    if (!cliente) return;

    document.getElementById('clienteModalTitle').textContent = 'Editar Cliente';
    document.getElementById('clienteId').value = cliente.id;
    document.getElementById('clienteNombre').value = cliente.nombre;
    document.getElementById('clienteApellido').value = cliente.apellido;
    document.getElementById('clienteEmail').value = cliente.email;
    document.getElementById('clienteTelefono').value = cliente.telefono;
    document.getElementById('clienteDireccion').value = cliente.direccion || '';
    document.getElementById('clienteEstado').value = cliente.estado;

    openModal('clienteModal');
}

function saveCliente(e) {
    e.preventDefault();

    const id = document.getElementById('clienteId').value;
    const cliente = {
        id: id ? parseInt(id) : Date.now(),
        nombre: document.getElementById('clienteNombre').value,
        apellido: document.getElementById('clienteApellido').value,
        email: document.getElementById('clienteEmail').value,
        telefono: document.getElementById('clienteTelefono').value,
        direccion: document.getElementById('clienteDireccion').value,
        estado: document.getElementById('clienteEstado').value,
        totalPedidos: id ? clientes.find(c => c.id === parseInt(id))?.totalPedidos || 0 : 0,
        gastoTotal: id ? clientes.find(c => c.id === parseInt(id))?.gastoTotal || 0 : 0
    };

    if (id) {
        const index = clientes.findIndex(c => c.id === parseInt(id));
        if (index !== -1) clientes[index] = cliente;
    } else {
        clientes.push(cliente);
    }

    localStorage.setItem('clientes', JSON.stringify(clientes));

    closeModal('clienteModal');
    document.getElementById('clienteForm').reset();
    renderClientes();
    showToast('Cliente guardado');
}

function deleteCliente(id) {
    if (confirm('¿Eliminar este cliente?')) {
        clientes = clientes.filter(c => c.id !== id);
        localStorage.setItem('clientes', JSON.stringify(clientes));
        renderClientes();
        showToast('Cliente eliminado');
    }
}

// Agregar estilos del chart dinámicamente
const style = document.createElement('style');
style.textContent = `
    .bar-chart {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }
    .bar-item {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .bar-label {
        min-width: 120px;
        font-size: 0.9rem;
        color: var(--text);
    }
    .bar-container {
        flex: 1;
        height: 30px;
        background: var(--background);
        border-radius: 4px;
        overflow: hidden;
    }
    .bar {
        height: 100%;
        background: linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 0.5rem;
        color: white;
        font-size: 0.8rem;
        font-weight: 500;
        border-radius: 4px;
        transition: width 0.5s ease;
    }
`;
document.head.appendChild(style);