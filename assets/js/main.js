const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const header = document.querySelector("[data-header]");
const floatingWhatsapp = document.querySelector(".floating-whatsapp");
const planTabs = document.querySelectorAll("[data-plan-tab]");
const planPanels = document.querySelectorAll("[data-plan-panel]");
const revealItems = document.querySelectorAll(
  ".hero-content, .hero-media, .quick-links a, .section-heading, .plans-toolbar, .plan-card, .plan-extras article, .coverage-panel, .split-section > div, .feature-list article, .support-grid a, .hours-panel article, .values-grid article, .locations-grid article, .final-cta > div"
);

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (header) {
  const setHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });
}

if (floatingWhatsapp) {
  const setFloatingWhatsappState = () => {
    floatingWhatsapp.classList.toggle("is-visible", window.scrollY > 520);
  };

  setFloatingWhatsappState();
  window.addEventListener("scroll", setFloatingWhatsappState, { passive: true });
}

if (planTabs.length && planPanels.length) {
  planTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-plan-tab");

      planTabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });

      planPanels.forEach((panel) => {
        const isActive = panel.getAttribute("data-plan-panel") === target;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
  });
}

if (revealItems.length) {
  revealItems.forEach((item) => item.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    window.setTimeout(() => {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }, 900);
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}
