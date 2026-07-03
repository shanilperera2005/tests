# Autodirect (Pvt) Limited — Website

Static HTML/CSS/JS site for Autodirect (Pvt) Limited, a car dealer in Colombo, Sri Lanka. No build step or backend required — open `index.html` in a browser, or serve the folder with any static file server.

## Structure

```
index.html            Home
vehicles.html          Inventory with search / filter / sort
vehicle-detail.html    Single vehicle page (reads ?id= from the URL)
about.html
reviews.html
contact.html           Contact form + Google Maps embed
sell-trade.html        Financing / trade-in lead form
test-drive.html        Test drive booking form
assets/css/style.css   Design system (colors, components, layout)
assets/js/data.js      Vehicle inventory data — ADMIN EDITS HAPPEN HERE
assets/js/main.js      Header, mobile menu, scroll animations, business info
assets/js/inventory.js Vehicles page filter/search/sort logic
assets/js/vehicle-detail.js  Renders vehicle-detail.html from data.js
assets/js/forms.js     Generic lead-form handler (WhatsApp prefill)
```

## Adding / editing / removing a vehicle

Open `assets/js/data.js` and add, edit, or delete an object in the `VEHICLES` array. Every page (home, inventory, detail, test drive) reads from this single file — no other changes needed. Set `status` to `"available"`, `"reserved"`, or `"sold"`.

## Updating business info

Phone, WhatsApp number, address and business hours are all defined once in `assets/js/main.js` under the `AUTODIRECT` object.

## Connecting a real backend

Forms currently open a prefilled WhatsApp chat on submit (no server required). To wire up a real backend/CRM, edit `assets/js/forms.js` at the `SEND TO BACKEND HERE` comment and add a `fetch()` call to your API.

## Local preview

```
python3 -m http.server 8000
```
Then open http://localhost:8000/index.html
