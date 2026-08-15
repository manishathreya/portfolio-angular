import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PersonalInfo } from '../../core/models/portfolio.models';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

interface ContactRow {
  label: string;
  value: string;
  href: string | null;
  icon: 'mail' | 'phone' | 'map-pin' | 'github' | 'linkedin';
}


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly info: PersonalInfo;
  readonly rows: ContactRow[];

  constructor(private readonly data: PortfolioDataService) {
    this.info = this.data.getPersonalInfo();
    this.rows = [
      { label: 'email', value: this.info.email, href: `mailto:${this.info.email}`, icon: 'mail' },
      { label: 'phone', value: this.info.phone, href: `tel:${this.info.phone.replace(/\s+/g, '')}`, icon: 'phone' },
      { label: 'location', value: this.info.location, href: null, icon: 'map-pin' },
      ...this.info.socials
        .filter((s) => s.icon === 'github' || s.icon === 'linkedin')
        .map((s) => ({
          label: s.label.toLowerCase(),
          value: s.url.replace('https://', ''),
          href: s.url,
          icon: s.icon,
        })),
    ];
  }
}
