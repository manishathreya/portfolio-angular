import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300"
      [ngClass]="scrolled ? 'bg-ink border-white/5 backdrop-blur' : 'border-transparent'"
    >
      <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" class="font-mono text-sm text-slate-200">
          <span class="text-wire">manish</span><span class="text-ink2">&#64;portfolio</span><span class="text-signal">:~$</span>
          <span class="animate-blink text-signal">_</span>
        </a>

        <ul class="hidden md:flex items-center gap-8 font-body text-sm text-slate-300">
          <li *ngFor="let link of links">
            <a [href]="link.href" class="hover:text-signal transition-colors duration-200">{{ link.label }}</a>
          </li>
        </ul>

        <button
          type="button"
          class="md:hidden text-slate-200 p-2"
          (click)="menuOpen = !menuOpen"
          [attr.aria-expanded]="menuOpen"
          aria-label="Toggle navigation menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <path *ngIf="!menuOpen" d="M4 6h16M4 12h16M4 18h16"></path>
            <path *ngIf="menuOpen" d="M6 6l12 12M18 6 6 18"></path>
          </svg>
        </button>
      </nav>

      <ul *ngIf="menuOpen" class="md:hidden bg-ink border-t border-white/5 px-6 py-4 space-y-3 font-body text-sm">
        <li *ngFor="let link of links">
          <a [href]="link.href" (click)="menuOpen = false" class="block text-slate-300 hover:text-signal transition-colors duration-200">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </header>
  `,
})
export class NavbarComponent {
  menuOpen = false;
  scrolled = false;

  readonly links: NavLink[] = [
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 8;
  }
}
