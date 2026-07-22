export const SERVICES = [
  {
    category: "Special Packages",
    description: "Our signature and specialized massage therapies for complete rejuvenation.",
    items: [
      { id: "signature-massage", title: "Nature Nest Signature Massage", price: "Rs. 2,000 / 2,800", duration: "60 min / 90 min", description: "Our exclusive full-body massage combining the best techniques." },
      { id: "ayurvedic-massage", title: "Ayurvedic Massage (Herbal Oil)", price: "Rs. 2,800 / 3,500", duration: "60 min / 90 min", description: "Holistic healing using traditional warm herbal oils." },
      { id: "sports-massage", title: "Deep Tissue Sports Massage", price: "Rs. 3,000 / 4,000", duration: "60 min / 90 min", description: "Intense muscle therapy for active individuals." },
      { id: "thai-massage", title: "Thai Massage with Stretching", price: "Rs. 3,500 / 5,000", duration: "60 min / 90 min", description: "Active therapy incorporating yoga-like stretches." },
      { id: "pregnancy-massage", title: "Pregnancy Massage (Light Massage)", price: "Rs. 2,500 / 4,000", duration: "60 min / 90 min", description: "Safe, soothing massage to comfort expecting mothers." },
      { id: "couple-group-massage", title: "Couple/Group Massage", price: "Rs. 2,500 / 4,000", duration: "60 min / 90 min", description: "Sauna, Steam & Jacuzzi included (per person)." },
    ]
  },
  {
    category: "Relaxation Services",
    description: "Targeted therapies to relieve stress and tension.",
    items: [
      { id: "kids-massage", title: "Kids Massage Therapy (10–15 yrs)", price: "Rs. 1,800", duration: "60 min", description: "Gentle and soothing massage designed specifically for children." },
      { id: "head-shoulder", title: "Head & Shoulder Massage Therapy", price: "Rs. 1,500 / 2,500", duration: "30 min / 60 min", description: "Relieve tension and stress focused on the head, neck, and shoulders." },
      { id: "feet-palm", title: "Feet & Palm Reflexology Therapy", price: "Rs. 1,500 / 2,500", duration: "30 min / 60 min", description: "Targeted pressure point therapy for ultimate relaxation." },
      { id: "head-massage", title: "Head Massage", price: "Rs. 800", duration: "30 min", description: "Focuses on the scalp to relieve stress and improve circulation." },
      { id: "spinal-massage", title: "Spinal Massage", price: "Rs. 1,500", duration: "45 min", description: "Therapeutic massage focusing on back, neck, and shoulder alignment." },
      { id: "shirodhara", title: "Shirodhara Therapy", price: "Rs. 4,500", duration: "45 min", description: "Traditional Ayurvedic therapy involving warm oil poured over the forehead." },
    ]
  },
  {
    category: "Beauty & Wellness",
    description: "Treatments to refresh and revitalize your skin and body.",
    items: [
      { id: "facelift-massage", title: "Facelift Massage", price: "Rs. 1,500 / 2,500", duration: "60 min / 90 min", description: "Natural contouring and lifting massage for the face." },
      { id: "fish-therapy", title: "Fish Therapy", price: "Rs. 700", duration: "30 min", description: "Unique and fun exfoliation therapy for the feet." },
    ]
  },
  {
    category: "Traditional & Packages",
    description: "Complete wellness experiences combining multiple therapies.",
    items: [
      { id: "traditional-body", title: "Traditional Full Body Massage", price: "Rs. 4,000", duration: "60 min", description: "Includes Sauna, Steam or Jacuzzi." },
      { id: "deep-scrub", title: "Deep Tissue & Scrub Package", price: "Rs. 5,000", duration: "135 min", description: "60 min Deep Tissue Massage, 30 min Herbal Coffee Scrub, 45 min Sauna/Steam/Jacuzzi." },
    ]
  },
  {
    category: "Wellness Facility Add-ons",
    description: "Premium facilities for detoxification and relaxation.",
    items: [
      { id: "sauna", title: "Sauna", price: "Rs. 500 / person", duration: "60 min", description: "" },
      { id: "steam", title: "Steam", price: "Rs. 500 / person", duration: "60 min", description: "" },
      { id: "jacuzzi", title: "Jacuzzi", price: "Rs. 500 / person", duration: "60 min", description: "" },
      { id: "facility-combo", title: "Sauna + Steam + Jacuzzi Combo", price: "Rs. 800 / person", duration: "60 min", description: "" },
    ]
  },
  {
    category: "Men's Grooming",
    description: "Expert styling and grooming services.",
    items: [
      { id: "mens-classic-cut", title: "Classic Hair Cut", price: "Rs. 300", duration: "-", description: "" },
      { id: "mens-modern-cut", title: "Modern Hair Cut", price: "Rs. 400", duration: "-", description: "" },
      { id: "mens-hair-wash", title: "Hair Wash and Dry", price: "Rs. 100", duration: "-", description: "" },
      { id: "mens-hair-style", title: "Hair Styling", price: "Rs. 100", duration: "-", description: "" },
      { id: "mens-hair-trim", title: "Hair Trim", price: "Rs. 150", duration: "-", description: "" },
      { id: "mens-beard-trim", title: "Beard Trim", price: "Rs. 100", duration: "-", description: "" },
      { id: "mens-normal-shave", title: "Normal Shaving", price: "Rs. 100", duration: "-", description: "" },
      { id: "mens-special-shave", title: "Special Shaving", price: "Rs. 150", duration: "-", description: "" },
      { id: "mens-hair-spa", title: "Hair Spa", price: "Rs. 500", duration: "-", description: "" },
      { id: "mens-keratin", title: "Keratine Treatment", price: "Rs. 450", duration: "-", description: "" },
      { id: "mens-deep-cond", title: "Deep Conditioning", price: "Rs. 350", duration: "-", description: "" },
      { id: "mens-color-premium", title: "Hair Colour (Premium)", price: "Rs. 500", duration: "-", description: "" },
      { id: "mens-color-black", title: "Hair Colour (Black)", price: "Rs. 300", duration: "-", description: "" },
      { id: "mens-straightening", title: "Hair Straightening", price: "Rs. 1500–2500", duration: "-", description: "" },
      { id: "mens-highlight", title: "Highlight", price: "Rs. 1000+", duration: "-", description: "" },
      { id: "mens-global-color", title: "Global Hair Color", price: "Rs. 500", duration: "-", description: "" },
      { id: "mens-root-touch", title: "Root Touch Up", price: "Rs. 300", duration: "-", description: "" },
      { id: "mens-facial", title: "Facial", price: "Rs. 1500–2500", duration: "-", description: "" },
      { id: "mens-face-wash-scrub", title: "Face Wash with Scrubbing", price: "Rs. 500", duration: "-", description: "350 + 150" },
      { id: "mens-bleaching", title: "Bleaching", price: "Rs. 300", duration: "-", description: "" },
      { id: "mens-threading", title: "Threading", price: "Rs. 50", duration: "-", description: "" },
      { id: "mens-deep-cleanse", title: "Deep Cleansing", price: "Rs. 150", duration: "-", description: "" },
      { id: "mens-face-mask", title: "Face Mask", price: "Rs. 250", duration: "-", description: "" },
      { id: "mens-blackhead", title: "Blackhead & Whitehead Removal", price: "Rs. 500", duration: "-", description: "" },
      { id: "mens-face-massage", title: "Face Massage", price: "Rs. 150", duration: "-", description: "" },
      { id: "mens-color-app", title: "Hair Colour Application", price: "Rs. 100", duration: "-", description: "Client's Own Color" },
      { id: "mens-head-massage", title: "Head Massage", price: "Rs. 150", duration: "-", description: "" },
      { id: "mens-body-massage", title: "Body Massage", price: "Rs. 250", duration: "-", description: "" },
    ]
  },
  {
    category: "Women's Grooming",
    description: "Premium salon services for women.",
    items: [
      { id: "womens-cut", title: "Hair Cut", price: "Rs. 700", duration: "-", description: "" },
      { id: "womens-curls-straight", title: "Curls / Straight", price: "Rs. 2000–3500", duration: "-", description: "" },
      { id: "womens-color", title: "Hair Colour", price: "Rs. 1500–3000", duration: "-", description: "" },
      { id: "womens-threading", title: "Threading", price: "Rs. 50", duration: "-", description: "" },
    ]
  },
  {
    category: "Cafe - Coffee & Hot Drinks",
    description: "Refresh yourself with our curated beverage selection.",
    items: [
      { id: "espresso", title: "Espresso", price: "Rs. 120", duration: "-", description: "" },
      { id: "doppio", title: "Doppio", price: "Rs. 130", duration: "-", description: "" },
      { id: "americano", title: "Americano / Iced Americano", price: "Rs. 150 / 180", duration: "-", description: "" },
      { id: "double-americano", title: "Double Americano", price: "Rs. 170", duration: "-", description: "" },
      { id: "cappuccino", title: "Cappuccino", price: "Rs. 170", duration: "-", description: "" },
      { id: "latte", title: "Cafe Latte / Iced Latte", price: "Rs. 180 / 200", duration: "-", description: "" },
      { id: "honey-latte", title: "Honey Latte", price: "Rs. 220", duration: "-", description: "" },
      { id: "caramel-latte", title: "Caramel Latte", price: "Rs. 250", duration: "-", description: "" },
      { id: "mocha", title: "Cafe Mocha / Iced Mocha", price: "Rs. 280 / 250", duration: "-", description: "" },
      { id: "iced-flavored-latte", title: "Iced Flavored Latte", price: "Rs. 250", duration: "-", description: "" },
      { id: "black-tea", title: "Black Tea / Lemon Tea", price: "Rs. 40 / 50", duration: "-", description: "" },
      { id: "milk-tea", title: "Milk Tea", price: "Rs. 80", duration: "-", description: "" },
      { id: "hot-chocolate", title: "Hot Chocolate", price: "Rs. 200", duration: "-", description: "" },
      { id: "green-tea", title: "Green Tea / Pot", price: "Rs. 70 / 100", duration: "-", description: "" },
    ]
  },
  {
    category: "Cafe - Cold Beverages & Hookah",
    description: "Cool down and unwind.",
    items: [
      { id: "frappe", title: "Frappe", price: "Rs. 280", duration: "-", description: "Oreo, Mocha, Caramel, Strawberry, Vanilla" },
      { id: "milk-shakes", title: "Milk Shakes", price: "Rs. 250", duration: "-", description: "Vanilla, Chocolate, Oreo, Caramel, Strawberry" },
      { id: "ice-tea", title: "Ice Tea", price: "Rs. 180", duration: "-", description: "Apple, Peach, Lemon" },
      { id: "lemonade", title: "Lemonade / Fresh Lemon Soda", price: "Rs. 150", duration: "-", description: "" },
      { id: "mint-lemonade", title: "Blended Mint Lemonade", price: "Rs. 200", duration: "-", description: "" },
      { id: "lassi", title: "Lassi", price: "Rs. 150", duration: "-", description: "Plain, Flavor, Seasonal" },
      { id: "juices", title: "Juice", price: "Rs. 200 / 300", duration: "-", description: "Real Juice / Fresh Juice" },
      { id: "beer", title: "Barahsinghe Can", price: "Rs. 500", duration: "-", description: "" },
      { id: "red-bull", title: "Red Bull / Xtream", price: "Rs. 200 / 250", duration: "-", description: "" },
      { id: "soft-drinks", title: "Coke / Fanta / Sprite", price: "Rs. 100", duration: "-", description: "" },
      { id: "hookah", title: "Hookah", price: "Rs. 450", duration: "-", description: "" },
    ]
  }
];
