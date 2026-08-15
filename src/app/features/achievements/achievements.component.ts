import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { AchievementEntry } from '../../core/models/portfolio.models';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <app-section-title command="git log --oneline --achievements" title="Achievements"></app-section-title>

    <ul class="space-y-4 max-w-3xl">
      <li
        *ngFor="let item of achievements"
        class="flex items-start gap-3 rounded-lg border border-white/10 bg-panel/60 px-5 py-4 text-slate-300 font-body text-sm leading-relaxed"
      >
        <span class="mt-0.5 font-mono text-signal">&#10003;</span>
        <span>{{ item.text }}</span>
      </li>
    </ul>
  `,
})
export class AchievementsComponent {
  readonly achievements: AchievementEntry[];

  constructor(private readonly data: PortfolioDataService) {
    this.achievements = this.data.getAchievements();
  }
}
