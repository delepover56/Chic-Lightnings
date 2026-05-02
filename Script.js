const categories = [
    {
        name: "Lamps",
        href: "./Pages/Product-Pages/Lamps.html",
        products: [
            {
                title: "Antique Wooden Lamp",
                image: "./Pages/Product-Pages/Assets/Lamps/Lamp 1.jpeg",
                detail: "Warm bedside lighting with a classic wooden profile.",
                price: "$10"
            },
            {
                title: "Beautiful Bedside Lamp Pair",
                image: "./Pages/Product-Pages/Assets/Lamps/Lamp 2.jpg",
                detail: "Balanced pair for bedrooms, lounges, and suites.",
                price: "$10"
            },
            {
                title: "Black Traditional Lamp Set",
                image: "./Pages/Product-Pages/Assets/Lamps/Lamp 3.jpeg",
                detail: "A dark accent finish for calm evening interiors.",
                price: "$10"
            }
        ]
    },
    {
        name: "Chandeliers",
        href: "./Pages/Product-Pages/Chandeliers.html",
        products: [
            {
                title: "Contemporary Crystal Chandelier",
                image: "./Pages/Product-Pages/Assets/Chandeliers/chandelier 1.jpg",
                detail: "A polished centerpiece for formal interiors.",
                price: "$10"
            },
            {
                title: "Lindby Lumiel Five-Bulb",
                image: "./Pages/Product-Pages/Assets/Chandeliers/chandelier 2.jpg",
                detail: "Layered light for dining rooms and reception areas.",
                price: "$10"
            },
            {
                title: "Brass 8-Light Crystal Chandelier",
                image: "./Pages/Product-Pages/Assets/Chandeliers/chandelier 4.jpeg",
                detail: "Warm brass detail with a bright crystal throw.",
                price: "$10"
            }
        ]
    },
    {
        name: "Ceiling Lights",
        href: "./Pages/Product-Pages/Ceiling-Lights.html",
        products: [
            {
                title: "Acrylic Suction Dome Light",
                image: "./Pages/Product-Pages/Assets/Ceiling-Lights/Ceiling Light 1.jpeg",
                detail: "Low-profile LED lighting for daily use.",
                price: "$10"
            },
            {
                title: "Round Flat Panel Ceiling Light",
                image: "./Pages/Product-Pages/Assets/Ceiling-Lights/Ceiling Light 2.jpeg",
                detail: "Clean and efficient illumination for modern rooms.",
                price: "$10"
            },
            {
                title: "Citra Arc LED Ceiling Light",
                image: "./Pages/Product-Pages/Assets/Ceiling-Lights/Ceiling Light 3.jpeg",
                detail: "Warm white LED shape with sculptural movement.",
                price: "$10"
            }
        ]
    },
    {
        name: "Wall Lights",
        href: "./Pages/Product-Pages/Wall-Lights.html",
        products: [
            {
                title: "Modern Wall Accent",
                image: "./Pages/Product-Pages/Assets/Wall-Lights/Wall Light 1.jpg",
                detail: "Directional light for corridors and bedrooms.",
                price: "$10"
            },
            {
                title: "Warm Sconce Pair",
                image: "./Pages/Product-Pages/Assets/Wall-Lights/Wall Light 2.jpg",
                detail: "Soft side lighting for layered interior schemes.",
                price: "$10"
            },
            {
                title: "Decorative Wall Fixture",
                image: "./Pages/Product-Pages/Assets/Wall-Lights/Wall Light 3.jpg",
                detail: "Compact fixture with a refined decorative profile.",
                price: "$10"
            }
        ]
    }
];

const catalogFiles = {
    "Lamps": [
        "Lamp 1.jpeg", "Lamp 2.jpg", "Lamp 3.jpeg", "Lamp 4.jpg",
        "Lamp 5.jpeg", "Lamp 6.jpg", "Lamp 7.jpg", "Lamp 8.jpg",
        "Lamp 9.jpg", "Lamp 10.jpg", "Lamp 11.jpg", "Lamp 12.jpg",
        "Lamp 13.jpg", "Lamp 14.jpg", "Lamp 15.jpeg", "Lamp 16.jpg"
    ],
    "Chandeliers": [
        "chandelier 1.jpg", "chandelier 2.jpg", "chandelier 3.jpg", "chandelier 4.jpeg",
        "chandelier 5.jpg", "chandelier 6.jpg", "chandelier 7.jpg", "chandelier 8.jpg",
        "chandelier 9.jpg", "chandelier 10.jpg", "chandelier 11.jpg", "chandelier 12.jpg",
        "chandelier 13.jpg", "chandelier 14.jpg", "chandelier 15.jpg", "chandelier 16.jpg"
    ],
    "Ceiling Lights": [
        "Ceiling Light 1.jpeg", "Ceiling Light 2.jpeg", "Ceiling Light 3.jpeg", "Ceiling Light 4.jpg",
        "Ceiling Light 5.jpg", "Ceiling Light 6.jpeg", "Ceiling Light 7.jpg", "Ceiling Light 8.jpg",
        "Ceiling Light 9.jpg", "Ceiling Light 10.jpg", "Ceiling Light 11.jpg", "Ceiling Light 12.jpg",
        "Ceiling Light 13.jpg", "Ceiling Light 14.jpg", "Ceiling Light 15.jpg", "Ceiling Light 16.jpg"
    ],
    "Wall Lights": [
        "Wall Light 1.jpg", "Wall Light 2.jpg", "Wall Light 3.jpg", "Wall Light 4.jpeg",
        "Wall Light 5.jpg", "Wall Light 6.jpg", "Wall Light 7.jpg", "Wall Light 8.jpg",
        "Wall Light 9.jpg", "Wall Light 10.jpg", "Wall Light 11.jpeg", "Wall Light 12.jpg",
        "Wall Light 13.jpg", "Wall Light 14.jpg", "Wall Light 15.jpg", "Wall Light 16.jpg"
    ]
};

const nav = document.querySelector(".side-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const filterBar = document.querySelector(".filter-bar");
const productGrid = document.querySelector(".product-grid");
const catalogGrid = document.querySelector(".catalog-grid");
const form = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
let productSwiper;
let lightboxItems = [];
let activeLightboxIndex = 0;

function setupMobileMenu() {
    if (!nav || !navLinks) return;

    if (!navLinks.querySelector(".mobile-menu-search")) {
        const search = document.createElement("form");
        search.className = "mobile-menu-search";
        search.setAttribute("role", "search");
        search.innerHTML = `
            <label class="sr-only" for="mobile-menu-search">Search lighting</label>
            <input id="mobile-menu-search" type="search" placeholder="Search lighting">
            <button type="submit" aria-label="Search">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>
            </button>
        `;
        navLinks.prepend(search);

        search.addEventListener("submit", (event) => {
            event.preventDefault();
            const query = search.querySelector("input").value.trim().toLowerCase();
            if (!query) return;

            const match = [...navLinks.querySelectorAll("a")]
                .find((link) => link.textContent.trim().toLowerCase().includes(query));

            if (match) {
                window.location.href = match.href;
            }
        });
    }

    document.querySelectorAll(".has-menu").forEach((item) => {
        if (item.querySelector(".submenu-toggle")) return;

        const toggle = document.createElement("button");
        toggle.className = "submenu-toggle";
        toggle.type = "button";
        toggle.setAttribute("aria-label", "Open collections menu");
        toggle.setAttribute("aria-expanded", "false");
        item.querySelector(":scope > a")?.after(toggle);

        toggle.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            const isOpen = item.classList.toggle("submenu-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    });

    const headerActions = nav.querySelector(".header-actions");
    if (headerActions && !navLinks.querySelector(".mobile-menu-actions")) {
        const mobileActions = headerActions.cloneNode(true);
        mobileActions.classList.add("mobile-menu-actions");
        mobileActions.setAttribute("aria-label", "Mobile store actions");
        navLinks.append(mobileActions);
    }
}

function productCard(product, category) {
    return `
        <article class="product-card swiper-slide reveal">
            <img src="${product.image}" alt="${product.title}">
            <div class="product-body">
                <div class="product-meta">
                    <span>${category.name}</span>
                    <span class="price">${product.price}</span>
                </div>
                <h3>${product.title}</h3>
                <p>${product.detail}</p>
                <div class="card-actions">
                    <a class="btn mini" href="./Pages/Contact-Us.html">Add to quote</a>
                    <a class="text-link" href="${category.href}">View collection</a>
                </div>
            </div>
        </article>
    `;
}

function renderProducts(activeCategory = "All") {
    if (!productGrid) return;

    const source = activeCategory === "All"
        ? categories.flatMap((category) => category.products.slice(0, 2).map((product) => ({ product, category })))
        : categories
            .filter((category) => category.name === activeCategory)
            .flatMap((category) => category.products.map((product) => ({ product, category })));

    productGrid.innerHTML = source.map(({ product, category }) => productCard(product, category)).join("");
    observeReveals();
    initProductSwiper();
}

function renderFilters() {
    if (!filterBar) return;

    const filters = ["All", ...categories.map((category) => category.name)];
    filterBar.innerHTML = filters.map((name, index) => `
        <button class="filter-button ${index === 0 ? "active" : ""}" type="button" role="tab" aria-selected="${index === 0}" data-category="${name}">
            ${name}
        </button>
    `).join("");

    filterBar.addEventListener("click", (event) => {
        const button = event.target.closest(".filter-button");
        if (!button) return;

        filterBar.querySelectorAll(".filter-button").forEach((item) => {
            item.classList.toggle("active", item === button);
            item.setAttribute("aria-selected", String(item === button));
        });
        renderProducts(button.dataset.category);
    });
}

function initProductSwiper() {
    if (!window.Swiper || !document.querySelector(".product-swiper")) return;
    productSwiper?.destroy(true, true);
    productSwiper = new Swiper(".product-swiper", {
        slidesPerView: 1,
        spaceBetween: 18,
        grabCursor: true,
        speed: 520,
        keyboard: { enabled: true },
        pagination: {
            el: ".product-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".product-next",
            prevEl: ".product-prev"
        },
        breakpoints: {
            700: { slidesPerView: 2, spaceBetween: 20 },
            1120: { slidesPerView: 3, spaceBetween: 22 }
        }
    });
}

function renderCatalogPage() {
    if (!catalogGrid) return;

    const category = catalogGrid.dataset.category;
    const prefix = catalogGrid.dataset.prefix || "";
    const files = catalogFiles[category] || [];

    catalogGrid.innerHTML = files.map((file, index) => `
        <article class="product-card reveal">
            <img src="${prefix}${file}" alt="${category} design ${index + 1}">
            <div class="product-body">
                <div class="product-meta">
                    <span>${category}</span>
                    <span class="price">${index < 3 ? "$10" : "$120"}</span>
                </div>
                <h3>${category.slice(0, -1)} Design ${index + 1}</h3>
                <p>Finest quality ${category.toLowerCase()} for refined interiors.</p>
                <div class="card-actions">
                    <a class="btn mini" href="../Contact-Us.html">Add to quote</a>
                    <a class="text-link" href="../Contact-Us.html">Request details</a>
                </div>
            </div>
        </article>
    `).join("");
}

function observeReveals() {
    const revealItems = document.querySelectorAll(".reveal:not(.visible)");
    if (!revealItems.length) return;

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            currentObserver.unobserve(entry.target);
        });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => observer.observe(item));
}

function setupLightbox() {
    const links = [...document.querySelectorAll("[data-lightbox]")];
    if (!links.length) return;

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Image preview");
    lightbox.innerHTML = `
        <div class="lightbox-panel">
            <button class="lightbox-close" type="button" aria-label="Close image preview">&times;</button>
            <button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous image">&#8249;</button>
            <img alt="">
            <p class="lightbox-caption"></p>
            <button class="lightbox-nav lightbox-next" type="button" aria-label="Next image">&#8250;</button>
        </div>
    `;
    document.body.appendChild(lightbox);

    const image = lightbox.querySelector("img");
    const caption = lightbox.querySelector(".lightbox-caption");
    const closeButton = lightbox.querySelector(".lightbox-close");
    const prevButton = lightbox.querySelector(".lightbox-prev");
    const nextButton = lightbox.querySelector(".lightbox-next");

    lightboxItems = links.map((link) => {
        const preview = link.querySelector("img");
        return {
            src: link.getAttribute("href") || preview?.src || "",
            alt: preview?.alt || link.dataset.title || "Gallery image",
            title: link.dataset.title || preview?.alt || ""
        };
    });

    const renderLightbox = (index) => {
        activeLightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
        const item = lightboxItems[activeLightboxIndex];
        image.src = item.src;
        image.alt = item.alt;
        caption.textContent = item.title;
    };

    const openLightbox = (index) => {
        renderLightbox(index);
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
        closeButton.focus();
    };

    const closeLightbox = () => {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
    };

    links.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            openLightbox(index);
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    prevButton.addEventListener("click", () => renderLightbox(activeLightboxIndex - 1));
    nextButton.addEventListener("click", () => renderLightbox(activeLightboxIndex + 1));
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (event) => {
        if (!lightbox.classList.contains("open")) return;
        if (event.key === "Escape") closeLightbox();
        if (event.key === "ArrowLeft") renderLightbox(activeLightboxIndex - 1);
        if (event.key === "ArrowRight") renderLightbox(activeLightboxIndex + 1);
    });
}

function setupExclusiveFaqs() {
    document.querySelectorAll(".faq-list").forEach((list) => {
        list.querySelectorAll("details").forEach((details) => {
            details.addEventListener("toggle", () => {
                if (!details.open) return;
                list.querySelectorAll("details[open]").forEach((item) => {
                    if (item !== details) item.open = false;
                });
            });
        });
    });
}

function updateActiveNav() {
    const sections = [...document.querySelectorAll("section[id]")];
    const links = [...document.querySelectorAll(".nav-links a[href^='#']")];
    if (!sections.length || !links.length) return;

    const active = sections
        .map((section) => ({ id: section.id, top: Math.abs(section.getBoundingClientRect().top) }))
        .sort((a, b) => a.top - b.top)[0];

    links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${active?.id}`);
    });
}

navToggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
    });
});

form?.addEventListener("submit", (event) => {
    if (!form.checkValidity()) return;

    const submitButton = form.querySelector("button[type='submit']");
    formStatus.textContent = "Sending your inquiry to taha82426980@gmail.com...";
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
});

renderFilters();
renderProducts();
renderCatalogPage();
setupMobileMenu();
observeReveals();
setupLightbox();
setupExclusiveFaqs();
updateActiveNav();
window.addEventListener("scroll", updateActiveNav, { passive: true });
