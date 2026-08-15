import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SocialLink } from '../../core/models/portfolio.models';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <footer class="border-t border-white/5 bg-ink">
      <div class="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-mono text-xs text-ink2">
          &#47;&#47; built with Angular &amp; Tailwind CSS · &copy; {{ year }} {{ name }}
        </p>
        <div class="flex items-center gap-4">
          <a
            *ngFor="let social of socials"
            [href]="social.url"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="social.label"
            class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-signal hover:border-signal/50 transition-colors duration-200"
          >
            <app-icon [name]="social.icon" class="w-4 h-4"></app-icon>
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly name: string;
  readonly socials: SocialLink[];

  constructor(private readonly data: PortfolioDataService) {
    const info = this.data.getPersonalInfo();
    this.name = info.name;
    this.socials = info.socials;
  }
}
