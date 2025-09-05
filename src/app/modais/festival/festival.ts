import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-festival',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './festival.html',
  styleUrl: './festival.scss'
})
export class Culturamodal1 {
    // Comportamento padrão do modal
    @Input() open = false;
    @Input() close!: () => void;
}
