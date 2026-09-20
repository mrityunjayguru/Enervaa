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

export interface FootprintItem {
  location: string;
  description: string;
}

export interface LeaderItem {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  linkedin?: string;
  phone?: string;
  email?: string;
}

export interface SpecialistTeamItem {
  id: string;
  logoSrc: string;
  logoAlt: string;
  categoryTag: string;
  title: string;
  description: string;
  tags: string[];
}

export interface CommercialModelItem {
  id: string;
  modelTag: string;
  title: string;
  description: string;
}

export interface FourDeskItem {
  id: string;
  categoryTag: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  categoryTag: string;
  categoryName: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  content: string[];
}

export interface ProductQuickNavItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  href: string;
}

export interface PillarItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface EvBatteryPackItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  href?: string;
}

export interface EnergyStorageSystemItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  href?: string;
}

export interface ProductSpecRow {
  parameter: string;
  specification: string;
}

export interface ProductDetailItem {
  slug: string;
  aliases?: string[];
  categoryBreadcrumb: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  contextLink?: string;
  issuedNoteTitle?: string;
  issuedNoteText?: string;
  specifications?: ProductSpecRow[];
}

// ----------------------------------------------------
// Navigation Data
// ----------------------------------------------------
export const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
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

export const aboutStatsData: StatItem[] = [
  {
    value: "150+",
    label: "ENGINEERING &\nMANUFACTURING",
  },
  {
    value: "2",
    label: "STRATEGIC HUBS",
  },
  {
    value: "15+",
    label: "YEARS LONGEST\nTRACK RECORD",
  },
  {
    value: "5",
    label: "SOLUTION LINES",
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

export const aboutLifecycleStepsData: LifecycleStep[] = [
  {
    stepNumber: "Step 01",
    title: "Engineer",
    description:
      "System architecture, simulation, validation and homologation support, on one requirements set.",
    href: "/services/engineer",
  },
  {
    stepNumber: "Step 02",
    title: "Source",
    description:
      "BoM engineering, Tier-1 cell partnerships and localised supply — import exposure engineered down, not passed on.",
    href: "/services/source",
  },
  {
    stepNumber: "Step 03",
    title: "Execute",
    description:
      "Factory build, site construction, integration and commissioning, on one schedule.",
    href: "/services/execute",
  },
  {
    stepNumber: "Step 04",
    title: "Operate",
    description:
      "Remote monitoring, preventive maintenance, cell-level diagnostics and OTA firmware for the life of the asset.",
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

export const footprintData: FootprintItem[] = [
  {
    location: "Chennai",
    description:
      "Headquarters and manufacturing. Battery pack lines at Sipcot Industrial Growth Centre, Vallam Vadagal, Kancheepuram, and charger manufacturing.",
  },
  {
    location: "Bengaluru",
    description:
      "Research and development. Hardware, firmware and cloud teams at KIADB Aerospace Park, Devanahalli.",
  },
  {
    location: "Reach",
    description:
      "Projects delivered across India, with solar experience extending to Africa and Italy.",
  },
];

export const leadershipData: LeaderItem[] = [
  {
    id: "01",
    name: "Emerson Vetrovs",
    role: "Founder & Chairman",
    imageSrc: "/images/about/img-1.png",
    linkedin: "#",
    phone: "#",
    email: "#",
  },
  {
    id: "02",
    name: "Marley Culhane",
    role: "Vice Chairperson",
    imageSrc: "/images/about/img-2.png",
    linkedin: "#",
    phone: "#",
    email: "#",
  },
  {
    id: "03",
    name: "Lincoln Franci",
    role: "CEO",
    imageSrc: "/images/about/img-3.png",
    linkedin: "#",
    phone: "#",
    email: "#",
  },
  {
    id: "04",
    name: "Dulce Bator",
    role: "President - Manufacturing",
    imageSrc: "/images/about/img-4.png",
    linkedin: "#",
    phone: "#",
    email: "#",
  },
];

export const specialistTeamsData: SpecialistTeamItem[] = [
  {
    id: "01",
    logoSrc: "/images/about/icons/awev.svg",
    logoAlt: "AWEV Solutions",
    categoryTag: "STORE · POWER",
    title: "AWEV Solutions",
    description:
      "Battery pack manufacturing for EVs, energy storage and special applications. Founded 2018, Chennai, 100+ people.",
    tags: ["EV PACKS", "BESS"],
  },
  {
    id: "02",
    logoSrc: "/images/about/icons/revx.svg",
    logoAlt: "ReVx Energy",
    categoryTag: "MANAGE",
    title: "ReVx Energy",
    description:
      "Battery and mobility intelligence — BMS, EMS, cloud analytics and transit systems. Founded December 2020, Bengaluru.",
    tags: ["VINCIX", "TURINGX", "NAVAS"],
  },
  {
    id: "03",
    logoSrc: "/images/about/icons/playsolar.svg",
    logoAlt: "PlaySolar",
    categoryTag: "GENERATE",
    title: "PlaySolar",
    description:
      "Solar PV system integration — design, EPC, asset management and O&M, with monitoring and automated cleaning platforms.",
    tags: ["ROOF TOP", "C&I", "SOLAR PARK"],
  },
  {
    id: "04",
    logoSrc: "/images/about/icons/plugzmart.svg",
    logoAlt: "Plugzmart",
    categoryTag: "DELIVER",
    title: "Plugzmart",
    description:
      "EV charging hardware and software — AC, DC and portable chargers with the Relay management platform. Founded 2018, Chennai.",
    tags: ["AC + DC", "RELAY CMS"],
  },
];

export const commercialModelsData: CommercialModelItem[] = [
  {
    id: "01",
    modelTag: "MODEL 01",
    title: "CAPEX",
    description:
      "You own the asset outright. Enervaa designs, builds, commissions and hands over, then stays on for O&M and warranty.",
  },
  {
    id: "02",
    modelTag: "MODEL 02",
    title: "OPEX · per-kWh PPA",
    description:
      "Enervaa develops the project and builds the SPV that owns the asset; you pay only for units consumed, with debt and equity carried at the SPV.",
  },
];

export const fourDesksData: FourDeskItem[] = [
  {
    id: "01",
    categoryTag: "STORE",
    title: "AWEV Solutions",
    description: "EV battery packs, residential, C&I and grid storage. Chennai.",
    buttonLabel: "Battery — ESS \u2192",
    href: "/solutions/battery-packs",
  },
  {
    id: "02",
    categoryTag: "MANAGE",
    title: "ReVx Energy",
    description: "BMS, EMS, battery cloud and transit systems. Bengaluru.",
    buttonLabel: "Battery intelligence \u2192",
    href: "/solutions/battery-management",
  },
  {
    id: "03",
    categoryTag: "GENERATE",
    title: "PlaySolar",
    description: "PV design, EPC, asset management and O&M.",
    buttonLabel: "Solar \u2192",
    href: "/solutions/solar-ev-charging",
  },
  {
    id: "04",
    categoryTag: "DELIVER",
    title: "Plugzmart",
    description: "AC and DC chargers, Relay bridge and B2B CMS. Chennai.",
    buttonLabel: "EV charging \u2192",
    href: "/solutions/ev-charging",
  },
];

export const blogPostsData: BlogPost[] = [
  {
    slug: "what-ais-156-actually-asks-of-a-pack",
    categoryTag: "BATTERY MANAGEMENT · DRAFT",
    categoryName: "BATTERY MANAGEMENT",
    title: "What AIS-156 actually asks of a pack",
    excerpt:
      "The certification is often read as a box to tick. In practice it shapes the cell arrangement, the thermal design and the diagnostic coverage of the BMS — and it is far cheaper to design for than to retrofit.",
    imageSrc: "/images/blogs/img-1.png",
    imageAlt: "Battery Pack Inspection & AIS-156 Testing",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies orci libero, et maximus massa tempor id. Cras nec malesuada ligula, non iaculis nibh. Mauris tempor pellentesque dui, vel porta dolor iaculis vitae. Curabitur vulputate nisi nec magna eleifend dignissim. Ut non massa sapien. Nulla eu rutrum elit, et finibus arcu. Nunc lacus nisl, iaculis eget nunc id, fermentum ultricies arcu. Quisque vitae magna non nisl faucibus fringilla nec eleifend sapien. Curabitur egestas neque leo, et ultrices nisi mattis non.",
      "Nam mattis magna nec nunc sagittis tempus. In hac habitasse platea dictumst. Cras vel consequat turpis, at ornare ex. Nam id odio enim. Nunc non eleifend mi. Phasellus efficitur dolor eget aliquam condimentum. Aliquam erat volutpat. Aenean mattis neque risus, id lacinia sem elementum a. Quisque lobortis est sapien, nec ultricies diam pellentesque cursus. Nullam orci diam, finibus sit amet velit in, maximus pellentesque magna. Phasellus nisl urna, ultricies non laoreet ut, condimentum sed elit. Quisque ultrices convallis quam. Quisque eleifend laoreet metus, eu ultrices orci egestas sed. Curabitur a ultrices sapien, tincidunt venenatis mi.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo."
    ]
  },
  {
    slug: "sizing-storage-against-a-real-ci-load-profile",
    categoryTag: "ENERGY STORAGE · DRAFT",
    categoryName: "BATTERY MANAGEMENT",
    title: "Sizing storage against a real C&I load profile",
    excerpt:
      "Peak shaving, backup duration and tariff arbitrage pull the answer in three different directions. A walk through how we resolve them from fifteen-minute interval data.",
    imageSrc: "/images/blogs/img-2.png",
    imageAlt: "Battery Storage Drawer and Module",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies orci libero, et maximus massa tempor id. Cras nec malesuada ligula, non iaculis nibh. Mauris tempor pellentesque dui, vel porta dolor iaculis vitae. Curabitur vulputate nisi nec magna eleifend dignissim. Ut non massa sapien. Nulla eu rutrum elit, et finibus arcu. Nunc lacus nisl, iaculis eget nunc id, fermentum ultricies arcu. Quisque vitae magna non nisl faucibus fringilla nec eleifend sapien. Curabitur egestas neque leo, et ultrices nisi mattis non.",
      "Nam mattis magna nec nunc sagittis tempus. In hac habitasse platea dictumst. Cras vel consequat turpis, at ornare ex. Nam id odio enim. Nunc non eleifend mi. Phasellus efficitur dolor eget aliquam condimentum. Aliquam erat volutpat. Aenean mattis neque risus, id lacinia sem elementum a. Quisque lobortis est sapien, nec ultricies diam pellentesque cursus. Nullam orci diam, finibus sit amet velit in, maximus pellentesque magna. Phasellus nisl urna, ultricies non laoreet ut, condimentum sed elit. Quisque ultrices convallis quam. Quisque eleifend laoreet metus, eu ultrices orci egestas sed. Curabitur a ultrices sapien, tincidunt venenatis mi.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo."
    ]
  },
  {
    slug: "why-soiling-costs-more-than-shading",
    categoryTag: "SOLAR · DRAFT",
    categoryName: "SOLAR",
    title: "Why soiling costs more than shading",
    excerpt:
      "On most Indian rooftops the yield lost to dust between cleaning cycles exceeds the yield lost to shadow. What that means for cleaning schedules and for the O&M contract you sign.",
    imageSrc: "/images/blogs/img-3.png",
    imageAlt: "Solar Panel Field Installation",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies orci libero, et maximus massa tempor id. Cras nec malesuada ligula, non iaculis nibh. Mauris tempor pellentesque dui, vel porta dolor iaculis vitae. Curabitur vulputate nisi nec magna eleifend dignissim. Ut non massa sapien. Nulla eu rutrum elit, et finibus arcu. Nunc lacus nisl, iaculis eget nunc id, fermentum ultricies arcu. Quisque vitae magna non nisl faucibus fringilla nec eleifend sapien. Curabitur egestas neque leo, et ultrices nisi mattis non.",
      "Nam mattis magna nec nunc sagittis tempus. In hac habitasse platea dictumst. Cras vel consequat turpis, at ornare ex. Nam id odio enim. Nunc non eleifend mi. Phasellus efficitur dolor eget aliquam condimentum. Aliquam erat volutpat. Aenean mattis neque risus, id lacinia sem elementum a. Quisque lobortis est sapien, nec ultricies diam pellentesque cursus. Nullam orci diam, finibus sit amet velit in, maximus pellentesque magna. Phasellus nisl urna, ultricies non laoreet ut, condimentum sed elit. Quisque ultrices convallis quam. Quisque eleifend laoreet metus, eu ultrices orci egestas sed. Curabitur a ultrices sapien, tincidunt venenatis mi.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo."
    ]
  },
  {
    slug: "one-charger-several-networks",
    categoryTag: "EV CHARGING · DRAFT",
    categoryName: "EV CHARGING",
    title: "One charger, several networks",
    excerpt:
      "How a multi-CMS bridge changes depot economics — and why charge-point operators end up with better utilisation when a unit is not locked to one platform.",
    imageSrc: "/images/blogs/img-4.png",
    imageAlt: "EV Charger Depot Station",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies orci libero, et maximus massa tempor id. Cras nec malesuada ligula, non iaculis nibh. Mauris tempor pellentesque dui, vel porta dolor iaculis vitae. Curabitur vulputate nisi nec magna eleifend dignissim. Ut non massa sapien. Nulla eu rutrum elit, et finibus arcu. Nunc lacus nisl, iaculis eget nunc id, fermentum ultricies arcu. Quisque vitae magna non nisl faucibus fringilla nec eleifend sapien. Curabitur egestas neque leo, et ultrices nisi mattis non.",
      "Nam mattis magna nec nunc sagittis tempus. In hac habitasse platea dictumst. Cras vel consequat turpis, at ornare ex. Nam id odio enim. Nunc non eleifend mi. Phasellus efficitur dolor eget aliquam condimentum. Aliquam erat volutpat. Aenean mattis neque risus, id lacinia sem elementum a. Quisque lobortis est sapien, nec ultricies diam pellentesque cursus. Nullam orci diam, finibus sit amet velit in, maximus pellentesque magna. Phasellus nisl urna, ultricies non laoreet ut, condimentum sed elit. Quisque ultrices convallis quam. Quisque eleifend laoreet metus, eu ultrices orci egestas sed. Curabitur a ultrices sapien, tincidunt venenatis mi.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo."
    ]
  },
  {
    slug: "testing-100-percent-of-packs-and-what-it-catches",
    categoryTag: "MANUFACTURING",
    categoryName: "MANUFACTURING",
    title: "Testing 100% of packs, and what it catches",
    excerpt:
      "Sampling plans are cheaper. Here is the failure data that made us test every pack instead, and what full traceability from cell lot to shipped unit is actually worth.",
    imageSrc: "/images/blogs/img-5.png",
    imageAlt: "Battery Pack 100% Testing Equipment",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies orci libero, et maximus massa tempor id. Cras nec malesuada ligula, non iaculis nibh. Mauris tempor pellentesque dui, vel porta dolor iaculis vitae. Curabitur vulputate nisi nec magna eleifend dignissim. Ut non massa sapien. Nulla eu rutrum elit, et finibus arcu. Nunc lacus nisl, iaculis eget nunc id, fermentum ultricies arcu. Quisque vitae magna non nisl faucibus fringilla nec eleifend sapien. Curabitur egestas neque leo, et ultrices nisi mattis non.",
      "Nam mattis magna nec nunc sagittis tempus. In hac habitasse platea dictumst. Cras vel consequat turpis, at ornare ex. Nam id odio enim. Nunc non eleifend mi. Phasellus efficitur dolor eget aliquam condimentum. Aliquam erat volutpat. Aenean mattis neque risus, id lacinia sem elementum a. Quisque lobortis est sapien, nec ultricies diam pellentesque cursus. Nullam orci diam, finibus sit amet velit in, maximus pellentesque magna. Phasellus nisl urna, ultricies non laoreet ut, condimentum sed elit. Quisque ultrices convallis quam. Quisque eleifend laoreet metus, eu ultrices orci egestas sed. Curabitur a ultrices sapien, tincidunt venenatis mi.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo."
    ]
  },
  {
    slug: "the-interfaces-nobody-owns",
    categoryTag: "SYSTEMS",
    categoryName: "SYSTEMS",
    title: "The interfaces nobody owns",
    excerpt:
      "Panel to inverter, inverter to battery, battery to BMS, BMS to charger. A tour of the four seams where multi-vendor clean-energy projects usually lose their schedule.",
    imageSrc: "/images/blogs/img-6.png",
    imageAlt: "Clean Energy Integration Interfaces",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies orci libero, et maximus massa tempor id. Cras nec malesuada ligula, non iaculis nibh. Mauris tempor pellentesque dui, vel porta dolor iaculis vitae. Curabitur vulputate nisi nec magna eleifend dignissim. Ut non massa sapien. Nulla eu rutrum elit, et finibus arcu. Nunc lacus nisl, iaculis eget nunc id, fermentum ultricies arcu. Quisque vitae magna non nisl faucibus fringilla nec eleifend sapien. Curabitur egestas neque leo, et ultrices nisi mattis non.",
      "Nam mattis magna nec nunc sagittis tempus. In hac habitasse platea dictumst. Cras vel consequat turpis, at ornare ex. Nam id odio enim. Nunc non eleifend mi. Phasellus efficitur dolor eget aliquam condimentum. Aliquam erat volutpat. Aenean mattis neque risus, id lacinia sem elementum a. Quisque lobortis est sapien, nec ultricies diam pellentesque cursus. Nullam orci diam, finibus sit amet velit in, maximus pellentesque magna. Phasellus nisl urna, ultricies non laoreet ut, condimentum sed elit. Quisque ultrices convallis quam. Quisque eleifend laoreet metus, eu ultrices orci egestas sed. Curabitur a ultrices sapien, tincidunt venenatis mi.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo.",
      "Fusce molestie magna purus, vel euismod sem sodales vitae. Suspendisse potenti. Vivamus sem lorem, aliquam id dapibus eget, maximus eu quam. Donec luctus enim diam, ullamcorper ornare ligula elementum eu. Donec vestibulum risus id consequat vehicula. Nullam interdum leo vitae lobortis feugiat. Curabitur vel facilisis lectus. Fusce non purus condimentum nisi sollicitudin ultricies in a mauris. Quisque lacinia ipsum a mi bibendum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam quis auctor felis. In facilisis odio justo, quis commodo sem sodales eu. Morbi rutrum luctus commodo."
    ]
  }
];

export const productQuickNavData: ProductQuickNavItem[] = [
  {
    id: "01",
    badge: "8 Products",
    title: "Battery packs",
    description: "Jump to the battery packs catalogue.",
    href: "#battery-packs",
  },
  {
    id: "02",
    badge: "15 Products",
    title: "Battery management",
    description: "Jump to the battery management catalogue.",
    href: "#battery-management",
  },
  {
    id: "03",
    badge: "Engineered per site",
    title: "Solar",
    description: "Solar is delivered as a system, not a part number.",
    href: "#solar",
  },
  {
    id: "04",
    badge: "4 Products",
    title: "EV charging",
    description: "Jump to the ev charging catalogue.",
    href: "#ev-charging",
  },
];

export const pillarsData: PillarItem[] = [
  {
    id: "battery-packs",
    tag: "PILLAR",
    title: "Battery packs",
    description:
      "Engineered to the vehicle programme or the load profile, so these carry a specification rather than a catalogue part number.",
    linkText: "Battery packs overview \u2192",
    linkHref: "/solutions/battery-packs",
  },
  {
    id: "battery-management",
    tag: "PILLAR",
    title: "Battery management",
    description:
      "Low- and high-voltage packs built to the vehicle programme, on Tier-1 cells with our own battery management inside.",
    linkText: "Battery management overview \u2192",
    linkHref: "/solutions/battery-management",
  },
  {
    id: "solar",
    tag: "PILLAR",
    title: "Solar",
    description:
      "Solar is designed, built and maintained as a system — array, structure, inverter and monitoring are selected against the site, the roof and the tariff, so there is no part number to publish here.",
    linkText: "Solar overview \u2192",
    linkHref: "/solutions/solar",
  },
  {
    id: "ev-charging",
    tag: "PILLAR",
    title: "EV charging",
    description:
      "AC and DC hardware, designed and manufactured in India.",
    linkText: "EV charging overview \u2192",
    linkHref: "/solutions/ev-charging",
  },
];

export const evBatteryPacksData: EvBatteryPackItem[] = [
  {
    id: "01",
    title: "2W Battery Pack",
    description:
      "A 72 V LFP pack for premium electric motorcycles, with integrated battery management and a patent-pending thermal design.",
    imageSrc: "/images/products/products/img-1.png",
    imageAlt: "2W Battery Pack",
    tags: ["MOTORCYCLES", "SCOOTERS", "PREMIUM 2W"],
    href: "/products/2w-battery-pack",
  },
  {
    id: "02",
    title: "48 V L5M Pack",
    description:
      "The passenger three-wheeler pack, in series production for Montra Super Auto \u2014 203 km on a charge, the highest range per charge in the segment.",
    imageSrc: "/images/products/products/img-2.png",
    imageAlt: "48 V L5M Pack",
    tags: ["PASSENGER 3W", "FLEET TAXI"],
    href: "/products/48v-l5m-pack",
  },
  {
    id: "03",
    title: "48 V L5N Pack",
    description:
      "The cargo three-wheeler pack on the same 48 V platform, rated for the heavier duty cycle and load profile.",
    imageSrc: "/images/products/products/img-3.png",
    imageAlt: "48 V L5N Pack",
    tags: ["CARGO 3W", "LAST-MILE DELIVERY"],
    href: "/products/48v-l5n-pack",
  },
  {
    id: "04",
    title: "Tractor Pack — 307 V",
    description:
      "A liquid-cooled high-voltage pack for electric tractors, with integrated disconnect and high-voltage interlock, built for continuous-duty.",
    imageSrc: "/images/products/products/img-4.png",
    imageAlt: "Tractor Pack — 307 V",
    tags: ["ELECTRIC TRACTOR", "AGRICULTURE"],
    href: "/products/tractor-pack-307v",
  },
  {
    id: "05",
    title: "Bus Pack — 352 V",
    description:
      "A liquid-cooled bus pack, stackable to vehicle-level energy, on the same battery-management family as the tractor pack.",
    imageSrc: "/images/products/products/img-5.png",
    imageAlt: "Bus Pack — 352 V",
    tags: ["ELECTRIC BUS", "HEAVY COMMERCIAL"],
    href: "/products/bus-pack-352v",
  },
];

export const energyStorageSystemsData: EnergyStorageSystemItem[] = [
    {
    id: "01",
    title: "C&I Storage — Liquid-Cooled",
    description:
      "Intelligent liquid cooling for balanced cell temperatures, with dual-level fire protection at both cabin and pack level, scalable to MWh class.",
    imageSrc: "/images/products/products/Energy-storage-systems/img-3.png",
    imageAlt: "C&I Storage — Liquid-Cooled",
    tags: ["FACTORY", "DATA CENTRE", "MWH-CLASS"],
    href: "/products/ci-storage-liquid-cooled",
  },
  {
    id: "02",
    title: "Home Storage Stack",
    description:
      "A 51.2 V modular stack for houses, integrated with all major inverter brands and stackable as the household load grows.",
    imageSrc: "/images/products/products/Energy-storage-systems/img-1.png",
    imageAlt: "Home Storage Stack",
    tags: ["RESIDENTIAL", "ROOFTOP SOLAR PAIRING"],
    href: "/products/home-storage-stack",
  },
  {
    id: "03",
    title: "C&I Storage — Air-Cooled",
    description:
      "Cabinet-scale storage with a DC-coupled hybrid inverter and cabinet-level fire fighting, with our own battery and energy management.",
    imageSrc: "/images/products/products/Energy-storage-systems/img-2.png",
    imageAlt: "C&I Storage — Air-Cooled",
    tags: ["FACTORY", "WAREHOUSE", "CAMPUS"],
    href: "/products/ci-storage-air-cooled",
  },
];

export const lowVoltageManagementData: EnergyStorageSystemItem[] = [
    {
    id: "01",
    title: "VinciX BMS-18S",
    description:
      "Seven to eighteen cells on a 48 V bus, AIS-156 certified, with an onboard precharge relay and integrated PDU for contactor drive.",
    imageSrc: "/images/products/products/bettery-manegement/low-voltage/img-1.jpg",
    imageAlt: "VinciX BMS-18S",
    tags: ["Light EVs", "Motorcycles & scooters", "3-wheeler","Home & industrial storage"],
    href: "/products/vincix-bms-18s",
  },
  {
    id: "02",
    title: "VinciX BMS-36S",
    description:
      "Twenty to thirty-six cells on a 120 V bus. Railway-certified and deployed on Vande Bharat trainsets, with dual CAN and parallel-string operation.",
    imageSrc: "/images/products/products/bettery-manegement/low-voltage/img-2.jpg",
    imageAlt: "VinciX BMS-36S",
    tags: ["Railway rolling stock", "Light commercial","Stationary storage"],
    href: "/products/vincix-bms-36s",
  },
  {
    id: "03",
    title: "VinciX MOSFET BMS",
    description:
      "Solid-state switching in place of contactors, at 100, 150 or 200 A, with an onboard power distribution unit.",
    imageSrc: "/images/products/products/bettery-manegement/low-voltage/img-3.jpg",
    imageAlt: "VinciX MOSFET BMS",
    tags: ["2-wheeler", "3-wheeler", "Light EVs"],
    href: "/products/vincix-mosfet-bms",
  },
];

export const highVoltageManagementData: EnergyStorageSystemItem[] = [
    {
    id: "01",
    title: "VinciX HV-BMS Master",
    description:
      "The high-voltage master controller — 13 V to 1500 V system range, up to 360 cells in series across the slave chain.",
    imageSrc: "/images/products/products/bettery-manegement/high-voltage/img-1.jpg",
    imageAlt: "VinciX HV-BMS Master",
    tags: ["Bus & truck", "Tractor", "High-voltage storage"],
    href: "/products/vincix-hv-bms-master",
  },
  {
    id: "02",
    title: "VinciX HV-BMU-54S",
    description:
      "Thirty-six to fifty-four cells with twenty-seven thermistor channels, CAN, RS-485 and onboard SD logging.",
    imageSrc: "/images/products/products/bettery-manegement/high-voltage/img-2.jpg",
    imageAlt: "VinciX HV-BMU-54S",
    tags: ["Bus", "Truck","Tractor"],
    href: "/products/vincix-hv-bmu-54s",
  },
  {
    id: "03",
    title: "VinciX HV-BMU-108S",
    description:
      "Seventy-two to one hundred and eight cells with thirty-six thermistor channels. ASIL-D ready, with SD logging.",
    imageSrc: "/images/products/products/bettery-manegement/high-voltage/img-3.jpg",
    imageAlt: "VinciX HV-BMU-108S",
    tags: ["Bus", "Heavy commercial","Grid storage"],
    href: "/products/vincix-hv-bmu-108s",
  },
    {
    id: "04",
    title: "VinciX Monolithic HV-BMS",
    description:
      "One board instead of a master and a slave chain — 108 cells at 400 V, for light commercial vehicles where board count matters more than modularity.",
    imageSrc: "/images/products/products/bettery-manegement/high-voltage/img-4.jpg",
    imageAlt: "VinciX Monolithic HV-BMS",
    tags: ["LCV", "4-wheeler","Compact HV packs"],
    href: "/products/vincix-monolithic-hv-bms",
  },
    {
    id: "05",
    title: "VinciX EV-BDU",
    description:
      "The battery disconnect unit: 400 to 750 V at 600 A, twelve HV contactors, with HVIL, insulation monitoring and an IP67 enclosure.",
    imageSrc: "/images/products/products/bettery-manegement/high-voltage/img-5.jpg",
    imageAlt: "VinciX EV-BDU",
    tags: ["Bus", "Truck","Tractor","HV storage"],
    href: "/products/vincix-ev-bdu",
  },
];

export const energyStorageManagementSystemsData: EnergyStorageSystemItem[] = [
    {
    id: "01",
    title: "VinciX ESS-LMU",
    description:
      "Tier one — the module slave. Six to eighteen cells per unit, daisy-chained over ISO-SPI or CAN up the rack.",
    imageSrc: "/images/products/products/bettery-manegement/energy-storage/img-1.jpg",
    imageAlt: "VinciX ESS-LMU",
    tags: ["Residential storage", "C&I storage", "Grid storage"],
    href: "/products/vincix-ess-lmu",
  },
  {
    id: "02",
    title: "VinciX ESS-PDU",
    description:
      "Thirty-six to fifty-four cells with twenty-seven thermistor channels, CAN, RS-485 and onboard SD logging.",
    imageSrc: "/images/products/products/bettery-manegement/energy-storage/img-2.jpg",
    imageAlt: "VinciX ESS-PDU",
    tags: ["C&I storage","Grid storage"],
    href: "/products/vincix-ess-pdu",
  },
  {
    id: "03",
    title: "VinciX MSC",
    description:
      "Tier three — the multi-string controller. Up to twenty racks in parallel, presenting one interface to the power conversion system.",
    imageSrc: "/images/products/products/bettery-manegement/energy-storage/img-3.jpg",
    imageAlt: "VinciX MSC",
    tags: ["Grid storage","Multi-string BESS"],
    href: "/products/vincix-msc",
  },
    {
    id: "04",
    title: "VinciX ESS MOSFET BMS",
    description:
      "Seven to sixteen cells with solid-state switching at 100, 150 or 200 A, for low-voltage stationary storage.",
    imageSrc: "/images/products/products/bettery-manegement/energy-storage/img-4.jpg",
    imageAlt: "VinciX ESS MOSFET BMS",
    tags: ["Home storage", "Telecom","Small C&I"],
    href: "/products/vincix-ess-mosfet-bms",
  },
];

export const transitSystemsData: EnergyStorageSystemItem[] = [
    {
    id: "01",
    title: "NAVAS VTS-4G",
    description:
      "AIS-140 vehicle tracking on 4G LTE, with multi-constellation GNSS, three isolated CAN FD ports and over-the-air updates.",
    imageSrc: "/images/products/products/bettery-manegement/transit-systems/img-1.jpg",
    imageAlt: "NAVAS VTS-4G",
    tags: ["Bus fleets", "Commercial vehicles", "Public transport"],
    href: "/products/navas-vts-4g",
  },
  {
    id: "02",
    title: "NAVAS PIS",
    description:
      "Thirty-six to fifty-four cells with twenty-seven thermistor channels, CAN, RS-485 and onboard SD logging.",
    imageSrc: "/images/products/products/bettery-manegement/transit-systems/img-2.jpg",
    imageAlt: "NAVAS PIS",
    tags: ["City buses","Intercity coaches","Rail"],
    href: "/products/navas-pis",
  },
  {
    id: "03",
    title: "NAVAS ITS",
    description:
      "Tier three — the multi-string controller. Up to twenty racks in parallel, presenting one interface to the power conversion system.",
    imageSrc: "/images/products/products/bettery-manegement/transit-systems/img-3.jpg",
    imageAlt: "NAVAS ITS",
    tags: ["Bus fleets","Depot operations","Safety compliance"],
    href: "/products/navas-its",
  },
];

export const evChargingSystemsData: EnergyStorageSystemItem[] = [
    {
    id: "01",
    title: "AC Charger — 3.3 kW",
    description:
      "A wall-mounted AC unit for homes and workplaces, with RFID authentication and integrated cable management.",
    imageSrc: "/images/products/products/bettery-manegement/ev-chargers/img-1.jpg",
    imageAlt: "AC Charger — 3.3 kW",
    tags: ["Home", "workplace", "Apartment"],
    href: "/products/ac-charger-3-3-kw",
  },
  {
    id: "02",
    title: "DC Charger — 30 kW",
    description:
      "A compact DC fast charger for fleet depots and retail forecourts, with a full operator display.",
    imageSrc: "/images/products/products/bettery-manegement/ev-chargers/img-2.jpg",
    imageAlt: "DC Charger — 30 kW",
    tags: ["Fleet depot", "Forecourt", "3W & 4W"],
    href: "/products/dc-charger-30-kw",
  },
  {
    id: "03",
    title: "DC Charger — 60 kW",
    description:
      "A dual-connector DC unit, ARAI tested, charging two vehicles at once.",
    imageSrc: "/images/products/products/bettery-manegement/ev-chargers/img-3.jpg",
    imageAlt: "DC Charger — 60 kW",
    tags: ["Public charging", "Fleet depot"],
    href: "/products/dc-charger-60-kw",
  },
   {
    id: "04",
    title: "DC Charger — 120 kW",
    description:
      "Highway-grade CCS charging with dual cables and a full operator display, part of a range extending to 360 kW.",
    imageSrc: "/images/products/products/bettery-manegement/ev-chargers/img-4.jpg",
    imageAlt: "DC Charger — 120 kW",
    tags: ["Highway", "Public charging" ,"Bus & truck"],
    href: "/products/dc-charger-120-kw",
  },
];

export const allProductsDetailData: ProductDetailItem[] = [
  {
    slug: "2w-battery-pack",
    categoryBreadcrumb: "PRODUCTS · BATTERY PACKS - EV",
    title: "2W Battery Pack",
    description:
      "A 72 V LFP pack for premium electric motorcycles, with integrated battery management and a patent-pending thermal design.",
    tags: ["MOTORCYCLES", "SCOOTERS", "PREMIUM 2W"],
    imageSrc: "/images/products/products/img-1.png",
    imageAlt: "2W Battery Pack",
    contextLink: "/solutions/battery-packs",
    issuedNoteTitle: "Issued per application",
    issuedNoteText:
      "This product is built to the programme or the load profile, so its datasheet is issued against your configuration rather than published as a catalogue sheet.",
    specifications: [
      { parameter: "Application", specification: "Premium Two-Wheeler EV" },
      { parameter: "Nominal Voltage", specification: "72 V" },
      { parameter: "Energy", specification: "3.24 kWh" },
      { parameter: "Chemistry", specification: "LFP, Tier-1 Cells" },
      { parameter: "Battery Management", specification: "Integrated, AIS-156 Certified" },
      { parameter: "Thermal Design", specification: "Patent-Pending; Aluminium Modules With Copper Bus Bars" },
      { parameter: "Certification", specification: "AIS-156" },
      { parameter: "Factory Test", specification: "100% BMS Function, Charge/Discharge And Insulation (> 800 M\u03A9)" },
    ],
  },
  {
    slug: "48v-l5m-pack",
    categoryBreadcrumb: "PRODUCTS · BATTERY PACKS - EV",
    title: "48 V L5M Pack",
    description:
      "The passenger three-wheeler pack, in series production for Montra Super Auto \u2014 203 km on a charge, the highest range per charge in the segment.",
    tags: ["PASSENGER 3W", "FLEET TAXI"],
    imageSrc: "/images/products/products/img-2.png",
    imageAlt: "48 V L5M Pack",
    contextLink: "/solutions/battery-packs",
    issuedNoteTitle: "Issued per application",
    issuedNoteText:
      "This product is built to the programme or the load profile, so its datasheet is issued against your configuration rather than published as a catalogue sheet.",
    specifications: [
      { parameter: "Application", specification: "Passenger Three-Wheeler EV (L5M)" },
      { parameter: "Nominal Voltage", specification: "48 V" },
      { parameter: "Range per Charge", specification: "203 km" },
      { parameter: "Chemistry", specification: "LFP, Tier-1 Cells" },
      { parameter: "Battery Management", specification: "Integrated, AIS-156 Certified" },
      { parameter: "Vehicle Integration", specification: "Montra Super Auto Series Production" },
      { parameter: "Certification", specification: "AIS-156" },
      { parameter: "Factory Test", specification: "100% BMS Function, Charge/Discharge And Insulation (> 800 M\u03A9)" },
    ],
  },
  {
    slug: "48v-l5n-pack",
    categoryBreadcrumb: "PRODUCTS · BATTERY PACKS - EV",
    title: "48 V L5N Pack",
    description:
      "The cargo three-wheeler pack on the same 48 V platform, rated for the heavier duty cycle and load profile.",
    tags: ["CARGO 3W", "LAST-MILE DELIVERY"],
    imageSrc: "/images/products/products/img-3.png",
    imageAlt: "48 V L5N Pack",
    contextLink: "/solutions/battery-packs",
    issuedNoteTitle: "Issued per application",
    issuedNoteText:
      "This product is built to the programme or the load profile, so its datasheet is issued against your configuration rather than published as a catalogue sheet.",
    specifications: [
      { parameter: "Application", specification: "Cargo Three-Wheeler EV (L5N) / Last-Mile Delivery" },
      { parameter: "Nominal Voltage", specification: "48 V" },
      { parameter: "Duty Rating", specification: "Commercial High-Duty Load Profile" },
      { parameter: "Chemistry", specification: "LFP, Tier-1 Cells" },
      { parameter: "Battery Management", specification: "Integrated, AIS-156 Certified" },
      { parameter: "Thermal Design", specification: "Aluminium Modules With Copper Bus Bars" },
      { parameter: "Certification", specification: "AIS-156" },
      { parameter: "Factory Test", specification: "100% BMS Function, Charge/Discharge And Insulation (> 800 M\u03A9)" },
    ],
  },
  {
    slug: "tractor-pack-307v",
    categoryBreadcrumb: "PRODUCTS · BATTERY PACKS - EV",
    title: "Tractor Pack — 307 V",
    description:
      "A liquid-cooled high-voltage pack for electric tractors, with integrated disconnect and high-voltage interlock, built for continuous-duty.",
    tags: ["ELECTRIC TRACTOR", "AGRICULTURE"],
    imageSrc: "/images/products/products/img-4.png",
    imageAlt: "Tractor Pack — 307 V",
    contextLink: "/solutions/battery-packs",
    issuedNoteTitle: "Issued per application",
    issuedNoteText:
      "This product is built to the programme or the load profile, so its datasheet is issued against your configuration rather than published as a catalogue sheet.",
    specifications: [
      { parameter: "Application", specification: "Electric Tractor & Heavy Agricultural Equipment" },
      { parameter: "Nominal Voltage", specification: "307 V" },
      { parameter: "Cooling System", specification: "Liquid-Cooled Thermal Management" },
      { parameter: "Chemistry", specification: "LFP, Tier-1 High-Power Cells" },
      { parameter: "Safety Features", specification: "Integrated Disconnect & HVIL (High Voltage Interlock Loop)" },
      { parameter: "Battery Management", specification: "Integrated High-Voltage VinciX BMS" },
      { parameter: "Protection Rating", specification: "IP67 Industrial Enclosure" },
      { parameter: "Factory Test", specification: "100% BMS Function, HV Isolation & Thermal Loop Testing" },
    ],
  },
  {
    slug: "bus-pack-352v",
    categoryBreadcrumb: "PRODUCTS · BATTERY PACKS - EV",
    title: "Bus Pack — 352 V",
    description:
      "A liquid-cooled bus pack, stackable to vehicle-level energy, on the same battery-management family as the tractor pack.",
    tags: ["ELECTRIC BUS", "HEAVY COMMERCIAL"],
    imageSrc: "/images/products/products/img-5.png",
    imageAlt: "Bus Pack — 352 V",
    contextLink: "/solutions/battery-packs",
    issuedNoteTitle: "Issued per application",
    issuedNoteText:
      "This product is built to the programme or the load profile, so its datasheet is issued against your configuration rather than published as a catalogue sheet.",
    specifications: [
      { parameter: "Application", specification: "Electric Bus & Heavy Commercial Vehicles" },
      { parameter: "Nominal Voltage", specification: "352 V" },
      { parameter: "Architecture", specification: "Stackable Modular Pack Architecture" },
      { parameter: "Cooling System", specification: "Liquid-Cooled Thermal Management" },
      { parameter: "Chemistry", specification: "LFP, Tier-1 Long-Life Cells" },
      { parameter: "Battery Management", specification: "High-Voltage VinciX Master/Slave Family" },
      { parameter: "Certification", specification: "AIS-038 Rev 2 / Heavy Duty Standards" },
      { parameter: "Factory Test", specification: "100% BMS Function, HV Safety & Insulation (> 800 M\u03A9)" },
    ],
  },
  {
    slug: "home-storage-stack",
    categoryBreadcrumb: "PRODUCTS · ENERGY STORAGE SYSTEMS",
    title: "Home Storage Stack",
    description:
      "A 51.2 V modular stack for houses, integrated with all major inverter brands and stackable as the household load grows.",
    tags: ["RESIDENTIAL", "ROOFTOP SOLAR PAIRING"],
    imageSrc: "/images/products/products/Energy-storage-systems/img-1.png",
    imageAlt: "Home Storage Stack",
    contextLink: "/solutions/solar-ev-charging",
    issuedNoteTitle: "Issued per application",
    issuedNoteText:
      "This product is built to the programme or the load profile, so its datasheet is issued against your configuration rather than published as a catalogue sheet.",
    specifications: [
      { parameter: "Application", specification: "Residential Rooftop Solar & Home Energy Storage" },
      { parameter: "Nominal Voltage", specification: "51.2 V" },
      { parameter: "Architecture", specification: "Modular Stackable Design" },
      { parameter: "Chemistry", specification: "Safe & Long-Life LFP Cells" },
      { parameter: "Inverter Compatibility", specification: "Compatible with Major Hybrid & Off-Grid Inverters" },
      { parameter: "Battery Management", specification: "Integrated VinciX Smart BMS" },
      { parameter: "Monitoring", specification: "Local Status & Cloud Fleet Analytics" },
      { parameter: "Factory Test", specification: "100% BMS Function, Charge/Discharge & Insulation Test" },
    ],
  },
  {
    slug: "ci-storage-air-cooled",
    categoryBreadcrumb: "PRODUCTS · ENERGY STORAGE SYSTEMS",
    title: "C&I Storage — Air-Cooled",
    description:
      "Cabinet-scale storage with a DC-coupled hybrid inverter and cabinet-level fire fighting, with our own battery and energy management.",
    tags: ["FACTORY", "WAREHOUSE", "CAMPUS"],
    imageSrc: "/images/products/products/Energy-storage-systems/img-2.png",
    imageAlt: "C&I Storage — Air-Cooled",
    contextLink: "/solutions/solar-ev-charging",
    issuedNoteTitle: "Issued per application",
    issuedNoteText:
      "This product is built to the programme or the load profile, so its datasheet is issued against your configuration rather than published as a catalogue sheet.",
    specifications: [
      { parameter: "Application", specification: "Commercial & Industrial (Factory, Warehouse, Campus)" },
      { parameter: "Thermal Management", specification: "Cabinet-Scale Forced Air Cooling" },
      { parameter: "Inverter Type", specification: "DC-Coupled Hybrid Inverter" },
      { parameter: "Fire Suppression", specification: "Cabinet-Level Integrated Automated Suppression" },
      { parameter: "Chemistry", specification: "LFP, Tier-1 Cells" },
      { parameter: "Energy Management", specification: "Integrated BMS & EMS Control Layer" },
      { parameter: "Grid Functions", specification: "Peak Shaving, Solar Self-Consumption & Arbitrage" },
      { parameter: "Factory Test", specification: "100% System Commissioning & Safety Diagnostics" },
    ],
  },
  {
    slug: "ci-storage-liquid-cooled",
    categoryBreadcrumb: "PRODUCTS · ENERGY STORAGE SYSTEMS",
    title: "C&I Storage — Liquid-Cooled",
    description:
      "Intelligent liquid cooling for balanced cell temperatures, with dual-level fire protection at both cabin and pack level, scalable to MWh class.",
    tags: ["FACTORY", "DATA CENTRE", "MWH-CLASS"],
    imageSrc: "/images/products/products/Energy-storage-systems/img-3.png",
    imageAlt: "C&I Storage — Liquid-Cooled",
    contextLink: "/solutions/solar-ev-charging",
    issuedNoteTitle: "Issued per application",
    issuedNoteText:
      "This product is built to the programme or the load profile, so its datasheet is issued against your configuration rather than published as a catalogue sheet.",
    specifications: [
      { parameter: "Application", specification: "Commercial & Industrial / Data Centre / Utility Grid" },
      { parameter: "Thermal Management", specification: "Intelligent Liquid Cooling for Uniform Cell Temp" },
      { parameter: "Scalability", specification: "Containerised MWh-Class Architecture" },
      { parameter: "Fire Suppression", specification: "Dual-Level Safety (Cabin & Pack Level)" },
      { parameter: "Chemistry", specification: "High-Density Tier-1 LFP Cells" },
      { parameter: "Control Layer", specification: "VinciX Multi-String Controller (MSC) Integration" },
      { parameter: "Certification", specification: "Grid Integration & Industrial Safety Standards" },
      { parameter: "Factory Test", specification: "100% BMS, HVAC & Fire Suppression Loop Verification" },
    ],
  },
  {
    slug: "vincix-bms-18s",
    aliases: ["lv-bms-18s"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · LOW VOLTAGE",
    title: "VinciX BMS-18S",
    description:
      "Seven to eighteen cells on a 48 V bus, AIS-156 certified, with an onboard precharge relay and integrated PDU for contactor drive.",
    tags: ["Light EVs", "Motorcycles & scooters", "3-wheeler", "Home & industrial storage"],
    imageSrc: "/images/products/products/bettery-manegement/low-voltage/img-1.jpg",
    imageAlt: "VinciX BMS-18S",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Number of cells", specification: "7–18 cells (configurable per design requirement)" },
      { parameter: "Cell chemistry", specification: "Chemistry agnostic" },
      { parameter: "Cell voltage measurement accuracy", specification: "±5 mV" },
      { parameter: "Cell voltage sampling time", specification: "20 ms" },
      { parameter: "Cell balancing method", specification: "Dissipative" },
      { parameter: "Cell balancing current", specification: "180 mA @ 4.2 V" },
      { parameter: "Number of temperature sensor interfaces", specification: "9" },
      { parameter: "Temperature measurement accuracy", specification: "±1 °C" },
      { parameter: "Standby/Sleep mode", specification: "Yes" },
      { parameter: "Charger/ECU communication type", specification: "SAE J1939 (29-bit ID) / CAN 2.0A/B (11-/29-bit ID)" },
      { parameter: "Supported CAN speeds", specification: "Up to 1 Mbps" },
      { parameter: "CAN ports", specification: "1 Isolated CAN" },
      { parameter: "Remote monitoring module communication type", specification: "Isolated RS-485" },
      { parameter: "Supported RS-485 speeds", specification: "Up to 1 Mbps" },
      { parameter: "Local data monitoring", specification: "CAN/RS-485" },
      { parameter: "Control IO", specification: "Non-isolated I/P: 5" },
    ],
  },
  {
    slug: "vincix-bms-36s",
    aliases: ["lv-bms-36s"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · LOW VOLTAGE",
    title: "VinciX BMS-36S",
    description:
      "Twenty to thirty-six cells on a 120 V bus. Railway-certified and deployed on Vande Bharat trainsets, with dual CAN and parallel-string operation.",
    tags: ["Railway rolling stock", "Light commercial", "Stationary storage"],
    imageSrc: "/images/products/products/bettery-manegement/low-voltage/img-2.jpg",
    imageAlt: "VinciX BMS-36S",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Number of cells", specification: "20 – 36 Cells (Easily configurable based on design requirement)" },
      { parameter: "Cell chemistry", specification: "Chemistry agnostic" },
      { parameter: "Cell voltage measurement accuracy", specification: "+/- 5mV" },
      { parameter: "Cell voltage sampling time", specification: "20 ms" },
      { parameter: "Cell balancing method", specification: "Dissipative" },
      { parameter: "Cell balancing current", specification: "180mA @4.2V" },
      { parameter: "Number of temperature sensor interface", specification: "18" },
      { parameter: "Temperature measurement accuracy", specification: "+/- 1 °C" },
      { parameter: "Standby/Sleep mode", specification: "Yes" },
      { parameter: "Charger/ECU communication type", specification: "SAE J1939 29 bit ID / Standard CAN 2.0 A/B 11/29 bit ID" },
      { parameter: "Supported CAN speeds", specification: "Up to 1Mbps" },
      { parameter: "CAN ports", specification: "2 Isolated CAN" },
      { parameter: "Remote monitoring module communication type", specification: "Isolated CAN" },
      { parameter: "Local data monitoring", specification: "CAN" },
      { parameter: "Parallel Battery Support", specification: "Yes" },
      { parameter: "Control IO", specification: "Isolated O/P: 3 (12V)" },
    ],
  },
  {
    slug: "vincix-mosfet-bms",
    aliases: ["mosfet-bms"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · LOW VOLTAGE",
    title: "VinciX MOSFET BMS",
    description:
      "Solid-state switching in place of contactors, at 100, 150 or 200 A, with an onboard power distribution unit.",
    tags: ["2-wheeler", "3-wheeler", "Light EVs"],
    imageSrc: "/images/products/products/bettery-manegement/low-voltage/img-3.jpg",
    imageAlt: "VinciX MOSFET BMS",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Number of cells", specification: "7 – 21 Cells (Easily configurable based on design requirement)" },
      { parameter: "Cell chemistry", specification: "Chemistry agnostic" },
      { parameter: "Cell voltage measurement accuracy", specification: "+/- 10mV" },
      { parameter: "Cell voltage sampling time", specification: "20 ms" },
      { parameter: "Cell balancing method", specification: "Dissipative" },
      { parameter: "Cell balancing current", specification: "150mA @4.2V" },
      { parameter: "Number of temperature sensor interface", specification: "7" },
      { parameter: "Temperature measurement accuracy", specification: "+/- 1 °C" },
      { parameter: "Standby/Sleep mode", specification: "Yes" },
      { parameter: "Charger/ECU communication type", specification: "SAE J1939 29 bit ID / Standard CAN 2.0 A/B 11/29 bit ID" },
      { parameter: "Supported CAN speeds", specification: "Up to 1Mbps" },
      { parameter: "CAN ports", specification: "1 CAN" },
      { parameter: "Control IO", specification: "External Buzzer, Ignition" },
      { parameter: "Precharge Resistor", specification: "200 Ohms/ 15Watts (Can be Configurable)" },
      { parameter: "Continuous Discharge Current", specification: "100A/150A/200A" },
      { parameter: "Peak Discharge Current", specification: "150A/300A/400A @ 10Sec" },
    ],
  },
  {
    slug: "vincix-hv-bms-master",
    aliases: ["hv-bms"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · HIGH VOLTAGE",
    title: "VinciX HV-BMS Master",
    description:
      "The high-voltage master controller — 13 V to 1500 V system range, up to 360 cells in series across the slave chain.",
    tags: ["Bus & truck", "Tractor", "High-voltage storage"],
    imageSrc: "/images/products/products/bettery-manegement/high-voltage/img-1.jpg",
    imageAlt: "VinciX HV-BMS Master",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "System Voltage Range", specification: "13V-1500V" },
      { parameter: "Number of Cells in series", specification: "6-360 Cells" },
      { parameter: "Model Number", specification: "VinciX_HV_Master" },
      { parameter: "Microcontroller", specification: "STM32F4" },
      { parameter: "CAN Communication", specification: "Dual CAN 2.0 or J1939 Over CAN" },
      { parameter: "RS485 Communication", specification: "RS485 or Modbus Over RS485" },
      { parameter: "Isolation Rating", specification: "3.5 kV RMS Isolation for RS485" },
      { parameter: "Input Voltage", specification: "12V - 60V (Configured Based on requirement)" },
      { parameter: "Number of Slaves Supported", specification: "20 Slaves" },
      { parameter: "Data Storage", specification: "On Board SD Card" },
      { parameter: "High Voltage Measurement Channel", specification: "4 Isolated Channel" },
      { parameter: "High Voltage Measurement Range", specification: "0V - 1000V" },
      { parameter: "High Voltage Measurement Accuracy", specification: "+/- 1V" },
      { parameter: "Current Measurement Interface", specification: "Hall Current Sensor" },
      { parameter: "General Purpose Input Output", specification: "2 Channel for sensing positive and negative contactor sense" },
      { parameter: "Protections", specification: "Discharge and Charge Over Temperature, Under Temperature, Short circuit" },
    ],
  },
  {
    slug: "vincix-hv-bmu-54s",
    aliases: ["hv-bmu-54s"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · HIGH VOLTAGE",
    title: "VinciX HV-BMU-54S",
    description:
      "Thirty-six to fifty-four cells with twenty-seven thermistor channels, CAN, RS-485 and onboard SD logging.",
    tags: ["Bus", "Truck", "Tractor"],
    imageSrc: "/images/products/products/bettery-manegement/high-voltage/img-2.jpg",
    imageAlt: "VinciX HV-BMU-54S",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Power supply", specification: "9V - 36V DC" },
      { parameter: "Number of cells", specification: "36 - 54 Cells (Software configurable)" },
      { parameter: "Cell chemistry", specification: "Chemistry agnostic" },
      { parameter: "Cell voltage measurement accuracy", specification: "+/- 5mV" },
      { parameter: "Cell voltage sampling time", specification: "20 ms" },
      { parameter: "Cell balancing method", specification: "Dissipative" },
      { parameter: "Cell balancing current", specification: "420mA @4.2V" },
      { parameter: "Number of temperature sensor interface", specification: "27" },
      { parameter: "Temperature measurement accuracy", specification: "+/- 1 °C" },
      { parameter: "Standby/Sleep mode", specification: "Yes" },
      { parameter: "Charger/ECU communication type", specification: "CAN 2.0 A/B 11/29 bit ID" },
      { parameter: "Supported CAN speeds", specification: "Up to 1Mbps" },
      { parameter: "CAN ports", specification: "1 Isolated CAN" },
      { parameter: "RS-485 communication", specification: "Isolated RS-485" },
      { parameter: "Supported RS-485 speeds", specification: "Up to 1Mbps" },
      { parameter: "Digital inputs", specification: "4" },
    ],
  },
  {
    slug: "vincix-hv-bmu-108s",
    aliases: ["hv-bmu-108s"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · HIGH VOLTAGE",
    title: "VinciX HV-BMU-108S",
    description:
      "Seventy-two to one hundred and eight cells with thirty-six thermistor channels. ASIL-D ready, with SD logging.",
    tags: ["Bus", "Heavy commercial", "Grid storage"],
    imageSrc: "/images/products/products/bettery-manegement/high-voltage/img-3.jpg",
    imageAlt: "VinciX HV-BMU-108S",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Power supply", specification: "9V - 36V DC" },
      { parameter: "Number of cells", specification: "72 - 108 Cells (Software configurable)" },
      { parameter: "Cell chemistry", specification: "Chemistry agnostic" },
      { parameter: "Cell voltage measurement accuracy", specification: "+/- 5mV" },
      { parameter: "Cell voltage sampling time", specification: "20 ms" },
      { parameter: "Cell balancing method", specification: "Dissipative" },
      { parameter: "Cell balancing current", specification: "420mA @4.2V" },
      { parameter: "Number of temperature sensor interface", specification: "36" },
      { parameter: "Temperature measurement accuracy", specification: "+/- 1 °C" },
      { parameter: "Standby/Sleep mode", specification: "Yes" },
      { parameter: "Charger/ECU communication type", specification: "CAN 2.0 A/B 11/29 bit ID" },
      { parameter: "Supported CAN speeds", specification: "Up to 1Mbps" },
      { parameter: "CAN ports", specification: "1 Isolated CAN" },
      { parameter: "RS-485 communication", specification: "Isolated RS-485" },
      { parameter: "Supported RS-485 speeds", specification: "Up to 1Mbps" },
      { parameter: "Digital inputs", specification: "4" },
    ],
  },
  {
    slug: "vincix-monolithic-hv-bms",
    aliases: ["monolithic-hv-bms"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · HIGH VOLTAGE",
    title: "VinciX Monolithic HV-BMS",
    description:
      "One board instead of a master and a slave chain — 108 cells at 400 V, for light commercial vehicles where board count matters more than modularity.",
    tags: ["LCV", "4-wheeler", "Compact HV packs"],
    imageSrc: "/images/products/products/bettery-manegement/high-voltage/img-4.jpg",
    imageAlt: "VinciX Monolithic HV-BMS",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Power supply", specification: "9V - 36V DC" },
      { parameter: "Number of cells", specification: "72 - 108 Cells (Software configurable)" },
      { parameter: "Cell chemistry", specification: "Chemistry agnostic" },
      { parameter: "Cell voltage measurement accuracy", specification: "+/- 5mV" },
      { parameter: "Cell balancing method", specification: "Dissipative" },
      { parameter: "Cell balancing current", specification: "420mA @4.2V" },
      { parameter: "Number of temperature sensor interface", specification: "14" },
      { parameter: "Temperature measurement accuracy", specification: "+/- 1 °C" },
      { parameter: "Digital inputs", specification: "7" },
      { parameter: "Digital outputs", specification: "8" },
      { parameter: "Current sensing channels", specification: "1" },
      { parameter: "HV voltage sensing channels", specification: "4" },
      { parameter: "Operating voltage", specification: "Up to 400V DC" },
      { parameter: "CAN communication", specification: "2x CAN ports" },
      { parameter: "RS-485 communication", specification: "1x RS-485 port" },
      { parameter: "Local data logging", specification: "SD Card" },
    ],
  },
  {
    slug: "vincix-ev-bdu",
    aliases: ["ev-bdu"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · HIGH VOLTAGE",
    title: "VinciX EV-BDU",
    description:
      "The battery disconnect unit: 400 to 750 V at 600 A, twelve HV contactors, with HVIL, insulation monitoring and an IP67 enclosure.",
    tags: ["Bus", "Truck", "Tractor", "HV storage"],
    imageSrc: "/images/products/products/bettery-manegement/high-voltage/img-5.jpg",
    imageAlt: "VinciX EV-BDU",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Operating voltage range", specification: "400V - 750V DC" },
      { parameter: "Total current capacity", specification: "600A" },
      { parameter: "Topology", specification: "3-In / 2-Out / 2-Charge" },
      { parameter: "HV contactors", specification: "12x HV Contator (1000V, 400A)" },
      { parameter: "Main contactors (K3/K4/K10/K6)", specification: "400A rated" },
      { parameter: "Charge contactors (K1/K2/K7/K8)", specification: "300A rated" },
      { parameter: "Precharge contactor (K5)", specification: "20A rated" },
      { parameter: "Precharge resistor", specification: "50Ω, 150W" },
      { parameter: "Current sensors", specification: "3x (±700A, Fluxgate, CAN)" },
      { parameter: "Manual service disconnect", specification: "3x MSD with 630A fuse" },
      { parameter: "BMS master MCU", specification: "VinciX HV BMS" },
      { parameter: "CAN communication", specification: "3x CAN 2.0B" },
      { parameter: "LV connectors", specification: "4x (DC/DC, Diagnostics, Battery CAN, Vehicle CAN)" },
      { parameter: "Enclosure material", specification: "MS" },
      { parameter: "Enclosure dimensions", specification: "585 x 563 x 230 mm" },
      { parameter: "Protection rating", specification: "IP67" },
    ],
  },
  {
    slug: "vincix-ess-lmu",
    aliases: ["ess-lmu"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · ENERGY STORAGE",
    title: "VinciX ESS-LMU",
    description:
      "Tier one — the module slave. Six to eighteen cells per unit, daisy-chained over ISO-SPI or CAN up the rack.",
    tags: ["Residential storage", "C&I storage", "Grid storage"],
    imageSrc: "/images/products/products/bettery-manegement/energy-storage/img-1.jpg",
    imageAlt: "VinciX ESS-LMU",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Cell Chemistry", specification: "Chemistry Agnostic" },
      { parameter: "Number of Cells", specification: "6 - 18 Cells (Software configurable based on requirement)" },
      { parameter: "Cell Voltage Measurement Accuracy", specification: "+/- 5mV" },
      { parameter: "Cell Balancing Current", specification: "420mA @4.2V" },
      { parameter: "Number of Temperature sensor", specification: "9" },
      { parameter: "Communication with Master Board", specification: "ISO-SPI" },
      { parameter: "Dimension", specification: "90.3 * 93.3 * 15 mm (L*W*H)" },
    ],
  },
  {
    slug: "vincix-ess-pdu",
    aliases: ["ess-pdu"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · ENERGY STORAGE",
    title: "VinciX ESS-PDU",
    description:
      "Tier two — the rack master. Up to twenty LMUs per rack, with the contactor stack, manual service disconnect and insulation monitoring.",
    tags: ["C&I storage", "Grid storage"],
    imageSrc: "/images/products/products/bettery-manegement/energy-storage/img-2.jpg",
    imageAlt: "VinciX ESS-PDU",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Power supply", specification: "Option1: External AC Supply" },
      { parameter: "Number of LMU", specification: "Up to 20 (Easily configurable based on design requirement)" },
      { parameter: "Status LED", specification: "Power Supply, Fault and Ok" },
      { parameter: "External display interface", specification: "4.2 inch/7 inch/ 10-inch touch screen display" },
      { parameter: "Current Sense type", specification: "Hall Sensor" },
      { parameter: "Master BMS", specification: "VinciX_HV_BMS" },
      { parameter: "PCS communication type", specification: "Modbus over RS485" },
      { parameter: "Supported CAN speeds", specification: "Up to 1Mbps" },
      { parameter: "CAN ports", specification: "2 Isolated CAN" },
      { parameter: "Remote monitoring module communication type", specification: "Isolated RS-485" },
      { parameter: "Supported RS-485 speeds", specification: "Up to 1Mbps" },
      { parameter: "Local data monitoring", specification: "CAN/RS485" },
      { parameter: "Control IO", specification: "Isolated O/P: 2" },
      { parameter: "Dimension", specification: "3U Rack Mounted" },
    ],
  },
  {
    slug: "vincix-msc",
    aliases: ["ess-msc"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · ENERGY STORAGE",
    title: "VinciX MSC",
    description:
      "Tier three — the multi-string controller. Up to twenty racks in parallel, presenting one interface to the power conversion system.",
    tags: ["Grid storage", "Multi-string BESS"],
    imageSrc: "/images/products/products/bettery-manegement/energy-storage/img-3.jpg",
    imageAlt: "VinciX MSC",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Power supply", specification: "External 12V/24V" },
      { parameter: "Number of Parallel PDU", specification: "Up to 20 (Easily configurable based on design requirement)" },
    ],
  },
  {
    slug: "vincix-ess-mosfet-bms",
    aliases: ["ess-mosfet-bms"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · ENERGY STORAGE",
    title: "VinciX ESS MOSFET BMS",
    description:
      "Seven to sixteen cells with solid-state switching at 100, 150 or 200 A, for low-voltage stationary storage.",
    tags: ["Home storage", "Telecom", "Small C&I"],
    imageSrc: "/images/products/products/bettery-manegement/energy-storage/img-4.jpg",
    imageAlt: "VinciX ESS MOSFET BMS",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Number of cells", specification: "7 \u2013 16 Cells (Software configurable based on requirement)" },
      { parameter: "Cell chemistry", specification: "Chemistry agnostic" },
      { parameter: "Cell voltage measurement accuracy", specification: "\u00B110 mV" },
      { parameter: "Cell balancing method", specification: "Dissipative" },
      { parameter: "Cell balancing current", specification: "150 mA @ 4.2 V" },
      { parameter: "Continuous discharge current", specification: "100 A / 150 A / 200 A" },
      { parameter: "Peak discharge current", specification: "150 A / 300 A / 400 A @ 10s" },
      { parameter: "Protection features", specification: "Over-voltage, Under-voltage, Over-current, Short circuit & Over-temperature" },
    ],
  },
  {
    slug: "navas-vts-4g",
    aliases: ["vts-4g"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · TRANSIT SYSTEMS",
    title: "NAVAS VTS-4G",
    description:
      "AIS-140 vehicle tracking on 4G LTE, with multi-constellation GNSS, three isolated CAN FD ports and over-the-air updates.",
    tags: ["Bus fleets", "Commercial vehicles", "Public transport"],
    imageSrc: "/images/products/products/bettery-manegement/transit-systems/img-1.jpg",
    imageAlt: "NAVAS VTS-4G",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Application", specification: "Bus Fleets, Commercial Vehicles & Public Transport" },
      { parameter: "Cellular Connectivity", specification: "4G LTE Module with 2G Fallback" },
      { parameter: "Positioning System", specification: "Multi-Constellation GNSS (GPS, GLONASS, NavIC)" },
      { parameter: "CAN Interface", specification: "3x Isolated CAN FD Ports" },
      { parameter: "Certification", specification: "AIS-140 Certified" },
      { parameter: "Firmware Updates", specification: "Over-The-Air (OTA) Remote Upgrades" },
      { parameter: "Internal Memory", specification: "Onboard Data Logging for Offline Buffering" },
      { parameter: "Power Input", specification: "9V \u2013 36V DC Automotive Power Supply" },
    ],
  },
  {
    slug: "navas-pis",
    aliases: ["pis"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · TRANSIT SYSTEMS",
    title: "NAVAS PIS",
    description:
      "Passenger Information System providing audio-visual announcements, display integration, and transit control.",
    tags: ["City buses", "Intercity coaches", "Rail"],
    imageSrc: "/images/products/products/bettery-manegement/transit-systems/img-2.jpg",
    imageAlt: "NAVAS PIS",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Application", specification: "City Buses, Intercity Coaches & Rail Transit" },
      { parameter: "System Functions", specification: "Audio Announcements & LED/LCD Destination Display Control" },
      { parameter: "Vehicle Interface", specification: "Ethernet & Isolated CAN Bus Integration" },
      { parameter: "Operating Voltage", specification: "18V \u2013 36V DC Railway & Automotive Grade" },
      { parameter: "Storage & Audio", specification: "Multilingual Voice Announcement Engine" },
      { parameter: "Reliability", specification: "Shock & Vibration Compliant (EN 50155)" },
    ],
  },
  {
    slug: "navas-its",
    aliases: ["its"],
    categoryBreadcrumb: "PRODUCTS · BATTERY MANAGEMENT · TRANSIT SYSTEMS",
    title: "NAVAS ITS",
    description:
      "Intelligent Transit System for fleet management, depot operations, driver safety compliance, and central monitoring.",
    tags: ["Bus fleets", "Depot operations", "Safety compliance"],
    imageSrc: "/images/products/products/bettery-manegement/transit-systems/img-3.jpg",
    imageAlt: "NAVAS ITS",
    contextLink: "/solutions/battery-management",
    specifications: [
      { parameter: "Application", specification: "Bus Fleets, Depot Operations & Transit Authorities" },
      { parameter: "Feature Suite", specification: "Depot Management, Driver Diagnostics & Route Analytics" },
      { parameter: "Cloud Integration", specification: "Real-Time Telematics & Central Monitoring API" },
      { parameter: "Compliance", specification: "Automotive & Fleet Safety Standards" },
      { parameter: "System Interface", specification: "Dual Isolated CAN & Ethernet Interfaces" },
    ],
  },
  {
    slug: "ac-charger-3-3-kw",
    categoryBreadcrumb: "PRODUCTS · EV CHARGING",
    title: "AC Charger \u2014 3.3 kW",
    description:
      "A wall-mounted AC unit for homes and workplaces, with RFID authentication and integrated cable management.",
    tags: ["HOME", "WORKPLACE", "APARTMENT"],
    imageSrc: "/images/products/products/bettery-manegement/ev-chargers/img-1.jpg",
    imageAlt: "AC Charger \u2014 3.3 kW",
    contextLink: "/solutions/ev-charging",
    specifications: [
      // { parameter: "Application", specification: "Home, Workplace & Apartment Complex EV Charging" },
      // { parameter: "Power Output", specification: "3.3 kW AC (Single Phase, 230 V)" },
      // { parameter: "Charging Connector", specification: "IEC 62196-2 / Type 2 Connector" },
      // { parameter: "User Interface", specification: "LED Status Indicators & RFID Authentication" },
      // { parameter: "Communication", specification: "Wi-Fi / Bluetooth / OCPP 1.6J Ready" },
      // { parameter: "Protection Rating", specification: "IP65 Weatherproof Enclosure" },
      // { parameter: "Safety Features", specification: "Overcurrent, Residual Current & Surge Protection" },
      // { parameter: "Factory Test", specification: "100% Full Load Electrical Safety & Communication Test" },
    ],
  },
  {
    slug: "dc-charger-30-kw",
    categoryBreadcrumb: "PRODUCTS · EV CHARGING",
    title: "DC Charger \u2014 30 kW",
    description:
      "A compact DC fast charger for fleet depots and retail forecourts, with a full operator display.",
    tags: ["FLEET DEPOT", "FORECOURT", "3W & 4W"],
    imageSrc: "/images/products/products/bettery-manegement/ev-chargers/img-2.jpg",
    imageAlt: "DC Charger \u2014 30 kW",
    contextLink: "/solutions/ev-charging",
    specifications: [
      // { parameter: "Application", specification: "Fleet Depots & Commercial Retail Forecourts (3W & 4W)" },
      // { parameter: "Power Output", specification: "30 kW DC Fast Charging" },
      // { parameter: "Output Voltage Range", specification: "200 V \u2013 750 V DC" },
      // { parameter: "Charging Connector", specification: "CCS2 / CHAdeMO / GB/T Support" },
      // { parameter: "User Interface", specification: "Full Operator Touchscreen Display & RFID" },
      // { parameter: "Communication Protocol", specification: "OCPP 1.6J Native Charge Management Platform" },
      // { parameter: "Protection Rating", specification: "IP54 Outdoor Rated Enclosure" },
      // { parameter: "Factory Test", specification: "100% ARAI & Full Load DC Charging Safety Diagnostics" },
    ],
  },
  {
    slug: "dc-charger-60-kw",
    categoryBreadcrumb: "PRODUCTS · EV CHARGING",
    title: "DC Charger \u2014 60 kW",
    description:
      "A dual-connector DC unit, ARAI tested, charging two vehicles at once.",
    tags: ["PUBLIC CHARGING", "FLEET DEPOT"],
    imageSrc: "/images/products/products/bettery-manegement/ev-chargers/img-3.jpg",
    imageAlt: "DC Charger \u2014 60 kW",
    contextLink: "/solutions/ev-charging",
    specifications: [
      // { parameter: "Application", specification: "Public Charging Stations & Fleet Depots" },
      // { parameter: "Power Output", specification: "60 kW Dual-Gun DC Fast Charging" },
      // { parameter: "Load Balancing", specification: "Dynamic Load Sharing (Simultaneous Charging)" },
      // { parameter: "Certification", specification: "ARAI Tested & Certified" },
      // { parameter: "User Interface", specification: "Interactive Touchscreen Display, RFID & App Support" },
      // { parameter: "Communication Protocol", specification: "OCPP 1.6J Native with Plugzmart Relay CMS" },
      // { parameter: "Protection Rating", specification: "IP54 Heavy-Duty Enclosure" },
      // { parameter: "Factory Test", specification: "100% Dual-Gun Load Testing & Grid Safety Verification" },
    ],
  },
  {
    slug: "dc-charger-120-kw",
    categoryBreadcrumb: "PRODUCTS · EV CHARGING",
    title: "DC Charger \u2014 120 kW",
    description:
      "Highway-grade CCS charging with dual cables and a full operator display, part of a range extending to 360 kW.",
    tags: ["HIGHWAY", "PUBLIC CHARGING", "BUS & TRUCK"],
    imageSrc: "/images/products/products/bettery-manegement/ev-chargers/img-4.jpg",
    imageAlt: "DC Charger \u2014 120 kW",
    contextLink: "/solutions/ev-charging",
    specifications: [
      // { parameter: "Application", specification: "Highway Charging Hubs, Commercial Fleets, E-Buses & E-Trucks" },
      // { parameter: "Power Output", specification: "120 kW (Scalable Architecture up to 360 kW)" },
      // { parameter: "Max Output Current", specification: "Up to 250 A Continuous per Connector" },
      // { parameter: "Charging Connectors", specification: "Dual CCS2 Heavy-Duty Cooled Cables" },
      // { parameter: "User Interface", specification: "High-Brightness Touchscreen Display & RFID Reader" },
      // { parameter: "Communication Protocol", specification: "OCPP 1.6J / OCPP 2.0.1 Ready with Smart Grid Integration" },
      // { parameter: "Safety Features", specification: "Surge Protection, Insulation Monitoring & Emergency Stop" },
      // { parameter: "Factory Test", specification: "100% High-Power Load Verification & Safety Isolation Test" },
    ],
  }
];

export function getProductBySlug(slug: string): ProductDetailItem {
  const found = allProductsDetailData.find(
    (p) => p.slug === slug || p.aliases?.includes(slug)
  );
  if (found) return found;

  const allCards = [
    ...evBatteryPacksData,
    ...energyStorageSystemsData,
    ...lowVoltageManagementData,
    ...highVoltageManagementData,
    ...energyStorageManagementSystemsData,
    ...transitSystemsData,
    ...evChargingSystemsData,
  ];

  const matchedCard = allCards.find(
    (c) => c.href?.endsWith(slug) || c.href === `/products/${slug}`
  );

  if (matchedCard) {
    return {
      slug,
      categoryBreadcrumb: "PRODUCTS · SPECIFICATION",
      title: matchedCard.title,
      description: matchedCard.description,
      tags: matchedCard.tags || ["ENGINEERED", "APPLICATION SPECIFIC"],
      imageSrc: matchedCard.imageSrc,
      imageAlt: matchedCard.imageAlt || matchedCard.title,
      contextLink: "/solutions",
      issuedNoteTitle: "Issued per application",
      issuedNoteText:
        "This product is built to the programme or the load profile, so its datasheet is issued against your configuration rather than published as a catalogue sheet.",
    };
  }

  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    slug,
    categoryBreadcrumb: "PRODUCTS · ENERVAA HARDWARE",
    title: formattedTitle,
    description:
      "Engineered to the vehicle programme or the load profile, with our own battery management and diagnostic coverage inside.",
    tags: ["SPECIFICATION", "LOCALIZED SUPPLY"],
    imageSrc: "/images/products/products/img-1.png",
    imageAlt: formattedTitle,
    contextLink: "/solutions",
    issuedNoteTitle: "Issued per application",
    issuedNoteText:
      "This product is built to the programme or the load profile, so its datasheet is issued against your configuration rather than published as a catalogue sheet.",
  };
}







