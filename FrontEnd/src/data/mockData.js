export const INITIAL_PRODUCTS = [
  {
    id: 1,
    codigoBarras: '7750111002341',
    nombre: 'Aceite Primor 900 ml',
    categoria: 'Abarrotes y Aceites',
    rotacionAbc: 'A',
    stockGondola: 4,
    stockAlmacen: 12,
    stockMinimo: 20,
    consumoHora: 2.8,
    precioVenta: 8.50,
    tiempoQuiebre: '45 min',
    estado: 'CRITICO', // CRITICO, ALERTA, OPTIMO
    ubicacion: 'Pasillo 2 - Góndola A',
    imagenIcon: '🍾'
  },
  {
    id: 2,
    codigoBarras: '7750243001025',
    nombre: 'Leche Gloria Azul 400 g',
    categoria: 'Lácteos y Desayuno',
    rotacionAbc: 'A',
    stockGondola: 12,
    stockAlmacen: 24,
    stockMinimo: 30,
    consumoHora: 3.5,
    precioVenta: 4.20,
    tiempoQuiebre: '3.4 hrs',
    estado: 'ALERTA',
    ubicacion: 'Pasillo 1 - Góndola B',
    imagenIcon: '🥛'
  },
  {
    id: 3,
    codigoBarras: '7750389004512',
    nombre: 'Arroz Costeño Extra 1 kg',
    categoria: 'Abarrotes y Granos',
    rotacionAbc: 'A',
    stockGondola: 48,
    stockAlmacen: 120,
    stockMinimo: 25,
    consumoHora: 4.0,
    precioVenta: 4.90,
    tiempoQuiebre: '> 12 hrs',
    estado: 'OPTIMO',
    ubicacion: 'Pasillo 2 - Góndola C',
    imagenIcon: '🍚'
  },
  {
    id: 4,
    codigoBarras: '7750456007890',
    nombre: 'Azúcar Rubia Cartavio 1 kg',
    categoria: 'Abarrotes y Dulces',
    rotacionAbc: 'B',
    stockGondola: 8,
    stockAlmacen: 18,
    stockMinimo: 18,
    consumoHora: 2.1,
    precioVenta: 3.80,
    tiempoQuiebre: '3.8 hrs',
    estado: 'ALERTA',
    ubicacion: 'Pasillo 2 - Góndola D',
    imagenIcon: '🍬'
  },
  {
    id: 5,
    codigoBarras: '7750567003421',
    nombre: 'Fideos Don Vittorio Spaghetti 450 g',
    categoria: 'Pastas y Harinas',
    rotacionAbc: 'B',
    stockGondola: 36,
    stockAlmacen: 72,
    stockMinimo: 20,
    consumoHora: 2.5,
    precioVenta: 2.80,
    tiempoQuiebre: '> 14 hrs',
    estado: 'OPTIMO',
    ubicacion: 'Pasillo 3 - Góndola A',
    imagenIcon: '🍝'
  },
  {
    id: 6,
    codigoBarras: '7750678009123',
    nombre: 'Papel Higiénico Suave 4 un.',
    categoria: 'Cuidado del Hogar',
    rotacionAbc: 'A',
    stockGondola: 3,
    stockAlmacen: 8,
    stockMinimo: 16,
    consumoHora: 1.8,
    precioVenta: 6.20,
    tiempoQuiebre: '1.6 hrs',
    estado: 'CRITICO',
    ubicacion: 'Pasillo 4 - Góndola B',
    imagenIcon: '🧻'
  }
];

export const INITIAL_MOVEMENTS_LOG = [
  {
    id: 101,
    producto: 'Aceite Primor 900 ml',
    tipo: 'SALIDA_VENTA',
    cantidad: 6,
    hora: '09:45 AM',
    usuario: 'Operario Turno Mañana',
    motivo: 'Venta pico de la mañana'
  },
  {
    id: 102,
    producto: 'Leche Gloria Azul 400 g',
    tipo: 'ENTRADA_REPOSICION',
    cantidad: 12,
    hora: '10:15 AM',
    usuario: 'Operario Turno Mañana',
    motivo: 'Reposición de góndola desde almacén'
  }
];
