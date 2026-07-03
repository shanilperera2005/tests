/**
 * Autodirect (Pvt) Limited — Shared site behaviour
 * Loaded on every page. Handles: business config, mobile drawer,
 * scroll-reveal animations, active nav state, dynamic year, WhatsApp links.
 */

const AUTODIRECT = {
  name: "Autodirect (Pvt) Limited",
  phoneDisplay: "077 568 7687",
  phoneTel: "+94775687687",
  whatsappNumber: "94775687687",
  address: "15 Park Circus, Colombo 00500, Sri Lanka",
  rating: 4.8,
  reviewCount: 271,
  hours: [
    { d: "Monday – Friday", h: "9:00 AM – 6:00 PM" },
    { d: "Saturday", h: "9:00 AM – 5:00 PM" },
    { d: "Sunday", h: "10:00 AM – 3:00 PM" }
  ],
  mapEmbed: "https://www.google.com/maps?q=15+Park+Circus,+Colombo+00500,+Sri+Lanka&output=embed"
};

function waLink(message) {
  const text = encodeURIComponent(message || `Hi Autodirect, I'd like more information.`);
  return `https://wa.me/${AUTODIRECT.whatsappNumber}?text=${text}`;
}
function telLink() {
  return `tel:${AUTODIRECT.phoneTel}`;
}
window.AUTODIRECT = AUTODIRECT;
window.waLink = waLink;
window.telLink = telLink;

document.addEventListener("DOMContentLoaded", () => {
  wireMobileDrawer();
  wireRevealAnimations();
  wireActiveNav();
  wireQuickLinks();
  wireYear();
});

function wireMobileDrawer() {
  const toggle = document.querySelector("[data-drawer-toggle]");
  const drawer = document.querySelector("[data-drawer]");
  if (!toggle || !drawer) return;
  const close = () => drawer.classList.remove("open");
  toggle.addEventListener("click", () => drawer.classList.add("open"));
  drawer.querySelectorAll("[data-drawer-close]").forEach((el) => el.addEventListener("click", close));
  drawer.querySelectorAll("a").forEach((el) => el.addEventListener("click", close));
}

function wireRevealAnimations() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach((t) => t.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((t) => io.observe(t));
}

function wireActiveNav() {
  const page = document.body.getAttribute("data-page");
  if (!page) return;
  document.querySelectorAll(`a[data-nav="${page}"]`).forEach((a) => a.classList.add("active"));
}

// Populates every element carrying a data-fill-* attribute with live business info
// and wires every data-wa / data-call trigger to the correct link.
function wireQuickLinks() {
  document.querySelectorAll("[data-fill-phone]").forEach((el) => (el.textContent = AUTODIRECT.phoneDisplay));
  document.querySelectorAll("[data-fill-address]").forEach((el) => (el.textContent = AUTODIRECT.address));
  document.querySelectorAll("[data-fill-rating]").forEach((el) => (el.textContent = AUTODIRECT.rating.toFixed(1)));
  document.querySelectorAll("[data-fill-reviews]").forEach((el) => (el.textContent = AUTODIRECT.reviewCount));

  document.querySelectorAll("a[data-call]").forEach((a) => (a.href = telLink()));
  document.querySelectorAll("a[data-wa]").forEach((a) => {
    const msg = a.getAttribute("data-wa") || "";
    a.href = waLink(msg || undefined);
    a.target = "_blank";
    a.rel = "noopener";
  });

  const mapFrame = document.querySelector("[data-map-embed]");
  if (mapFrame) mapFrame.src = AUTODIRECT.mapEmbed;
}

function wireYear() {
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
}

function formatLKR(amount) {
  return "Rs. " + Number(amount).toLocaleString("en-LK");
}
window.formatLKR = formatLKR;
