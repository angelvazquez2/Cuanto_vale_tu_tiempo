# ¿Cuánto vale tu tiempo?

Landing estática responsive para publicar en cualquier alojamiento de sitios estáticos. El recorrido pregunta por el valor del tiempo, invita a elegir actividades y presenta una solicitud opcional de información comercial, sin nombrar una marca.

## Archivos

- `index.html`: estructura y contenido en español.
- `styles.css`: identidad marfil/dorado y diseño adaptable.
- `script.js`: calculadora, selección de actividades y formulario de demostración.
- `logo-tiempo.png`: logotipo recibido en el chat de referencia.

## Publicación

Sube estos cuatro archivos juntos a un alojamiento estático (por ejemplo, GitHub Pages, Netlify o el servidor web propio). La tipografía usa Google Fonts; si se desea servir sin conexión a terceros, elimina los enlaces de fuentes en `index.html` y usa las alternativas locales definidas en `styles.css`.

## Antes de activar el formulario

El formulario valida los campos y la casilla de consentimiento en el navegador, pero no transmite ni conserva datos. Antes de producción hay que:

1. Conectarlo a un proveedor/backend y proteger el envío contra abuso.
2. Añadir la identidad y datos de contacto del responsable del tratamiento.
3. Publicar la política de privacidad completa (finalidad, base jurídica, conservación, destinatarios, derechos y cómo ejercerlos).
4. Revisar el texto de consentimiento y el flujo de datos con el proveedor elegido.

## Criterio de cálculo

Ingreso neto anual estimado = nómina neta mensual × 12. Horas anuales trabajadas estimadas = horas por jornada × días por semana × 52 − (horas por jornada × vacaciones laborables). Valor neto por hora = ingreso neto anual ÷ horas anuales trabajadas. Horas para 600 € = 600 ÷ valor neto por hora. Jornadas necesarias = redondeo hacia arriba de horas para 600 € ÷ horas por jornada. El trayecto cuenta un viaje de ida y vuelta completo por cada jornada necesaria, incluida la jornada parcial final. Cada parte se redondea al minuto y el total suma las partes ya redondeadas.

La fórmula sigue la estructura de la referencia CalcularNomina.es: estima el valor neto por hora usando ingresos y horas de trabajo anuales, descontando vacaciones laborables. Este formulario parte de la nómina neta mensual y no calcula retenciones a partir del sueldo bruto. No descuenta festivos, pausas no pagadas, variaciones de horario ni periodos de baja.

## Formulario

Nombre, correo, teléfono y consentimiento aparecen solo después de elegir «Sí, me interesa». En esta versión el envío no está conectado ni guarda datos; al enviar se muestra una confirmación de vista previa que lo deja claro. Antes de recibir contactos hay que configurar el canal de envío y publicar los datos del responsable y la política de privacidad completa.
