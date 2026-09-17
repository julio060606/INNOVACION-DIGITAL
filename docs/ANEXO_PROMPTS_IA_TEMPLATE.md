# Anexo Obligatorio: Declaración De Uso De Inteligencia Artificial Y Validación Humana

> **Normativa del Curso (UTP - Innovación y Transformación Digital):**
> *"Todo dato, afirmación o conclusión debe ser verificado, citado y acompañado de un Anexo de prompts + validación humana."*
> 
> **Objetivo:** Garantizar la transparencia académica, la reproducibilidad y evidenciar el criterio crítico del equipo de ingeniería en cada decisión de diseño, código y redacción.

---

## Registro de Prompts y Validación Crítica

### Ficha de Registro N° 01: [Ejemplo: Definición de Arquitectura y Selección de Algoritmo]
- **Fecha:** 16/09/2026
- **Integrante Responsable:** Minaya Urdanivia, Julio Rodrigo
- **Herramienta Utilizada:** Antigravity AI / Claude 3.5 Sonnet / Gemini
- **Objetivo / Tarea:** Definir el pipeline de Machine Learning en Python para la predicción de quiebres de stock con volumen reducido de datos iniciales.

#### Prompt Exacto:
```text
Actúa como un Ingeniero de Machine Learning. Tengo una tienda de conveniencia (hard discount) en Lima con un catálogo inicial de 50 SKUs de alta rotación. Necesito un modelo en Python con scikit-learn para predecir cuándo ocurrirá un quiebre de stock en base a las ventas diarias de las últimas 4 semanas. ¿Qué algoritmo me recomiendas para empezar con pocos datos (50-100 registros) y cuál sería la métrica de evaluación?
```

#### Respuesta Obtenida de la IA (Resumen de la propuesta):
> La IA recomendó iniciar con una heurística de media móvil ponderada combinada con un modelo de Regresión Lineal regularizada (Ridge Regression) o Árboles de Decisión (`DecisionTreeRegressor`) con profundidad restringida (`max_depth=3`) para evitar sobreajuste (*overfitting*). Como métrica de evaluación sugirió el MAE (Error Medio Absoluto) interpretado en días de inventario restante.

#### Validación Crítica y Ajuste Humano (Obligatorio):
- **Criterio de Aceptación/Modificación:** Se aceptó la recomendación de no usar redes neuronales ni modelos hipercomplejos debido al tamaño muestral inicial (50-100 registros reales de la sucursal Tantamayo).
- **Modificación aplicada:** Se decidió que durante las primeras dos semanas de operación del MVP se utilizará una regla determinística de Punto de Reorden (ROP = Demanda diaria promedio * Lead time + Stock de seguridad) calculada con `pandas`, y una vez alcanzados los 100 registros se entrenará el `DecisionTreeRegressor` en `scikit-learn` para comparar el pronóstico con las ventas reales.
- **Resultado en el Proyecto:** Código implementado en `BakcEnd/src/ml/predictor.py`.

---

### Ficha de Registro N° 02: [Nombre de la Tarea]
- **Fecha:** DD/MM/2026
- **Integrante Responsable:** [Nombre del Integrante]
- **Herramienta Utilizada:** [ChatGPT / Copilot / Gemini / etc.]
- **Objetivo / Tarea:** [Descripción clara de lo que se solicitó a la IA]

#### Prompt Exacto:
```text
[Pegar aquí el texto textual enviado a la IA]
```

#### Respuesta Obtenida de la IA (Resumen):
> [Resumen o fragmento del código / texto proporcionado por la herramienta]

#### Validación Crítica y Ajuste Humano (Obligatorio):
- **Criterio de Aceptación/Modificación:** [¿Qué porcentaje fue útil? ¿Qué estaba mal o no aplicaba al contexto peruano?]
- **Modificación aplicada:** [¿Qué cambios manuales hizo el estudiante antes de integrarlo al informe o al código?]
- **Resultado en el Proyecto:** [Sección del documento o archivo de código donde se incorporó]

---

*(Nota: Duplicar esta ficha para cada interacción relevante de IA realizada durante los avances APF2, APF3 y PROY).*
