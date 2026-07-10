// DATA: Project Details
const projectsData = {
    "1": {
        title: "Registro de personas y vehículos",
        icon: "fa-car-side",
        category: "Aplicación Web Fullstack",
        description: "Este proyecto académico, desarrollado en el ámbito universitario, es una aplicación web Full Stack que permite gestionar un registro completo de personas y los vehículos asociados a ellas. Fue diseñado priorizando el desacoplamiento de componentes y la separación de responsabilidades, logrando una arquitectura mantenible, escalable y testeable. Para ello, se implementó inyección de dependencias en la capa de persistencia, permitiendo intercambiar distintos proveedores de datos sin modificar la lógica de negocio. Actualmente, la aplicación puede trabajar con múltiples bases de datos y servicios de almacenamiento, incluyendo MySQL, MongoDB y Firebase.",
        technicalDetails: [
            "<strong>Arquitectura Modular y Desacoplada:</strong> Implementación de principios de arquitectura limpia y separación de responsabilidades mediante Inyección de Dependencias, permitiendo desacoplar la lógica de negocio de la capa de persistencia.",
            "<strong>Persistencia intercambiable:</strong> Diseño de una capa de acceso a datos basada en contratos e implementaciones inyectables, permitiendo utilizar distintos proveedores de almacenamiento sin modificar la lógica de la aplicación. Actualmente soporta MongoDB (Mongoose), Firebase Firestore y almacenamiento en memoria para pruebas y desarrollo.",
            "<strong>API RESTful:</strong> Desarrollo de endpoints REST utilizando Express y TypeScript para la gestión de personas y vehículos, implementando operaciones CRUD de forma segura y mantenible.",
            "<strong>Frontend Moderno:</strong> Aplicación desarrollada con React 19, TypeScript y Vite, incorporando React Router para la navegación, Axios para la comunicación con la API y una interfaz responsiva construida con Bootstrap 5 y estilos personalizados.",
            "<strong>Proyecto Académico:</strong> Aplicación desarrollada en el ámbito universitario con el objetivo de aplicar patrones de diseño, principios SOLID y buenas prácticas de desarrollo Full Stack."
        ],
        tech: ["Node.js", "Firebase", "MySQL", "MongoDB", "React", "Repository Pattern", "Inyección de Dependencias"]
    },
    "2": {
        title: "CtaCteFlow",
        icon: "fa-wallet",
        category: "Sistema de Gestión Financiera",
        description: "Aplicación web para la gestión de cuentas corrientes que permite administrar clientes, registrar movimientos y consultar saldos de manera simple y eficiente.",
        technicalDetails: [
            "<strong>Gestión de Clientes:</strong> Administración centralizada de clientes y sus cuentas corrientes.",
            "<strong>Registro de Movimientos:</strong> Carga y consulta de débitos, créditos y operaciones asociadas a cada cuenta.",
            "<strong>Cálculo de Saldos:</strong> Actualización y visualización de saldos en función de los movimientos registrados.",
            "<strong>Arquitectura Full Stack:</strong> Separación entre frontend desarrollado en React y backend construido con Node.js, Express y TypeScript."
        ],
        tech: ["React", "TypeScript", "Node.js", "Express", "TypeScript"]

    },
    "3": {
        title: "Encargo",
        icon: "fa-truck-ramp-box",
        category: "Aplicación de Pedidos Multiplataforma",
        description: "Sistema de gestión de pedidos compuesto por un backend API, una aplicación web administrativa y una aplicación móvil para clientes, diseñado para centralizar productos, pedidos y consultas.",
        technicalDetails: [
            "<strong>Backend API:</strong> Desarrollado con Node.js y TypeScript para gestionar productos, pedidos y lógica de negocio.",
            "<strong>Persistencia de Datos:</strong> Integración con MySQL utilizando Sequelize ORM para trabajar con entidades y relaciones mediante TypeScript.",
            "<strong>Optimización de Consultas:</strong> Implementación de node-cache para almacenar temporalmente información frecuente y reducir consultas repetitivas a la base de datos.",
            "<strong>Frontend Multiplataforma:</strong> Desarrollo de una aplicación web administrativa con React y una aplicación móvil con React Native para clientes finales."
        ],
        tech: [
            "Node.js",
            "TypeScript",
            "MySQL",
            "Sequelize",
            "Node-Cache",
            "React",
            "React Native"
        ]
    },
    "4": {
        title: "Tp-Combustible",
        icon: "fa-gas-pump",
        category: "Sistema de Gestión de Flota",
        description: "Sistema de gestión de consumos y cargas de combustible para flotas de vehículos, desarrollado en el ámbito universitario como proyecto colaborativo orientado al diseño e implementación de una solución empresarial." ,
        technicalDetails: [
            "<strong>Cálculo de Consumo:</strong> Lógica del backend diseñada para calcular eficientemente el rendimiento por kilómetro recorrido y alertar sobre desvíos o consumos inusuales.",
            "<strong>Arquitectura Backend:</strong> Desarrollado en Java utilizando Spring Boot para la creación de servicios REST estables y escalables.",
            "<strong>Integración de Datos:</strong> Base de datos relacional PostgreSQL con modelado para vehículos, conductores y registros históricos de carga.",
            "<strong>Dashboard Web:</strong> Frontend desarrollado con React para visualizar gráficos de consumos de combustible, auditoría de tickets de carga y reportes analíticos.",
            "<strong>Trabajo en Equipo:</strong> Desarrollo colaborativo con división de responsabilidades y coordinación entre distintas áreas del proyecto."
        ],
        tech: ["Java", "Spring Boot", "PostgreSQL", "React", "CSS Variables", "REST API"]
    },
    "5": {
        title: "Proyecto Academico de POO",
        icon: "fa-users",
        category: "Sistema de Gestión de Flota",
        description: "El objetivo del proyecto es desarrollar una aplicación web que permita gestionar los integrantes de una organización familiar mediante una API REST. El sistema administra diferentes tipos de integrantes, diferenciando entre criminales y respetables, aplicando las reglas de negocio correspondientes a cada uno. Además de realizar las operaciones básicas de alta, baja, modificación y consulta (CRUD), el sistema garantiza la integridad de los datos mediante validaciones que impiden realizar acciones incompatibles con el tipo de integrante, como asignar armas a personas respetables o títulos a criminales. El proyecto busca aplicar los conceptos fundamentales de Programación Orientada a Objetos, persistencia de datos y desarrollo de servicios REST, utilizando una arquitectura organizada y escalable." ,
        technicalDetails: [
            "<strong>Programación Orientada a Objetos:</strong> Implementación de principios de POO como encapsulamiento, herencia y polimorfismo.",
            "<strong>Arquitectura del Sistema:</strong> Diseño modular que facilita la mantenibilidad y expansión del proyecto.",
        ],
        tech: ["Java", "Spring Boot", "Maven", "HTML", "CSS", "REST API"]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // --- STICKY NAV & SCROLL ACTIVE LINKS ---
    const header = document.getElementById("header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        // Sticky header background opacity
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Active link highlighting on scroll
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // --- MOBILE NAVBAR TOGGLE ---
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            // Toggle hamburger icon to X
            const icon = navToggle.querySelector("i");
            if (navMenu.classList.contains("open")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });

        // Close menu on nav item click
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                navToggle.querySelector("i").className = "fa-solid fa-bars";
            });
        });
    }

    // --- TYPING ANIMATION ---
    const typingText = document.getElementById("typing-text");
    const roles = [
        "Técnico en Programación UNQ",
        "Backend Developer",
        "Especialista en APIs REST",
        "Diseñador de Bases de Datos"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster deleting
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Normal typing
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at full string
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next role
        }

        setTimeout(type, typingSpeed);
    }

    if (typingText) {
        type();
    }

    // --- PROJECTS CATEGORY FILTERING ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from buttons and add to clicked
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const categories = card.getAttribute("data-categories").split(" ");
                
                if (filterValue === "all" || categories.includes(filterValue)) {
                    card.style.display = "flex";
                    // Apply fade-in animation trigger
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    });

    // --- PROJECT DETAILS MODAL HYDRATION ---
    const modalOverlay = document.getElementById("modal-overlay");
    const modalDataContainer = document.getElementById("modal-data-container");
    const modalClose = document.getElementById("modal-close");

    function openModal(projectId) {
        const data = projectsData[projectId];
        if (!data) return;

        // Create tech badges HTML
        const techHtml = data.tech.map(t => `<span class="project-tag" style="font-size:0.85rem; padding:0.35rem 0.8rem; border-radius:6px;">${t}</span>`).join("");
        
        // Create bullet features list
        const detailsHtml = data.technicalDetails.map(detail => `<li>${detail}</li>`).join("");

        // Hydrate HTML
        modalDataContainer.innerHTML = `
            <div class="modal-header">
                <div class="modal-title-row">
                    <h3 class="modal-title">${data.title}</h3>
                </div>
                <p class="text-gradient" style="font-weight: 600; font-size: 1.1rem; margin-top:0.25rem;">
                    <i class="fa-solid ${data.icon}"></i> ${data.category}
                </p>
                <div class="modal-tech-list" style="margin-top: 1rem;">
                    ${techHtml}
                </div>
            </div>
            <div class="modal-content-grid">
                <div>
                    <h4 class="modal-section-title">Descripción del Proyecto</h4>
                    <p class="modal-description">${data.description}</p>
                </div>
                <div>
                    <h4 class="modal-section-title">Detalles Técnicos y Arquitectura</h4>
                    <ul class="modal-bullet-list">
                        ${detailsHtml}
                    </ul>
                </div>
                <div class="modal-links">
                    <button class="btn btn-secondary" onclick="document.getElementById('modal-overlay').classList.remove('open')">Cerrar</button>
                </div>
            </div>
        `;

        // Add class to open overlay
        modalOverlay.classList.add("open");
        document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    }

    function closeModal() {
        modalOverlay.classList.remove("open");
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Attach click events to project cards
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-id");
            openModal(id);
        });
        
        // Prevent modal trigger if user clicks GitHub link inside the footer directly
        const gitHubLink = card.querySelector(".project-link");
        if (gitHubLink) {
            gitHubLink.addEventListener("click", (e) => {
                e.stopPropagation();
                
                // Show a toast that this is a simulated repository or open a placeholder
                const id = card.getAttribute("data-id");
                const url = projectsData[id].github;
                window.open(url, "_blank");
            });
        }
    });

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // ESC key closes modal
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
            closeModal();
        }
    });

    // --- CONTACT FORM SUBMISSION HANDLER ---
    const contactForm = document.getElementById("contact-form");
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-msg");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Extract fields
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) return;

            // Simulate sending API request
            const submitBtn = document.getElementById("btn-submit");
            const originalBtnContent = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Enviando... <i class="fa-solid fa-circle-notch fa-spin"></i>';

            setTimeout(() => {
                // Restore button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;

                // Reset form
                contactForm.reset();

                // Show success toast
                toastMsg.textContent = `¡Gracias ${name}! Tu mensaje ha sido enviado con éxito.`;
                toast.classList.add("show");

                // Hide toast after 4 seconds
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 4000);

            }, 1500);
        });
    }

    // Adjust copyright year dynamically to current year
    const copyrightYear = document.getElementById("footer-year");
    if (copyrightYear) {
        const year = new Date().getFullYear();
        copyrightYear.innerHTML = `&copy; ${year} Franco Zocchi. Todos los derechos reservados.`;
    }
});

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_2ecmppa';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
