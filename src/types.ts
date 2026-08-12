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
  technicalDepth?: string[];
  specs?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  architectureDetails?: string[];
  featured?: boolean;
  stars?: number;
  terminalHeader?: string;
  isTerminalStyle?: boolean;
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
  metrics?: string;
}

export interface SkillCategory {
  category: string;
  iconName?: string;
  skills: { name: string; level?: number; description?: string; badge?: string }[];
}

export interface TerminalTab {
  id: string;
  filename: string;
  language: string;
  content: string;
}

export interface HireMeFormData {
  name: string;
  email: string;
  company?: string;
  serviceType?: string;
  budget?: string;
  timeline?: string;
  details?: string;
}
