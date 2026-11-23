// Régimen de usos del suelo transcrito del documento
// "1c. Formulación EOT Íquira" (Reformulación del Esquema de Ordenamiento Territorial).
// Cada entrada indica la tabla o numeral y la página del documento para verificar.
window.D = window.D || {};
D.norma = {
  definicionesUrbano: {
    fuente: 'Numeral 2.11.2, pág. 198-199',
    principal: 'Comprende la actividad o las actividades más aptas de acuerdo con la potencialidad y demás características de productividad y sostenibilidad de la zona.',
    complementario: 'Comprende las actividades compatibles y complementarias al uso principal.',
    condicionado: 'No apoya específicamente el uso principal, pero se permite por no generar incompatibilidad definitiva. Requiere concepto favorable de la Secretaría de Planeación e Infraestructura (horarios, parqueo, ruido, entre otros).',
    prohibido: 'No puede establecerse en la zona. Los usos no contemplados como principal, complementario o condicionado se consideran prohibidos.'
  },
  definicionesRural: {
    fuente: 'Numeral 3.2.1, pág. 206-207',
    principal: 'Conjunto de usos y actividades más idóneos con la categoría de manejo.',
    complementario: 'Usos compatibles con el uso principal, subordinados a las directrices de manejo del área.',
    condicionado: 'Uso restringido: podría desarrollarse siempre que se cumplan requisitos de control y mitigación de impactos.',
    prohibido: 'No podrá desarrollarse en la zona por estar en contravía de la categoría de manejo.'
  },

  // ---------- Tabla 47: cabecera municipal ----------
  urbano: {
    titulo: 'Tabla 47 – Asignación de usos de suelo urbano',
    fuente: 'Tabla 47, pág. 199',
    filas: {
      'Residencial': {p: ['Residencial'], c: ['Comercio Grupo 1', 'Recreacional'], k: ['Comercio Grupo 2', 'Institucional']},
      'Comercio Grupo 1': {p: ['Comercio Grupo 1'], c: ['Residencial'], k: ['Institucional', 'Comercio Grupo 2']},
      'Comercio Grupo 2': {p: ['Comercio Grupo 2'], c: ['Comercio Grupo 1'], k: ['Residencial', 'Institucional', 'Industrial Grupo 1']},
      'Comercio Grupo 2 Mixto': {p: ['Comercio Grupo 2 Mixto'], c: ['Comercio Grupo 1'], k: ['Comercio Grupo 3', 'Industrial Grupo 1']},
      'Institucional': {p: ['Institucional'], c: ['Recreacional'], k: ['Comercio Grupo 1']},
      'Recreacional': {p: ['Recreacional'], c: ['Institucional'], k: ['Comercio Grupo 1']}
    },
    prohibido: 'Los usos no contemplados en la tabla como principal, complementario y/o condicionado se consideran prohibidos.'
  },

  // ---------- Tablas 52 a 54: centros poblados ----------
  cp: {
    'Río Negro': {
      titulo: 'Tabla 52 – Ficha normativa CP Rionegro', fuente: 'Tabla 52, pág. 234',
      filas: {
        'Residencial': {p: ['Residencial'], c: ['Comercio Grupo 1', 'Recreacional'], k: ['Comercio Grupo 2', 'Institucional', 'Industria Grupo 1']},
        'Comercio': {p: ['Comercio'], c: ['Comercio Grupo 1 y 2', 'Residencial'], k: ['Comercio Grupo 3', 'Industria Grupo 1, 2 y 3']},
        'Institucional': {p: ['Institucional'], c: ['Recreacional'], k: ['Comercio Grupo 1']},
        'Recreacional': {p: ['Recreacional'], c: ['Institucional'], k: ['Comercio Grupo 1']}
      },
      norma: 'Frente mínimo 6,50 m · Área mínima de lote 104 m² · Densidad 55 viv/ha · Índice de ocupación 0,60 · Índice de construcción 1,65 · Altura máxima 5 pisos · Antejardín 1,00 m'
    },
    'Valencia de la Paz': {
      titulo: 'Tabla 53 – Ficha normativa CP Valencia de la Paz', fuente: 'Tabla 53, pág. 237',
      filas: {
        'Residencial': {p: ['Residencial'], c: ['Comercio Grupo 1', 'Recreacional'], k: ['Comercio Grupo 2', 'Institucional', 'Industria Grupo 1']},
        'Comercio': {p: ['Comercio'], c: ['Comercio Grupo 1 y 2', 'Residencial'], k: ['Comercio Grupo 3', 'Industria Grupo 1, 2 y 3']},
        'Institucional': {p: ['Institucional'], c: ['Recreacional'], k: ['Comercio Grupo 1']},
        'Recreacional': {p: ['Recreacional'], c: ['Institucional'], k: ['Comercio Grupo 1']}
      },
      norma: 'Frente mínimo 6,50 m · Área mínima de lote 104 m² · Densidad 55 viv/ha · Índice de ocupación 0,60 · Índice de construcción 1,65 · Altura máxima 5 pisos · Antejardín 1,00 m'
    },
    'San Luis': {
      titulo: 'Tabla 54 – Ficha normativa CP San Luis', fuente: 'Tabla 54, pág. 240',
      filas: {
        'Residencial': {p: ['Residencial'], c: ['Comercio Grupo 1'], k: ['Comercio Grupo 2', 'Institucional']},
        'Comercio': {p: ['Comercio'], c: ['Residencial', 'Comercio Grupo 1 y 2'], k: ['Comercio Grupo 3', 'Industria Grupo 1 y 2']},
        'Institucional': {p: ['Institucional'], c: ['Comercio Grupo 1'], k: ['Recreacional']},
        'Recreacional': {p: ['Recreacional'], c: ['Institucional'], k: ['Comercio Grupo 1']}
      },
      norma: 'Frente mínimo 7,00 m · Área mínima de lote 112 m² · Densidad 55 viv/ha · Índice de ocupación 0,55 · Índice de construcción 1,60 · Altura máxima 2 pisos · Antejardín 1,00 m'
    },
    nota: 'Para la asignación del uso comercial se delimitan los predios que tienen su fachada hacia el eje de la vía, según el plano de referencia. Los usos no contemplados se consideran prohibidos.'
  },

  // Usos urbanos que no están como fila en las tablas
  especiales: {
    'Protección': {
      fuente: 'Numeral 2.11.1.6, pág. 198',
      texto: 'Usos en torno al potencial hídrico y orográfico: jardines, arborización y protección del paisaje (césped, arbustos, setos, árboles o bosques). No se permite ningún tipo de construcción ni desarrollo urbanístico, a excepción de lo indicado en los estudios de AVR.'
    },
    'Residencial VIS y VIP': {
      fuente: 'Numeral 1.3.8.2.2 y Tabla 25, pág. 101-103',
      texto: 'Suelo de expansión urbana (SE-01: 11,54 ha y SE-02: 2,79 ha). El uso principal es Residencial, incluida vivienda VIS y VIP, con espacio público, vías, equipamientos y comercio según la compatibilidad de usos. También se podrán establecer los usos complementarios y condicionados del uso Residencial (Tabla 47). Se desarrolla mediante plan parcial.',
      comoUso: 'Residencial'
    }
  },

  // ---------- Numeral 3.2.2: actividades de usos del suelo rural ----------
  rural: {
    'Área para la Protección de la Producción Agropecuaria': {
      fuente: 'Numeral 3.2.2.1, pág. 207-208',
      p: 'Sistemas productivos sostenibles y tecnificados: cultivos comerciales misceláneos, bancos de proteínas, policultivos, ganadería con rotación de cultivos y producción agrícola a gran escala, apoyados por distritos de riego, con fines de agroindustria y comercialización.',
      c: 'Actividades para energías renovables no convencionales.',
      k: 'Turismo, recreación, equipamientos de salud, educación, bienestar social, cultura y deporte, infraestructura de comunicaciones y servicios públicos, comercio local.',
      x: 'El documento no establece usos prohibidos para esta área; sugiere programas tecnificados orientados a la sostenibilidad.'
    },
    'Zona de Preservación': {
      fuente: 'Numeral 3.2.2.2, pág. 209',
      p: 'Preservación.',
      c: 'Con autorización de la CAM: esquemas de pago por servicios ecosistémicos, investigación y monitoreo ambiental, educación ambiental.',
      k: 'Con autorización de la CAM: ecoturismo de bajo impacto, infraestructura para investigación y monitoreo, captación de agua y obras hidráulicas para consumo humano y riego, colecta de especímenes de flora para restauración.',
      x: 'Explotación minera y de hidrocarburos, y todo uso no contemplado como permitido para la categoría de DRMI (Decreto 1076 de 2015).'
    },
    'Zona de Restauración': {
      fuente: 'Numeral 3.2.2.3, pág. 209-211',
      p: 'Recuperación de ecosistemas transformados mediante restauración ecológica y recuperación de áreas degradadas.',
      c: 'Con autorización de la CAM: enriquecimiento con especies nativas, restauración y rehabilitación de ecosistemas, pago por servicios ecosistémicos, investigación, educación ambiental, actividades agropecuarias tradicionales a pequeña escala bajo esquema de transicionalidad, ecoturismo comunitario.',
      k: 'Con autorización de la CAM: adecuación de senderos, infraestructura mínima de manejo, ecoturismo de bajo impacto, mejoramiento de casas rurales, captación de agua y obras hidráulicas.',
      x: 'Explotación minera y de hidrocarburos, y todo uso no contemplado como permitido para la categoría de DRMI.'
    },
    'Zona de Preservación y Protección': {
      fuente: 'Numeral 3.2.2.4, pág. 211-212',
      p: 'Restauración hidrológica, conservación de suelos, mantenimiento de coberturas naturales, preservación de hábitats, protección paisajística, bosques protectores, recreación pasiva, investigación científica y educación ambiental.',
      c: 'El documento no define usos complementarios para esta zona.',
      k: 'Captación de aguas y senderos ecológicos, con aprobación expresa de la autoridad ambiental.',
      x: 'Actividades agropecuarias, industriales, agroindustriales, urbanas o suburbanas, loteo y construcción de vivienda, minería, caza, vertimientos, disposición de residuos sólidos y uso forestal que implique deterioro (tala, quema, rocería, extracción maderable).'
    },
    'Zona de Desarrollo Socioeconómico con Restricciones Menores': {
      fuente: 'Numeral 3.2.2.5, pág. 212-213',
      p: 'Actividades productivas sostenibles: agricultura, ganadería, especies menores, acuicultura y pesca artesanal, agroturismo, ecoturismo, investigación, monitoreo y educación ambiental.',
      c: 'Con autorización de la CAM: reconversión productiva, corredores biológicos y restauración, ecoturismo y agroturismo de bajo impacto, investigación, construcción y mejoramiento de vivienda rural, reforestación, plantaciones protectoras-productoras, captación de agua, entre otros.',
      k: 'Con autorización de la CAM: zoocría, especies exóticas con fines de aprovechamiento, vías terciarias, infraestructura productiva con permisos, vivienda rural, pesca artesanal, preparación de suelos, uso doméstico de maderables, energías renovables no convencionales.',
      x: 'Minería (excepto materiales para mantenimiento de vías existentes) e hidrocarburos, y todo uso no contemplado para la categoría de DRMI.'
    },
    'Zona de Desarrollo Socioeconómico con Restricciones Moderadas': {
      fuente: 'Numeral 3.2.2.6, pág. 213-214',
      p: 'Agricultura comercial con tecnologías sostenibles, ganadería con carga moderada, arreglos agroforestales y silvopastoriles, actividades forestales, ecoturismo, agroindustria, minería de bajo impacto e infraestructura con prevención y control ambiental.',
      c: 'Energías renovables no convencionales, turismo y recreación, equipamientos de salud, educación, bienestar social, cultura, deporte y comercio local.',
      k: 'Infraestructura de comunicaciones y servicios públicos, y explotaciones mineras, con aprobación expresa de la autoridad ambiental.',
      x: 'Todos los usos no contemplados como principales, complementarios o restringidos.'
    },
    'Zona de Desarrollo Socioeconómico con Restricciones Mayores': {
      fuente: 'Numeral 3.2.2.7, pág. 214-215',
      p: 'Actividades socioeconómicas tecnificadas y sostenibles: agricultura comercial con tecnologías apropiadas, producción pecuaria articulada a sistemas agroforestales, aprovechamiento forestal agroforestal, ecoturismo y agroindustria.',
      c: 'Energías renovables no convencionales, turismo y recreación, equipamientos de salud, educación, bienestar social, cultura, deporte y comercio local.',
      k: 'Infraestructura de comunicaciones y servicios públicos.',
      x: 'Prácticas agrícolas convencionales, monocultivos, ganadería extensiva con alta carga, minería y cualquier uso no contemplado.'
    },
    'Zona de Desarrollo Socioeconómico con Restricciones Intermedias': {
      fuente: 'Numeral 3.2.2.8, pág. 215-216',
      p: 'Actividades socioeconómicas bajo esquemas de buenas prácticas, con sostenibilidad ambiental, económica y social, sanidad e inocuidad de los productos agrícolas.',
      c: 'Energías renovables no convencionales, turismo y recreación, equipamientos de salud, educación, bienestar social, cultura, deporte y comercio local.',
      k: 'Infraestructura y edificaciones condicionadas a estudios detallados de Amenaza, Vulnerabilidad y Riesgo (AVR).',
      x: 'Prácticas agrícolas convencionales, monocultivos, ganadería extensiva con alta carga, minería y cualquier uso no contemplado.'
    },
    'Suelo Suburbano Agroindustrial': {
      fuente: 'Tabla 49 (Suelo Suburbano No.1), pág. 225',
      p: 'Agroindustria: producción de químicos y plaguicidas, textiles, metales, cemento, cal y yeso, molienda de materiales, embutidos, lácteos, panificación, bebidas, procesamiento cárnico, plásticos, papel y cartón, transformación de minerales, secado de productos agropecuarios.',
      c: 'Venta de insumos y materias primas, comercio mayorista y bodegas, centros de distribución y logística, maquinaria y equipos, combustibles, servicios técnicos industriales, transporte, servicios profesionales, alimentación, servicios financieros y salud ocupacional.',
      k: 'Residencial (vivienda para vigilancia), agropecuarios de bajo impacto, equipamientos de salud, educación, comunal, abastecimiento, religioso, recreación y administrativo.',
      x: 'Los usos no contemplados como principal, complementario o condicionado.',
      nota: 'Se asoció al Suelo Suburbano No.1 por ser el suburbano de agroindustria. Verificar con el plano CR-03.'
    },
    'Corredor Suburbano Comercial': {
      fuente: 'Tabla 48 (Corredor Vial Suburbano No.1), pág. 221-222',
      p: 'Zona 1 (franja de 50 m sobre la vía Íquira – Teruel): comercio de alto impacto (discotecas, bares, juegos y apuestas, alojamiento transitorio, comercio nocturno mixto). Zona 2 (franja de 250 m): residencial campestre, de recreación o turística y en parcelación.',
      c: 'Zona 1: Comercio Grupo 1, comidas rápidas, estaciones de servicio y equipamientos. Zona 2: restaurantes, panaderías, droguerías, minimercados, clubes campestres, ecoturismo, estaciones de servicio y hoteles.',
      k: 'Zona 1: Industria Grupo 1 y 2. Zona 2: equipamientos, agropecuarios de bajo impacto e industria artesanal (Grupo 1).',
      x: 'Los usos no contemplados como principal, complementario o condicionado.'
    },
    'Zona de Ordenamiento Territorial Indígena': {
      fuente: 'Numeral 1.3.8.5, pág. 128',
      texto: 'Territorio del Resguardo Indígena Nasa Páez Huila Río Negro (veredas Zaragoza, Copa, Los Andes, El Carmen, El Cóndor, El Pato y Quebradón). Es propiedad colectiva, inalienable, imprescriptible e inembargable, con organización autónoma. El numeral 3.2.2 no le asigna régimen de usos.'
    },
    'Centro Poblado': {fuente: 'Tablas 52 a 54', texto: 'Ver el régimen de usos del centro poblado en el módulo Urbano.'},
    'Suelo Urbano': {fuente: 'Tabla 47', texto: 'Ver el régimen de usos de la cabecera municipal en el módulo Urbano.'}
  },

  // ---------- Suelo suburbano (Tablas 48 a 51) ----------
  suburbano: [
    {nombre: 'Corredor Vial Suburbano No.1 – Zona 1', fuente: 'Tabla 48, pág. 222',
      p: 'Comercio de alto impacto: discotecas, tabernas, cantinas, bares; galleras, bingos, casas de apuestas; amoblados, moteles; comercio nocturno mixto.',
      c: 'Comercio Grupo 1, comidas rápidas, estaciones de servicio, equipamientos de salud, educación, comunitario, abastecimiento, religioso, recreación y administrativo.',
      k: 'Industria artesanal (Grupo 1) e Industria Grupo 2.'},
    {nombre: 'Corredor Vial Suburbano No.1 – Zona 2', fuente: 'Tabla 48, pág. 222',
      p: 'Residencial: vivienda campesina, de recreación o descanso, con fines turísticos o en parcelación/condominio.',
      c: 'Restaurantes, comidas rápidas, panaderías, droguerías, miscelánea, minimercados, clubes campestres y turismo de baja ocupación, estaciones de servicio, hoteles.',
      k: 'Equipamientos, agropecuarios de bajo impacto, industria artesanal (Grupo 1).'},
    {nombre: 'Suelo Suburbano No.1', fuente: 'Tabla 49, pág. 225',
      p: 'Agroindustria (ver detalle en la zona Suelo Suburbano Agroindustrial).',
      c: 'Comercio mayorista, logística, servicios técnicos e industriales, alimentación y servicios de apoyo a empresas.',
      k: 'Vivienda para vigilancia, agropecuarios de bajo impacto, equipamientos.'},
    {nombre: 'Suelo Suburbano No.2 – Zona 1', fuente: 'Tabla 50, pág. 228',
      p: 'Servicios de alto impacto referidos a la prostitución y actividades afines.',
      c: 'Entretenimiento nocturno, juegos y apuestas, alojamiento transitorio, comercio nocturno mixto.',
      k: 'Restaurantes, cafeterías, heladerías y comidas rápidas.'},
    {nombre: 'Suelo Suburbano No.2 – Zona 2', fuente: 'Tabla 50, pág. 229',
      p: 'Residencial: vivienda campesina, de recreación o descanso, turística o en parcelación/condominio.',
      c: 'Restaurantes, comidas rápidas, panaderías, droguerías, miscelánea, minimercados, clubes campestres y ecoturismo, estaciones de servicio, hoteles.',
      k: 'Equipamientos, agropecuarios de bajo impacto, industria artesanal (Grupo 1).'},
    {nombre: 'Suelo Suburbano No.3 y No.4', fuente: 'Tabla 51, pág. 231',
      p: 'Residencial: vivienda campesina, de recreación o descanso, turística o en parcelación/condominio.',
      c: 'Restaurantes, comidas rápidas, panaderías, droguerías, miscelánea, minimercados, clubes campestres y ecoturismo, estaciones de servicio, hoteles.',
      k: 'Equipamientos, agropecuarios de bajo impacto, industria artesanal (Grupo 1).'}
  ],

  // ---------- Tipología de usos (numeral 2.11.1) ----------
  tipologia: [
    {nombre: 'Comercio Grupo 1 – Cobertura local', fuente: 'pág. 192-193', texto: 'Pequeña escala y bajo impacto: tiendas de barrio, panaderías, droguerías, papelerías, misceláneas, fruterías, minimercados, peluquerías, consultorios de baja complejidad, reparaciones menores, cafeterías sin venta de licor.'},
    {nombre: 'Comercio Grupo 2 – Cobertura zonal', fuente: 'pág. 193-195', texto: 'Impacto moderado, con control de horarios, sonido y parqueo: almacenes, supermercados, ferreterías, insumos agropecuarios, restaurantes, hoteles, entidades financieras, parqueaderos, estancos sin consumo, lavaderos de vehículos, estaciones de servicio, billares y salones de juego, entre otros.'},
    {nombre: 'Comercio Grupo 3 – Alto impacto', fuente: 'pág. 195-196', texto: 'Discotecas, tabernas, bares, galleras, casas de apuestas, moteles y comercio nocturno mixto. Ruido máximo 70 dB de día y 50 dB de noche; a más de 50 m de establecimientos educativos, religiosos o culturales.'},
    {nombre: 'Institucional', fuente: 'pág. 196-197', texto: 'Asistencial, salud, educación, cultural, culto, abastecimiento, seguridad y administrativo.'},
    {nombre: 'Industrial Grupo 1', fuente: 'pág. 197', texto: 'Bajo impacto, compatible con vivienda: fabricación a menor escala de alimentos, modistería, cerámica, joyería, marquetería y manufacturas de bajo impacto.'},
    {nombre: 'Industrial Grupo 2', fuente: 'pág. 197', texto: 'Requiere edificación especializada y mitigación: bodegaje, ornamentación, ebanistería, talleres de mecánica, fabricación a mayor escala.'},
    {nombre: 'Industrial Grupo 3', fuente: 'pág. 197-198', texto: 'No ubicable en zonas residenciales: químicos, textiles, fundición, cemento, trituración, sacrificio animal, plásticos, papel, plantas de minerales y de secado.'},
    {nombre: 'Recreacional', fuente: 'pág. 198', texto: 'Parques de barrio, canchas múltiples, parques infantiles, polideportivos, coliseos, campos de fútbol.'},
    {nombre: 'Protección', fuente: 'pág. 198', texto: 'Jardines, arborización y protección del paisaje. No se permite construcción.'}
  ]
};
