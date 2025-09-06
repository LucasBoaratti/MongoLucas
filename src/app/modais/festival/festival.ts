import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-festival',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './festival.html',
  styleUrl: './festival.scss'
})
export class Festival {
    // Controlando a visibilidade do modal com open
    @Input() open = false;
    // Função que será chamada para fechar o modal
    @Input() closeModalFestivais!: () => void;
}
