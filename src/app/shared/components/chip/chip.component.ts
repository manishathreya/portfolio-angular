import { Component, Input } from '@angular/core';

// Small mono "tag" used for individual skills — styled like a CLI flag or
// hashtag, consistent with the console-driven visual language used
// throughout (see shared/components/section-title).
@Component({
  selector: 'app-chip',
  standalone: true,
  template: `
    <span
      class="inline-flex items-center m-1 px-3 py-1.5 text-xs md:text-[13px] font-mono rounded-md border border-white/10 bg-white/[0.03] text-slate-300 hover:border-wire/60 hover:text-wire transition-colors duration-200"
    >
      {{ label }}
    </span>
  `,
})
export class ChipComponent {
  @Input() label = '';
}
