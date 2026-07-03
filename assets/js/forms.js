/**
 * Generic lead-form handler used by Contact, Test Drive, Sell/Trade and
 * Vehicle Inquiry forms. No backend is wired up yet — on submit we:
 *   1. Run native HTML5 validation
 *   2. Show an inline success message
 *   3. Reset the form
 *   4. Open a prefilled WhatsApp chat with the submitted details so the
 *      lead still reaches the Autodirect team instantly.
 *
 * To connect a real backend later, replace the block marked
 * "SEND TO BACKEND HERE" with a fetch() call to your API/CRM endpoint.
 */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form.lead-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = Object.fromEntries(new FormData(form).entries());

      // SEND TO BACKEND HERE (e.g. fetch('/api/leads', { method:'POST', body: JSON.stringify(data) }))

      const template = form.getAttribute("data-wa-template") || "New inquiry from {{name}} ({{phone}})";
      const message = template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] || "-");

      const successEl = form.parentElement.querySelector(".form-success") || form.querySelector(".form-success");
      if (successEl) {
        successEl.classList.add("show");
        successEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      const waBtn = form.getAttribute("data-wa-redirect");
      if (waBtn !== "false") {
        window.open(waLink(message), "_blank", "noopener");
      }

      form.reset();
      setTimeout(() => successEl && successEl.classList.remove("show"), 8000);
    });
  });
});
