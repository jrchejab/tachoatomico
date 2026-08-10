// ===== CONTENIDO CENTRALIZADO =====
// Editar solo aquí — todas las páginas se actualizan automáticamente

var CONTENIDO = {

  // ---- texto transversal por grupo de obras ----
  grupos_texto: {
    "naturAI": "La réplica de la naturaleza nos ha motivado por siglos, y se han creado imágenes y objetos a través del arte, la ingeniería y la ciencia que buscan ser tan perfectos como la naturaleza en sí – con la capacidad futura de la AI es imaginable que estas réplicas lleguen a ser casi imperceptibles – mis objetos juegan con esa incertidumbre mezclando naturaleza, dibujos e imágenes generadas por la AI.",
    "KIEP:Budismo Cuántico": "KIEP (Budismo Cuántico) son grupos de 4 piezas inspiradas en principios budistas; principios que se conectan con ideas universales de diferentes culturas y religiones, y que se entrelazan a su vez con el misterioso mundo atómico."
  },

  // ---- bio ----
  bio: [
    "Hacia el 2006 empecé a relacionar mis habilidades profesionales y técnicas con el arte. Primero a través del diseño, con un proyecto artístico/comercial llamado poordesigner.com, donde mezclando el diseño gráfico y las herramientas web desarrollamos desde la funcionalidad de una tienda online hasta aplicaciones interactivas usadas como mercadeo de la empresa. También se hicieron colaboraciones con otros artistas dando a sus creaciones interacciones electrónicas. Aquí también me vinculé con la fotografía analógica y experimental, gestionando la comunidad de LOMOGRAPHY para Colombia. Entre el 2018 y el 2020 hice parte de un colectivo de arte promovido por IDARTES y Plataforma Bogotá llamado el Club de Electrónica, donde exploramos la relación entre el arte, la ciencia y la tecnología. Desde esa fecha he estado trabajando de manera personal en el desarrollo de mis ideas.",
    "En el 2024 fui seleccionado para hacer parte del programa Artbo Tutor, y aquí creé mi identidad de artista como TACHOATOMICO."
  ],

  // ---- perfil (index) ----
  perfil: "Ingeniero Electrónico, con experiencia en la implementación, integración y programación de sistemas, especialmente en el desarrollo de hardware, software y comunicaciones. He desarrollado habilidades en la gestión de empresas y en el desarrollo de proyectos artísticos y culturales. Encuentro un gran valor en la responsabilidad, constancia y compromiso aplicados al desarrollo de ideas, la creatividad, la colaboración, al aprendizaje y al compartir de conocimientos.",

  // ---- trayectoria (académico, arte, laboral) ----
  academico: [
    { year: "2001", role: "Ingeniero Electrónico", place: "Pontificia Universidad Javeriana" }
  ],
  arte_trayectoria: [
    { year: "2024", role: "Artbo Tutor", desc: "Seleccionado para la convocatoria 2024" },
    { year: "2018–2020", role: "Club de Electrónica (IDARTES)", desc: "Miembro activo del Club" },
    { year: "2006–hoy", role: "Poor S.A.S", desc: "Desarrollo de aplicaciones web enfocadas al diseño. Colaboración en el desarrollo de productos de diseño. Distribución y promoción Lomography — Fotografía Analógica y Experimental." }
  ],
  laboral: [
    { year: "2006–hoy", role: "Socio Fundador — Gerente", place: "Poor SAS — Tienda de Diseño" },
    { year: "2004–hoy", role: "Socio — Director Administrativo", place: "Colvapor SAS — Comercio Industrial" },
    { year: "2005–2006", role: "Socio Fundador — Director de Tecnología", place: "XControl Sistemas & Soluciones — Automatización y Control Industrial" }
  ],

  // ---- portafolio ----
  proyectos: [
    { title: "naturAl", meta: "proyecto en desarrollo", text: "La réplica de la naturaleza nos ha motivado por siglos, y se han creado imágenes y objetos a través del arte, la ingeniería y la ciencia que buscan ser tan perfectos como la naturaleza en sí — con la capacidad futura de la IA es imaginable que estas réplicas lleguen a ser casi imperceptibles. Mis objetos juegan con esa incertidumbre mezclando naturaleza, dibujos e imágenes generadas por la IA." },
    { title: "mi imagen descontenida", meta: "propuesta Artbo Tutor 2024 — Spyder (Python 3.11)", text: "Experimento de reflexión sobre la imagen, su existencia y su relación con la física de la luz. Esperamos que una imagen expuesta siempre sea visible, pero ¿qué sucede si la imagen solo se muestra al momento en que el espectador cierra sus ojos?" },
    { title: "pixel entangle", meta: "proyecto en desarrollo", text: "Una aproximación al concepto de enganche cuántico de partículas a través de LEDs, servidores web, WiFi y NFTs." },
    { title: "vigilancia intrínseca / campbell", meta: "Club de Electrónica 2019", text: "Para ese año el club trabajó con la temática vigilancia e interruptores. De aquí nuestro grupo identificó un semáforo como un objeto de comunicación, pero a su vez de vigilancia intrínseca capaz de controlar tiempos y movimientos. Nuestro proyecto mezcla dos ejercicios técnicos trabajados en el laboratorio. El primero relacionado con un semáforo móvil (vigilante) activado para seguimiento por la detección de presencia y movimiento en un espacio. El segundo es la activación de un interruptor electrónico que enciende un abrelatas eléctrico sin cuchilla y que hace girar una lata alusiva a las pinturas de 32 latas Campbell's de sopa expuestas por Andy Warhol." }
  ],

  // ---- exposiciones ----
  exposiciones: [
    { title: "SYNESIS: artefactos de palabra", meta: "Planetario de Bogotá · 21–25 de noviembre 2024", text: "Muestra de resultados del laboratorio experimental <strong>SONICROMIA</strong> (Plataforma Bogotá / IDARTES). Durante el laboratorio se hace una exploración de la relación entre el sonido, la luz y el agua a través de la cimática. Se propone una reflexión sobre el lenguaje del agua, donde la interacción de las letras de los teclados generan vibraciones que crean patrones de ondas que contrastan con la luz generando elementos visuales y sonoros entrelazados." },
    { title: "Producto — Mr. Roboto", meta: "Edición 1.0", text: "Memoria USB Mr.Roboto, producto desarrollado en colaboración con el artista @toyroboto." }
  ],

  // ---- obras de arte (página arte) ----
  obras: [
    {
      titulo: "opuestos/distorsión",
      complemento_titulo: "serie colombia",
      exposicion: "Colombia - Umbral Galería",
      año: "2026",
      descripcion: "Una palabra – Colombia – hecha símbolo para mostrar un país (mundo) que se distorsiona en los extremos ideológicos y políticos, lugares que promueven las redes y los medios de comunicación contrariando el diálogo, el respeto, el entendimiento y la compasión. Ideas y partidos que como polos magnéticos opuestos se atraen y confluyen en un punto donde parecen ser lo mismo.",
      imgs: ["opuestos_1_final-1024x1024.jpg", "opuestos_3-1024x1024.jpeg"],
      videos: ["videos/opuestos 001.mp4"],
      links: [{ url: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODc5Mjg0Njk4NDc4NDk3?story_media_id=3833338620673619576_62323688973&igsh=Z2Z1aXI2b3NjdTB1", label: "Umbral Galeria" }]
    },
    {
      titulo: "intercambios",
      complemento_titulo: "serie colombia",
      exposicion: "Colombia - Umbral Galería",
      año: "2026",
      descripcion: "Colombia (Antonio Caro, 1977) es el punto de partida de esta obra. Un país visto desde su bandera, símbolo que trasciende su significado libertario para invitarnos a reflexionar sobre el consumismo y colonialismo industrial en un país (mundo) donde se sigue intercambiando sangre por riqueza, riqueza por naturaleza. Una dinámica cromática donde el rojo y el amarillo desaparecen lentamente de la bandera llenando espacios que simbolizan esos intercambios, una especie de transferencia de energía balanceada que mantiene un desbalance social permanente.",
      imgs: ["contrarios_1_final-1024x1024.jpg", "contrarios_2_final-1024x1024.jpg"],
      videos: ["videos/intercambios 001.mp4"],
      links: [{ url: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODc5Mjg0Njk4NDc4NDk3?story_media_id=3833338620673619576_62323688973&igsh=Z2Z1aXI2b3NjdTB1", label: "Umbral Galeria" }]
    },
    {
      titulo: "KIEP 1.0",
      complemento_titulo: "KIEP:Budismo Cuántico",
      exposicion: "",
      año: "2025",
      descripcion: "",
      partes: [
        { titulo: "Karma", imagen: "kiep_01_karma-nobg.png", video: "videos/kiep 1.0 karma 002.mp4", texto: "Esa causa y efecto de cada acción que se va entretejiendo en el tiempo y el espacio y que nos encuentra a cada momento cruzando situaciones grabadas en la memoria de nuestro histórico colectivo. Es ese comportamiento atómico de superposiciones y entrelazamientos donde un evento en una partícula inevitablemente influye en el estado de otra, sin importar el tiempo o la distancia." },
        { titulo: "Impermanencia", imagen: "kiep_01_imp_nobg.png", video: "videos/kiep 1.0 imp 001.mp4", texto: "Donde todo es transitorio, nada es estático. No se puede esperar una constante en un mundo en movimiento. Así como toda partícula subatómica, donde su estado y ubicación no son mas que probabilidades, así es la vida misma." },
        { titulo: "Ego", imagen: "kiep_01_ego_nobg.png", video: "videos/kiep 1.0 ego 001.mp4", texto: "Esa ilusión del yo, una imagen creada por nuestros recuerdos, vivencias y experiencias acumuladas que nos hacen creer que somos un ser único, sólido y permanente. Una imagen que pretende, sin lograrlo, separarnos del todo. Somos una estructura de partículas atómicas que se encuentran para crear ese ser que percibimos y el entorno en el que convivimos." },
        { titulo: "Presente", imagen: "kiep_01_pre_nobg.png", video: "videos/kiep 1.0 pres 001.mp4", texto: "Es el único momento donde se pude percibir la experiencia humana. La atención plena (mindfulness) implica observar las sensaciones, pensamientos y emociones sin apegarse a ellos, reconociendo su naturaleza transitoria. Dejar el pasado y no divagar en el futuro. La aceptación de nuestra realidad es estar presentes. El presente es esa partícula atómica, que solo permite determinar su estado mediante la observación, mirándose a sí misma." }
      ],
      imgs: ["KIEP-1024x1024.png"],
      videos: ["videos/kiep 1.0 pres 001.mp4", "videos/kiep 1.0 karma 002.mp4", "videos/kiep 1.0 imp 001.mp4", "videos/kiep 1.0 ego 001.mp4"],
      links: []
    },
    {
      titulo: "KIEP 2.0",
      complemento_titulo: "KIEP:Budismo Cuántico",
      exposicion: "",
      año: "2025",
      descripcion: "",
      partes: [
        { titulo: "Karma", imagen: "kiep_02_karma-nobg.png", video: "videos/kiep 1.0 karma 002.mp4", texto: "Esa causa y efecto de cada acción que se va entretejiendo en el tiempo y el espacio y que nos encuentra a cada momento cruzando situaciones grabadas en la memoria de nuestro histórico colectivo. Es ese comportamiento atómico de superposiciones y entrelazamientos donde un evento en una partícula inevitablemente influye en el estado de otra, sin importar el tiempo o la distancia." },
        { titulo: "Impermanencia", imagen: "kiep_02_imp_nobg.png", video: "videos/kiep 1.0 imp 001.mp4", texto: "Donde todo es transitorio, nada es estático. No se puede esperar una constante en un mundo en movimiento. Así como toda partícula subatómica, donde su estado y ubicación no son mas que probabilidades, así es la vida misma." },
        { titulo: "Ego", imagen: "kiep_02_ego_nobg.png", video: "videos/kiep 1.0 ego 001.mp4", texto: "Esa ilusión del yo, una imagen creada por nuestros recuerdos, vivencias y experiencias acumuladas que nos hacen creer que somos un ser único, sólido y permanente. Una imagen que pretende, sin lograrlo, separarnos del todo. Somos una estructura de partículas atómicas que se encuentran para crear ese ser que percibimos y el entorno en el que convivimos." },
        { titulo: "Presente", imagen: "kiep_02_pre_nobg.png", video: "videos/kiep 1.0 pres 001.mp4", texto: "Es el único momento donde se pude percibir la experiencia humana. La atención plena (mindfulness) implica observar las sensaciones, pensamientos y emociones sin apegarse a ellos, reconociendo su naturaleza transitoria. Dejar el pasado y no divagar en el futuro. La aceptación de nuestra realidad es estar presentes. El presente es esa partícula atómica, que solo permite determinar su estado mediante la observación, mirándose a sí misma." }
      ],
      imgs: ["kiep 2.0.jpeg"],
      videos: ["videos/kiep 1.0 pres 001.mp4", "videos/kiep 1.0 karma 002.mp4", "videos/kiep 1.0 imp 001.mp4", "videos/kiep 1.0 ego 001.mp4"],
      links: []
    },
    {
      titulo: "naturAI 4.0",
      complemento_titulo: "naturAI",
      exposicion: "",
      año: "2026",
      descripcion: "naturAI 4.0 imagina ese momento más allá de la eventual singularidad de la IA, donde además de reconocerse a sí misma, evoluciona para reconocer a otros seres alrededor suyo y preguntarse: ¿quién ha creado a este ser?, ¿lo he creado yo?, ¿lo han creado los humanos?, ¿fue creado por alguien o algo más?",
      imgs: ["naturAI_4.0_01-nobg.png", "naturAI 4.0 02.jpeg"],
      videos: ["videos/naturAI 4.0 001.mp4"],
      links: []
    },
    {
      titulo: "naturAI 3.0",
      complemento_titulo: "naturAI",
      exposicion: "",
      año: "2025",
      descripcion: "naturAI 3.0 simboliza un intercambio de señales, datos e información que forman lo que vemos, lo que definimos, lo que creamos y lo que será creado por la futura AI.",
      imgs: ["NaturAI-1.0-foto_02.jpeg", "naturAI 3.0 close.jpeg"],
      videos: ["videos/naturAI 3.0 001.mp4"],
      links: []
    },
    {
      titulo: "the gift 1.0",
      complemento_titulo: "obras en proceso",
      exposicion: "",
      año: "2025",
      descripcion: "La vida es un regalo, un regalo impermanente y siempre cambiante, lleno de pequeños bloques a partir de los cuales un individuo se construye a sí mismo. La familia, ya sea de sangre o social, forma parte de ese regalo: pequeños bloques que sientan las bases sobre las que ese individuo construye, de principio a fin. Esos pequeños bloques albergan emociones, ideas, principios y leyes que pueden limitar o ampliar, facilitar u obstaculizar esa autoconstrucción del individuo.",
      imgs: ["thegift_02-1024x1024.jpg", "thegift_01-1024x1024.jpg"],
      videos: [],
      links: []
    },
    {
      titulo: "naturAI 2.0",
      complemento_titulo: "naturAI",
      exposicion: "",
      año: "2025",
      descripcion: "naturAI 2.0 es el híbrido entre lo que conocemos como naturaleza, sus réplicas humanas y las futuras representaciones de la misma creadas por la AI.",
      imgs: ["naturAI_2.0_01-nobg.png"],
      videos: ["videos/naturAI 2.0 001.mp4"],
      links: []
    },
    {
      titulo: "naturAI 1.0",
      complemento_titulo: "naturAI",
      exposicion: "",
      año: "2025",
      descripcion: "naturAI 1.0 es la incertidumbre que nos espera al momento de ver algo considerado naturaleza y no tener certeza si su creación ha sido un proceso natural, obra del hombre o caprichos de la AI. Posiblemente sea una futura simbiosis donde todo a la final es lo mismo.",
      imgs: ["naturAI-1.0_2.png"],
      videos: ["videos/naturAI 1.0 001.mp4"],
      links: []
    }
  ],

  // ---- exposiciones (página expo) ----
  expo_list: [
    {
      titulo: "Colombia",
      complemento_titulo: "Homenaje a COLOMBIA COCA-COLA (1976) Antonio Caro",
      lugar: "Umbral Galería",
      año: "Marzo a Mayo 2026",
      descripcion: "En el marco de la conmemoración de los cinco años del fallecimiento del artista colombiano Antonio Caro, y al cumplirse cincuenta años de la creación de su emblemática pieza COLOMBIA COCA-COLA (1976), Umbral Galería presenta una exposición colectiva que reúne a 42 artistas colombianos cuya obra, en distintos momentos de la historia reciente del arte nacional, ha dialogado directamente con aquel gesto fundacional.\n\nBajo la curaduría de Christian Padilla, la exposición propone una lectura coral que permite comprender la dimensión estructural del legado de Caro dentro del arte colombiano: no como cita aislada, sino como plataforma crítica que ha permeado generaciones.",
      imgs: ["expo_colombia_01.JPG", "expo_colombia_02.JPG", "expo_colombia_03.jpg", "expo_colombia_04.jpeg"],
      videos: [],
      links: [
        { url: "https://www.youtube.com/watch?v=fQ6yQc2IcP4", label: "Video de la Exposición" },
        { url: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODc5Mjg0Njk4NDc4NDk3?story_media_id=3833338620673619576_62323688973&igsh=Z2Z1aXI2b3NjdTB1", label: "Umbral Galería" },
        { url: "https://instagram.com/cristianpadillape", label: "@cristianpadillape" }
      ]
    },
    {
      titulo: "SYNESIS: artefactos de palabra",
      complemento_titulo: "Laboratorio SONICROMÍA",
      lugar: "Planetario Bogotá - Plataforma Bogotá (IDARTES)",
      año: "Nov/22/2024",
      descripcion: "Durante el laboratorio se hace una exploración de la relación entre el sonido, la luz y el agua a través de la cimática. Se propone una reflexión sobre el lenguaje del agua, donde la interacción de las letras de los teclados generan vibraciones que crean patrones de ondas que contrastan con la luz generando elementos visuales y sonoros entrelazados.",
      imgs: ["synesis1.png", "synesis2-1.png", "synesis3.png", "synesis4.png"],
      videos: [],
      links: [{ url: "https://plataformabogota.gov.co/noticias/synesis-artefactos-de-palabra", label: "CLICK AQUÍ — conocer más sobre la exposición" }]
    },
    {
      titulo: "vigilancia intrínseca / campbell",
      complemento_titulo: "Club de Electrónica - Cierre de Ciclo",
      lugar: "Plataforma Bogotá La Candelaria (IDARTES)",
      año: "Nov/2019",
      descripcion: "Para ese año el club trabajó con la temática vigilancia e interruptores. De aquí nuestro grupo identificó un semáforo como un objeto de comunicación, pero a su vez de vigilancia intrínseca capaz de controlar tiempos y movimientos.\n\nNuestro proyecto mezcla dos ejercicios técnicos trabajados en el laboratorio. El primero relacionado con un semáforo móvil (vigilante) activado para seguimiento por la detección de presencia y movimiento en un espacio. El segundo es la activación de un interruptor electrónico que enciende un abrelatas eléctrico sin cuchilla y que hace girar una lata alusiva a las pinturas de 32 latas Campbell's de sopa expuestas por Andy Warhol.",
      imgs: ["expo_ce_2019_01.png", "expo_ce_2019_02.png", "expo_ce_2019_03.png"],
      videos: [],
      links: []
    }
  ]

};
