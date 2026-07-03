/**
 * Vehicle Detail page — reads ?id= from the URL, looks the vehicle up in
 * VEHICLES (assets/js/data.js) and renders the full page around it.
 */
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const vehicle = VEHICLES.find((v) => v.id === id) || VEHICLES[0];
  if (!vehicle) return;

  const statusLabel = { available: "Available", reserved: "Reserved", sold: "Sold" }[vehicle.status];
  const title = `${vehicle.year} ${vehicle.brand} ${vehicle.model}`;
  const waMessage = `Hi Autodirect, I'm interested in the ${title} (${formatLKR(vehicle.price)}). Is it still available?`;
  const waTestDriveMessage = `Hi Autodirect, I'd like to book a test drive for the ${title}.`;

  document.title = `${title} for Sale in Colombo | Autodirect (Pvt) Limited`;
  document.getElementById("meta-desc").setAttribute(
    "content",
    `${title} — ${vehicle.mileage.toLocaleString()} km, ${vehicle.transmission}, ${vehicle.fuelType}. Priced at ${formatLKR(vehicle.price)}. Contact Autodirect (Pvt) Limited in Colombo for details or a test drive.`
  );
  document.getElementById("crumb-name").textContent = title;
  document.getElementById("v-title").textContent = title;
  document.getElementById("v-description").textContent = vehicle.description;
  document.getElementById("inquiry-vehicle-field").value = title;

  document.getElementById("v-badges").innerHTML = [
    vehicle.bodyType, vehicle.condition + " Condition", vehicle.registration
  ].map((t) => `<span class="tag-pill">${t}</span>`).join("");

  const mainImg = document.getElementById("gallery-main-img");
  mainImg.src = vehicle.images[0];
  mainImg.alt = title;
  document.getElementById("gallery-thumbs").innerHTML = vehicle.images
    .map((src, i) => `<img src="${src}" alt="${title} photo ${i + 1}" class="${i === 0 ? "active" : ""}" data-idx="${i}">`)
    .join("");
  document.querySelectorAll("#gallery-thumbs img").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImg.src = vehicle.images[thumb.dataset.idx];
      document.querySelectorAll("#gallery-thumbs img").forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  const specs = [
    ["Year", vehicle.year],
    ["Mileage", vehicle.mileage.toLocaleString() + " km"],
    ["Transmission", vehicle.transmission],
    ["Fuel Type", vehicle.fuelType],
    ["Engine Capacity", vehicle.engineCapacity],
    ["Condition", vehicle.condition],
    ["Registration", vehicle.registration],
    ["Body Type", vehicle.bodyType],
  ];
  document.getElementById("v-specs").innerHTML = specs
    .map(([lbl, val]) => `<div class="spec-item"><div class="lbl">${lbl}</div><div class="val">${val}</div></div>`)
    .join("");

  document.getElementById("v-features").innerHTML = vehicle.features.map((f) => `<span>${f}</span>`).join("");

  const statusBadge = document.getElementById("v-status-badge");
  statusBadge.textContent = statusLabel;
  statusBadge.classList.add(`status-${vehicle.status}`);
  document.getElementById("v-price").textContent = formatLKR(vehicle.price);

  const waBtn = document.getElementById("v-wa-btn");
  waBtn.href = waLink(waMessage);
  document.getElementById("v-wa-mobile").href = waLink(waMessage);
  const waFloat = document.getElementById("v-wa-float");
  if (waFloat) waFloat.href = waLink(waMessage);
  document.getElementById("v-testdrive-btn").href = `test-drive.html?id=${vehicle.id}`;

  if (vehicle.status === "sold") {
    waBtn.textContent = "Ask About Similar Vehicles";
  }

  function vehicleCardHTML(v) {
    const wa = `Hi Autodirect, I'm interested in the ${v.year} ${v.brand} ${v.model} (${formatLKR(v.price)}). Is it still available?`;
    return `
    <div class="card vehicle-card reveal in-view">
      <a href="vehicle-detail.html?id=${v.id}" class="vehicle-media" style="display:block;">
        <span class="status-badge status-${v.status}">${{ available: "Available", reserved: "Reserved", sold: "Sold" }[v.status]}</span>
        <span class="vehicle-price-tag">${formatLKR(v.price)}</span>
        <img src="${v.images[0]}" alt="${v.year} ${v.brand} ${v.model}" loading="lazy">
      </a>
      <div class="vehicle-body">
        <a href="vehicle-detail.html?id=${v.id}"><h3 class="vehicle-title">${v.brand} ${v.model}</h3></a>
        <div class="vehicle-year">${v.year} &middot; ${v.bodyType}</div>
        <div class="spec-row">
          <span>${v.mileage.toLocaleString()} km</span>
          <span>${v.transmission}</span>
          <span>${v.fuelType}</span>
        </div>
        <div class="vehicle-actions">
          <a href="vehicle-detail.html?id=${v.id}" class="btn btn-outline">View Details</a>
          <a href="${waLink(wa)}" target="_blank" rel="noopener" class="btn btn-whatsapp">WhatsApp</a>
        </div>
      </div>
    </div>`;
  }

  const similar = VEHICLES.filter((v) => v.id !== vehicle.id && (v.bodyType === vehicle.bodyType || v.brand === vehicle.brand)).slice(0, 3);
  const fallback = VEHICLES.filter((v) => v.id !== vehicle.id).slice(0, 3);
  document.getElementById("similar-grid").innerHTML = (similar.length ? similar : fallback).map(vehicleCardHTML).join("");
});
