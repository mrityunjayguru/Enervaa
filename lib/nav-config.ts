export interface SubMenuItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  isExternal?: boolean;
}

export interface NavItem {
  title: string;
  href: string;
  children?: SubMenuItem[];
  isExternal?: boolean;
}

// Add your routes & submenus to this array whenever needed.
// Example format:
// {
//   title: "Solutions",
//   href: "/solutions",
//   children: [
//     { title: "Battery Packs", href: "/solutions/battery-packs", description: "LFP energy storage" },
//   ],
// }
export const NAV_ITEMS: NavItem[] = [];
