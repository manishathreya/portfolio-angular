import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { EducationEntry } from '../../core/models/portfolio.models';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <app-section-title command="cat education.md" title="Education"></app-section-title>

    <div
      *ngFor="let edu of education"
      class="max-w-2xl rounded-xl border border-white/10 bg-panel/60 p-6 flex items-start justify-between gap-6 flex-wrap"
    >
      <div>
        <h3 class="text-xl font-display font-bold text-slate-50">{{ edu.institution }}</h3>
        <p class="mt-1 text-wire font-body text-sm">{{ edu.degree }}</p>
      </div>
      <p class="font-mono text-sm text-signal">{{ edu.detail }}</p>
    </div>
  `,
})
export class EducationComponent {
  readonly education: EducationEntry[];

  constructor(private readonly data: PortfolioDataService) {
    this.education = this.data.getEducation();
  }
}
