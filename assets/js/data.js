/**
 * Autodirect (Pvt) Limited — Vehicle Inventory Data
 * --------------------------------------------------
 * ADMIN NOTE: This is the single source of truth for every vehicle shown on
 * the Vehicles page and Vehicle Detail page. To add, edit, or remove a
 * listing, just add/edit/remove an object below — no other file needs to
 * change. Keep the "id" values unique (used in vehicle-detail.html?id=).
 *
 * status: "available" | "reserved" | "sold"
 * images: first image is used as the card thumbnail + gallery main image.
 */

const VEHICLES = [
  {
    id: "toyota-aqua-2019",
    brand: "Toyota",
    model: "Aqua Hybrid",
    year: 2019,
    price: 8950000,
    mileage: 42000,
    transmission: "Automatic",
    fuelType: "Hybrid",
    bodyType: "Hatchback",
    engineCapacity: "1500cc",
    condition: "Excellent",
    registration: "Registered (WP)",
    status: "available",
    dateAdded: "2026-06-20",
    description: "A well-maintained Toyota Aqua Hybrid, ideal for city driving with excellent fuel economy. Single owner, full-service history, and accident-free. Comes with a fresh valuation report and is ready for immediate transfer.",
    features: ["Reverse Camera", "Alloy Wheels", "Push Start", "Air Conditioning", "Power Steering", "Hybrid System Health Checked", "ABS Brakes", "Airbags"],
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "honda-vezel-2020",
    brand: "Honda",
    model: "Vezel Hybrid RS",
    year: 2020,
    price: 12750000,
    mileage: 31500,
    transmission: "Automatic",
    fuelType: "Hybrid",
    bodyType: "SUV",
    engineCapacity: "1500cc",
    condition: "Excellent",
    registration: "Registered (WP)",
    status: "available",
    dateAdded: "2026-06-28",
    description: "Sporty RS trim Honda Vezel Hybrid with low mileage and a clean interior. Great for families who want SUV comfort with hybrid running costs. Test drives welcome at our Colombo location.",
    features: ["Sunroof", "Paddle Shifters", "LED Headlights", "Reverse Camera", "Cruise Control", "Leather Seats", "Alloy Wheels", "Keyless Entry"],
    images: [
      "https://images.unsplash.com/photo-1605559911160-a3d95d213904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "suzuki-wagonr-2021",
    brand: "Suzuki",
    model: "Wagon R Stingray",
    year: 2021,
    price: 6450000,
    mileage: 18000,
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "Hatchback",
    engineCapacity: "660cc",
    condition: "Excellent",
    registration: "Registered (WP)",
    status: "available",
    dateAdded: "2026-06-30",
    description: "Compact and economical, this Wagon R Stingray is perfect as a first car or a practical city runabout. Low mileage with a very clean, dent-free body.",
    features: ["Air Conditioning", "Power Windows", "Central Locking", "LED Daytime Lights", "Airbags", "ABS Brakes"],
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "toyota-prius-2018",
    brand: "Toyota",
    model: "Prius",
    year: 2018,
    price: 9800000,
    mileage: 55000,
    transmission: "Automatic",
    fuelType: "Hybrid",
    bodyType: "Sedan",
    engineCapacity: "1800cc",
    condition: "Good",
    registration: "Registered (WP)",
    status: "reserved",
    dateAdded: "2026-06-10",
    description: "Comfortable, spacious and famously reliable, this Prius has been well cared for with documented service records. Currently reserved for a customer — similar units may become available soon.",
    features: ["Touchscreen Infotainment", "Reverse Camera", "Climate Control", "Cruise Control", "Alloy Wheels", "Keyless Entry"],
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "nissan-leaf-2020",
    brand: "Nissan",
    model: "Leaf",
    year: 2020,
    price: 10200000,
    mileage: 24000,
    transmission: "Automatic",
    fuelType: "Electric",
    bodyType: "Hatchback",
    engineCapacity: "Electric Motor",
    condition: "Excellent",
    registration: "Registered (WP)",
    status: "available",
    dateAdded: "2026-06-25",
    description: "Zero-emission Nissan Leaf with strong battery health and low running costs — ideal for Colombo commuting. Includes home charging cable and full digital service history.",
    features: ["Regenerative Braking", "Reverse Camera", "Touchscreen Display", "Climate Control", "Alloy Wheels", "Battery Health Verified"],
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "toyota-axio-2017",
    brand: "Toyota",
    model: "Axio Hybrid",
    year: 2017,
    price: 7250000,
    mileage: 68000,
    transmission: "Automatic",
    fuelType: "Hybrid",
    bodyType: "Sedan",
    engineCapacity: "1500cc",
    condition: "Good",
    registration: "Registered (WP)",
    status: "available",
    dateAdded: "2026-05-30",
    description: "A dependable and fuel-efficient sedan, the Axio Hybrid is a popular choice for both personal and family use. Priced competitively for its condition and mileage.",
    features: ["Air Conditioning", "Power Steering", "Reverse Sensors", "Airbags", "ABS Brakes", "Alloy Wheels"],
    images: [
      "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "honda-fit-2019",
    brand: "Honda",
    model: "Fit Hybrid GP5",
    year: 2019,
    price: 8100000,
    mileage: 39500,
    transmission: "Automatic",
    fuelType: "Hybrid",
    bodyType: "Hatchback",
    engineCapacity: "1500cc",
    condition: "Excellent",
    registration: "Registered (WP)",
    status: "sold",
    dateAdded: "2026-05-15",
    description: "This Honda Fit Hybrid has been sold, but similar well-maintained units come into our inventory regularly. Contact us and we'll notify you as soon as a matching vehicle is available.",
    features: ["Reverse Camera", "Push Start", "Air Conditioning", "Alloy Wheels", "Airbags"],
    images: [
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "kia-sportage-2019",
    brand: "KIA",
    model: "Sportage",
    year: 2019,
    price: 15900000,
    mileage: 46000,
    transmission: "Automatic",
    fuelType: "Diesel",
    bodyType: "SUV",
    engineCapacity: "2000cc",
    condition: "Excellent",
    registration: "Registered (WP)",
    status: "available",
    dateAdded: "2026-06-15",
    description: "A bold, spacious SUV with strong road presence and a comfortable cabin — perfect for families who need extra space without compromising on style.",
    features: ["Panoramic Sunroof", "Leather Seats", "Reverse Camera", "Cruise Control", "Alloy Wheels", "Climate Control", "Keyless Entry"],
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "suzuki-alto-2020",
    brand: "Suzuki",
    model: "Alto",
    year: 2020,
    price: 4650000,
    mileage: 21000,
    transmission: "Manual",
    fuelType: "Petrol",
    bodyType: "Hatchback",
    engineCapacity: "660cc",
    condition: "Excellent",
    registration: "Registered (WP)",
    status: "available",
    dateAdded: "2026-06-22",
    description: "An affordable, easy-to-maintain city car with low mileage — a great entry-level option backed by our full inspection and support.",
    features: ["Air Conditioning", "Power Steering", "Central Locking", "Airbags"],
    images: [
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

// Expose for non-module script usage across pages
if (typeof window !== "undefined") window.VEHICLES = VEHICLES;
