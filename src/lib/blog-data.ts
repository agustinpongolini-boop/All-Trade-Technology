export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: boolean;
  date: string;
  readingTime: number;
  content: string;
  faqs: { question: string; answer: string }[];
}

export const BLOG_CATEGORIES = [
  "Todas",
  "Guías",
  "Costos",
  "Servicios",
  "Técnico",
  "Regulaciones",
  "Exportación",
] as const;

export const articles: BlogArticle[] = [
  {
    slug: "como-importar-desde-china-argentina",
    title: "Cómo importar desde China a Argentina: Guía completa 2026",
    description:
      "Todo lo que necesitás saber para importar productos desde China a Argentina: requisitos, pasos, costos, tiempos y errores comunes. Guía actualizada 2026.",
    category: "Guías",
    published: true,
    date: "2026-03-20",
    readingTime: 12,
    faqs: [
      {
        question: "¿Cuánto cuesta importar desde China a Argentina?",
        answer:
          "El costo total de importar desde China incluye el valor FOB del producto, flete internacional (marítimo desde USD 1.500 por contenedor de 20'), seguro (0,3-0,5% del valor), aranceles de importación (0-35% según posición arancelaria), tasa de estadística (3%), IVA (21% o 10,5%), IVA adicional (20% o 10%), impuesto a las ganancias (6% o 11%), ingresos brutos (2,5%), gastos de terminal portuaria, honorarios del despachante y flete interno. En general, el landed cost suele ser entre 1,8x y 2,5x el valor FOB dependiendo del producto.",
      },
      {
        question: "¿Cuánto tarda una importación desde China?",
        answer:
          "El tiempo total de una importación marítima desde China es de 60 a 90 días en promedio. El tránsito marítimo toma entre 35 y 45 días dependiendo del puerto de origen. El despacho aduanero, si toda la documentación está en orden, puede resolverse en 5 a 15 días hábiles. La producción en fábrica suele tomar entre 15 y 30 días adicionales antes del embarque.",
      },
      {
        question: "¿Necesito ser importador registrado para importar desde China?",
        answer:
          "Sí. Para importar a Argentina necesitás estar inscripto como importador/exportador ante AFIP y la Dirección General de Aduanas. Esto implica tener CUIT activo, habilitación aduanera, y estar registrado en el SIRA (Sistema de Importaciones de la República Argentina). También necesitás un despachante de aduanas matriculado.",
      },
      {
        question: "¿Qué documentos necesito para importar desde China?",
        answer:
          "Los documentos principales son: factura comercial (commercial invoice), lista de empaque (packing list), conocimiento de embarque (bill of lading), certificado de origen, póliza de seguro, y según el producto pueden requerirse certificados sanitarios (SENASA/ANMAT), de seguridad eléctrica (INTI) o certificaciones específicas.",
      },
      {
        question: "¿Puedo importar sin experiencia previa?",
        answer:
          "Sí, pero es altamente recomendable contar con asesoramiento profesional. Los errores en una primera importación pueden ser muy costosos: desde elegir mal al proveedor hasta calcular erróneamente los costos o no cumplir con regulaciones. Empresas como All Trade Technology ofrecen servicios de importación llave en mano donde se encargan de todo el proceso por vos.",
      },
    ],
    content: `## Por qué China sigue siendo el principal origen de importaciones argentinas

China es, desde hace más de una década, el socio comercial más importante de Argentina en materia de importaciones. En 2025, más del 22% de las importaciones argentinas provinieron de China, abarcando desde maquinaria industrial y tecnología hasta textiles, autopartes y productos de consumo masivo.

Las razones son claras: **precios competitivos**, una capacidad de producción prácticamente ilimitada, y un ecosistema de proveedores que cubre cualquier industria imaginable. Pero importar desde China no es simplemente encontrar un producto en Alibaba y esperar que llegue. Es un proceso que requiere planificación, conocimiento regulatorio y una estrategia logística sólida.

En All Trade Technology llevamos años operando importaciones desde China para pymes y grandes empresas argentinas. Esta guía concentra toda esa experiencia en un recurso práctico y actualizado a 2026.

## Requisitos legales para importar desde China a Argentina

Antes de pensar en proveedores o productos, necesitás asegurarte de cumplir con los requisitos legales para operar como importador en Argentina.

### Inscripción como importador

Para importar a Argentina necesitás:

- **CUIT activo** ante AFIP en una categoría que permita la actividad de importación.
- **Habilitación ante la Dirección General de Aduanas (DGA)**: debés tramitar tu registro como importador/exportador. Este trámite se realiza online a través del sistema Malvina de AFIP.
- **Registro en el SIRA**: el Sistema de Importaciones de la República Argentina es el mecanismo vigente para autorizar operaciones de importación. Cada operación debe contar con una SIRA aprobada antes de embarcar la mercadería.
- **Despachante de aduanas**: es obligatorio contar con un despachante matriculado que actúe como intermediario ante la aduana. No podés despachar mercadería por tu cuenta.

### Capacidad económica financiera

AFIP evalúa tu capacidad económica financiera (CEF) para determinar si podés realizar operaciones de importación por los montos declarados. Si tu CEF es baja, podés tener demoras o incluso bloqueos en el despacho. Es fundamental que tu situación fiscal esté en orden antes de iniciar cualquier operación.

### Posición arancelaria y regulaciones específicas

Cada producto tiene una **posición arancelaria** dentro de la Nomenclatura Común del Mercosur (NCM). Esta posición determina:

- El porcentaje de arancel de importación (derecho de importación).
- Si el producto requiere intervenciones previas de organismos como SENASA, ANMAT, INTI, ENACOM u otros.
- Si existen cuotas, licencias no automáticas o restricciones específicas.

Clasificar correctamente tu producto es uno de los pasos más críticos. Un error en la posición arancelaria puede generar sobrecostos, demoras en aduana o incluso la retención de la mercadería.

## Paso a paso: cómo importar desde China

### 1. Definir el producto y el mercado

Antes de contactar proveedores, definí con precisión:

- **Qué producto** necesitás importar: especificaciones técnicas, materiales, medidas, certificaciones requeridas.
- **Qué volumen** vas a necesitar: esto determina si conviene un embarque marítimo (FCL o LCL) o aéreo.
- **Cuál es tu precio objetivo**: calculá desde el precio de venta hacia atrás para determinar cuánto podés pagar FOB.

### 2. Búsqueda y validación de proveedores

Este es quizás el paso donde más errores se cometen. Encontrar un proveedor en Alibaba es fácil; encontrar un proveedor confiable es otra cosa.

**Recomendaciones para validar proveedores:**

- Verificá que sea **fabricante directo** (factory) y no un intermediario (trading company). Los precios serán mejores y el control de calidad más directo.
- Pedí **muestras** antes de hacer un pedido grande. Nunca hagas un primer pedido sin haber evaluado la calidad del producto.
- Solicitá referencias de otros clientes, especialmente de Latinoamérica.
- Verificá certificaciones: ISO 9001, CE, FDA, según corresponda al producto.
- Usá servicios de **inspección pre-embarque** como SGS, Bureau Veritas o TÜV. En All Trade Technology incluimos este servicio en nuestras operaciones de importación llave en mano.

### 3. Negociación y condiciones comerciales

Una vez seleccionado el proveedor, debés negociar:

- **Incoterm**: el más usado para importaciones desde China es **FOB (Free on Board)**, donde el proveedor entrega la mercadería en el puerto de origen y vos te encargás del flete y seguro internacional. También se usa CIF (Cost, Insurance & Freight) donde el proveedor incluye flete y seguro hasta el puerto de destino.
- **Forma de pago**: lo habitual es un anticipo del 30% por transferencia bancaria (T/T) contra orden de producción, y el 70% restante contra copia del B/L (conocimiento de embarque). Para operaciones más grandes, se puede usar carta de crédito (L/C).
- **Tiempo de producción**: generalmente entre 15 y 45 días dependiendo del producto y volumen.

### 4. Producción e inspección de calidad

Durante la producción, es fundamental mantener comunicación constante con el proveedor. Solicitá fotos y videos del avance de producción.

Antes del embarque, realizá una **inspección pre-embarque**. Esta inspección verifica:

- Que la cantidad sea correcta.
- Que la calidad coincida con las muestras aprobadas.
- Que el embalaje sea adecuado para transporte marítimo (resistente a humedad, apilable).
- Que el etiquetado cumpla con las regulaciones argentinas.

### 5. Logística internacional

La logística es donde muchas importaciones se complican. Tenés varias opciones:

**Transporte marítimo (el más común):**

- **FCL (Full Container Load)**: contenedor completo. Más económico por unidad si tenés volumen. Un contenedor de 20 pies (20') carga aproximadamente 25-28 m³ y un 40' estándar unos 55-58 m³.
- **LCL (Less than Container Load)**: carga consolidada. Compartís contenedor con otros importadores. Ideal para volúmenes menores a 15 m³.
- **Tiempos de tránsito**: desde puertos principales de China (Shanghai, Ningbo, Shenzhen) hasta Buenos Aires, el tránsito marítimo es de 35 a 45 días.

**Transporte aéreo:**

- Mucho más rápido (3-5 días) pero significativamente más caro. Solo viable para productos de alto valor y bajo volumen, o envíos urgentes.

### 6. Documentación de embarque

Los documentos que necesitás para el despacho son:

- **Commercial Invoice** (Factura comercial): detalle de productos, cantidades, precios, incoterm.
- **Packing List** (Lista de empaque): detalle del embalaje, pesos y medidas.
- **Bill of Lading (B/L)** o **Airway Bill (AWB)**: documento de transporte emitido por la naviera o aerolínea.
- **Certificado de Origen**: necesario para aplicar preferencias arancelarias si las hubiera.
- **Póliza de seguro**: cobertura del transporte internacional.
- **Certificados específicos**: según el producto (sanitarios, de seguridad eléctrica, etc.).

### 7. Despacho aduanero en Argentina

Una vez que la mercadería llega al puerto o aeropuerto, comienza el proceso de despacho:

1. **Canal de selectividad**: la aduana asigna un canal que puede ser verde (liberación automática), naranja (control documental) o rojo (verificación física).
2. **Liquidación de tributos**: se calculan y pagan todos los impuestos y aranceles.
3. **Retiro de mercadería**: una vez pagados los tributos y obtenida la autorización, se retira la mercadería del depósito fiscal.

El despacho puede tomar entre 5 y 15 días hábiles si toda la documentación está en orden. Problemas documentales o inspecciones adicionales pueden extender este plazo significativamente.

## Costos de importar desde China: desglose real

Este es uno de los puntos más importantes y donde más importadores novatos se equivocan. El costo de importar **no es solo el precio FOB del producto**.

### Estructura de costos típica

Sobre el **valor CIF** (costo + flete + seguro) se aplican:

| Concepto | Porcentaje aproximado |
|---|---|
| Derecho de importación | 0% a 35% según NCM |
| Tasa de estadística | 3% |
| IVA | 21% (o 10,5% para algunos bienes) |
| IVA adicional | 20% (o 10% para responsables inscriptos) |
| Impuesto a las ganancias | 6% (o 11% para no inscriptos) |
| Ingresos brutos | 2,5% (variable según jurisdicción) |

A esto se suman:

- **Flete internacional**: USD 1.500 a USD 3.500 por contenedor de 20' dependiendo de temporada y ruta.
- **Seguro internacional**: 0,3% a 0,5% del valor CIF.
- **Gastos portuarios/terminales**: USD 400 a USD 800 por contenedor.
- **Honorarios del despachante**: USD 300 a USD 600 por despacho.
- **Flete interno**: variable según destino, desde USD 500 a USD 1.500.

### Regla práctica

Como regla general, el **costo nacionalizado** (landed cost) de un producto importado desde China suele ser entre **1,8x y 2,5x el valor FOB**, dependiendo de la posición arancelaria y el tipo de producto.

Por ejemplo, si comprás un producto a USD 10 FOB, tu costo total puesto en depósito en Argentina será aproximadamente entre USD 18 y USD 25.

## Tiempos de una importación desde China

Un timeline realista para una importación marítima completa:

| Etapa | Tiempo estimado |
|---|---|
| Negociación y acuerdo con proveedor | 1-2 semanas |
| Producción en fábrica | 15-45 días |
| Inspección pre-embarque | 2-3 días |
| Tránsito marítimo | 35-45 días |
| Despacho aduanero | 5-15 días hábiles |
| Flete interno hasta destino | 1-5 días |
| **Total estimado** | **60-100 días** |

Es fundamental planificar con anticipación. Si necesitás mercadería para una fecha específica (temporada, lanzamiento de producto), contá hacia atrás al menos 90-100 días.

## Errores comunes al importar desde China

En nuestra experiencia gestionando cientos de operaciones, estos son los errores que vemos con más frecuencia:

### 1. No calcular todos los costos antes de comprar

Muchos importadores se entusiasman con el precio FOB y no calculan el costo total nacionalizado. Cuando llegan los impuestos, aranceles y gastos logísticos, el negocio deja de ser rentable.

**Solución**: hacé un cálculo completo del landed cost antes de confirmar la orden de compra. En All Trade Technology, lo primero que hacemos es un análisis de costos detallado para cada operación.

### 2. No verificar la calidad del proveedor

Confiar ciegamente en lo que muestra un catálogo online es un riesgo enorme. Los productos finales pueden diferir significativamente de las fotos o muestras iniciales.

**Solución**: siempre pedí muestras, visitá la fábrica si es posible, y contratá inspección pre-embarque.

### 3. Clasificar mal la posición arancelaria

Un error en la NCM puede significar pagar más aranceles de los necesarios, o peor, que la aduana retenga la mercadería por inconsistencias.

**Solución**: trabajá con un despachante experimentado y validá la clasificación antes de embarcar.

### 4. No tener la documentación del SIRA antes de embarcar

Si la SIRA no está aprobada antes de que la mercadería llegue a puerto, la carga queda retenida generando costos de almacenaje y demoras.

**Solución**: iniciá el trámite de SIRA con suficiente anticipación. Idealmente, antes de que el proveedor comience la producción.

### 5. Subestimar los tiempos

Importar no es como comprar en Mercado Libre. Los tiempos de producción, tránsito y despacho se pueden extender por múltiples razones: feriados chinos (especialmente el Año Nuevo Chino en enero/febrero), congestión portuaria, demoras en la aprobación de SIRA, etc.

**Solución**: planificá con márgenes amplios y tené un plan B para eventuales demoras.

## Por qué trabajar con un operador de comercio exterior

Importar desde China es absolutamente viable para cualquier empresa argentina, pero hacerlo bien requiere experiencia, contactos y una infraestructura operativa que no se construye de un día para el otro.

Un operador de comercio exterior como **All Trade Technology** aporta:

- **Experiencia en más de 350 operaciones** gestionadas exitosamente.
- **Logística propia** en Argentina, Estados Unidos y Europa, lo que nos permite optimizar rutas y costos.
- **Red de proveedores verificados** en China y otros orígenes.
- **Control de calidad e inspección** en origen.
- **Gestión integral del despacho aduanero** con despachantes de confianza.
- **Transparencia total**: sabés exactamente cuánto pagás y por qué, sin costos ocultos.
- **Sin costos fijos**: trabajamos a éxito, cobrando por operación.

No necesitás armar un departamento de comercio exterior propio. Nosotros nos integramos a tu empresa y funcionamos como tu equipo de comex, pero sin los costos fijos de tener empleados dedicados.

## Conclusión

Importar desde China a Argentina en 2026 sigue siendo una de las estrategias más efectivas para acceder a productos competitivos y escalar tu negocio. Pero requiere planificación, conocimiento y socios confiables.

Si estás evaluando tu primera importación o querés optimizar tus operaciones actuales, en **All Trade Technology** podemos ayudarte. Desde el análisis de costos hasta la entrega en tu depósito, nos encargamos de todo.

**Solicitá tu cotización sin compromiso y recibí un análisis completo en menos de 24 horas.**`,
  },
  {
    slug: "costos-importacion-argentina",
    title: "Cuánto cuesta importar a Argentina: desglose real de costos",
    description:
      "Desglose completo y actualizado de todos los costos de importar a Argentina: aranceles, impuestos, logística y gastos ocultos que debés considerar.",
    category: "Costos",
    published: true,
    date: "2026-03-18",
    readingTime: 10,
    faqs: [
      {
        question: "¿Cuánto se paga de impuestos para importar a Argentina?",
        answer:
          "Los impuestos sobre el valor CIF incluyen: derecho de importación (0% a 35% según NCM), tasa de estadística (3%), IVA (21% o 10,5%), IVA adicional (20% o 10%), impuesto a las ganancias (6% o 11%) e ingresos brutos (2,5% promedio). La carga tributaria total puede representar entre el 60% y el 90% del valor CIF dependiendo de la posición arancelaria del producto.",
      },
      {
        question: "¿Qué es el landed cost y cómo se calcula?",
        answer:
          "El landed cost o costo nacionalizado es el costo total de un producto importado puesto en tu depósito en Argentina. Incluye el precio FOB, flete internacional, seguro, aranceles, todos los impuestos, gastos portuarios, honorarios del despachante y flete interno. Como regla general, el landed cost es entre 1,8x y 2,5x el valor FOB para productos importados desde China.",
      },
      {
        question: "¿Cuáles son los costos ocultos de importar?",
        answer:
          "Los costos que muchos importadores no anticipan incluyen: demurrage y detention por demoras en el retiro del contenedor (USD 50-150 por día), almacenaje en depósito fiscal (USD 5-15 por tonelada por día), verificaciones de valor en aduana que retrasan el despacho, gastos bancarios por transferencias internacionales (1-3% del monto), y diferencias de tipo de cambio entre el momento de la compra y el pago de tributos.",
      },
      {
        question: "¿Conviene importar por vía aérea o marítima?",
        answer:
          "El transporte marítimo es entre 5 y 10 veces más económico que el aéreo por kilogramo. Un contenedor de 20 pies desde China cuesta entre USD 1.500 y USD 3.500, mientras que un envío aéreo puede costar USD 4-8 por kg. La vía aérea solo conviene para productos de alto valor y bajo peso/volumen, o cuando la urgencia justifica el sobrecosto.",
      },
      {
        question: "¿Cómo afecta la posición arancelaria al costo final?",
        answer:
          "La posición arancelaria (NCM) determina el porcentaje de derecho de importación, que va del 0% al 35%. También define si se aplican derechos antidumping, si el producto requiere licencias no automáticas (que pueden generar demoras) y qué organismos deben intervenir. Clasificar correctamente el producto puede significar una diferencia de miles de dólares en una operación.",
      },
      {
        question: "¿Puedo recuperar el IVA de una importación?",
        answer:
          "Sí. El IVA pagado en la importación genera crédito fiscal que podés computar contra el IVA de tus ventas. Sin embargo, el IVA adicional y el impuesto a las ganancias anticipado también se computan como pagos a cuenta. Si tu nivel de ventas no es suficiente para absorber estos créditos, se acumulan generando un costo financiero real. Esto es especialmente relevante para pymes con ciclos de venta largos.",
      },
      {
        question: "¿Cuánto cobra un despachante de aduanas?",
        answer:
          "Los honorarios de un despachante de aduanas en Argentina oscilan entre USD 300 y USD 600 por despacho, dependiendo de la complejidad de la operación. Algunos cobran un porcentaje sobre el valor CIF (generalmente entre 0,5% y 1%). A esto se suman gastos operativos como gestorías, trámites ante organismos y comisiones bancarias que el despachante gestiona.",
      },
    ],
    content: `## El verdadero costo de importar a Argentina en 2026

Si estás evaluando importar productos a Argentina, lo primero que necesitás entender es que el precio FOB del producto es apenas el punto de partida. Entre aranceles, impuestos, logística y gastos operativos, el costo final puede duplicar o incluso triplicar el valor de compra en origen.

Este es uno de los errores más caros que cometen los importadores novatos: entusiasmarse con un precio atractivo en China o cualquier otro origen, sin calcular el **landed cost** real. En All Trade Technology, antes de confirmar cualquier operación, lo primero que hacemos es un análisis de costos completo para que nuestros clientes sepan exactamente cuánto van a pagar.

En este artículo desglosamos cada componente del costo de importar a Argentina con números reales y ejemplos concretos.

## Componentes del costo de importar a Argentina

El costo total de una importación se divide en cuatro grandes bloques: el valor de la mercadería, la logística internacional, los tributos aduaneros y los gastos operativos locales.

### Valor de la mercadería (FOB/CIF)

El precio **FOB (Free on Board)** es lo que le pagás al proveedor por la mercadería puesta en el puerto de origen. Si negociás en términos **CIF (Cost, Insurance & Freight)**, el precio ya incluye flete y seguro internacional hasta el puerto de destino.

Para entender mejor los incoterms y cómo impactan en tu costo, te recomendamos leer nuestra [guía práctica de Incoterms](/blog/incoterms-guia-practica).

### Logística internacional

| Concepto | Costo estimado (China → Buenos Aires) |
|---|---|
| Flete marítimo FCL 20' | USD 1.500 – 3.500 |
| Flete marítimo FCL 40' | USD 2.500 – 5.500 |
| Flete marítimo LCL (por m³) | USD 80 – 150 por m³ |
| Seguro internacional | 0,3% – 0,5% del valor CIF |
| Flete aéreo (por kg) | USD 4 – 8 por kg |

Los costos de flete marítimo varían significativamente según la temporada. Entre agosto y noviembre (pre-navidad), las tarifas pueden subir un 30-50% respecto al primer trimestre del año. Planificar los embarques fuera de temporada alta puede generar ahorros importantes.

### Tributos aduaneros: el gran bloque de costos

Sobre el **valor en aduana** (generalmente el valor CIF) se aplican los siguientes tributos:

| Tributo | Base imponible | Alícuota |
|---|---|---|
| Derecho de importación (DI) | Valor en aduana | 0% – 35% según NCM |
| Tasa de estadística (TE) | Valor en aduana | 3% (tope USD 150.000) |
| IVA | Valor en aduana + DI + TE | 21% (o 10,5%) |
| IVA adicional | Valor en aduana + DI + TE | 20% (o 10%) |
| Impuesto a las ganancias | Valor en aduana + DI + TE | 6% (o 11%) |
| Ingresos brutos | Valor en aduana + DI + TE | 2,5% (variable) |

**Importante**: el IVA, IVA adicional y ganancias se calculan sobre la base imponible que ya incluye el derecho de importación y la tasa de estadística. Es un cálculo en cascada, no sobre el valor CIF original.

### Gastos operativos locales

| Concepto | Costo estimado |
|---|---|
| Gastos de terminal / THC | USD 400 – 800 por contenedor |
| Honorarios despachante | USD 300 – 600 por despacho |
| Flete interno (Bs. As. → interior) | USD 500 – 1.500 |
| Gastos bancarios (transferencias) | 1% – 3% del monto |
| Seguro interno | 0,3% – 0,5% del valor |

## Ejemplo real: importar un contenedor de 20 pies desde China

Veamos un caso concreto. Supongamos que importás un contenedor de 20' con mercadería general con un derecho de importación del 20%.

| Concepto | Monto (USD) |
|---|---|
| Valor FOB de la mercadería | 20.000 |
| Flete marítimo | 2.200 |
| Seguro internacional | 70 |
| **Valor CIF** | **22.270** |
| Derecho de importación (20%) | 4.454 |
| Tasa de estadística (3%) | 668 |
| **Base imponible impuestos** | **27.392** |
| IVA (21%) | 5.752 |
| IVA adicional (20%) | 5.478 |
| Impuesto a las ganancias (6%) | 1.644 |
| Ingresos brutos (2,5%) | 685 |
| **Total tributos** | **18.681** |
| Gastos de terminal | 600 |
| Honorarios despachante | 450 |
| Flete interno | 800 |
| Gastos bancarios | 400 |
| **Costo total nacionalizado** | **43.201** |

En este ejemplo, el **landed cost es 2,16x el valor FOB**. Por cada dólar que pagaste al proveedor, terminaste pagando USD 2,16 puestos en tu depósito.

## Costos ocultos que pueden arruinar tu operación

Más allá de los costos estándar, hay gastos que aparecen cuando algo sale mal y que pueden impactar seriamente en la rentabilidad.

### Demurrage y detention

Si no retirás el contenedor a tiempo, la naviera cobra **demurrage** (por el contenedor en puerto) y **detention** (por el contenedor fuera del puerto). Estos cargos van de USD 50 a USD 150 por día y se acumulan rápidamente. Una demora de 15 días por problemas documentales puede sumar USD 750 a USD 2.250 al costo total.

### Almacenaje en depósito fiscal

Si la mercadería queda en depósito fiscal esperando despacho, se cobran tasas de almacenaje que van de USD 5 a USD 15 por tonelada por día. En temporada alta, cuando los depósitos están congestionados, estas tarifas pueden ser aún mayores.

### Ajustes de valor en aduana

La aduana puede cuestionar el valor declarado si lo considera bajo en relación a sus bases de datos. En ese caso, se abre un proceso de ajuste de valor que puede:

- Retrasar el despacho semanas o meses.
- Resultar en tributos adicionales sobre un valor ajustado mayor.
- Generar multas si se determina subfacturación.

### Diferencias de tipo de cambio

Los tributos aduaneros se calculan en pesos al tipo de cambio del día de oficialización del despacho. Si pasaron semanas entre tu pago al proveedor y el despacho, una devaluación puede alterar significativamente tus números.

## Cómo reducir los costos de importar a Argentina

### Optimización arancelaria

Verificá si tu producto puede clasificarse en una posición arancelaria con menor arancel. A veces, diferencias sutiles en la composición o el uso del producto permiten acceder a una NCM con derecho de importación más bajo. Esto debe hacerse siempre de forma legítima con asesoramiento profesional.

### Consolidación de cargas

Si tu volumen no justifica un contenedor completo, la carga consolidada (LCL) es una opción. Pero si podés acumular pedidos y llenar un FCL, el costo por unidad baja considerablemente.

### Planificación de embarques

Evitá embarcar en temporada alta (agosto-noviembre) si tu producto lo permite. Los fletes pueden ser un 30-50% más baratos en el primer trimestre del año.

### Negociación de condiciones de pago

Negociar plazos de pago más largos con tu proveedor (por ejemplo, 60/90 días contra B/L) te da margen para vender parte de la mercadería antes de completar el pago, mejorando tu flujo de caja.

## Conclusión

Importar a Argentina es un negocio rentable cuando se hace con números claros desde el inicio. El peor error es calcular mal y descubrirlo cuando la mercadería ya está en el agua.

En **All Trade Technology** hacemos un análisis de costos detallado antes de cada operación, para que sepas exactamente cuánto vas a invertir y cuál es tu margen real. Si ya tenés un producto en mente, podemos calcular tu landed cost en menos de 24 horas.

**[Solicitá tu análisis de costos gratuito en alltradetechnology.com →](https://www.alltradetechnology.com)**`,
  },
  {
    slug: "departamento-comex-tercerizado",
    title: "Departamento de comercio exterior tercerizado: qué es y por qué conviene",
    description:
      "Descubrí cómo un departamento de comercio exterior externo puede reducir costos y optimizar tus operaciones de importación y exportación.",
    category: "Servicios",
    published: true,
    date: "2026-03-15",
    readingTime: 8,
    faqs: [
      {
        question: "¿Qué es un departamento de comercio exterior tercerizado?",
        answer:
          "Es un equipo externo especializado en comercio internacional que se integra a tu empresa y gestiona todas las operaciones de importación y exportación. Funciona como si tuvieras un departamento de comex propio, pero sin los costos fijos de contratar personal, mantener infraestructura ni capacitar equipos. El proveedor se encarga de la gestión operativa, documental, logística y aduanera.",
      },
      {
        question: "¿Cuánto cuesta tercerizar el comercio exterior?",
        answer:
          "El modelo más común es cobrar un fee por operación (entre USD 500 y USD 2.000 dependiendo de la complejidad) o un porcentaje sobre el valor FOB (1% a 3%). Comparado con un departamento interno — donde solo un analista de comex senior cuesta entre $800.000 y $1.500.000 mensuales de sueldo bruto más cargas sociales — la tercerización es significativamente más económica, especialmente si hacés menos de 20 operaciones anuales.",
      },
      {
        question: "¿Pierdo el control de mis operaciones al tercerizar?",
        answer:
          "No. Un buen proveedor de comex tercerizado opera con total transparencia. En All Trade Technology, por ejemplo, cada cliente tiene visibilidad completa de sus operaciones: estado del embarque, documentación, costos desglosados y timelines actualizados. Vos tomás las decisiones estratégicas; nosotros ejecutamos la operación.",
      },
      {
        question: "¿Qué tamaño de empresa necesita tercerizar el comex?",
        answer:
          "Cualquier empresa que importe o exporte puede beneficiarse. Las pymes con menos de 30 operaciones anuales son las que más ahorran porque no justifican un equipo interno. Pero incluso empresas grandes tercerizan operaciones en orígenes o destinos donde no tienen experiencia, o para cubrir picos de demanda sin ampliar su estructura.",
      },
      {
        question: "¿Qué pasa si necesito importar de un país con el que nunca trabajé?",
        answer:
          "Justamente ahí es donde más valor agrega un operador tercerizado. Si tu empresa importa habitualmente de China pero necesita traer maquinaria de Alemania o insumos de India, un proveedor con experiencia en múltiples orígenes resuelve esa operación sin que vos tengas que aprender desde cero las particularidades de cada mercado.",
      },
      {
        question: "¿Cómo se integra un comex tercerizado con mi empresa?",
        answer:
          "El proveedor se adapta a tus procesos. Generalmente se definen canales de comunicación directa (mail, WhatsApp, plataforma de gestión), un referente asignado a tu cuenta, y reportes periódicos. La integración puede ir desde operaciones puntuales hasta una gestión continua donde el proveedor participa en la planificación de compras y la estrategia logística.",
      },
    ],
    content: `## Por qué cada vez más empresas argentinas tercerizan su comercio exterior

Armar un departamento de comercio exterior interno es caro. Un analista senior de comex, un coordinador logístico, un asistente documental — entre sueldos, cargas sociales, sistemas y capacitación, estás hablando de un costo fijo mensual que supera los $3.000.000 antes de hacer una sola operación.

Para muchas pymes argentinas que realizan entre 5 y 30 operaciones de importación o exportación al año, ese costo no cierra. Pero prescindir de profesionales de comex tampoco es opción: los errores en comercio exterior se pagan con plata, demoras y mercadería retenida en aduana.

La solución que está ganando terreno es el **departamento de comercio exterior tercerizado**: un equipo externo especializado que se integra a tu empresa y gestiona tus operaciones como si fuera tu propio equipo, pero sin los costos fijos.

## Qué incluye un servicio de comex tercerizado

Un departamento de comercio exterior externo cubre el ciclo completo de una operación de comercio internacional. No es simplemente un despachante de aduanas ni un freight forwarder — es un servicio integral.

### Gestión de compras internacionales

- Búsqueda y validación de proveedores en origen.
- Negociación de precios, incoterms y condiciones de pago.
- Seguimiento de producción y coordinación de inspecciones de calidad.
- Análisis de costos y cálculo de landed cost antes de cada operación.

Si estás evaluando los costos reales de importar, te recomendamos revisar nuestro artículo sobre [costos de importación a Argentina](/blog/costos-importacion-argentina) donde desglosamos cada componente.

### Logística internacional

- Contratación y coordinación de fletes marítimos, aéreos y terrestres.
- Gestión de seguros de transporte.
- Seguimiento de embarques en tiempo real.
- Optimización de rutas y consolidación de cargas.

### Gestión aduanera y documental

- Clasificación arancelaria (NCM) correcta del producto.
- Tramitación de SIRA y licencias de importación.
- Coordinación con despachantes de aduanas para el despacho.
- Gestión de intervenciones previas ante organismos (SENASA, ANMAT, INTI, ENACOM).
- Armado y control de toda la documentación de embarque.

### Operaciones de exportación

- Análisis de mercados destino y requisitos de ingreso.
- Gestión de permisos de embarque y documentación de exportación.
- Coordinación logística de salida.
- Gestión de cobros internacionales y seguimiento post-venta.

## Comex interno vs. comex tercerizado: los números

Veamos una comparación concreta para una pyme que realiza 15 operaciones de importación al año.

### Costo de un departamento interno

| Concepto | Costo mensual (ARS) |
|---|---|
| Analista de comex senior (sueldo bruto + cargas) | 1.500.000 |
| Asistente de comex (sueldo bruto + cargas) | 900.000 |
| Software de gestión / ERP comex | 150.000 |
| Capacitación y actualización normativa | 80.000 |
| **Total mensual** | **2.630.000** |
| **Total anual** | **31.560.000** |
| **Costo por operación (15 ops/año)** | **2.104.000** |

### Costo de un servicio tercerizado

| Concepto | Costo por operación (USD) |
|---|---|
| Fee de gestión integral | 800 – 1.500 |
| **Costo anual (15 ops × USD 1.150 promedio)** | **USD 17.250** |

Incluso al tipo de cambio más conservador, la tercerización representa un ahorro del **40% al 60%** respecto a un equipo interno. Y eso sin contar los costos de rotación de personal, licencias, vacaciones y aguinaldos.

## Cuándo conviene tercerizar (y cuándo no)

### Tercerizar conviene cuando:

- **Hacés menos de 30 operaciones al año**: no justificás un equipo interno.
- **Estás arrancando en comex**: necesitás experiencia inmediata sin la curva de aprendizaje.
- **Importás de orígenes diversos**: un operador con experiencia global cubre más mercados que un analista especializado en un solo origen.
- **Querés escalar sin sumar estructura**: podés pasar de 5 a 50 operaciones sin contratar a nadie.
- **Necesitás foco en tu negocio core**: el comex es un medio, no un fin.

### Puede no convenir cuando:

- **Hacés más de 100 operaciones al año de alta complejidad**: a ese volumen, un equipo interno se justifica económicamente.
- **Tu producto requiere conocimiento técnico ultra-específico**: aunque un buen proveedor se adapta, hay nichos donde el know-how interno es insustituible.
- **Necesitás control absoluto de la cadena**: algunas empresas, por política corporativa o compliance, requieren gestión interna de todas las operaciones.

## Cómo elegir un proveedor de comex tercerizado

No todos los proveedores de comercio exterior son iguales. Estos son los criterios clave para evaluar:

### Experiencia comprobable

Pedí referencias concretas: cantidad de operaciones gestionadas, orígenes/destinos, tipos de producto. Un proveedor con más de 300 operaciones exitosas tiene un track record que minimiza tus riesgos.

### Transparencia en costos

Desconfiá de presupuestos genéricos. Un buen proveedor te presenta un desglose detallado de costos antes de cada operación, sin sorpresas. Si no te muestran los números claros desde el inicio, es una señal de alerta.

### Infraestructura logística propia

Un proveedor con operaciones logísticas propias en distintos orígenes puede optimizar costos y tiempos de formas que un simple intermediario no puede. En All Trade Technology tenemos **operaciones en Argentina, Estados Unidos y Europa**, lo que nos da control directo sobre la cadena logística.

### Comunicación y reporting

Vas a necesitar saber en qué estado está cada operación en todo momento. Evaluá qué herramientas de seguimiento ofrece el proveedor y cómo se comunican las novedades.

### Modelo de cobro

Los modelos más comunes son:

- **Fee fijo por operación**: predecible y simple. Ideal para planificar costos.
- **Porcentaje sobre valor FOB**: se alinea con el volumen de la operación.
- **Fee mensual (retainer)**: para empresas con operaciones regulares y volumen constante.

## Cómo funciona el comex tercerizado en All Trade Technology

En ATT operamos como el **departamento de comercio exterior externo** de nuestros clientes. Esto significa:

1. **Análisis inicial**: evaluamos tu operación, calculamos costos y definimos la mejor estrategia logística.
2. **Gestión de proveedores**: si no tenés proveedor, lo buscamos. Si ya tenés, nos integramos a la relación existente.
3. **Operación completa**: desde la orden de compra hasta la entrega en tu depósito, gestionamos cada paso.
4. **Transparencia total**: sabés cuánto pagás y por qué en cada etapa.
5. **Sin costos fijos**: pagás por operación. Si un mes no importás, no pagás.

Con más de 350 operaciones gestionadas y logística propia en tres continentes, somos el equipo de comex que tu empresa necesita sin el costo de tenerlo en nómina.

## Conclusión

Tercerizar el comercio exterior no es resignar control — es ganar eficiencia. Las pymes argentinas que más crecen en comercio internacional son las que se apoyan en profesionales especializados sin cargar con costos fijos que no pueden sostener.

Si querés saber cómo sería tercerizar tus operaciones con All Trade Technology, te invitamos a contactarnos. Evaluamos tu caso sin compromiso y te presentamos una propuesta concreta.

**[Consultá por nuestro servicio de comex tercerizado →](https://www.alltradetechnology.com)**`,
  },
  {
    slug: "errores-primera-importacion-pyme",
    title: "5 errores que toda pyme comete en su primera importación",
    description:
      "Los errores más frecuentes en primeras importaciones y cómo evitarlos. Guía práctica para pymes que quieren importar sin perder dinero.",
    category: "Guías",
    published: true,
    date: "2026-03-12",
    readingTime: 7,
    faqs: [
      {
        question: "¿Cuál es el error más caro en una primera importación?",
        answer:
          "Calcular mal el costo total. Muchos importadores solo miran el precio FOB y se olvidan de aranceles, impuestos, logística y gastos operativos. El landed cost real suele ser 1,8x a 2,5x el valor FOB. Una operación que parecía rentable en el papel puede dar pérdida cuando llegan todos los costos. Siempre hacé un cálculo completo del landed cost antes de confirmar la orden de compra.",
      },
      {
        question: "¿Puedo importar sin despachante de aduanas?",
        answer:
          "No. En Argentina es obligatorio contar con un despachante de aduanas matriculado para realizar el despacho de mercadería importada. El despachante actúa como intermediario legal ante la Dirección General de Aduanas. Intentar despachar sin uno no es una opción — es un requisito legal.",
      },
      {
        question: "¿Cómo sé si mi proveedor chino es confiable?",
        answer:
          "Verificá que sea fabricante directo (no trading company), pedí muestras antes de hacer un pedido grande, solicitá referencias de otros clientes latinoamericanos, verificá certificaciones (ISO, CE, etc.) y contratá una inspección pre-embarque con empresas como SGS o Bureau Veritas. Nunca envíes un pago completo por adelantado a un proveedor que no conocés.",
      },
      {
        question: "¿Qué pasa si la mercadería llega con defectos?",
        answer:
          "Si no hiciste inspección pre-embarque, las opciones son limitadas y costosas. Podés rechazar la mercadería (pero pagás almacenaje y reenvío), negociar un descuento con el proveedor, o aceptarla con pérdida. Por eso la inspección pre-embarque es clave: detectás problemas cuando todavía estás a tiempo de rechazar o corregir sin costos logísticos adicionales.",
      },
      {
        question: "¿Cuánto capital necesito para mi primera importación?",
        answer:
          "Depende del producto y volumen, pero como mínimo necesitás cubrir: el pago al proveedor (generalmente 30% anticipo + 70% contra B/L), el flete internacional, y tener liquidez para pagar los tributos aduaneros al momento del despacho. Para un contenedor de 20 pies con mercadería de valor medio (USD 20.000 FOB), necesitás al menos USD 35.000-45.000 disponibles contando todos los costos hasta tu depósito.",
      },
      {
        question: "¿Conviene importar un contenedor completo o carga consolidada?",
        answer:
          "Si tu volumen es menor a 15 m³, la carga consolidada (LCL) tiene sentido. Pero el costo por metro cúbico en LCL es significativamente mayor que en FCL. Si podés llenar al menos la mitad de un contenedor de 20 pies (12-13 m³), generalmente conviene pagar el FCL completo. Además, en LCL hay mayor riesgo de daños por manipulación compartida.",
      },
    ],
    content: `## Los errores que nadie te cuenta antes de tu primera importación

Importar puede ser uno de los movimientos más rentables para una pyme argentina. Accedés a productos a costos que el mercado local no puede igualar, diferenciás tu oferta y mejorás tus márgenes. Pero la primera importación es también donde se cometen los errores más caros.

En All Trade Technology hemos acompañado a decenas de pymes en su primera operación de comercio exterior. Los errores que vemos se repiten con una consistencia sorprendente. Este artículo resume los 5 más comunes y, lo más importante, cómo evitarlos.

Si estás pensando en importar por primera vez, leé también nuestra [guía completa para importar desde China](/blog/como-importar-desde-china-argentina) que cubre el proceso paso a paso.

## Error 1: No calcular el costo total antes de comprar

Este es, por lejos, el error más frecuente y el más caro. La pyme encuentra un producto en China a USD 5 la unidad, hace la cuenta rápida "lo vendo a $15.000, me queda margen" y dispara la orden de compra. Cuando llega la liquidación de aduana, descubre que el costo nacionalizado es USD 11 la unidad y el negocio no cierra.

### Por qué pasa

El precio FOB es solo el punto de partida. Para llegar al **landed cost** real, tenés que sumar:

- Flete internacional (marítimo o aéreo).
- Seguro de transporte.
- Aranceles de importación (0% a 35% según el producto).
- Tasa de estadística (3%).
- IVA (21%), IVA adicional (20%), Ganancias (6%), Ingresos brutos (2,5%).
- Gastos portuarios, despachante, flete interno.

En total, el landed cost puede ser **1,8x a 2,5x el valor FOB**. Tenemos un artículo dedicado al [desglose completo de costos de importación](/blog/costos-importacion-argentina) con un ejemplo real detallado.

### Cómo evitarlo

Antes de confirmar cualquier orden de compra, hacé un cálculo completo del landed cost. Incluí todos los tributos, todos los gastos logísticos y un margen del 5-10% para imprevistos. Si los números no cierran con ese cálculo, no van a cerrar después.

## Error 2: Elegir proveedor solo por precio

El proveedor más barato rara vez es el mejor proveedor. Pymes que seleccionan proveedores únicamente por tener el precio FOB más bajo terminan recibiendo mercadería con calidad inferior, packaging inadecuado para transporte marítimo, o directamente productos que no coinciden con las muestras aprobadas.

### Caso real

Una pyme de Córdoba importó accesorios de iluminación LED de un proveedor de Guangdong elegido exclusivamente por ser el más barato de cinco cotizaciones. La mercadería llegó con un 30% de unidades defectuosas (LEDs con intensidad lumínica inferior a la especificada). Sin inspección pre-embarque y con la mercadería ya nacionalizada, la pyme absorbió la pérdida: más de USD 8.000 en producto no vendible.

### Cómo evitarlo

- **Pedí muestras siempre** antes del primer pedido. Comparalas con las especificaciones técnicas acordadas.
- **Verificá que sea fabricante directo**. Las trading companies agregan intermediación y reducen tu control sobre la calidad.
- **Contratá inspección pre-embarque**. Empresas como SGS, Bureau Veritas o TÜV verifican la calidad in situ antes de que la mercadería salga de China. El costo (USD 200-400) es insignificante comparado con recibir un contenedor de producto defectuoso.
- **Pedí referencias** de otros clientes, idealmente latinoamericanos.

## Error 3: Ignorar los tiempos reales del proceso

"¿Cuánto tarda? ¿Un mes?" es la pregunta que más escuchamos de pymes que importan por primera vez. La respuesta los suele sorprender: **60 a 100 días** desde que confirmás la orden de compra hasta que la mercadería está en tu depósito.

### El timeline real

| Etapa | Tiempo |
|---|---|
| Producción en fábrica | 15-45 días |
| Tránsito marítimo (China → Argentina) | 35-45 días |
| Despacho aduanero | 5-15 días hábiles |
| Flete interno | 1-5 días |

Y esto es cuando todo sale bien. Feriados chinos (el Año Nuevo Chino en enero-febrero puede paralizar fábricas 2-3 semanas), congestión portuaria, demoras en la aprobación de SIRA o problemas documentales pueden extender los tiempos significativamente.

### Cómo evitarlo

- Planificá con al menos **90-100 días de anticipación**.
- Tené en cuenta el **calendario de feriados chinos** y los picos de temporada alta logística (agosto-noviembre).
- Iniciá el trámite de **SIRA con suficiente anticipación**, idealmente antes de que el proveedor comience a producir.
- Contemplá un **stock de seguridad** si tu negocio depende de la continuidad de abastecimiento.

## Error 4: No tener la documentación en orden antes de embarcar

Una de las situaciones más frustrantes — y costosas — es tener un contenedor llegando a Buenos Aires sin la SIRA aprobada, sin los permisos de organismos intervinientes, o con documentación inconsistente entre lo declarado y lo embarcado.

### Consecuencias concretas

- **Contenedor retenido en puerto**: demurrage de USD 50-150 por día.
- **Almacenaje en depósito fiscal**: USD 5-15 por tonelada por día.
- **Multas aduaneras**: por inconsistencias documentales, pueden ir del 1% al 5% del valor de la mercadería.
- **Re-despacho o devolución**: en casos graves, la aduana puede obligar a reexportar la mercadería, con costos logísticos completos a tu cargo.

### Cómo evitarlo

- Tramitá la **SIRA antes de embarcar**. No después, no durante — antes.
- Verificá que la **factura comercial, packing list y B/L sean consistentes** entre sí: cantidades, pesos, descripción del producto, valores.
- Si tu producto requiere intervención de **SENASA, ANMAT, INTI u otro organismo**, gestioná los certificados y permisos con anticipación.
- Trabajá con un **despachante experimentado** que revise toda la documentación antes de que el contenedor salga de origen.

## Error 5: Improvisar en lugar de profesionalizar

Muchas pymes ven la primera importación como un "experimento" y la encaran informalmente: un contacto por WhatsApp con un proveedor chino, un flete coordinado a último momento, un despachante recomendado por un conocido. El resultado suele ser una operación caótica con sobrecostos y estrés.

### La diferencia entre improvisar y profesionalizar

| Aspecto | Improvisación | Enfoque profesional |
|---|---|---|
| Proveedor | El que contesta primero en Alibaba | Validado con muestras e inspección |
| Costos | "Más o menos sale X" | Landed cost calculado al detalle |
| Logística | "El proveedor se encarga del flete" | Flete negociado, seguro contratado |
| Documentación | "Ya lo vemos cuando llegue" | SIRA tramitada, documentos verificados |
| Resultado | Sorpresas, sobrecostos, estrés | Operación predecible y rentable |

### Cómo evitarlo

No necesitás ser un experto en comex para importar bien. Necesitás **rodearte de profesionales que lo sean**. Un operador de comercio exterior como All Trade Technology puede gestionar tu operación de punta a punta, permitiéndote enfocarte en tu negocio mientras nosotros nos encargamos de la complejidad operativa.

Conocé más sobre cómo funciona nuestro servicio de [departamento de comex tercerizado](/blog/departamento-comex-tercerizado).

## Conclusión

Los errores en una primera importación no son inevitables — son evitables con información y asesoramiento adecuado. Cada uno de los 5 errores que describimos tiene una solución concreta y accesible.

En **All Trade Technology** hemos ayudado a pymes de todo el país a hacer su primera importación de forma exitosa, sin sorpresas y con números claros. Si estás evaluando importar por primera vez, te acompañamos en todo el proceso.

**[Contactanos para planificar tu primera importación →](https://www.alltradetechnology.com)**`,
  },
  {
    slug: "incoterms-guia-practica",
    title: "Incoterms 2020: guía práctica con ejemplos reales",
    description:
      "Guía completa de Incoterms 2020 con ejemplos reales aplicados al comercio entre Argentina y el mundo. FOB, CIF, EXW y más.",
    category: "Técnico",
    published: true,
    date: "2026-03-10",
    readingTime: 9,
    faqs: [
      {
        question: "¿Qué son los Incoterms y para qué sirven?",
        answer:
          "Los Incoterms (International Commercial Terms) son reglas publicadas por la Cámara de Comercio Internacional (ICC) que definen las responsabilidades del comprador y el vendedor en una transacción internacional. Determinan quién paga el flete, quién contrata el seguro, en qué punto se transfiere el riesgo y quién se encarga de los trámites aduaneros. Son esenciales para evitar malentendidos y disputas comerciales.",
      },
      {
        question: "¿Cuál es el mejor Incoterm para importar a Argentina?",
        answer:
          "El más usado es FOB (Free on Board) porque te da control sobre el flete y el seguro internacional, permitiéndote negociar mejores tarifas con tu forwarder de confianza. CIF también se usa mucho cuando el proveedor ofrece precios competitivos de logística. Para importadores con poca experiencia, CIF puede ser más simple porque el proveedor se encarga de más etapas. No hay un 'mejor' incoterm universal — depende de tu operación.",
      },
      {
        question: "¿FOB o CIF: cuál es más económico?",
        answer:
          "Generalmente FOB resulta más económico porque podés negociar el flete marítimo directamente con navieras o forwarders, obteniendo mejores tarifas que las que tu proveedor incluiría en un precio CIF. Los proveedores suelen agregar un margen al flete cuando cotizan CIF. Sin embargo, para cargas pequeñas (LCL), a veces el proveedor tiene mejores tarifas de consolidación en origen.",
      },
      {
        question: "¿Qué Incoterm se usa para transporte aéreo?",
        answer:
          "Para transporte aéreo debés usar Incoterms multimodales: EXW, FCA, CPT, CIP, DAP, DPU o DDP. Los Incoterms FOB, CFR y CIF son exclusivos para transporte marítimo (o por vías navegables interiores). El error de usar FOB para carga aérea es frecuente y puede generar ambigüedad sobre la transferencia de riesgo.",
      },
      {
        question: "¿Qué pasa si no defino el Incoterm en la compra?",
        answer:
          "Sin un Incoterm definido, no hay claridad sobre quién paga cada costo ni en qué momento se transfiere el riesgo. Esto genera disputas ante cualquier problema: si la mercadería se daña en tránsito, ¿quién reclama al seguro? ¿Quién paga el almacenaje si hay demora? Siempre definí el Incoterm por escrito en la orden de compra, indicando además el lugar específico (ej: FOB Shanghai, CIF Buenos Aires).",
      },
      {
        question: "¿Los Incoterms 2020 son obligatorios?",
        answer:
          "No son obligatorios por ley — son reglas voluntarias. Pero son el estándar global y su uso es prácticamente universal en comercio internacional. Las aduanas, bancos, aseguradoras y tribunales los reconocen y aplican. Usar Incoterms 2020 evita ambigüedades y protege a ambas partes. Siempre especificá la versión (Incoterms® 2020) para evitar confusión con versiones anteriores.",
      },
      {
        question: "¿Qué es DDP y conviene usarlo para importar a Argentina?",
        answer:
          "DDP (Delivered Duty Paid) significa que el vendedor entrega la mercadería en destino con todos los costos pagados, incluyendo aranceles e impuestos de importación. Rara vez se usa para importar a Argentina porque implica que el proveedor extranjero realice los trámites aduaneros argentinos, algo complejo y poco práctico. Además, perdés control sobre la clasificación arancelaria y los costos de despacho.",
      },
    ],
    content: `## Por qué entender los Incoterms es fundamental para importar y exportar

Si importás o exportás, los Incoterms definen las reglas del juego de cada operación. Son tres letras que determinan quién paga qué, quién asume el riesgo en cada etapa y quién se encarga de los trámites. Elegir mal un Incoterm puede costarte miles de dólares en una sola operación.

A pesar de su importancia, los Incoterms son uno de los conceptos más malinterpretados del comercio exterior. Muchos importadores argentinos usan FOB o CIF por costumbre sin entender realmente qué implica cada uno, qué riesgos están asumiendo y qué alternativas tienen.

Esta guía explica cada Incoterm 2020 con ejemplos reales aplicados al comercio argentino, para que puedas elegir el que mejor se adapta a tu operación.

## Qué son los Incoterms 2020

Los **Incoterms** (International Commercial Terms) son un conjunto de 11 reglas publicadas por la **Cámara de Comercio Internacional (ICC)** que estandarizan las condiciones de entrega en el comercio internacional. La versión vigente es **Incoterms® 2020**, en vigor desde el 1 de enero de 2020.

Cada Incoterm define tres cosas clave:

1. **Costos**: quién paga el transporte, seguro, despacho aduanero y otros gastos.
2. **Riesgos**: en qué punto la responsabilidad sobre la mercadería pasa del vendedor al comprador.
3. **Obligaciones**: quién se encarga de los trámites documentales y aduaneros.

### Clasificación: marítimos vs. multimodales

Los 11 Incoterms se dividen en dos grupos:

**Solo transporte marítimo (o vías navegables interiores):**
- FAS, FOB, CFR, CIF

**Cualquier modo de transporte (multimodales):**
- EXW, FCA, CPT, CIP, DAP, DPU, DDP

## Los Incoterms más usados en Argentina: análisis detallado

### FOB — Free on Board (Franco a Bordo)

**Qué significa**: el vendedor entrega la mercadería a bordo del buque en el puerto de origen. A partir de ese momento, todos los costos y riesgos pasan al comprador.

**El vendedor se encarga de:**
- Producir/embalar la mercadería.
- Transporte interno hasta el puerto de origen.
- Despacho de exportación.
- Carga en el buque.

**El comprador se encarga de:**
- Flete marítimo internacional.
- Seguro de transporte (opcional pero recomendado).
- Despacho de importación en Argentina.
- Transporte interno en destino.

**Ejemplo real**: importás autopartes desde Ningbo, China. Comprás FOB Ningbo a USD 15.000. Tu proveedor entrega las cajas dentro del contenedor en el puerto de Ningbo. Vos contratás el flete marítimo (USD 2.200), el seguro (USD 55) y te encargás del despacho en Buenos Aires.

**¿Por qué es el más usado en Argentina?** Porque te permite controlar la logística internacional. Podés negociar directamente con navieras o freight forwarders y generalmente obtenés mejores tarifas que las que tu proveedor te cotizaría en un precio CIF.

### CIF — Cost, Insurance and Freight (Costo, Seguro y Flete)

**Qué significa**: el vendedor paga el flete y el seguro internacional hasta el puerto de destino. Pero —y esto es clave— **el riesgo se transfiere al comprador cuando la mercadería está a bordo del buque en origen**, igual que en FOB.

**Punto confuso**: muchos importadores creen que si compran CIF, el vendedor es responsable si la mercadería se daña en tránsito. **No es así.** El vendedor paga el seguro, pero el riesgo ya es del comprador. Si hay un siniestro, el comprador debe reclamar al seguro contratado por el vendedor.

**Ejemplo real**: importás luminarias de Shanghai. Comprás CIF Buenos Aires a USD 22.000. Ese precio ya incluye el flete marítimo y un seguro básico (cobertura mínima ICC Clase C). Vos te encargás solo del despacho aduanero e impuestos en Argentina y el flete interno.

**¿Cuándo conviene?** Cuando el proveedor tiene tarifas de flete competitivas (algunos grandes exportadores chinos tienen contratos preferenciales con navieras) o cuando preferís simplificar la operación.

### EXW — Ex Works (En Fábrica)

**Qué significa**: el vendedor pone la mercadería a disposición en su fábrica o depósito. Todos los costos y riesgos desde ese punto son del comprador, incluyendo la carga en el camión y el despacho de exportación en origen.

**Ejemplo real**: comprás máquinas de una fábrica en Dongguan, China, en condiciones EXW a USD 30.000. Vos te encargás de mandar un camión a buscar la mercadería a la fábrica, hacer el despacho de exportación chino, el flete marítimo, seguro, despacho en Argentina y flete interno.

**¿Conviene para importar a Argentina?** Generalmente no. Hacer el despacho de exportación en China requiere tener un agente aduanero allá. Para la mayoría de las pymes argentinas, FOB es más práctico: el proveedor se encarga de la logística hasta el puerto chino.

### FCA — Free Carrier (Franco Transportista)

**Qué significa**: el vendedor entrega la mercadería al transportista designado por el comprador, en el lugar acordado. Si es en la fábrica del vendedor, el vendedor carga. Si es en otro lugar (puerto, aeropuerto, depósito), el vendedor entrega sin descargar.

**Novedad importante en Incoterms 2020**: FCA permite que el comprador solicite al vendedor que obtenga un B/L (conocimiento de embarque) con la anotación "on board" una vez que la mercadería esté cargada en el buque. Esto resuelve un problema histórico con cartas de crédito.

**¿Cuándo usarlo?** Es la alternativa moderna a FOB para transporte multimodal. Si tu carga va en camión hasta el puerto, luego en barco y luego en camión, FCA es técnicamente más preciso que FOB.

### DAP — Delivered at Place (Entregado en Lugar)

**Qué significa**: el vendedor entrega la mercadería en el lugar de destino acordado, lista para ser descargada. El vendedor asume todos los costos y riesgos hasta ese punto. El comprador solo se encarga del despacho de importación y la descarga.

**Ejemplo real**: comprás repuestos industriales de Alemania en condiciones DAP Buenos Aires (depósito fiscal Exolgan). El proveedor se encarga de todo hasta que el contenedor llega a Exolgan. Vos pagás el despacho aduanero, los impuestos y el flete desde Exolgan hasta tu planta.

**¿Cuándo conviene?** Cuando el vendedor tiene estructura logística sólida en Argentina o cuando negociás con proveedores europeos que ofrecen buenos precios DAP.

### DDP — Delivered Duty Paid (Entregado Derechos Pagados)

**Qué significa**: el vendedor entrega la mercadería en destino con todos los costos pagados, incluyendo aranceles e impuestos de importación. El vendedor asume la máxima responsabilidad.

**¿Se usa para importar a Argentina?** Muy poco. Implica que un proveedor extranjero realice trámites aduaneros argentinos, lo cual es complejo y poco práctico. Además, perdés control sobre la clasificación arancelaria. Se ve más en compras de equipos con instalación incluida por parte de grandes multinacionales.

## Tabla comparativa: los 11 Incoterms 2020

| Incoterm | Tipo | Flete internacional | Seguro | Despacho export | Despacho import | Riesgo comprador desde |
|---|---|---|---|---|---|---|
| EXW | Multi | Comprador | Comprador | Comprador | Comprador | Fábrica vendedor |
| FCA | Multi | Comprador | Comprador | Vendedor | Comprador | Entrega al transportista |
| FAS | Marítimo | Comprador | Comprador | Vendedor | Comprador | Al costado del buque |
| FOB | Marítimo | Comprador | Comprador | Vendedor | Comprador | A bordo del buque |
| CPT | Multi | Vendedor | Comprador | Vendedor | Comprador | Entrega al transportista |
| CFR | Marítimo | Vendedor | Comprador | Vendedor | Comprador | A bordo del buque |
| CIP | Multi | Vendedor | Vendedor | Vendedor | Comprador | Entrega al transportista |
| CIF | Marítimo | Vendedor | Vendedor | Vendedor | Comprador | A bordo del buque |
| DAP | Multi | Vendedor | Vendedor | Vendedor | Comprador | Lugar destino acordado |
| DPU | Multi | Vendedor | Vendedor | Vendedor | Comprador | Lugar destino (descargada) |
| DDP | Multi | Vendedor | Vendedor | Vendedor | Vendedor | Lugar destino acordado |

## Errores comunes con Incoterms en Argentina

### Usar FOB para carga aérea

FOB es exclusivamente marítimo. Si enviás por avión y ponés "FOB Shanghai" en la factura, hay una ambigüedad legal sobre dónde se transfiere el riesgo. Para carga aérea, usá **FCA** (ej: FCA Shanghai Pudong Airport).

### Creer que CIF transfiere el riesgo en destino

Es el error más común. En CIF, el vendedor paga el flete y seguro, pero **el riesgo pasa al comprador cuando la mercadería está a bordo en origen**. Si tu contenedor se pierde en el mar, vos tenés que reclamar al seguro — no al proveedor.

### No especificar el lugar exacto

"FOB China" no es suficiente. Debés especificar el puerto: **FOB Shanghai**, **FOB Ningbo**, **FOB Shenzhen**. Lo mismo con DAP: **DAP Buenos Aires (Terminal 4 Puerto Nuevo)** es mucho más preciso que "DAP Argentina".

### No indicar la versión

Especificá siempre "**Incoterms® 2020**" en tus contratos y órdenes de compra. Las versiones anteriores (2010, 2000) tienen diferencias relevantes. Sin indicar versión, en caso de disputa puede haber ambigüedad.

## Cómo elegir el Incoterm correcto para tu operación

La elección depende de tres factores:

1. **Tu nivel de experiencia y control logístico**: si tenés un forwarder de confianza, FOB te da más control. Si preferís que el proveedor gestione más, CIF o DAP simplifican.

2. **El tipo de transporte**: si es 100% marítimo, FOB y CIF funcionan. Si es multimodal o aéreo, usá FCA o CIP.

3. **El poder de negociación**: a veces el proveedor tiene mejores tarifas de flete. Otras veces, vos conseguís mejores condiciones con tu forwarder. Compará ambos escenarios.

En All Trade Technology asesoramos a cada cliente sobre el Incoterm más conveniente para su operación específica, comparando costos reales en cada escenario.

## Conclusión

Los Incoterms no son un detalle técnico menor — son la base contractual de toda operación de comercio exterior. Elegir bien puede ahorrarte dinero; elegir mal puede costarte una disputa.

Si tenés dudas sobre qué Incoterm usar para tu próxima importación o exportación, consultanos. Analizamos tu caso y te recomendamos la mejor opción con números concretos.

**[Consultá sobre tu operación en alltradetechnology.com →](https://www.alltradetechnology.com)**`,
  },
  {
    slug: "regulaciones-importacion-argentina-2026",
    title: "Nuevas regulaciones de importación Argentina 2026",
    description:
      "Resumen de las nuevas regulaciones y cambios normativos para importar a Argentina en 2026. SIRA, aranceles y licencias actualizados.",
    category: "Regulaciones",
    published: true,
    date: "2026-03-08",
    readingTime: 11,
    faqs: [
      {
        question: "¿Sigue vigente el SIRA en 2026?",
        answer:
          "Sí. El Sistema de Importaciones de la República Argentina (SIRA) continúa vigente como mecanismo de autorización previa para importaciones. Sin embargo, durante 2025 y principios de 2026 se implementaron modificaciones que simplifican los plazos de aprobación y reducen las categorías de productos que requieren licencias no automáticas. Los tiempos de aprobación se han reducido significativamente respecto a 2023-2024.",
      },
      {
        question: "¿Bajaron los aranceles de importación en 2026?",
        answer:
          "Hubo reducciones puntuales en sectores estratégicos como bienes de capital (0%), informática y telecomunicaciones (reducción a 0-2%), e insumos industriales seleccionados. Sin embargo, los aranceles para productos de consumo final se mantienen en los niveles del Arancel Externo Común del Mercosur (hasta 35%). Cada posición arancelaria tiene su propia alícuota — es fundamental verificar la NCM específica de tu producto.",
      },
      {
        question: "¿Cómo afecta el régimen cambiario a las importaciones?",
        answer:
          "A partir de las reformas de 2025-2026, el acceso al mercado oficial de cambios para pagar importaciones se ha flexibilizado. Los plazos de pago al exterior se han acortado y se eliminaron muchas restricciones que existían durante el cepo cambiario más estricto. Aún así, es importante verificar las condiciones vigentes al momento de cada operación, ya que la normativa cambiaria puede modificarse con rapidez.",
      },
      {
        question: "¿Qué productos requieren licencia no automática en 2026?",
        answer:
          "La lista de productos con licencia no automática se ha reducido, pero aún incluye sectores sensibles como textiles, calzado, juguetes, electrodomésticos, neumáticos y algunos alimentos procesados. Las licencias no automáticas agregan un plazo de hasta 60 días para la aprobación de la SIRA. Verificá siempre la situación de tu NCM antes de cerrar una compra en el exterior.",
      },
      {
        question: "¿Qué cambió en las inspecciones pre-embarque obligatorias?",
        answer:
          "Argentina mantiene el régimen de verificación de destino pre-embarque para ciertas categorías de productos, especialmente textiles y calzado de origen asiático. La novedad es la incorporación de más productos al sistema de canal rojo automático por posición arancelaria, lo que implica inspección física obligatoria en aduana. Esto refuerza la importancia de que la mercadería coincida exactamente con lo declarado.",
      },
      {
        question: "¿Es más fácil importar en 2026 que en 2024?",
        answer:
          "En general, sí. La tendencia regulatoria ha sido hacia la simplificación: plazos de SIRA más cortos, menos restricciones cambiarias, reducción de licencias no automáticas en algunos sectores y digitalización de trámites. Sin embargo, importar sigue requiriendo conocimiento técnico, planificación y cumplimiento de múltiples regulaciones. Los errores documentales o de clasificación siguen siendo costosos.",
      },
    ],
    content: `## El marco regulatorio de importación argentina en 2026

El entorno normativo para importar a Argentina cambió significativamente entre 2024 y 2026. Las reformas del gobierno en materia cambiaria, aduanera y de comercio exterior modificaron reglas que los importadores venían operando desde hacía años. Algunas cosas se simplificaron; otras requieren nueva atención.

Para cualquier empresa que importa o planifica hacerlo, entender el marco regulatorio vigente no es opcional — es la diferencia entre una operación fluida y una mercadería retenida en aduana.

En este artículo repasamos los principales cambios normativos que impactan en las importaciones argentinas en 2026, con foco práctico en lo que necesitás saber para operar. Si es tu primera importación, te recomendamos empezar por nuestra [guía completa para importar desde China](/blog/como-importar-desde-china-argentina).

## Estado actual del SIRA (Sistema de Importaciones de la República Argentina)

El SIRA continúa vigente como sistema de autorización previa para importaciones, pero con cambios relevantes respecto a su implementación original.

### Qué cambió

- **Plazos de aprobación más cortos**: las SIRA para productos sin licencia no automática se aprueban en plazos significativamente menores a los de 2023-2024. Operaciones que antes tardaban 60-90 días en ser aprobadas ahora se resuelven en días o semanas.
- **Reducción de intervenciones discrecionales**: se limitó la capacidad de bloquear importaciones por criterios no técnicos, dando mayor previsibilidad.
- **Digitalización avanzada**: más trámites se resuelven de forma electrónica, reduciendo la necesidad de gestiones presenciales.

### Qué no cambió

- **Sigue siendo obligatorio**: toda importación requiere SIRA aprobada antes de embarcar. No hay excepciones para operaciones comerciales.
- **Clasificación arancelaria sigue siendo crítica**: un error en la NCM puede bloquear la SIRA o generar observaciones que demoran el proceso.
- **Intervenciones de organismos técnicos**: si tu producto requiere aprobación de SENASA, ANMAT, INTI u otros, esos procesos mantienen sus plazos propios.

### Recomendación práctica

Iniciá el trámite de SIRA con al menos 15-20 días de anticipación al embarque. Aunque los plazos se acortaron, no son instantáneos y cualquier observación puede agregar días al proceso.

## Cambios arancelarios relevantes en 2026

### Reducciones de aranceles

El gobierno implementó reducciones arancelarias en sectores estratégicos para fomentar la inversión y la producción local:

| Sector | Arancel anterior | Arancel 2026 |
|---|---|---|
| Bienes de capital (no producidos localmente) | 0-14% | 0% |
| Informática y telecomunicaciones | 6-16% | 0-2% |
| Insumos industriales seleccionados | 10-18% | 2-6% |
| Autopartes (lista positiva) | 8-18% | 2-8% |

### Aranceles que se mantienen altos

Los productos de consumo final, especialmente aquellos con producción local, mantienen aranceles del Arancel Externo Común (AEC) del Mercosur:

- **Textiles y confecciones**: 35%
- **Calzado**: 35%
- **Electrodomésticos**: 20-35%
- **Alimentos procesados**: 14-28%
- **Juguetes**: 20-35%

### Derechos antidumping vigentes

Argentina mantiene derechos antidumping activos sobre productos específicos de ciertos orígenes. Los más relevantes incluyen:

- Cubiertas de neumáticos de origen chino.
- Chapas de acero laminadas en caliente de China y Rusia.
- Tejidos de fibra de poliéster de China e Indonesia.
- Calzado deportivo de origen asiático.

Antes de importar, verificá si tu producto y origen están alcanzados por medidas antidumping. Estos derechos adicionales pueden alterar completamente la ecuación de costos. Para un análisis detallado de costos, consultá nuestro artículo sobre [costos de importación a Argentina](/blog/costos-importacion-argentina).

## Régimen cambiario y su impacto en importaciones

El régimen cambiario argentino atravesó cambios profundos entre 2024 y 2026, con impacto directo en las importaciones.

### Acceso al mercado de cambios

- **Flexibilización del acceso**: los importadores pueden acceder al mercado oficial de cambios con menores restricciones que durante el período 2022-2024.
- **Plazos de pago**: se acortaron los plazos obligatorios de financiamiento para importaciones. Según el tipo de bien, los pagos al exterior pueden realizarse en plazos más cercanos al embarque.
- **Pagos anticipados**: se habilitaron pagos anticipados para ciertos bienes (insumos, bienes de capital) con menores requisitos de garantía.

### Planificación cambiaria

Aunque el régimen es más flexible, la volatilidad cambiaria sigue siendo un factor de riesgo. Recomendaciones:

- **Calculá tus costos al tipo de cambio proyectado** para la fecha de despacho, no al del día de compra.
- **Evaluá instrumentos de cobertura** si los montos lo justifican.
- **Mantené liquidez en pesos** suficiente para cubrir tributos aduaneros al momento del despacho.

## Licencias no automáticas: estado actual

Las licencias no automáticas (LNA) son un mecanismo que agrega un plazo de aprobación adicional a la SIRA para determinados productos. Su objetivo declarado es proteger la industria local.

### Sectores con LNA vigentes en 2026

- Textiles y confecciones (NCM capítulos 61-63).
- Calzado (NCM capítulo 64).
- Juguetes (NCM capítulo 95).
- Electrodomésticos (NCM posiciones seleccionadas del capítulo 84 y 85).
- Neumáticos (NCM capítulo 40, posiciones específicas).
- Algunos alimentos procesados.

### Impacto práctico

Las LNA pueden agregar **30 a 60 días** al plazo de aprobación de la SIRA. Para estos productos, la planificación anticipada es aún más crítica. Si importás productos con LNA, iniciá la gestión de SIRA con al menos 45-60 días de anticipación al embarque previsto.

### Tendencia

La cantidad de posiciones arancelarias sujetas a LNA se ha reducido gradualmente. La tendencia del gobierno es migrar de controles previos (licencias) a controles posteriores (fiscalización post-despacho). Sin embargo, los sectores más sensibles mantienen el esquema.

## Intervenciones de organismos técnicos

Además de la SIRA, muchos productos requieren aprobación previa de organismos técnicos. Los principales:

### SENASA (Servicio Nacional de Sanidad y Calidad Agroalimentaria)

Interviene en: alimentos, productos de origen animal y vegetal, agroquímicos, fertilizantes.

**Novedad 2026**: digitalización de trámites de importación de alimentos, reduciendo tiempos de aprobación. Pero las inspecciones físicas en puerto siguen siendo obligatorias para ciertos productos.

### ANMAT (Administración Nacional de Medicamentos, Alimentos y Tecnología Médica)

Interviene en: medicamentos, productos médicos, cosméticos, alimentos, suplementos dietarios, productos de uso doméstico.

**Novedad 2026**: nuevo sistema de trazabilidad para productos médicos importados. Los importadores deben registrarse como responsables de trazabilidad.

### INTI (Instituto Nacional de Tecnología Industrial)

Interviene en: productos eléctricos y electrónicos (seguridad eléctrica), juguetes (seguridad), materiales de construcción.

**Novedad 2026**: actualización de normas de seguridad eléctrica alineadas con estándares IEC, lo que puede requerir nuevas certificaciones para productos que antes estaban aprobados.

### ENACOM (Ente Nacional de Comunicaciones)

Interviene en: equipos de telecomunicaciones, dispositivos WiFi/Bluetooth, equipos que emiten radiofrecuencia.

**Novedad 2026**: simplificación del proceso de homologación para dispositivos con certificación FCC o CE previa.

## Nuevos requisitos de etiquetado y trazabilidad

### Etiquetado de productos importados

Argentina actualizó sus requisitos de etiquetado para productos importados. Los principales cambios:

- **Etiquetado de eficiencia energética**: ampliado a más categorías de productos eléctricos y electrónicos.
- **Etiquetado frontal de alimentos (Ley 27.642)**: los sellos octogonales negros de advertencia son obligatorios. Los productos importados deben cumplir con este etiquetado antes del despacho aduanero.
- **Etiquetado textil**: composición de fibras, país de origen, instrucciones de cuidado, todo en español y con el formato regulado.

### Trazabilidad

Se ampliaron los requisitos de trazabilidad a más categorías de productos. Esto implica que como importador debés poder identificar el origen, lote y cadena de distribución de cada producto importado.

## Recomendaciones para importadores en 2026

1. **Mantené la documentación impecable**: aunque el entorno regulatorio se simplificó, los errores documentales siguen siendo la principal causa de demoras y sobrecostos.

2. **Verificá aranceles y regulaciones antes de comprar**: no asumas que las condiciones de tu última importación siguen vigentes. Las alícuotas y las listas de LNA pueden cambiar.

3. **Anticipá los trámites ante organismos**: SENASA, ANMAT, INTI y ENACOM tienen sus propios tiempos. No los descubras cuando el contenedor ya está en el agua.

4. **Trabajá con profesionales actualizados**: la normativa de comex argentino cambia constantemente. Un operador especializado como All Trade Technology se mantiene al día con cada resolución y circular.

5. **Aprovechá las reducciones arancelarias**: si importás bienes de capital o insumos industriales, verificá si tu producto accede a las nuevas alícuotas reducidas. La diferencia puede ser significativa.

## Conclusión

El 2026 presenta un entorno regulatorio más favorable para las importaciones argentinas respecto a los años anteriores: menos trabas cambiarias, plazos más cortos, aranceles reducidos en sectores clave. Pero "más favorable" no significa "simple". La complejidad regulatoria argentina sigue requiriendo conocimiento técnico, planificación y atención al detalle.

En **All Trade Technology** nos mantenemos permanentemente actualizados con cada cambio normativo para que nuestros clientes operen con la tranquilidad de estar siempre en cumplimiento. Si necesitás asesoramiento sobre cómo las regulaciones vigentes impactan tu operación, consultanos.

**[Consultá con nuestros especialistas en alltradetechnology.com →](https://www.alltradetechnology.com)**`,
  },
  {
    slug: "importar-maquinaria-industrial",
    title: "Importar maquinaria industrial: paso a paso",
    description:
      "Guía paso a paso para importar maquinaria industrial a Argentina. Certificaciones, logística especial y beneficios impositivos.",
    category: "Guías",
    published: true,
    date: "2026-03-05",
    readingTime: 10,
    faqs: [
      {
        question: "¿Cuánto se paga de arancel por importar maquinaria industrial?",
        answer:
          "Los bienes de capital no producidos localmente pueden acceder a un arancel del 0% bajo el régimen de bienes de capital (BK). Para acceder, el bien debe estar clasificado en las posiciones arancelarias incluidas en la lista de bienes de capital del Mercosur. Los bienes de capital que sí tienen producción local pagan entre un 2% y un 14% según la NCM. Verificar si tu máquina califica para el 0% puede ahorrarte miles de dólares.",
      },
      {
        question: "¿Puedo importar maquinaria usada a Argentina?",
        answer:
          "Sí, pero con restricciones. La maquinaria usada requiere una certificación de que está en condiciones operativas y cumple con las normas de seguridad vigentes. Además, puede estar sujeta a valores criterio más altos en aduana (la aduana puede cuestionar valores bajos en equipos usados). Los aranceles se aplican sobre el valor declarado. También se requiere una declaración jurada indicando la antigüedad del equipo.",
      },
      {
        question: "¿Qué certificaciones necesita una máquina industrial importada?",
        answer:
          "Depende del tipo de máquina. Las que tienen componentes eléctricos requieren certificación de seguridad eléctrica del INTI. Las que operan con presión (compresores, calderas) pueden requerir habilitación de la autoridad de control. Equipos que emiten radiofrecuencia necesitan homologación de ENACOM. Máquinas para la industria alimenticia pueden requerir aprobación de SENASA o ANMAT. Verificá los requisitos específicos para tu NCM antes de comprar.",
      },
      {
        question: "¿Cómo se transporta maquinaria pesada desde el exterior?",
        answer:
          "Para máquinas que caben en un contenedor estándar (hasta 25 toneladas en un 20' o 27 toneladas en un 40'), se usa transporte marítimo en contenedor con trincado profesional. Para equipos sobredimensionados o más pesados, se usa carga break bulk (suelta) o flat rack (contenedores abiertos). El costo de logística especial es significativamente mayor y requiere planificación con semanas de anticipación.",
      },
      {
        question: "¿Puedo financiar la importación de maquinaria?",
        answer:
          "Sí, hay varias opciones. Líneas de crédito bancarias específicas para bienes de capital importados (algunos bancos ofrecen líneas en dólares a tasas preferenciales), leasing internacional, y financiamiento del proveedor. Además, algunos programas gubernamentales de fomento a la inversión productiva ofrecen beneficios fiscales o crediticios para la compra de maquinaria importada.",
      },
      {
        question: "¿Cuánto tarda importar una máquina industrial desde China o Europa?",
        answer:
          "El timeline completo es de 75 a 120 días. La producción o preparación del equipo toma 20-60 días (las máquinas a medida toman más). El tránsito marítimo es de 35-45 días desde China o 25-35 días desde Europa. El despacho aduanero toma 5-15 días hábiles si la documentación está en orden. Para equipos que requieren instalación, sumá 5-15 días adicionales post-despacho.",
      },
    ],
    content: `## Por qué importar maquinaria industrial es una de las mejores inversiones para una empresa argentina

La maquinaria industrial importada permite a las empresas argentinas acceder a tecnología que muchas veces no se produce localmente, a precios significativamente menores que los de intermediarios nacionales. Desde centros de mecanizado CNC y líneas de envasado hasta robots industriales y equipos de procesamiento, la oferta global es enorme y los beneficios arancelarios para bienes de capital hacen que la ecuación cierre.

Pero importar maquinaria industrial no es lo mismo que importar un contenedor de productos de consumo. Hay desafíos logísticos específicos (peso, dimensiones, fragilidad), requisitos técnicos y certificaciones obligatorias, y consideraciones de instalación y puesta en marcha que hacen de esta una operación que requiere experiencia y planificación.

En All Trade Technology hemos gestionado la importación de maquinaria industrial para empresas de diversas industrias en todo el país. Esta guía concentra ese conocimiento en un recurso práctico.

## Beneficios arancelarios para importar maquinaria industrial

### Régimen de bienes de capital (BK) — arancel 0%

Argentina mantiene un régimen especial para la importación de **bienes de capital no producidos localmente** que permite importar con **0% de derecho de importación**. Este beneficio puede representar un ahorro de entre el 5% y el 14% sobre el valor CIF del equipo.

**Requisitos para acceder al 0%:**

- La máquina debe clasificarse en una posición arancelaria incluida en la **lista de bienes de capital del Mercosur** (listado BK).
- No debe existir producción nacional del equipo específico (o del equivalente funcional).
- La SIRA debe tramitarse indicando que se solicita el beneficio BK.

**Ejemplo**: una empresa de Rafaela importa un centro de mecanizado CNC de 5 ejes desde Taiwán por USD 120.000 CIF. Si el equipo califica como BK, se ahorra USD 16.800 en aranceles (14% que pagaría sin el beneficio).

### Otros beneficios impositivos

- **IVA diferido**: para bienes de capital, es posible acceder a regímenes de pago diferido del IVA importación en determinadas condiciones.
- **Amortización acelerada**: la maquinaria importada puede amortizarse de forma acelerada en el impuesto a las ganancias, mejorando el flujo de caja del primer ejercicio.
- **Regímenes de promoción industrial**: según la jurisdicción, pueden existir beneficios provinciales adicionales.

Para un análisis completo de la carga tributaria, consultá nuestro artículo sobre [costos de importación a Argentina](/blog/costos-importacion-argentina).

## Paso a paso: importar maquinaria industrial a Argentina

### Paso 1: Definir las especificaciones técnicas

Antes de buscar proveedores, definí con precisión:

- **Capacidad y prestaciones** requeridas: velocidades, tolerancias, volúmenes de producción.
- **Dimensiones y peso**: determinan el tipo de transporte y si cabe en un contenedor estándar.
- **Tensión eléctrica y frecuencia**: Argentina usa 380V trifásico a 50 Hz. Muchas máquinas chinas vienen configuradas para 220V/60Hz. Verificá que el equipo se fabrique o adapte para las especificaciones argentinas.
- **Normas y certificaciones**: qué certificaciones necesitás según la regulación argentina vigente.
- **Repuestos y consumibles**: disponibilidad y costo de repuestos. Una máquina barata con repuestos caros o difíciles de conseguir es un mal negocio.

### Paso 2: Selección del proveedor

Para maquinaria industrial, la selección del proveedor es aún más crítica que para productos de consumo. Un equipo defectuoso no se reemplaza fácilmente.

**Orígenes más comunes:**

| Origen | Perfil | Rango de precios |
|---|---|---|
| China | Buena relación precio/calidad, mejora constante | $$ |
| Taiwán | Alta calidad en CNC y automatización | $$$ |
| Alemania | Ingeniería premium, máxima precisión | $$$$ |
| Italia | Fuerte en alimentación, packaging, textil | $$$ |
| India | Competitivo en maquinaria pesada básica | $ |
| Turquía | Buen nivel en metalurgia y plásticos | $$ |

**Validación del proveedor de maquinaria:**

- Visitá la fábrica si el monto lo justifica (para compras superiores a USD 50.000, el viaje se paga solo).
- Pedí **videos de la máquina funcionando** con las especificaciones que necesitás.
- Solicitá **lista de clientes en Latinoamérica** y contactá al menos dos como referencia.
- Verificá la **garantía y el soporte técnico post-venta**: ¿ofrecen soporte remoto? ¿Envían técnicos para la instalación?

### Paso 3: Negociación de condiciones

Para maquinaria industrial, las condiciones de negociación suelen ser diferentes a las de productos de consumo:

- **Incoterm recomendado**: FOB o FCA para mantener control sobre la logística. Para equipos sobredimensionados, puede convenir DAP si el proveedor tiene experiencia en logística especial.
- **Forma de pago habitual**: 30% anticipo contra orden, 60% contra inspección pre-embarque aprobada, 10% contra instalación y puesta en marcha satisfactoria. Para montos grandes, carta de crédito (L/C).
- **Garantía**: negociá al menos 12 meses de garantía desde la puesta en marcha (no desde el embarque).
- **Capacitación**: incluí la capacitación de operadores como parte del contrato.
- **Manuales y documentación**: en español, con esquemas eléctricos, hidráulicos y neumáticos completos.

Para entender mejor los incoterms y elegir el adecuado, consultá nuestra [guía práctica de Incoterms](/blog/incoterms-guia-practica).

### Paso 4: Certificaciones y permisos previos

Según el tipo de maquinaria, podés necesitar:

**Seguridad eléctrica (INTI)**

Toda máquina con componentes eléctricos debe cumplir con las resoluciones de seguridad eléctrica vigentes. Esto implica:

- Certificado de conformidad de producto eléctrico.
- Ensayos según normas IRAM correspondientes.
- El trámite puede tomar 30-60 días — inicialo con anticipación.

**Homologación ENACOM**

Si la máquina incluye módulos de comunicación inalámbrica (WiFi, Bluetooth, RFID), necesitás homologación de ENACOM. Equipos con certificación FCC o CE previa tienen un proceso simplificado.

**SENASA/ANMAT**

Máquinas para la industria alimenticia, farmacéutica o cosmética pueden requerir intervención de estos organismos si entran en contacto directo con el producto.

### Paso 5: Logística especializada

La logística de maquinaria industrial tiene particularidades que la diferencian de la carga general.

**Máquinas que caben en contenedor:**

- **Contenedor de 20' estándar**: soporta hasta 25-28 toneladas, volumen útil de ~33 m³.
- **Contenedor de 40' HC (High Cube)**: para máquinas altas, ofrece 2,70 m de altura interior.
- **Trincado profesional**: la máquina debe estar fijada al piso del contenedor con tacos de madera, flejes de acero y cuñas. Un trincado deficiente puede significar daño total del equipo.

**Máquinas sobredimensionadas:**

- **Flat rack**: contenedor abierto para cargas que exceden las dimensiones estándar.
- **Break bulk**: carga suelta en bodega del buque. Para máquinas muy pesadas o voluminosas.
- **Proyecto (project cargo)**: para equipos de gran envergadura que requieren planificación logística especial, grúas especiales en puerto y transporte terrestre con permisos de carga excepcional.

**Embalaje:**

La maquinaria debe embalarse con protección contra:

- **Humedad**: embalaje con barrera de vapor y desecantes (gel de sílice). El tránsito marítimo de 35-45 días expone la carga a cambios de temperatura que generan condensación.
- **Corrosión**: piezas metálicas sin pintar deben tratarse con anticorrosivo o aceite protector.
- **Impacto**: amortiguación adecuada para las partes más sensibles (paneles de control, husillos, guías lineales).

### Paso 6: Inspección pre-embarque

Para maquinaria, la inspección pre-embarque es **no negociable**. Debe incluir:

- **Prueba de funcionamiento** (test run) en la fábrica del proveedor.
- **Verificación dimensional**: que las medidas coincidan con los planos.
- **Verificación eléctrica**: tensión, frecuencia y potencia según lo acordado.
- **Revisión de embalaje**: que sea apto para transporte marítimo internacional.
- **Control de accesorios y repuestos**: que estén completos según la lista de empaque.

### Paso 7: Despacho aduanero y nacionalización

El despacho de maquinaria industrial tiene algunas particularidades:

- **Clasificación arancelaria precisa**: las máquinas complejas pueden tener componentes que se clasifican en distintas posiciones arancelarias. La clasificación correcta es fundamental para acceder al beneficio BK (0% de arancel).
- **Valor en aduana**: para equipos de alto valor, la aduana puede solicitar documentación adicional que justifique el precio (catálogos, cotizaciones de competidores, etc.).
- **Canal rojo probable**: las importaciones de maquinaria de alto valor suelen ser asignadas a canal rojo (verificación física), lo que agrega 3-5 días al despacho.

### Paso 8: Transporte interno e instalación

Una vez despachada, la máquina debe llegar a tu planta. Consideraciones:

- **Transporte especial**: máquinas pesadas pueden requerir camiones con plataforma baja o permisos de tránsito especial.
- **Descarga**: verificá que tu planta tenga la capacidad de descarga necesaria (puente grúa, autoelevador de tonelaje adecuado, acceso para camión).
- **Instalación**: muchos proveedores incluyen el envío de un técnico para supervisar la instalación y hacer la puesta en marcha. Coordiná esto con anticipación.
- **Fundaciones y servicios**: verificá que las fundaciones (bases de hormigón), instalaciones eléctricas, neumáticas e hidráulicas estén listas antes de que llegue la máquina.

## Costos típicos de importar maquinaria industrial

Ejemplo para una máquina CNC de USD 80.000 FOB Shanghai, clasificada como bien de capital (0% arancel):

| Concepto | Monto (USD) |
|---|---|
| Valor FOB | 80.000 |
| Flete marítimo (FCL 20' con trincado especial) | 3.200 |
| Seguro internacional (0,5% por valor alto) | 420 |
| **Valor CIF** | **83.620** |
| Derecho de importación (BK 0%) | 0 |
| Tasa de estadística (3%) | 2.509 |
| IVA (21%) | 18.087 |
| IVA adicional (20%) | 17.226 |
| Ganancias (6%) | 5.168 |
| Ingresos brutos (2,5%) | 2.153 |
| **Total tributos** | **45.143** |
| Gastos portuarios | 700 |
| Despachante | 500 |
| Flete interno | 1.200 |
| **Costo total nacionalizado** | **131.163** |
| **Factor sobre FOB** | **1,64x** |

Gracias al arancel 0% de bienes de capital, el factor landed/FOB es de **1,64x** — significativamente menor que el 2,0-2,5x típico de productos de consumo.

## Conclusión

Importar maquinaria industrial es una inversión estratégica que, bien ejecutada, puede transformar la capacidad productiva de tu empresa. Los beneficios arancelarios vigentes hacen que el momento sea especialmente favorable.

La clave está en la planificación: especificaciones claras, proveedor validado, logística especializada y documentación impecable.

En **All Trade Technology** gestionamos importaciones de maquinaria industrial de punta a punta: desde la búsqueda del proveedor hasta la puesta en marcha en tu planta. Si estás evaluando invertir en equipamiento importado, te ayudamos a armar los números y ejecutar la operación.

**[Solicitá tu cotización de maquinaria en alltradetechnology.com →](https://www.alltradetechnology.com)**`,
  },
  {
    slug: "exportar-desde-argentina",
    title: "Exportar desde Argentina: oportunidades 2026",
    description:
      "Las mejores oportunidades de exportación desde Argentina en 2026. Sectores, destinos y cómo empezar a exportar tu producto.",
    category: "Exportación",
    published: true,
    date: "2026-03-01",
    readingTime: 9,
    faqs: [
      {
        question: "¿Qué productos argentinos tienen más demanda internacional?",
        answer:
          "Los productos con mayor demanda son: alimentos (carne bovina, vinos, aceite de oliva, miel, legumbres, maní), productos agroindustriales (aceite y harina de soja, biodiesel), economía del conocimiento (software, servicios IT, videojuegos), maquinaria agrícola, autopartes, cuero y manufacturas de cuero, productos químicos y farmacéuticos, y frutas frescas (limones, peras, arándanos).",
      },
      {
        question: "¿Necesito ser exportador registrado?",
        answer:
          "Sí. Para exportar desde Argentina necesitás estar inscripto como importador/exportador ante AFIP y la Dirección General de Aduanas. El trámite se realiza online a través del sistema de AFIP. Necesitás CUIT activo y una actividad económica que contemple la exportación. También necesitás un despachante de aduanas matriculado para gestionar el permiso de embarque.",
      },
      {
        question: "¿Cuánto cuestan los derechos de exportación (retenciones)?",
        answer:
          "Los derechos de exportación varían según el producto. Los productos primarios (soja, trigo, maíz, girasol) tienen retenciones del 7% al 33%. Las manufacturas de origen industrial generalmente tienen retenciones del 0% al 4,5%. Muchos productos industriales y de la economía del conocimiento están exentos de retenciones. Verificá la alícuota específica para tu producto en la nomenclatura arancelaria.",
      },
      {
        question: "¿Qué beneficios fiscales tiene exportar desde Argentina?",
        answer:
          "Los principales beneficios son: recupero del IVA compras vinculado a exportaciones (la AFIP devuelve el IVA de los insumos usados para producir bienes exportados), draw-back (recupero de aranceles pagados por insumos importados usados en productos exportados), reintegros de exportación (entre 0,5% y 6% del valor FOB según el producto), y exención de ingresos brutos en muchas jurisdicciones.",
      },
      {
        question: "¿Cómo cobro una exportación?",
        answer:
          "Las formas de cobro más comunes son: transferencia bancaria internacional (la más simple y económica), carta de crédito (para operaciones de mayor monto o cuando no conocés al comprador), y cobranza documentaria (el banco entrega los documentos al comprador contra pago). Los exportadores tienen la obligación de ingresar las divisas al sistema financiero argentino dentro de los plazos establecidos por la normativa cambiaria vigente.",
      },
      {
        question: "¿Puedo exportar siendo una pyme?",
        answer:
          "Absolutamente. Argentina tiene programas específicos para pymes exportadoras, incluyendo asesoramiento gratuito de organismos como la Agencia Argentina de Inversiones y Comercio Internacional, programas de ferias y misiones comerciales subsidiadas, líneas de prefinanciación de exportaciones a tasas preferenciales, y el régimen de exportación simplificada para envíos de menor valor. Muchas pymes argentinas exitosas empezaron exportando pequeños volúmenes.",
      },
      {
        question: "¿Cuáles son los mejores mercados para exportar desde Argentina?",
        answer:
          "Los principales destinos de exportaciones argentinas son: Brasil (principal socio comercial, ventajas arancelarias por Mercosur), Estados Unidos, China, Chile, India y la Unión Europea. Para pymes, mercados como Chile, Uruguay, Paraguay, Bolivia y Perú son accesibles por cercanía, acuerdos comerciales y menor complejidad logística. La elección del mercado depende del producto, la competencia y los requisitos de entrada.",
      },
    ],
    content: `## Argentina tiene una oportunidad exportadora que muchas empresas están desaprovechando

En un contexto donde el tipo de cambio vuelve a ser competitivo y la demanda global de productos argentinos se mantiene firme, exportar es una de las estrategias más sólidas para diversificar ingresos, protegerse de la volatilidad local y escalar un negocio.

Sin embargo, muchas empresas argentinas que podrían exportar no lo hacen. Las razones suelen ser las mismas: "no sé por dónde empezar", "es muy complicado", "no tengo volumen". La realidad es que exportar desde Argentina es viable para empresas de todos los tamaños, y el contexto de 2026 presenta condiciones particularmente favorables.

En All Trade Technology no solo gestionamos importaciones — también acompañamos a empresas argentinas en sus operaciones de exportación. Esta guía resume las oportunidades, los requisitos y los pasos concretos para empezar a exportar.

## Sectores con mayor oportunidad de exportación en 2026

### Alimentos y bebidas

Argentina es reconocida globalmente como proveedora de alimentos de calidad. Los productos con mayor demanda internacional:

| Producto | Principales destinos | Tendencia 2026 |
|---|---|---|
| Carne bovina | China, UE, Israel, Chile | Demanda sostenida, precios firmes |
| Vinos | EE.UU., Reino Unido, Brasil, Canadá | Crecimiento en segmento premium |
| Aceite de oliva | Brasil, EE.UU., UE | Alta demanda por escasez europea |
| Miel | EE.UU., Alemania, Japón | Precios en alza, demanda constante |
| Maní | UE, Brasil, México | Argentina es 1er exportador mundial |
| Legumbres | Brasil, India, Medio Oriente | Crecimiento por tendencia plant-based |
| Arándanos y frutas finas | EE.UU., Europa | Contraestación favorece a Argentina |

**Dato clave**: las exportaciones de alimentos y bebidas procesadas (no commodities) tienen reintegros de exportación de entre 2,5% y 6% del valor FOB, además del recupero de IVA.

### Economía del conocimiento

El sector de software y servicios IT es uno de los más dinámicos de las exportaciones argentinas. En 2025, las exportaciones de servicios basados en conocimiento superaron los USD 8.000 millones.

**Oportunidades específicas:**

- **Desarrollo de software**: Argentina tiene talento técnico reconocido globalmente y costos competitivos en dólares.
- **Videojuegos**: la industria argentina de videojuegos exporta a todo el mundo con estudios reconocidos internacionalmente.
- **Servicios profesionales**: consultoría, diseño, ingeniería, publicidad digital.
- **BPO/BTO**: servicios tercerizados para empresas extranjeras.

**Ventaja fiscal**: el régimen de economía del conocimiento ofrece beneficios significativos, incluyendo reducción de contribuciones patronales y estabilidad fiscal.

### Maquinaria agrícola y equipamiento industrial

Argentina tiene una industria de maquinaria agrícola reconocida, especialmente en sembradoras, pulverizadoras, equipos de riego y silos. Los mercados de destino incluyen países de la región (Uruguay, Paraguay, Bolivia), África y Asia.

Empresas del cordón industrial de Santa Fe, Córdoba y Buenos Aires exportan equipamiento que compite en calidad y precio con fabricantes europeos y norteamericanos.

### Manufactura y productos industriales

- **Autopartes**: Argentina es proveedor de autopartes para Brasil y otros mercados de la región.
- **Productos químicos**: agroquímicos, productos de limpieza, químicos industriales.
- **Cuero y manufacturas**: Argentina tiene una tradición en cuero premium con demanda en Europa y Asia.
- **Productos farmacéuticos**: laboratorios argentinos exportan medicamentos a toda Latinoamérica.

## Requisitos para exportar desde Argentina

### Inscripción como exportador

Los requisitos básicos son los mismos que para importar:

- **CUIT activo** con actividad económica que contemple exportación.
- **Inscripción ante la DGA** (Dirección General de Aduanas) como exportador.
- **Despachante de aduanas** matriculado para gestionar los permisos de embarque.

### Documentación de exportación

Para cada operación de exportación necesitás:

- **Permiso de embarque**: documento aduanero que autoriza la salida de la mercadería. Se gestiona a través del sistema Malvina.
- **Factura de exportación (tipo E)**: factura comercial emitida al comprador del exterior.
- **Packing list**: detalle del embalaje.
- **Bill of Lading o Air Waybill**: documento de transporte emitido por la naviera o aerolínea.
- **Certificado de origen**: si el destino tiene acuerdos preferenciales (Mercosur, ACE, SGP).
- **Certificados específicos**: fitosanitarios (SENASA) para alimentos, certificados de calidad, etc.

### Requisitos según destino

Cada mercado tiene sus propias regulaciones de ingreso. Ejemplos:

- **Unión Europea**: normas sanitarias estrictas, etiquetado específico, trazabilidad completa para alimentos.
- **Estados Unidos**: regulaciones de la FDA para alimentos, certificaciones UL para productos eléctricos.
- **Brasil**: certificaciones INMETRO, etiquetado en portugués, registros ante ANVISA para alimentos y cosméticos.
- **China**: certificaciones CCC para ciertos productos, protocolos sanitarios específicos para alimentos de origen animal.

## Beneficios fiscales de exportar desde Argentina

### Reintegros de exportación

El Estado devuelve un porcentaje del valor FOB de exportación como incentivo. Las alícuotas varían:

| Tipo de producto | Reintegro típico |
|---|---|
| Productos primarios | 0% – 0,5% |
| Manufacturas de origen agropecuario (MOA) | 1,5% – 4% |
| Manufacturas de origen industrial (MOI) | 2,5% – 6% |
| Bienes de capital | 5% – 6% |

### Recupero de IVA exportación

El IVA que pagaste por insumos, servicios y bienes utilizados en la producción de bienes exportados puede recuperarse ante AFIP. Es un beneficio significativo que mejora el flujo de caja, aunque el trámite puede tomar varios meses.

### Draw-back

Si importaste insumos que incorporaste al producto que exportás, podés recuperar los aranceles de importación pagados. Este mecanismo es particularmente útil para industrias que transforman insumos importados y exportan el producto terminado.

### Derechos de exportación (retenciones)

No todo es beneficio — las retenciones son un costo:

- **Soja y derivados**: 33%
- **Trigo, maíz, girasol**: 7-12%
- **Carne bovina**: 9%
- **Economía del conocimiento**: 0%
- **Manufacturas industriales**: 0-4,5%
- **Vinos**: 0%

Para la mayoría de los productos industriales y de la economía del conocimiento, las retenciones son mínimas o nulas, lo que mejora la competitividad exportadora.

## Cómo empezar a exportar: guía práctica

### Paso 1: Evaluar tu producto

No todos los productos son exportables de forma rentable. Evaluá:

- **¿Hay demanda internacional?** Investigá en bases de datos de comercio exterior (TradeMap, COMEX) si hay importadores de tu producto en mercados objetivo.
- **¿Sos competitivo en precio?** Calculá tu precio FOB incluyendo todos los costos de producción, embalaje de exportación, logística interna hasta puerto y trámites.
- **¿Cumplís con las normas del mercado destino?** Certificaciones, etiquetado, registros sanitarios.
- **¿Tenés capacidad de producción excedente?** Exportar no debe ir en detrimento de tu mercado local si no es estratégico.

### Paso 2: Identificar mercados y compradores

**Para mercados regionales (Mercosur, Chile, Perú):**

- Ferias comerciales sectoriales (la presencia en ferias sigue siendo el canal más efectivo para B2B).
- Rondas de negocios organizadas por la Agencia Argentina de Inversiones y Comercio Internacional.
- Plataformas B2B sectoriales.

**Para mercados lejanos (EE.UU., Europa, Asia):**

- Ferias internacionales del sector (Anuga, SIAL, CES, etc.).
- Representantes comerciales o distribuidores locales.
- Oficinas comerciales argentinas en el exterior (embajadas y consulados).

### Paso 3: Negociar la operación

Las condiciones clave a definir:

- **Incoterm**: FOB es el más común para exportaciones argentinas. El comprador se encarga del flete internacional. Para una guía detallada, leé nuestro artículo sobre [Incoterms 2020](/blog/incoterms-guia-practica).
- **Forma de cobro**: para primeras operaciones, carta de crédito o pago anticipado. Para relaciones establecidas, transferencia bancaria contra documentos.
- **Moneda**: dólares estadounidenses es el estándar. Euros para Europa.
- **Plazo de entrega**: sé realista. Incluí tiempo de producción, embalaje de exportación, transporte interno y trámites aduaneros.

### Paso 4: Producir, embalar y despachar

- **Embalaje de exportación**: debe ser apto para transporte internacional (resistente a humedad, apilable, con marcas de manipulación). No es lo mismo que el embalaje para mercado interno.
- **Etiquetado**: según los requisitos del mercado destino.
- **Despacho**: tu despachante gestiona el permiso de embarque, los certificados necesarios y coordina con la terminal portuaria o aeroportuaria.

### Paso 5: Cobrar y cumplir con obligaciones cambiarias

Una vez embarcada la mercadería y entregados los documentos:

- **Ingreso de divisas**: los exportadores deben ingresar las divisas al sistema financiero argentino dentro de los plazos establecidos (varían según el producto).
- **Liquidación**: las divisas deben liquidarse en el mercado de cambios.
- **Recupero fiscal**: iniciá los trámites de recupero de IVA y reintegros de exportación.

## Exportar desde Argentina con All Trade Technology

En ATT no solo importamos — también ayudamos a empresas argentinas a exportar sus productos al mundo. Nuestro servicio de exportación incluye:

- **Análisis de exportabilidad**: evaluamos tu producto, costos y mercados potenciales.
- **Gestión operativa completa**: documentación, despacho, logística y coordinación con el comprador.
- **Logística internacional**: con operaciones propias en Argentina, Estados Unidos y Europa, optimizamos rutas y costos.
- **Cumplimiento normativo**: nos aseguramos de que tu producto cumpla con todos los requisitos del mercado destino.

Si ya vendés en el mercado local y querés dar el salto al comercio internacional, o si exportás pero querés optimizar tus operaciones, podemos ayudarte.

## Conclusión

Argentina tiene productos que el mundo quiere comprar. El desafío no es la demanda — es la ejecución. Las empresas que logran exportar de forma consistente son las que profesionalizan su operación de comercio exterior desde el inicio.

El contexto de 2026, con un tipo de cambio competitivo y un marco regulatorio en proceso de simplificación, abre una ventana de oportunidad real. No hace falta ser una multinacional para aprovecharla.

**[Contactanos para evaluar tu potencial exportador →](https://www.alltradetechnology.com)**`,
  },
];

export function getPublishedArticles(): BlogArticle[] {
  return articles.filter((a) => a.published);
}

export function getAllArticles(): BlogArticle[] {
  return articles;
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
