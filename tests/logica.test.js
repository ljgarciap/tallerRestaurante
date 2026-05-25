/**
 * Suite de Pruebas Unitarias — SIGR "El Gourmet"
 * Prueba las funciones de lógica pura extraídas de js/script.js
 * sin depender del DOM ni de localStorage.
 */

// ─── Funciones bajo prueba (extraídas de script.js) ──────────────────────────

function getDateOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
}

function calcularTotalesFactura(items) {
  const subtotal = items.reduce((sum, item) => sum + (item.cantidad * item.precio), 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;
  return { subtotal, iva, total };
}

function filtrarItemsValidos(items) {
  return items.filter(i => i.descripcion && i.cantidad > 0 && i.precio > 0);
}

function buscarClientePorNombre(clientes, nombreCompleto) {
  return clientes.find(
    c => (c.nombre + ' ' + c.apellido).toLowerCase() === nombreCompleto.toLowerCase()
  );
}

function calcularTotalCarrito(cart) {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function filtrarPorCategoria(menu, categoria) {
  return menu.filter(p => p.category === categoria);
}

function getPlatilloMasVendido(pedidos) {
  const conteo = {};
  pedidos.forEach(p => {
    p.items.forEach(item => {
      conteo[item.name] = (conteo[item.name] || 0) + item.quantity;
    });
  });
  return Object.entries(conteo).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
}

function mesasOcupadasEnFecha(reservas, fecha) {
  return reservas
    .filter(r => r.fecha === fecha && r.estado !== 'cancelada')
    .map(r => r.mesa);
}

// ─── TESTS ───────────────────────────────────────────────────────────────────

describe('getDateOffset', () => {
  test('devuelve la fecha de hoy con offset 0', () => {
    const hoy = new Date().toISOString().split('T')[0];
    expect(getDateOffset(0)).toBe(hoy);
  });

  test('devuelve formato YYYY-MM-DD válido', () => {
    const resultado = getDateOffset(3);
    expect(resultado).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  test('offset negativo devuelve fecha pasada', () => {
    const ayer = getDateOffset(-1);
    const hoy  = getDateOffset(0);
    expect(ayer < hoy).toBe(true);
  });

  test('offset positivo devuelve fecha futura', () => {
    const manana = getDateOffset(1);
    const hoy    = getDateOffset(0);
    expect(manana > hoy).toBe(true);
  });
});

describe('calcularTotalesFactura — IVA 16%', () => {
  test('calcula correctamente con un solo ítem', () => {
    const items = [{ cantidad: 1, precio: 100 }];
    const { subtotal, iva, total } = calcularTotalesFactura(items);
    expect(subtotal).toBe(100);
    expect(iva).toBeCloseTo(16);
    expect(total).toBeCloseTo(116);
  });

  test('calcula correctamente con múltiples ítems', () => {
    const items = [
      { cantidad: 2, precio: 285 },  // Ribeye x2 = 570
      { cantidad: 2, precio: 55  },  // Café   x2 = 110
    ];
    const { subtotal, iva, total } = calcularTotalesFactura(items);
    expect(subtotal).toBe(680);
    expect(iva).toBeCloseTo(108.8);
    expect(total).toBeCloseTo(788.8);
  });

  test('subtotal 0 cuando no hay ítems', () => {
    const { subtotal, iva, total } = calcularTotalesFactura([]);
    expect(subtotal).toBe(0);
    expect(iva).toBe(0);
    expect(total).toBe(0);
  });

  test('IVA es exactamente el 16% del subtotal', () => {
    const items = [{ cantidad: 3, precio: 175 }];
    const { subtotal, iva } = calcularTotalesFactura(items);
    expect(iva).toBeCloseTo(subtotal * 0.16);
  });
});

describe('filtrarItemsValidos', () => {
  test('filtra ítems sin descripción', () => {
    const items = [
      { descripcion: 'Ribeye', cantidad: 1, precio: 285 },
      { descripcion: '',       cantidad: 1, precio: 100 },
    ];
    expect(filtrarItemsValidos(items)).toHaveLength(1);
  });

  test('filtra ítems con cantidad 0', () => {
    const items = [
      { descripcion: 'Burger', cantidad: 0, precio: 165 },
      { descripcion: 'Pasta',  cantidad: 2, precio: 175 },
    ];
    expect(filtrarItemsValidos(items)).toHaveLength(1);
  });

  test('filtra ítems con precio 0', () => {
    const items = [{ descripcion: 'Gratis', cantidad: 1, precio: 0 }];
    expect(filtrarItemsValidos(items)).toHaveLength(0);
  });

  test('mantiene todos los ítems válidos', () => {
    const items = [
      { descripcion: 'Salmón',   cantidad: 1, precio: 245 },
      { descripcion: 'Tiramisú', cantidad: 2, precio: 85  },
    ];
    expect(filtrarItemsValidos(items)).toHaveLength(2);
  });
});

describe('buscarClientePorNombre', () => {
  const clientes = [
    { nombre: 'Juan',  apellido: 'Pérez',  gastoTotal: 4250 },
    { nombre: 'Sofia', apellido: 'Gómez',  gastoTotal: 6800 },
    { nombre: 'Laura', apellido: 'Martínez', gastoTotal: 9250 },
  ];

  test('encuentra cliente existente (case-insensitive)', () => {
    const c = buscarClientePorNombre(clientes, 'juan pérez');
    expect(c).toBeDefined();
    expect(c.nombre).toBe('Juan');
  });

  test('devuelve undefined si el cliente no existe', () => {
    const c = buscarClientePorNombre(clientes, 'Pedro Alonso');
    expect(c).toBeUndefined();
  });

  test('funciona con nombre en mayúsculas', () => {
    const c = buscarClientePorNombre(clientes, 'SOFIA GÓMEZ');
    expect(c).toBeDefined();
  });
});

describe('calcularTotalCarrito', () => {
  test('suma correctamente múltiples ítems', () => {
    const cart = [
      { price: 285, quantity: 2 },
      { price: 55,  quantity: 2 },
    ];
    expect(calcularTotalCarrito(cart)).toBe(680);
  });

  test('carrito vacío devuelve 0', () => {
    expect(calcularTotalCarrito([])).toBe(0);
  });

  test('ítem con cantidad 1', () => {
    const cart = [{ price: 175, quantity: 1 }];
    expect(calcularTotalCarrito(cart)).toBe(175);
  });
});

describe('filtrarPorCategoria', () => {
  const menu = [
    { id: 1, name: 'Bruschetta',  category: 'entradas'       },
    { id: 4, name: 'Ribeye',      category: 'platos-fuertes' },
    { id: 9, name: 'Limonada',    category: 'bebidas'        },
    { id: 12, name: 'Tiramisú',   category: 'postres'        },
    { id: 3, name: 'Croquetas',   category: 'entradas'       },
  ];

  test('filtra entradas correctamente', () => {
    const entradas = filtrarPorCategoria(menu, 'entradas');
    expect(entradas).toHaveLength(2);
    expect(entradas.every(p => p.category === 'entradas')).toBe(true);
  });

  test('devuelve array vacío si categoría no existe', () => {
    expect(filtrarPorCategoria(menu, 'desayunos')).toHaveLength(0);
  });

  test('filtra platos fuertes', () => {
    const platos = filtrarPorCategoria(menu, 'platos-fuertes');
    expect(platos).toHaveLength(1);
    expect(platos[0].name).toBe('Ribeye');
  });
});

describe('getPlatilloMasVendido', () => {
  const pedidos = [
    { items: [{ name: 'Ribeye',  quantity: 2 }, { name: 'Café', quantity: 1 }] },
    { items: [{ name: 'Ribeye',  quantity: 1 }] },
    { items: [{ name: 'Burger',  quantity: 3 }] },
    { items: [{ name: 'Ribeye',  quantity: 1 }] },
  ];

  test('identifica el platillo más vendido', () => {
    expect(getPlatilloMasVendido(pedidos)).toBe('Ribeye'); // 4 unidades vs Burger 3
  });

  test('devuelve null con pedidos vacíos', () => {
    expect(getPlatilloMasVendido([])).toBeNull();
  });
});

describe('mesasOcupadasEnFecha', () => {
  const hoy = getDateOffset(0);
  const reservas = [
    { fecha: hoy, mesa: 1, estado: 'confirmada' },
    { fecha: hoy, mesa: 3, estado: 'confirmada' },
    { fecha: hoy, mesa: 5, estado: 'cancelada'  },  // cancelada — no cuenta
    { fecha: getDateOffset(1), mesa: 2, estado: 'confirmada' }, // otro día
  ];

  test('devuelve solo mesas ocupadas hoy', () => {
    const ocupadas = mesasOcupadasEnFecha(reservas, hoy);
    expect(ocupadas).toContain(1);
    expect(ocupadas).toContain(3);
    expect(ocupadas).not.toContain(5); // cancelada
    expect(ocupadas).not.toContain(2); // otro día
  });

  test('devuelve array vacío si no hay reservas en la fecha', () => {
    const ocupadas = mesasOcupadasEnFecha(reservas, '2020-01-01');
    expect(ocupadas).toHaveLength(0);
  });
});
