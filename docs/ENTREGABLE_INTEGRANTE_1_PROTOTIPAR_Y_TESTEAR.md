# Redacción Oficial para el Informe APF2 — Integrante 1 (UX & Frontend)

> **Ubicación en el documento grupal:** Reemplaza los marcadores `[Sección pendiente de desarrollo.]` en los puntos **2.4 Prototipar** y **2.5 Testear** (Página 20 del informe).
> **Responsable:** Integrante 1 (UX & Frontend — Julio Rodrigo Minaya Urdanivia).
> **Alineación:** Responde directamente al **Indicador 2 de la Rúbrica Oficial (5 puntos)** mediante artefactos visuales propios adaptados a la sucursal Av. Tantamayo de Tiendas 3A.

---

## 2.4 Prototipar

Para materializar las tres ideas seleccionadas en la fase de ideación (Pronóstico de demanda horaria, Semáforo de stock en dashboard y Alertas preventivas por WhatsApp) y responder a los dolores identificados en el Mapa de Empatía, se diseñó un **prototipo de media fidelidad** bajo el enfoque *Mobile-First*.

### 2.4.1 Justificación Arquitectónica del Prototipo
Dado que el personal de piso de venta de Tiendas 3A (sucursal Tantamayo) cumple funciones mixtas y simultáneas (cobro en caja registradora, reposición en pasillo y recepción de pedidos), el prototipo no fue concebido como un software de escritorio tradicional que obligue al operario a desplazarse a una oficina trasera. Por el contrario, se estructuró como una **Aplicación Web Progresiva (PWA)** en React optimizada para pantallas táctiles de smartphones estándar (formato vertical 9:16), con interfaz simplificada que no requiere periféricos especializados (Nielsen, 1994).

La arquitectura visual y de interacción se divide en tres vistas clave:

```
┌────────────────────────────────────────────────────────────────────────┐
│               ARQUITECTURA DE PANTALLAS DEL PROTOTIPO                 │
├───────────────────────────┬────────────────────────────────────────────┤
│ PANTALLA 1: DASHBOARD     │ • Semáforo de Stock (Verde, Ámbar, Rojo).  │
│ Y SEMÁFORO DE GÓNDOLA     │ • Listado priorizado por riesgo de quiebre.│
│ (Vista Operario / Admin)  │ • Indicador de Horas Restantes de Stock.   │
├───────────────────────────┼────────────────────────────────────────────┤
│ PANTALLA 2: REGISTRO ÁGIL │ • Formulario ultra-rápido de 3 campos.     │
│ DE ENTRADAS Y SALIDAS     │ • Botones táctiles grandes para selección. │
│ (Cumplimiento US1)        │ • Registro completable en menos de 45 seg. │
├───────────────────────────┼────────────────────────────────────────────┤
│ PANTALLA 3: NOTIFICACIÓN  │ • Mensaje push formateado vía WhatsApp.    │
│ PREVENTIVA WHATSAPP       │ • Alerta de Punto de Reorden (ROP).        │
│ (Cumplimiento US4)        │ • Botón directo de acción "Repuesto".      │
└───────────────────────────┴────────────────────────────────────────────┘
```

---

### 2.4.2 Descripción Detallada de los Bocetos de Interfaz (Artefactos Propios)

#### A. Pantalla 1: Dashboard Operativo con Semáforo de Góndola (Figura 4)
* **Objetivo:** Brindar visibilidad en tiempo real del estado de abastecimiento en piso de venta sin obligar al colaborador a hacer conteos visuales manuales en hora pico.
* **Componentes clave:**
  1. **Cabecera contextual:** Identificación clara de la sucursal (*"Tiendas 3A — Sede Tantamayo"*), turno operativo y botón de actualización de datos.
  2. **Tarjetas resumen de criticidad:**
     - **Rojo (Crítico / Quiebre inminente):** Stock $\le$ 30% del nivel de seguridad; requiere reposición inmediata desde almacén interno.
     - **Ámbar (Alerta de Reorden):** Stock entre 31% y 60%; se prevé quiebre en las próximas 3 a 4 horas según el ritmo de venta.
     - **Verde (Óptimo):** Góndola abastecida con cobertura para más de 8 horas de venta.
  3. **Lista de SKUs de alta rotación:** Cada fila muestra la imagen o ícono representativo, nombre del producto (*ej. Leche Gloria Azul 400g, Aceite Primor 900ml*), unidades actuales en piso de venta, tasa horaria de consumo estimada y estado de alerta.
  4. **Acceso directo de acción:** Botón flotante (*Floating Action Button*) permanente para registrar reposición o salida en un solo toque.

#### B. Pantalla 2: Registro Rápido de Movimientos de Inventario (Figura 5)
* **Objetivo:** Cumplir estrictamente con la Historia de Usuario 1 (**US1**) y resolver la fricción identificada en el mapa de empatía (*"poco tiempo para registrar mientras atiendo caja"*).
* **Componentes clave:**
  1. **Selector de Producto:** Buscador predictivo por texto o lista de productos frecuentes de la tienda.
  2. **Tipo de Movimiento (Toggle táctil):** Dos botones de gran tamaño para alternar entre `[ ENTRADA / REPOSICIÓN ]` y `[ SALIDA / VENTA / MERMA ]`.
  3. **Cantidad:** Selector numérico simplificado con pulsadores rápidos (`+5`, `+10`, `+20`, `+50`) y teclado numérico directo para evitar errores de tipeo.
  4. **Motivo (opcional según US5):** Menú contextual si es merma (Vencimiento, Rotura en góndola, Deterioro de empaque).
  5. **Botón de confirmación visual:** Botón verde de ancho completo *"Registrar en Kardex"*, con retroalimentación inmediata tipo toast ("Movimiento registrado con éxito").

#### C. Pantalla 3: Mockup de Notificación Preventiva por WhatsApp (Figura 6)
* **Objetivo:** Concretar la integración de la API de WhatsApp Business (**US4**) para entregar el valor de la predicción en el canal móvil habitual del personal.
* **Estructura del mensaje automatizado:**
  ```text
  🚨 ALERTA DE REPOSICIÓN PREVENTIVA — TIENDAS 3A (Tantamayo)
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Producto: Aceite Vegetal Primor 900 ml
  Stock actual en góndola: 4 unidades
  Consumo estimado (18:00 - 20:00 h): 14 unidades
  
  ⚠️ Riesgo de quiebre proyectado: 18:45 hrs (Hora Pico)
  Sugerencia de reposición: Bajar 12 unidades de almacén
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  [ Registrar Reposición en App ]  |  [ Posponer 15 min ]
  ```

---

## 2.5 Testear

La fase de testeo tiene como propósito validar los artefactos prototipados frente a usuarios reales del entorno operativo de Tiendas 3A, evaluando la deseabilidad, la facilidad de adopción y la reducción efectiva de tiempos de registro (Brown, 2008; Stanford d.school, 2010).

### 2.5.1 Plan de Validación con Usuarios Reales

A continuación se detalla el protocolo estructurado para la sesión de pruebas:

* **Con quién (Perfil de usuarios participantes):**
  - **Usuario Primario 1 (Operario de Tienda / Caja):** Colaborador con funciones mixtas de atención en caja y reposición física de abarrotes en la sucursal Av. Tantamayo.
  - **Usuario Primario 2 (Administrador de Sucursal):** Encargado de la tienda, responsable de pedidos al centro de distribución y champion del proceso de transformación digital.
* **Qué se evaluará (Variables e hipótesis de prueba):**
  1. **Tasa de éxito de la tarea (Task Success Rate):** Capacidad del operario para completar el registro de una entrada de 20 unidades sin asistencia externa.
  2. **Tiempo por tarea (Time on Task):** Medición de segundos requeridos para registrar una salida en comparación con el método manual o POS tradicional (Meta: $< 45$ segundos).
  3. **Claridad del Semáforo Visual:** Verificación de si el colaborador identifica inmediatamente qué productos ameritan reposición prioritaria según el color mostrado.
  4. **Comprensión y aceptación de la alerta WhatsApp:** Validación de si el mensaje preventivo resulta claro, útil y no invasivo en su jornada.
* **Formato y entorno de la sesión:**
  - **Modalidad:** Prueba de usabilidad presencial en el local de Av. Tantamayo 1032, San Martín de Porres.
  - **Momento:** Sesión de 30 minutos programada durante la franja de cambio de turno o baja afluencia (martes de 10:00 a 10:30 h) para no entorpecer la operación comercial.
  - **Técnica de evaluación:** Protocolo de pensamiento en voz alta (*Think Aloud Protocol*), donde el colaborador interactúa con el prototipo móvil mientras expresa en voz alta sus impresiones y dudas.

---

### 2.5.2 Malla Receptora de Información (Feedback Capture Grid)

A partir de la simulación de prueba con el prototipo navegable, se estructura la Malla Receptora de Información para clasificar los hallazgos en cuatro cuadrantes:

```
┌───────────────────────────────────────┬───────────────────────────────────────┐
│        COSAS NOTABLES / POSITIVAS (+) │         CRÍTICAS CONSTRUCTIVAS (△)    │
├───────────────────────────────────────┼───────────────────────────────────────┤
│ • El semáforo por colores (rojo,      │ • En horas de mucho tráfico, seleccionar│
│   ámbar, verde) se entiende de forma  │   el producto escribiendo puede tomar │
│   instantánea sin capacitación.       │   demasiado tiempo.                   │
│ • La notificación de WhatsApp llega   │ • La alerta de WhatsApp debe indicar  │
│   directo al celular sin necesidad de │   en qué pasillo o estante específico │
│   mantener la app abierta.            │   debe colocarse la mercadería.       │
│ • Los botones grandes en el formulario│ • Se necesita ver cuántas unidades hay│
│   facilitan el uso con una sola mano. │   en el almacén interno antes de ir.  │
├───────────────────────────────────────┼───────────────────────────────────────┤
│            PREGUNTAS / DUDAS (?)      │              NUEVAS IDEAS (💡)        │
├───────────────────────────────────────┼───────────────────────────────────────┤
│ • "¿El sistema avisa también si un    │ • Incorporar un lector de código de   │
│   producto está por vencer o solo     │   barras usando la cámara del celular.│
│   cuando se agota?"                   │ • Añadir un botón rápido de "Caja     │
│ • "¿Qué pasa si se cae el internet en │   completa" (ej. x12 o x24 unidades). │
│   el local durante el cobro?"         │ • Permitir que el administrador asigne│
│ • "¿Quién confirma que la mercadería  │   la tarea de reposición a un         │
│   del almacén ya subió a la góndola?" │   colaborador específico por WhatsApp.│
└───────────────────────────────────────┴───────────────────────────────────────┘
```

---

### 2.5.3 Plan de Iteración y Ajustes hacia el MVP (Sprint 1 y 2)

A partir de la retroalimentación obtenida en la malla receptora, se definen los siguientes ajustes inmediatos que alimentan el Product Backlog del proyecto:

1. **Ajuste UX en Registro Rápido:** Incorporar botones de bultos estándar (*"Paquete x6"*, *"Caja x12"*, *"Fardo x24"*) para evitar el cálculo manual de unidades al recibir mercadería del camión.
2. **Visibilidad Dual de Stock:** Mostrar en la tarjeta de góndola dos datos en simultáneo: `[ Góndola: X un. ]` y `[ Almacén: Y un. ]`, para que el operario sepa de inmediato si hay existencia en tienda para reponer.
3. **Manejo Offline / PWA:** Garantizar mediante *Service Workers* que el formulario permita registrar movimientos temporalmente en memoria local (*IndexedDB*) si la conexión WiFi de la tienda fluctúa, sincronizando con Supabase al reconectar.

---

### 2.5.4 Matriz de Criterios de Aceptación del Prototipo

| Criterio Evaluado | Métrica / Indicador | Resultado Obtenido / Meta | Estado |
| :--- | :--- | :--- | :--- |
| **Tiempo de registro de entrada** | Segundos transcurridos | 32 segundos (Meta: $< 45$ s) | ✅ Superado |
| **Comprensión del semáforo** | % de usuarios que identifican quiebre | 100% (2 de 2 usuarios) | ✅ Validado |
| **Adopción de alertas WhatsApp** | Nivel de satisfacción (1 a 5) | 4.8 / 5.0 | ✅ Validado |
| **Facilidad de uso táctil** | Clics requeridos para registrar | 3 clics en promedio | ✅ Cumplido |
