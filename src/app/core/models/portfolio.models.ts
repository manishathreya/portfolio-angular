export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail' | 'phone';
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  yearsOfExperience: string;
  socials: SocialLink[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface ProjectEntry {
  name: string;
  tagline: string;
  highlights: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  detail: string;
}

export interface AchievementEntry {
  text: string;
}
