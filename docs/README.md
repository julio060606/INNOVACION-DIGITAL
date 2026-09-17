# Documentacion Del Sistema De Inventario Inteligente Y Predictivo

Este directorio contiene la documentacion tecnica y funcional del Sistema de Inventario Inteligente y Predictivo de **Tiendas 3A** (*AJILES PERU S.A.C.* - Sede Tantamayo).

La documentacion debe crecer de forma modular. El objetivo es evitar documentos gigantes dificiles de mantener y conservar una fuente de verdad clara para arquitectura, reglas de negocio, Machine Learning, APIs, permisos, datos, UX y criterios de desarrollo.

## Orden De Lectura

1. [Contexto Maestro del Proyecto](../MASTER_PROJECT_DOCUMENTATION.md)
2. [Arquitectura General del Sistema](./01-arquitectura/README.md)
3. [Arquitectura de Base de Datos](./02-base-de-datos/README.md)
4. [Seguridad y Control de Acceso](./03-seguridad/README.md)
5. [Modulos Funcionales](./04-modulos/README.md)
6. [Motor Predictivo y Machine Learning (Scikit-learn)](./04-modulos/motor-predictivo/README.md)
7. [APIs e Integraciones (Flask REST / WhatsApp)](./05-apis/README.md)
8. [Experiencia de Usuario y Frontend (React)](./06-ux-ui/README.md)
9. [Gobernanza de IA: Anexo de Prompts y Validacion](./ANEXO_PROMPTS_IA_TEMPLATE.md)
10. [Levantamiento de Acceso Primario y Minuta de Entrevista](./GUIA_ENTREVISTA_Y_MINUTA_TIENDAS_3A.md)

## Estructura Recomendada

```text
docs/
+-- README.md
+-- ANEXO_PROMPTS_IA_TEMPLATE.md
+-- GUIA_ENTREVISTA_Y_MINUTA_TIENDAS_3A.md
+-- 01-arquitectura/
+-- 02-base-de-datos/
+-- 03-seguridad/
+-- 04-modulos/
|   +-- autenticacion/
|   +-- catalogo-productos/
|   +-- kardex-movimientos/
|   +-- motor-predictivo/
|   +-- alertas-whatsapp/
|   +-- dashboard-analitico/
+-- 05-apis/
+-- 06-ux-ui/
+-- 07-decisiones-arquitectura/
```

## Regla Principal

Antes de implementar un modulo, debe existir su especificacion minima:

- Objetivo del modulo.
- Actores y roles involucrados.
- Reglas de negocio.
- Modelo de datos.
- APIs necesarias.
- Permisos.
- Auditoria.
- Validaciones.
- Flujos principales.
- Criterios de aceptacion.

No se debe escribir codigo de negocio sin comprender primero el dominio operativo que se va a automatizar.
