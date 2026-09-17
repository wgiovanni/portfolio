export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'Full-Stack' | 'Architecture' | 'Open Source' | 'AI Systems' | 'Enterprise' | 'Fintech' | 'Fintech / Data';
  badge?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  architectureHighlights?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type?: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface TerminalTab {
  id: string;
  filename: string;
  language: string;
  content: string;
}
