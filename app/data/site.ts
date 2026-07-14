export const siteUrl = "https://thegreatestconcrete.netlify.app";

export const business = {
  name: "The Greatest Concrete Solutions LLC",
  shortName: "The Greatest Concrete Solutions",
  positioning: "Woman-owned local concrete contractor",
  phoneDisplay: "(706) 358-9325",
  phoneHref: "tel:+17063589325",
  smsHref: "sms:+17063589325",
  address: { city: "Columbus", region: "GA", postalCode: "31909", country: "US" },
  serviceAreas: ["Columbus, GA", "Shiloh, GA", "West Point, GA", "Surrounding Georgia communities", "Nearby Alabama communities"],
  services: [
    { slug: "concrete-driveways", name: "Concrete Driveways", shortName: "Driveways", image: "/images/concrete-hero.png", benefit: "A cleaner, more useful arrival for daily parking and curb appeal.", uses: ["Home driveway replacement conversations", "Additional parking areas", "Property access improvements"], description: "Concrete driveway planning starts with how vehicles enter, park and turn around on your property. Share the location, approximate size and any drainage or access concerns so the proposed scope can be shaped around your home.", meta: "Concrete driveway contractor in Columbus, GA for custom driveway projects across nearby Georgia and Alabama communities." },
    { slug: "concrete-patios", name: "Concrete Patios", shortName: "Patios", image: "/images/concrete-patio.png", benefit: "Outdoor space that feels easier to use for gathering, grilling and everyday living.", uses: ["Backyard seating areas", "Patio additions", "Outdoor living foundations"], description: "A patio should fit the way you use your yard. The estimate conversation can cover the project location, access to the work area, desired size and how the patio should connect with the home or walkways.", meta: "Custom concrete patios in Columbus, GA and surrounding Georgia and Alabama communities." },
    { slug: "concrete-slabs", name: "Concrete Slabs", shortName: "Slabs", image: "/images/concrete-craft.png", benefit: "A purposeful concrete base planned around the structure or use it needs to support.", uses: ["Utility slabs", "Shed or equipment pads", "Property improvement bases"], description: "Concrete slabs vary by use, site conditions and access. Describe what the slab is for, where it will sit and any size or placement requirements so the project can be discussed clearly.", meta: "Concrete slab contractor serving Columbus, GA with custom slab work for homes and properties." },
    { slug: "concrete-walkways", name: "Concrete Walkways", shortName: "Walkways", image: "/images/concrete-patio.png", benefit: "A practical path that connects entries, outdoor spaces and everyday routes.", uses: ["Front walks", "Side-yard paths", "Connections between patios and entries"], description: "Walkway projects often depend on the route, width, access points and surrounding landscaping. Send details about where the path should begin and end so the scope can be discussed.", meta: "Concrete walkways in Columbus, GA for homes and properties across nearby Georgia and Alabama communities." },
  ],
  reviews: [] as Array<{ name: string; text: string; platform: string; url: string }>,
};

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/#service-area", label: "Service Area" },
  { href: "/#faq", label: "FAQ" },
];
