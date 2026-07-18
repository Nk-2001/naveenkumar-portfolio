export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  status?: string;
  bullets: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  percentage: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}
