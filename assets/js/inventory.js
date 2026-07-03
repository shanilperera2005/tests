/**
 * Vehicles page — search, filter and sort logic.
 * Reads/writes URL query params so filtered views are shareable/linkable.
 */
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("inventory-grid");
  const emptyState = document.getElementById("empty-state");
  const resultsCount = document.getElementById("results-count");
  if (!grid) return;

  const els = {
    search: document.getElementById("f-search"),
    brand: document.getElementById("f-brand"),
    body: document.getElementById("f-body"),
    fuel: document.getElementById("f-fuel"),
    transmission: document.getElementById("f-transmission"),
    priceMin: document.getElementById("f-price-min"),
    priceMax: document.getElementById("f-price-max"),
    sort: document.getElementById("f-sort"),
  };

  populateSelect(els.brand, unique(VEHICLES.map((v) => v.brand)));
  populateSelect(els.body, unique(VEHICLES.map((v) => v.bodyType)));
  populateSelect(els.fuel, unique(VEHICLES.map((v) => v.fuelType)));
  populateSelect(els.transmission, unique(VEHICLES.map((v) => v.transmission)));

  function unique(arr) {
    return [...new Set(arr)].sort();
  }
  function populateSelect(select, values) {
    values.forEach((v) => {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      select.appendChild(opt);
    });
  }

  function readFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("q")) els.search.value = params.get("q");
    if (params.get("brand")) els.brand.value = params.get("brand");
    if (params.get("body")) els.body.value = params.get("body");
    if (params.get("fuel")) els.fuel.value = params.get("fuel");
    if (params.get("transmission")) els.transmission.value = params.get("transmission");
    if (params.get("min")) els.priceMin.value = params.get("min");
    if (params.get("max")) els.priceMax.value = params.get("max");
    if (params.get("sort")) els.sort.value = params.get("sort");
  }

  function writeFiltersToURL() {
    const params = new URLSearchParams();
    if (els.search.value) params.set("q", els.search.value);
    if (els.brand.value) params.set("brand", els.brand.value);
    if (els.body.value) params.set("body", els.body.value);
    if (els.fuel.value) params.set("fuel", els.fuel.value);
    if (els.transmission.value) params.set("transmission", els.transmission.value);
    if (els.priceMin.value) params.set("min", els.priceMin.value);
    if (els.priceMax.value) params.set("max", els.priceMax.value);
    if (els.sort.value && els.sort.value !== "latest") params.set("sort", els.sort.value);
    const qs = params.toString();
    history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }

  function statusLabel(s) {
    return s === "available" ? "Available" : s === "reserved" ? "Reserved" : "Sold";
  }

  function vehicleCardHTML(v) {
    const wa = `Hi Autodirect, I'm interested in the ${v.year} ${v.brand} ${v.model} (${formatLKR(v.price)}). Is it still available?`;
    const waTestDrive = `Hi Autodirect, I'd like to book a test drive for the ${v.year} ${v.brand} ${v.model}.`;
    return `
    <div class="card vehicle-card reveal in-view">
      <a href="vehicle-detail.html?id=${v.id}" class="vehicle-media" style="display:block;">
        <span class="status-badge status-${v.status}">${statusLabel(v.status)}</span>
        <span class="vehicle-price-tag">${formatLKR(v.price)}</span>
        <img src="${v.images[0]}" alt="${v.year} ${v.brand} ${v.model}" loading="lazy">
      </a>
      <div class="vehicle-body">
        <a href="vehicle-detail.html?id=${v.id}"><h3 class="vehicle-title">${v.brand} ${v.model}</h3></a>
        <div class="vehicle-year">${v.year} &middot; ${v.bodyType}</div>
        <div class="spec-row">
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>${v.mileage.toLocaleString()} km</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M7 16V6h6l4 6h2v4"/></svg>${v.transmission}</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3v18M6 21V9a2 2 0 0 1 2-2h4M18 8l2 2v7a1.5 1.5 0 0 1-3 0v-2h-2"/></svg>${v.fuelType}</span>
        </div>
        <div class="vehicle-actions">
          <a href="vehicle-detail.html?id=${v.id}" class="btn btn-outline">View Details</a>
          <a href="${waLink(wa)}" target="_blank" rel="noopener" class="btn btn-whatsapp">WhatsApp Inquiry</a>
          <a href="test-drive.html?id=${v.id}" class="btn btn-primary">Book Test Drive</a>
        </div>
      </div>
    </div>`;
  }

  function applyFilters() {
    const q = els.search.value.trim().toLowerCase();
    const brand = els.brand.value;
    const body = els.body.value;
    const fuel = els.fuel.value;
    const transmission = els.transmission.value;
    const min = parseFloat(els.priceMin.value) || 0;
    const max = parseFloat(els.priceMax.value) || Infinity;

    let results = VEHICLES.filter((v) => {
      const haystack = `${v.brand} ${v.model} ${v.year}`.toLowerCase();
      if (q && !haystack.includes(q)) return false;
      if (brand && v.brand !== brand) return false;
      if (body && v.bodyType !== body) return false;
      if (fuel && v.fuelType !== fuel) return false;
      if (transmission && v.transmission !== transmission) return false;
      if (v.price < min || v.price > max) return false;
      return true;
    });

    switch (els.sort.value) {
      case "price-asc":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        results.sort((a, b) => b.price - a.price);
        break;
      case "year-desc":
        results.sort((a, b) => b.year - a.year);
        break;
      case "mileage-asc":
        results.sort((a, b) => a.mileage - b.mileage);
        break;
      default:
        results.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    resultsCount.textContent = results.length;
    grid.style.display = results.length ? "" : "none";
    emptyState.style.display = results.length ? "none" : "";
    grid.innerHTML = results.map(vehicleCardHTML).join("");
    writeFiltersToURL();
  }

  Object.values(els).forEach((el) => {
    el.addEventListener("input", applyFilters);
    el.addEventListener("change", applyFilters);
  });

  document.getElementById("clear-filters").addEventListener("click", () => {
    Object.values(els).forEach((el) => (el.value = ""));
    els.sort.value = "latest";
    applyFilters();
  });

  readFiltersFromURL();
  applyFilters();
});
