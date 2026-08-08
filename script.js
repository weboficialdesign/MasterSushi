/* =====================================
   MASTER SUSHI
   SCRIPT PRINCIPAL
===================================== */


/* =========================
   MENÚ MÓVIL
========================= */

const botonMenu = document.getElementById("menuMovil");
const navegacion = document.getElementById("nav");

botonMenu.addEventListener("click", function () {

    navegacion.classList.toggle("abierto");

});


/* =========================
   CERRAR MENÚ AL PRESIONAR LINK
========================= */

const enlacesMenu = navegacion.querySelectorAll("a");

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        navegacion.classList.remove("abierto");

    });

});


/* =========================
   EFECTO HEADER AL HACER SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,0.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================
   ANIMACIÓN DE APARICIÓN
========================= */

const elementosAnimados = document.querySelectorAll(
    ".producto-card, .beneficio, .dato-card"
);

const observador = new IntersectionObserver(

    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add(
                    "visible"
                );

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementosAnimados.forEach(function (elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform =
        "translateY(25px)";

    elemento.style.transition =
        "opacity .55s ease, transform .55s ease";

    observador.observe(elemento);

});


/* =========================
   AGREGAR ESTILO VISIBLE
========================= */

const estilo = document.createElement("style");

estilo.innerHTML = `

.producto-card.visible,
.beneficio.visible,
.dato-card.visible {

    opacity: 1 !important;
    transform: translateY(0) !important;

}

`;

document.head.appendChild(estilo);