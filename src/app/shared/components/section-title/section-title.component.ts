import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-10 md:mb-14">
      <p class="font-mono text-sm text-signal tracking-tight">
        <span class="text-wire">$</span> {{ command }}<span class="animate-blink text-signal">_</span>
      </p>
      <h2 class="mt-3 text-3xl md:text-4xl font-display font-bold text-slate-50">{{ title }}</h2>
      <p *ngIf="subtitle" class="mt-3 max-w-2xl text-ink2 font-body">{{ subtitle }}</p>
      <div class="mt-5 h-px w-14 bg-signal"></div>
    </div>
  `,
})
export class SectionTitleComponent {
  @Input() command = '';
  @Input() title = '';
  @Input() subtitle = '';
}
