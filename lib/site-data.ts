export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface CapabilityCardProps {
  categoryTag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  tags?: string[];
  href?: string;
  className?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  href?: string;
}

export interface LifecycleStep {
  stepNumber: string;
  title: string;
  description: string;
  href?: string;
}

export interface FieldCardItem {
  id: string;
  categoryTag: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

export interface WhyReasonItem {
  id: string;
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface OfficeLocation {
  cityRole: string;
  addressLines: string[];
}

// ----------------------------------------------------
// Navigation Data
// ----------------------------------------------------
export const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
];

// ----------------------------------------------------
// Home Page Data
// ----------------------------------------------------
export const statsData: StatItem[] = [
  {
    value: "20,000+",
    label: "BATTERY PACKS\nDELIVERED",
  },
  {
    value: "150+",
    label: "ENGINEERING &\nMANUFACTURING",
  },
  {
    value: "15+",
    label: "YEARS SOLAR EPC\nEXPERIENCE",
  },
  {
    value: "40+",
    label: "SOLAR CLIENTS",
  },
  {
    value: "12v – 1500v",
    label: "BATTERY MANAGEMENT",
  },
  {
    value: "2 Hubs",
    label: "CHENNAI & BENGALURU",
  },
];

export const capabilitiesData: CapabilityCardProps[] = [
  {
    categoryTag: "STORE & POWER",
    title: "Battery Packs",
    description:
      "Packs that move and packs that sit still — 48 V scooter packs to 352 V bus packs, and a 10 kWh home stack to megawatt-hour storage. Tier-1 cells, 100 % of units tested.",
    imageSrc: "/images/capabilities/battery-pack.png",
    imageAlt: "Battery Packs",
    tags: ["EV PACKS", "HOME", "C&I", "GRID"],
    href: "/products/battery-packs",
  },
  {
    categoryTag: "MANAGE",
    title: "Battery Management",
    description:
      "The brain inside every pack we build — battery management from 12 V to 1500 V, an energy management layer, a cloud platform for fleet analytics, and transit systems for bus and rail.",
    imageSrc: "/images/capabilities/battery-management.png",
    imageAlt: "Battery Management System",
    tags: ["BMS", "EMS", "CLOUD", "TRANSIT"],
    href: "/products/battery-management",
  },
  {
    categoryTag: "GENERATE",
    title: "Solar",
    description:
      "PV design, turnkey EPC and long-run O&M — residential rooftop, commercial and industrial roofs, and utility-scale solar parks including floating PV.",
    imageSrc: "/images/capabilities/solar.png",
    imageAlt: "Solar Installation",
    tags: ["ROOF TOP", "C&I", "SOLAR PARK"],
    href: "/products/solar",
  },
  {
    categoryTag: "DELIVER",
    title: "EV Charging",
    description:
      "AC 3.3–22 kW and DC 30–360 kW chargers, with an OCPP-native charge management platform behind them.",
    imageSrc: "/images/capabilities/ev-charging.png",
    imageAlt: "EV Charging Station",
    tags: ["AC + DC", "CMS", "OCPP"],
    href: "/products/ev-charging",
  },
];

export const industriesData: IndustryItem[] = [
  {
    id: "01",
    title: "Automotive & fleet",
    description: "Packs, BMS and depot charging for 2W, 3W, LCV and tractors.",
    iconSrc: "/icons/car.svg",
    href: "/industries/automotive",
  },
  {
    id: "02",
    title: "Rail & transit",
    description:
      "Rolling-stock packs, battery management and passenger information.",
    iconSrc: "/icons/train.svg",
    href: "/industries/rail-transit",
  },
  {
    id: "03",
    title: "Commercial & industrial",
    description:
      "All four — solar, storage, control and charging behind the meter.",
    iconSrc: "/icons/solar-panel.svg",
    href: "/industries/commercial-industrial",
  },
  {
    id: "04",
    title: "Utility & grid",
    description: "Solar parks and megawatt-hour storage on three-tier control.",
    iconSrc: "/icons/battery-charge.svg",
    href: "/industries/utility-grid",
  },
  {
    id: "05",
    title: "Residential",
    description: "Rooftop solar with a modular home battery and AC charging.",
    iconSrc: "/icons/solar-house.svg",
    href: "/industries/residential",
  },
];

export const unifiedSystemFeatures: string[] = [
  "One requirements set spanning panel, pack, controller and charger",
  "One commissioning schedule instead of four to reconcile",
  "One warranty and one support line for the whole asset",
  "One data layer — monitoring, diagnostics and firmware over the air",
];

export const lifecycleStepsData: LifecycleStep[] = [
  {
    stepNumber: "Step 01",
    title: "Engineer",
    description:
      "Design, simulate, validate — system architecture through to type approval.",
    href: "/services/engineer",
  },
  {
    stepNumber: "Step 02",
    title: "Source",
    description:
      "BoM engineering and localised supply, with Tier-1 cell partnerships.",
    href: "/services/source",
  },
  {
    stepNumber: "Step 03",
    title: "Execute",
    description:
      "Build, deploy, integrate — factory assembly through site commissioning.",
    href: "/services/execute",
  },
  {
    stepNumber: "Step 04",
    title: "Operate",
    description:
      "Monitor, maintain, upgrade — remote diagnostics and over-the-air firmware.",
    href: "/services/operate",
  },
];

export const fieldCardsData: FieldCardItem[] = [
  {
    id: "01",
    categoryTag: "AUTOMOTIVE · PASSENGER 3W",
    title: "Montra Super Auto",
    imageSrc: "/images/field/e-rickshaw.png",
    imageAlt: "Montra Super Auto",
    href: "/industries/automotive",
  },
  {
    id: "02",
    categoryTag: "RAIL · INDIAN RAILWAYS",
    title: "Vande Bharat",
    imageSrc: "/images/field/vande-bharat.png",
    imageAlt: "Vande Bharat Express",
    href: "/industries/rail-transit",
  },
  {
    id: "03",
    categoryTag: "UTILITY · GRID-TIED SOLAR · 5 MW",
    title: "MH · RJ · KL",
    imageSrc: "/images/field/solar-plant.png",
    imageAlt: "Grid-Tied Solar Park",
    href: "/industries/utility-grid",
  },
];

export const whyReasonsData: WhyReasonItem[] = [
  {
    id: "01",
    title: "Complete circle",
    description:
      "Solar → battery → BMS/EMS → charger. The full loop from one supplier.",
  },
  {
    id: "02",
    title: "Single accountability",
    description:
      "One procurement, one warranty, one number to call. No finger-pointing.",
  },
  {
    id: "03",
    title: "Made in India",
    description:
      "From cell assembly to charger to cloud — engineered and manufactured locally.",
  },
  {
    id: "04",
    title: "Proven at scale",
    description:
      "20,000+ packs in the field, with programmes at TI Clean Mobility, Revolt and Indian Railways.",
  },
  {
    id: "05",
    title: "Modular by design",
    description:
      "12 V to 1500 V BMS · 2W packs to MWh-class storage · residential to utility solar.",
  },
];

// ----------------------------------------------------
// Footer Data
// ----------------------------------------------------
export const companyLinks: FooterLink[] = [
  { label: "Industries", href: "/industries" },
  { label: "About us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export const solutionsLinks: FooterLink[] = [
  { label: "Battery packs", href: "/solutions/battery-packs" },
  { label: "Battery management", href: "/solutions/battery-management" },
  { label: "Solar EV charging", href: "/solutions/solar-ev-charging" },
  { label: "All products & datasheets", href: "/products" },
];

export const quickLinks: FooterLink[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Information Security Policy", href: "/security-policy" },
  { label: "Sitemap", href: "/sitemap" },
];

export const officeLocations: OfficeLocation[] = [
  {
    cityRole: "Chennai — Manufacturing",
    addressLines: [
      "Sipcot Industrial Growth Centre,",
      "Vallam Vadagal, Kancheepuram, Tamil Nadu",
    ],
  },
  {
    cityRole: "Bengaluru — R&D",
    addressLines: [
      "Plot 27, KIADB Aerospace Park, Devanahalli,",
      "Bengaluru 562165, Karnataka",
    ],
  },
];
