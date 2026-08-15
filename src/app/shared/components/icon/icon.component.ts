import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type IconName = 'github' | 'linkedin' | 'mail' | 'phone' | 'map-pin' | 'external-link' | 'arrow-down';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.viewBox]="'0 0 24 24'"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="shrink-0"
    >
      <ng-container [ngSwitch]="name">
        <ng-container *ngSwitchCase="'mail'">
          <rect x="3" y="5" width="18" height="14" rx="2"></rect>
          <path d="M3 7l9 6 9-6"></path>
        </ng-container>

        <ng-container *ngSwitchCase="'phone'">
          <path
            d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.36 2.28.56 3.5.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.22.2 2.4.56 3.5a1 1 0 0 1-.25 1L6.6 10.8Z"
          ></path>
        </ng-container>

        <ng-container *ngSwitchCase="'map-pin'">
          <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z"></path>
          <circle cx="12" cy="10" r="2.5"></circle>
        </ng-container>

        <ng-container *ngSwitchCase="'external-link'">
          <path d="M7 17 17 7"></path>
          <path d="M9 7h8v8"></path>
        </ng-container>

        <ng-container *ngSwitchCase="'arrow-down'">
          <path d="M12 4v16"></path>
          <path d="m5 13 7 7 7-7"></path>
        </ng-container>

        <ng-container *ngSwitchCase="'github'">
          <rect x="2.5" y="2.5" width="19" height="19" rx="4"></rect>
          <text x="12" y="15.5" text-anchor="middle" font-size="8" font-family="monospace" stroke="none" fill="currentColor">&lt;/&gt;</text>
        </ng-container>

        <ng-container *ngSwitchCase="'linkedin'">
          <rect x="2.5" y="2.5" width="19" height="19" rx="4"></rect>
          <text x="12" y="15.5" text-anchor="middle" font-size="9" font-family="monospace" stroke="none" fill="currentColor">in</text>
        </ng-container>
      </ng-container>
    </svg>
  `,
})
export class IconComponent {
  @Input() name: IconName = 'mail';
}
