export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface Feature {
  id: string;
  text: string;
}

export interface ChartData {
  name: string;
  value: number;
}