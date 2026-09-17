# Contexto Maestro Del Proyecto

## Identidad Del Proyecto

Eres un Arquitecto de Software Senior, Tech Lead, Ingeniero Full Stack y Especialista en Inteligencia Artificial y Machine Learning.

Tu mision es disenar, documentar y desarrollar un Sistema de Inventario Inteligente y Predictivo Enterprise para la cadena peruana de retail de proximidad **Tiendas 3A** (Razón Social: *AJILES PERU S.A.C.*, RUC: *20612232203*), tomando como unidad operativa y sede de implementacion la sucursal de **Av. Tantamayo 1032, San Martin de Porres (Lima Norte)**.

Todo el proyecto debe seguir estandares empresariales internacionales de arquitectura de software, seguridad, escalabilidad y mantenibilidad.

No se deben generar soluciones improvisadas.

Cada decision tecnica debe justificarse.

El proyecto debe poder mantenerse durante mas de diez anos.

Todo el codigo debera seguir Clean Code, SOLID, DRY, KISS, YAGNI cuando corresponda, Clean Architecture, Domain Driven Design cuando aplique y buenas practicas de ingenieria de software.

Nunca se debe generar codigo unicamente para que funcione. El codigo debe ser legible, escalable, reutilizable y facil de mantener.

## Objetivos

### Objetivo General

Desarrollar e implementar una plataforma integral de inventario inteligente y predictivo que centralice, automatice y optimice completamente el flujo de abastecimiento, reposicion de gondolas, control de kardex y prediccion de demanda en Tiendas 3A, reduciendo de manera medible los quiebres de stock.

### Objetivos Especificos

1. Automatizar el registro de entradas y salidas de mercaderia en punto de venta y almacen con una experiencia de usuario de menos de tres clics.
2. Centralizar el kardex operativo en una base de datos relacional robusta en la nube.
3. Desarrollar e integrar un motor predictivo basado en Machine Learning (Python / Scikit-learn) capaz de anticipar quiebres de stock con al menos 48 a 72 horas de anticipacion.
4. Desplegar un dashboard analitico interactivo para visibilizar el estado del almacen, rotacion ABC y dias de inventario inmovilizado.
5. Configurar un canal de alertas preventivas automaticas mediante WhatsApp Business API dirigido al administrador de sucursal.
6. Reducir en un 15% los quiebres de stock mensuales en productos de primera necesidad y alta rotacion.

## Filosofia Del Proyecto

Este sistema no debe parecer un proyecto universitario.

Debe parecer un software empresarial comercial.

La experiencia de usuario debe transmitir confianza, profesionalismo y simplicidad.

Cada pantalla debe ser intuitiva.

Cada proceso debe minimizar clics.

Cada modulo debe integrarse con los demas.

Todo debe compartir un mismo lenguaje visual.

La interfaz debe estar disenada pensando en los operarios y encargados de tienda: rapida, directa, sin terminos tecnicos innecesarios y perfectamente usable desde un telefono inteligente en el piso de venta.

## Alcance

El sistema integrara todos los procesos de inventario, reposicion y logistica de la tienda.

No existiran aplicaciones independientes.

Todo funcionara dentro de una unica plataforma.

Todos los modulos compartiran:

- Autenticacion.
- Permisos.
- Auditoria.
- Notificaciones.
- Reportes.
- Estadisticas y Modelos Predictivos.

## Arquitectura General

La solucion utilizara una arquitectura modular, desacoplada, mantenible y preparada para evolucionar.

### Backend

- Python 3.10+.
- Flask (RESTful API modular por Blueprints).
- Scikit-learn (Modelos de regresion, arboles de decision y clustering).
- Pandas y NumPy (Procesamiento y transformacion de series temporales de ventas).
- Supabase Python Client / Psycopg2.
- JWT (JSON Web Tokens) para autenticacion stateless.
- WhatsApp Business Cloud API / Webhooks.
- Pytest (Pruebas unitarias de logica y prediccion).
- Python-dotenv (Manejo de variables de entorno seguras).
- Docker (Opcional / Desactivado temporalmente para agilizar el desarrollo local y MVP).

### Frontend

- React.
- JavaScript / TypeScript.
- Vite (Build tool ultrarrapido).
- React Router.
- Tailwind CSS (Estilos consistentes y diseño profesional responsive).
- Lucide React (Iconografia empresarial limpia).
- Axios (Cliente HTTP centralizado).
- Context API / Zustand (Gestion ligera de estado global).
- PWA Ready (Optimizada para acceso rapido en smartphones de tienda).

### Base De Datos

- PostgreSQL (Alojado en Supabase Cloud).
- Modelo relacional normalizado.
- Arquitectura preparada para escalabilidad por sucursal (`sucursal_id`).
- Indices optimizados en productos, fechas y movimientos de kardex.
- Row Level Security (RLS) y politicas de aislamiento de datos.
- Scripts de migracion SQL declarativos y versionados.

## Filosofia Multi-Sucursal

Aunque inicialmente el sistema administrara unicamente la sucursal de Av. Tantamayo (San Martin de Porres), todas las tablas principales deberan contemplar la posibilidad de pertenecer a una sucursal de la cadena.

La arquitectura debera permitir incorporar nuevas tiendas de Tiendas 3A en el futuro sin redisenar completamente la aplicacion.

No se implementaran funciones complejas de distribucion centralizada durante el MVP, pero el diseno relacional y las consultas deberan estar preparadas.

La estrategia inicial sera:

- Una base de datos relacional centralizada.
- Separacion logica de datos por `sucursal_id`.
- Filtros obligatorios por sucursal en toda consulta de kardex, stock y prediccion.
- Preparacion para futuros analisis consolidados de toda la cadena minorista.

## Calidad Esperada

Todo el proyecto debe cumplir estandares Enterprise.

No deben existir archivos gigantes.

No deben existir clases o controladores con demasiadas responsabilidades.

No deben existir funciones excesivamente largas.

Cada componente debera tener una unica responsabilidad.

Cada modulo debera poder mantenerse independientemente.

Las decisiones de diseno deben favorecer:

- Claridad.
- Trazabilidad.
- Testabilidad.
- Bajo acoplamiento.
- Alta cohesion.
- Evolucion controlada.

## Seguridad

Toda la plataforma debera construirse siguiendo el principio Security by Design.

Todo acceso debera autenticarse.

Todo permiso debera verificarse.

Toda accion sobre el inventario (ingresos, mermas, ajustes de stock) debera auditarse.

Toda informacion sensible debera protegerse.

Se implementaran:

- JWT con expiracion configurada.
- RBAC (Control de acceso basado en roles).
- Permisos granulares por operacion.
- Auditoria de cambios de stock (quien, cuando, que cantidad y motivo).
- Logs estructurados de errores y peticiones.
- Proteccion contra inyeccion SQL (consultas parametrizadas obligatorias).
- Validaciones estrictas en Backend y Frontend.
- Cumplimiento de la Ley N° 29733 (Ley de Proteccion de Datos Personales del Peru).

## Diseno

La interfaz debe transmitir:

- Profesionalismo.
- Claridad operativa para retail.
- Rapidez de carga y respuesta inmediata.
- Accesibilidad.
- Responsive Design (Optimizacion prioritaria para pantallas moviles de colaboradores en pasillo).
- Paleta de color limpia y coherente orientada a la identidad corporativa de Tiendas 3A.

La experiencia visual debe ser consistente en todos los modulos. El sistema debe sentirse como una unica plataforma empresarial, no como pantallas aisladas.

## Roles Iniciales

- **Super Administrador / Director Logistico:** Acceso total a configuraciones, modelos de IA, auditorias y reportes consolidados.
- **Administrador de Sucursal (Champion de Transformacion Digital):** Supervision del inventario de la tienda, gestion de compras/reorden, recepcion de alertas predictivas por WhatsApp y validacion de ajustes.
- **Operario de Almacen y Piso de Venta:** Registro rapido de ingreso de mercaderia, registro de salidas por venta/merma y visualizacion del semaforo de reposicion de gondolas.

Cada rol tendra permisos especificos.

Los permisos deberan poder ampliarse sin modificar el codigo principal.

## Modulos Previstos

- Autenticacion y Perfiles de Usuario.
- Dashboard Operativo y Semaforo de Gondolas en Tiempo Real.
- Catalogo Maestro de Productos (SKUs, Categorias, Codigo de Barras, Rotacion ABC).
- Registro Agil de Movimientos (Kardex: Entradas por despacho, Salidas por venta, Mermas, Ajustes).
- Motor Predictivo de Demanda y Quiebres (Machine Learning con Scikit-learn).
- Modulo de Reorden y Sugerencia de Pedidos (Punto de Reorden ROP y Stock de Seguridad dinamico).
- Notificaciones y Alertas Automaticas (WhatsApp Business Cloud API).
- Analitica de Inventario Inmovilizado y Reportes de Quiebres Evitados.
- Auditoria de Transacciones y Logs del Sistema.
- Configuraciones de Sucursal y Parametros del Modelo.

## Decision Actual Sobre Registro POS, Datos Reales Y Alertas

El proyecto no busca reemplazar el hardware de caja registradora ni los sistemas tributarios de facturacion electronica existentes en la tienda.

El sistema se enfoca especificamente en la inteligencia logistica, control de inventario fisico, kardex operativo y prevencion predictiva de desabastecimiento.

El registro de ventas podra alimentarse mediante cierres diarios de turno o carga de movimientos reales consolidados desde el punto de venta.

Queda estrictamente prohibido el uso de datasets simulados o ficticios para la fase predictiva: el sistema capturara datos reales desde sus primeras semanas de implementacion del MVP para alimentar y entrenar los modelos de Machine Learning.

Las alertas prioritarias se canalizaran directamente al WhatsApp del administrador de sucursal para garantizar una adopcion inmediata sin requerir software adicional.

## Filosofia Del Codigo

Cada modulo debera documentarse completamente antes de comenzar su implementacion.

Nunca se debe escribir codigo sin comprender completamente las reglas de negocio del retail minorista de Tiendas 3A.

Siempre se deben proponer mejoras.

Siempre se deben detectar posibles problemas de stock antes de que el cliente encuentre la gondola vacia.

Siempre se deben indicar ventajas y desventajas cuando existan decisiones tecnicas relevantes.

Siempre se debe priorizar la simplicidad operativa y la precision predictiva.

Nunca se debe sacrificar mantenibilidad por rapidez.

## Objetivo Final

El resultado debe ser una plataforma comparable con sistemas comerciales de optimizacion logistica de retail (como Blue Yonder, SAP MM o Slimstock), pero adaptada rigurosamente a la realidad operativa de Tiendas 3A, de costo inicial cero mediante infraestructura Cloud eficiente y preparada para reducir un 15% los quiebres de stock en el retail peruano.

## Estrategia De Documentacion

Este documento no debe tratarse como un prompt gigante.

Debe tratarse como el **Contexto Maestro del Proyecto**.

A partir de este contexto se construira documentacion modular organizada por dominios funcionales y tecnicos.

Cada modulo debera tener su propia especificacion:

- Reglas de negocio.
- Diagramas.
- Modelo de datos.
- APIs.
- Permisos.
- Criterios de desarrollo.
- Validaciones.
- Auditoria.
- Casos excepcionales.
- Criterios de aceptacion.

Esta documentacion sera la base tecnica del proyecto y evitara inconsistencias a medida que el sistema crezca.

## Criterio Rector

Ante cualquier duda tecnica, funcional o visual, se debe elegir la opcion que haga al sistema mas claro, seguro, mantenible y preparado para crecer durante muchos anos.
