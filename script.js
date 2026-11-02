var menu = document.getElementById("menu");
var botonMenu = document.getElementById("boton-menu");
var botonArriba = document.getElementById("arriba");
var enlacesMenu = menu.querySelectorAll("a");

function abrirMenu() {
  menu.classList.add("abierto");
  botonMenu.setAttribute("aria-expanded", "true");
}

function cerrarMenu() {
  menu.classList.remove("abierto");
  botonMenu.setAttribute("aria-expanded", "false");
}

botonMenu.addEventListener("click", function () {
  if (menu.classList.contains("abierto")) {
    cerrarMenu();
  } else {
    abrirMenu();
  }
});

enlacesMenu.forEach(function (enlace) {
  enlace.addEventListener("click", cerrarMenu);
});

document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape" && menu.classList.contains("abierto")) {
    cerrarMenu();
    botonMenu.focus();
  }
});

function actualizarBotonArriba() {
  if (window.scrollY > 500) {
    botonArriba.classList.add("visible");
  } else {
    botonArriba.classList.remove("visible");
  }
}

window.addEventListener("scroll", actualizarBotonArriba, { passive: true });
actualizarBotonArriba();

function marcarSeccionActiva() {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  var secciones = document.querySelectorAll("main section[id]");

  var observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          enlacesMenu.forEach(function (enlace) {
            var coincide = enlace.getAttribute("href") === "#" + entrada.target.id;
            enlace.classList.toggle("activo", coincide);
            if (coincide) {
              enlace.setAttribute("aria-current", "true");
            } else {
              enlace.removeAttribute("aria-current");
            }
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  secciones.forEach(function (seccion) {
    observador.observe(seccion);
  });
}

marcarSeccionActiva();

document.getElementById("anio").textContent = new Date().getFullYear();

/* ---------- Idioma: español (por defecto, escrito en el HTML) e inglés ---------- */

var ingles = {
  saltar: "Skip to content",
  aria_marca: "Valentina Salama, go to top",
  aria_nav: "Main",
  aria_idioma: "Language",
  aria_arriba: "Back to top",
  aria_tec: "Technologies",
  menu_boton: "Menu",
  nueva_pestana: " (opens in a new tab)",

  nav_sobre: "About me",
  nav_proyectos: "Projects",
  nav_aptitudes: "Skills",
  nav_formacion: "Education",
  nav_contacto: "Contact",

  hero_rol: "Informatics Engineering and web development",
  hero_ver: "View projects",
  hero_escribime: "Get in touch",
  res_estudio_t: "Studies",
  res_estudio_d: "Informatics Engineering at UADE, with 50% of the degree completed.",
  res_trabajo_t: "Work",
  res_trabajo_d: "Website design and development as a freelancer since 2025.",
  res_tec_t: "Technologies",
  res_tec_d: "Java, Python, JavaScript, React, Node.js, MongoDB, among others.",

  sobre_1: "I study Informatics Engineering at the Universidad Argentina de la Empresa and I have completed half of the degree. Before that, I completed the University Diploma in Programming at the Universidad Nacional del Comahue.",
  sobre_2: "Since 2025 I have worked as a freelancer on websites: I take care of interface and experience design, analysis and full development.",
  sobre_3: "At university I also develop systems, with object-oriented programming, design patterns and SQL and NoSQL databases. I have built everything from Java desktop applications to projects with separate backend and frontend, using Java, Python and JavaScript.",
  sobre_4: "I am methodical and organized, and I adapt well to change. I work best in a team when the shared goal is clear and tasks are well divided, without overlap. I review what I deliver in detail and I like to understand how each part works before considering it finished.",

  fokuss_meta: "Mobile app<br>Productivity",
  fokuss_desc: "A study app designed to help students focus and beat online distractions. It brings together different study methods in one place, such as flashcards, mind maps and Pomodoro, among others, and adds a mascot, Foky, who accompanies the experience along with built-in, distraction-free music. It won second place at UADE StartUp.",
  fokuss_link: "Visit the Fokuss website",

  free_meta: "2025 to present<br>Freelance",
  free_titulo: "Website development",
  free_desc: "End-to-end work on every site: interface and user experience design, analysis and development.",

  pasa_meta: "Website<br>Games",
  pasa_desc: "A website of logic and word games with endless play: a new board is generated every time. It includes Sudoku, self-defined crosswords, 2048, maze, hangman, Wordle in Spanish, Mastermind, Tower of Hanoi, Solitaire and many more, each with a daily challenge. You can sign in with Google to save your games and compete with other people, and the site offers several visual designs to choose from.",
  pasa_link: "Visit the Pasatiempos website",

  chess_meta: "Web game<br>Full stack",
  chess_desc: "Chess set in the Animal Crossing universe, with light blue and pink pieces and an interface designed to feel friendly. The backend is written in Java and uses several object-oriented design patterns, so each type of piece has its own logic. The frontend, built in React, displays the board and communicates with the backend on every move.",
  tag_strategy: "Strategy pattern",

  gest_meta: "Desktop application<br>Java",
  gest_titulo: "Activity and reservation management",
  gest_desc: "A Java application to manage activities, reservations, users, members and employees. It has Swing forms and database access, and its model uses inheritance and abstract classes to represent the different types of users. It is designed with the SOLID and GRASP principles, separating the responsibilities of each class.",
  tag_poo: "OOP",

  medi_meta: "Databases<br>Python and React",
  medi_desc: "A system for a health insurance provider that uses four databases, each for what it solves best. MongoDB stores the 1,000 members with their plan, address and medical conditions. Neo4j models the graph of members, family groups, doctors, clinics and medications. Redis handles sessions, caching and temporary appointment holds, plus the ranking of the most requested doctors. Cassandra stores the query tables behind the dashboards for spending, medications, specialties and clinics. The backend is a Python API built with FastAPI and the frontend is built in React: from a single panel you can search, create, update or delete a record, and the operation runs on every database, showing the result and the query used, along with a graph view of the relationships.",

  apt_lenguajes: "Programming languages",
  apt_desarrollo: "Development",
  tag_web: "Web development",
  tag_front: "Front-end development",
  tag_apis: "API development",
  apt_diseno: "Design",
  apt_herr: "Tools and methodologies",
  tag_agiles: "Agile methodologies",
  apt_bd: "Databases",
  apt_bd_d: "Administration and management of SQL and NoSQL databases.",
  apt_soft_d: "Advanced knowledge of object-oriented programming, and of the design and planning of system patterns and architectures.",
  apt_sistemas: "Systems",
  apt_sistemas_d: "Red Hat System Administration I course (RH124-RHA).",
  apt_sap_d: "SAP technical administration course, covering SAP Basis, ABAP programming and S/4HANA.",
  apt_habilidades: "Soft skills",
  hab_1: "Methodical and organized.",
  hab_2: "Adaptability to change.",
  hab_3: "Teamwork: I stand out in groups to reach shared goals, with well-divided tasks.",
  hab_4: "Self-directed learning of new tools and technologies.",
  hab_5: "Attention to detail in what I deliver.",
  apt_idiomas: "Languages",
  apt_ingles: "Advanced English.",

  for_1_fecha: "March 2024<br>December 2028",
  for_1_titulo: "Informatics Engineering",
  for_1_d: "In progress, with 50% of the degree completed.",
  for_2_fecha: "March 2023<br>November 2023",
  for_2_titulo: "University Diploma in Programming",
  for_3_fecha: "March 2019<br>December 2023",
  for_3_titulo: "Secondary school diploma in Human and Natural Sciences",
  for_3_d: "Specialization in research methodology.",

  con_intro: "If you would like to write to me about a project, here is my contact information.",
  con_correo: "Email",
  con_ubicacion: "Location",
  con_ubicacion_d: "Buenos Aires City and surroundings"
};

var metaIngles = {
  descripcion: "Portfolio of Valentina Salama, Informatics Engineering student at UADE and freelance web developer.",
  ogDescripcion: "Informatics Engineering student and freelance web developer."
};

var originales = {};
var originalesAria = {};
var metaOriginal = {};
var elementosTexto = document.querySelectorAll("[data-i18n]");
var elementosAria = document.querySelectorAll("[data-i18n-aria]");
var botonesIdioma = document.querySelectorAll(".idiomas button");
var metaDescripcion = document.querySelector('meta[name="description"]');
var metaOgDescripcion = document.querySelector('meta[property="og:description"]');
var metaOgLocale = document.querySelector('meta[property="og:locale"]');

elementosTexto.forEach(function (elemento) {
  originales[elemento.getAttribute("data-i18n")] = elemento.innerHTML;
});

elementosAria.forEach(function (elemento) {
  originalesAria[elemento.getAttribute("data-i18n-aria")] = elemento.getAttribute("aria-label");
});

metaOriginal.descripcion = metaDescripcion.getAttribute("content");
metaOriginal.ogDescripcion = metaOgDescripcion.getAttribute("content");

function aplicarIdioma(idioma) {
  var esIngles = idioma === "en";

  elementosTexto.forEach(function (elemento) {
    var clave = elemento.getAttribute("data-i18n");
    elemento.innerHTML = esIngles && ingles[clave] !== undefined ? ingles[clave] : originales[clave];
  });

  elementosAria.forEach(function (elemento) {
    var clave = elemento.getAttribute("data-i18n-aria");
    elemento.setAttribute(
      "aria-label",
      esIngles && ingles[clave] !== undefined ? ingles[clave] : originalesAria[clave]
    );
  });

  document.documentElement.lang = esIngles ? "en" : "es-AR";
  metaDescripcion.setAttribute("content", esIngles ? metaIngles.descripcion : metaOriginal.descripcion);
  metaOgDescripcion.setAttribute("content", esIngles ? metaIngles.ogDescripcion : metaOriginal.ogDescripcion);
  metaOgLocale.setAttribute("content", esIngles ? "en_US" : "es_AR");

  botonesIdioma.forEach(function (boton) {
    boton.setAttribute("aria-pressed", boton.getAttribute("data-lang") === idioma ? "true" : "false");
  });
}

function leerIdiomaGuardado() {
  try {
    return localStorage.getItem("idioma");
  } catch (error) {
    return null;
  }
}

function guardarIdioma(idioma) {
  try {
    localStorage.setItem("idioma", idioma);
  } catch (error) {
    return;
  }
}

function idiomaInicial() {
  var enAddress = /[?&]lang=(en|es)/.exec(window.location.search);
  if (enAddress) {
    return enAddress[1];
  }
  var guardado = leerIdiomaGuardado();
  if (guardado === "en" || guardado === "es") {
    return guardado;
  }
  var delNavegador = (navigator.language || "es").toLowerCase();
  return delNavegador.indexOf("en") === 0 ? "en" : "es";
}

botonesIdioma.forEach(function (boton) {
  boton.addEventListener("click", function () {
    var idioma = boton.getAttribute("data-lang");
    aplicarIdioma(idioma);
    guardarIdioma(idioma);
  });
});

aplicarIdioma(idiomaInicial());
