import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PersonalInfo } from '../../core/models/portfolio.models';
import { IconComponent } from '../../shared/components/icon/icon.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly info: PersonalInfo;

  constructor(private readonly data: PortfolioDataService) {
    this.info = this.data.getPersonalInfo();
  }
}
