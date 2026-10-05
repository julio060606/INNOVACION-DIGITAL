# Prototipo Frontend Móvil (PWA) — Tiendas 3A

Sistema de Inventario Inteligente y Predictivo para **Tiendas 3A** (Sucursal Av. Tantamayo 1032, San Martín de Porres).  
Desarrollado para el **Avance de Proyecto Final 2 (APF2) — UTP**.

---

## 🚀 Cómo ejecutar el prototipo localmente

1. Abre tu terminal en la carpeta `FrontEnd/`:
   ```bash
   cd FrontEnd
   ```
2. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre tu navegador en la URL indicada (usualmente `http://localhost:3000` o `http://localhost:5173`).

---

## 📱 Características y Funcionalidades del Prototipo

### 1. Enfoque Mobile-First y Adaptabilidad para Sustentación
- **Modo Marco Celular (Smartphone Demo):** En pantallas de computadora, la app se renderiza dentro de un marco elegante de smartphone (con notch y barra de estado simulada). Esto permite proyectarlo en clase y mostrar cómo luce en el teléfono del operario en el pasillo de la tienda.
- **Modo Expandido:** Botón en la barra superior para alternar a vista ancha de escritorio.

### 2. Semáforo de Góndola Interactivo (Cumplimiento US2)
- Tarjetas resumen con contador en vivo de productos:
  - 🔴 **Críticos (Quiebre inminente en < 1 hora):** *Aceite Primor 900ml*, *Papel Higiénico Suave*.
  - 🟡 **Alerta (Quiebre en 3 a 4 horas):** *Leche Gloria 400g*, *Azúcar Rubia Cartavio*.
  - 🟢 **Óptimos (Cobertura > 8 horas):** *Arroz Costeño 1kg*, *Fideos Don Vittorio*.
- Visibilidad dual de existencias: **En Góndola** vs. **En Trastienda/Almacén** (mejora incorporada a partir del testeo de usabilidad).

### 3. Registro Ágil de Movimientos en < 30 seg (Cumplimiento US1 y US5)
- Botón flotante `+ Registrar Movimiento` permanente.
- Selector de producto y toggle táctil de gran tamaño: `[ ENTRADA / REPOSICIÓN ]` vs. `[ SALIDA / VENTA ]`.
- Pulsadores rápidos de cantidades estándar: `+6`, `+12`, `+24 (Caja)`, `+48`.
- Menú de motivo de salida para auditoría de mermas (*Vencimiento, Rotura en góndola*).
- **Recálculo Dinámico en Tiempo Real:** Al confirmar una reposición, el stock se actualiza en pantalla y el semáforo cambia de color automáticamente con feedback tipo Toast.

### 4. Simulador de Alerta por WhatsApp (Cumplimiento US4)
- Botón flotante de WhatsApp en la cabecera con contador de alertas críticas pendientes.
- Simula el mensaje automatizado enviado por la API de WhatsApp Business al celular del encargado con el punto de reorden (ROP) y botón de reposición rápida de `+24 unidades`.

### 5. Pestaña de Kardex en Tiempo Real
- Historial auditado de movimientos con timestamp, usuario responsable y motivo.

---

## 🛠️ Tecnologías Utilizadas
- **React 18** + **Vite** (Arranque instantáneo y modularidad).
- **Tailwind CSS** (Diseño responsivo y paleta corporativa de Tiendas 3A).
- **Lucide React** (Iconografía empresarial limpia).
- **Mock Data Store reactivo** (Sin dependencias externas pesadas para la entrega del APF2).
