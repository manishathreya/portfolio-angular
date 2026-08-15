import { Injectable } from '@angular/core';
import {
  ACHIEVEMENTS,
  EDUCATION,
  EXPERIENCE,
  PERSONAL_INFO,
  PROJECTS,
  SKILLS,
} from '../data/portfolio-data';
import {
  AchievementEntry,
  EducationEntry,
  ExperienceEntry,
  PersonalInfo,
  ProjectEntry,
  SkillCategory,
} from '../models/portfolio.models';


@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  getPersonalInfo(): PersonalInfo {
    return PERSONAL_INFO;
  }

  getSkills(): SkillCategory[] {
    return SKILLS;
  }

  getExperience(): ExperienceEntry[] {
    return EXPERIENCE;
  }

  getProjects(): ProjectEntry[] {
    return PROJECTS;
  }

  getAchievements(): AchievementEntry[] {
    return ACHIEVEMENTS;
  }

  getEducation(): EducationEntry[] {
    return EDUCATION;
  }
}
