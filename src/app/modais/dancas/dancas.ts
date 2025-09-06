import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dancas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dancas.html',
  styleUrl: './dancas.scss'
})
export class Dancas {
    // Controlando a visibilidade do modal com open
    @Input() open = false;
    // Função que será chamada para fechar o modal
    @Input() closeModalDancas!: () => void;
}
