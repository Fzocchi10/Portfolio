// DATA: Project Details
const projectsData = {
    "1": {
        title: "Registro Personas y Vehículos",
        icon: "fa-car-side",
        category: "Aplicación Web Fullstack",
        description: "Este proyecto es una aplicación web Fullstack que permite gestionar un registro completo de personas y los vehículos asociados a ellas. Se diseñó priorizando el desacoplamiento de componentes y la separación de responsabilidades, logrando un código mantenible y testeable.",
        technicalDetails: [
            "<strong>Arquitectura Limpia:</strong> Implementación del <strong>Repository Pattern</strong> junto con <strong>Inyección de Dependencias</strong> en el backend Java/Spring Boot para aislar la lógica de negocio del acceso directo a la base de datos.",
            "<strong>Modelado de Datos:</strong> Base de datos relacional MySQL configurada con relaciones de integridad referencial para modelar la asociación uno-a-muchos (una persona asociada a múltiples vehículos).",
            "<strong>API RESTful:</strong> Endpoints optimizados para transacciones CRUD rápidas y seguras.",
            "<strong>Interfaz Responsiva:</strong> Panel web construido con React que ofrece un diseño intuitivo, formularios reactivos con validaciones en tiempo real y sincronización asíncrona de datos."
        ],
        tech: ["Java", "Spring Boot", "MySQL", "React", "Repository Pattern", "Inyección de Dependencias"]
    },
    "2": {
        title: "CtaCteFlow",
        icon: "fa-wallet",
        category: "Sistema de Gestión Financiera",
        description: "Sistema web de gestión de cuentas corrientes diseñado para centralizar la administración de clientes, movimientos, saldos y el seguimiento financiero de manera simple y sumamente eficiente.",
        technicalDetails: [
            "<strong>Control Financiero:</strong> Flujo preciso para debitar, acreditar e inspeccionar saldos de cuentas de clientes sin inconsistencias transaccionales.",
            "<strong>Historial Completo:</strong> Registro inmutable de transacciones que facilita auditorías y reportes históricos inmediatos.",
            "<strong>Backend Eficiente:</strong> API robusta desarrollada en Node.js y Express estructurada con TypeScript para garantizar tipado estricto y prevención de errores.",
            "<strong>Base de Datos:</strong> PostgreSQL para la gestión transaccional robusta con soporte ACID (Atomicity, Consistency, Isolation, Durability)."
        ],
        tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "React", "Bootstrap/CSS"]
    },
    "3": {
        title: "Encargo",
        icon: "fa-truck-ramp-box",
        category: "Aplicación de Pedidos Multiplataforma",
        description: "Completo ecosistema para la gestión y realización de pedidos. Cuenta con un backend de alto rendimiento, un frontend web administrativo para comercios y una aplicación móvil nativa para los clientes finales.",
        technicalDetails: [
            "<strong>Acceso a Datos Optimizado:</strong> Uso del ORM (Object Relational Mapper) <strong>Sequelize</strong> para interactuar con la base de datos MySQL mediante métodos orientados a objetos estructurados en TypeScript.",
            "<strong>Estrategia de Caché:</strong> Implementación de la librería <strong>node-cache</strong> para almacenar en memoria consultas pesadas a la base de datos, logrando reducir los tiempos de respuesta de la API y bajando la carga de consultas SQL concurrentes.",
            "<strong>Frontend Web Administrativo:</strong> Panel de control modular construido en React para la gestión de productos, estados de pedidos y facturación.",
            "<strong>Frontend Mobile:</strong> Aplicación móvil nativa multiplataforma (iOS y Android) desarrollada en React Native, optimizada para ofrecer una experiencia fluida al usuario final."
        ],
        tech: ["Node.js", "TypeScript", "MySQL", "Sequelize ORM", "Node-Cache", "React", "React Native"]
    },
    "4": {
        title: "Tp-Combustible",
        icon: "fa-gas-pump",
        category: "Sistema de Gestión de Flota",
        description: "Sistema empresarial enfocado en la administración de consumos y cargas de combustible para flotas de vehículos comerciales u organizacionales.",
        technicalDetails: [
            "<strong>Cálculo de Consumo:</strong> Lógica del backend diseñada para calcular eficientemente el rendimiento por kilómetro recorrido y alertar sobre desvíos o consumos inusuales.",
            "<strong>Arquitectura Backend:</strong> Desarrollado en Java utilizando Spring Boot para la creación de servicios REST estables y escalables.",
            "<strong>Integración de Datos:</strong> Base de datos relacional PostgreSQL con modelado para vehículos, conductores y registros históricos de carga.",
            "<strong>Dashboard Web:</strong> Frontend desarrollado con React para visualizar gráficos de consumos de combustible, auditoría de tickets de carga y reportes analíticos."
        ],
        tech: ["Java", "Spring Boot", "PostgreSQL", "React", "CSS Variables", "REST API"]
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
