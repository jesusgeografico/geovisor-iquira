# Geovisor Uso del Suelo – Íquira (Huila)

Geovisor web del Esquema de Ordenamiento Territorial (EOT) de Íquira con tres módulos independientes:

- **Urbano:** usos del suelo de la cabecera municipal y de los centros poblados Río Negro, Valencia de la Paz y San Luis.
- **Rural:** actividades de usos del suelo rural (numeral 3.2.2), con filtro por vereda.
- **Municipio:** vista general con el suelo rural, la cabecera y los centros poblados.

Cada ficha muestra el régimen de usos (principal, complementario, condicionado/restringido y prohibido) transcrito del documento de Formulación, con la tabla y la página para verificar. El botón **Cuadro de usos** abre las tablas completas.

Fuente: GDB EOT_IQUIRA_02. Las áreas se calcularon en Origen Nacional (EPSG:9377). Para verlo, abra `index.html` o la página publicada en GitHub Pages.

## Predios (dimensión económica)

- **Urbano – Uso por predio:** cada predio del catastro (U_Terreno) se cruzó con las zonas de uso del EOT. Toma el uso que ocupa la mayor parte de su área, y la ficha muestra todos los usos presentes con m² y %. Los predios con dos o más usos de al menos 10 % se marcan como mixtos. Incluye buscador por código predial nuevo o anterior.
- **Rural:** capa de predios rurales (R_Terreno) con la vereda del EOT asignada por ubicación y buscador por código.

## Certificado de uso del suelo

En la ficha de cada predio (urbano o rural) el botón **Generar certificado de uso del suelo** arma un documento imprimible con: identificación del predio, mapa de localización, clasificación del suelo, usos del EOT con su régimen (principal, complementario, condicionado/restringido, prohibido), tratamiento urbanístico (cabecera), condición de amenaza y espacio para firma. Se imprime o se guarda en PDF desde el navegador.
