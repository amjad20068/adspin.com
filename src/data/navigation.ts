export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export const NAV_LINKS: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Work", href: "/work" },
  { title: "Process", href: "/process" },
  { title: "Clients", href: "/clients" },
  { title: "Journal", href: "/insights" },
  { title: "Contact", href: "/contact" },
];

