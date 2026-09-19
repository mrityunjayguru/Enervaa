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





