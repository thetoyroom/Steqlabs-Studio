export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  client: string;
  category: string;
  image: string;
  srcset?: string;
  year: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  text: string;
}
