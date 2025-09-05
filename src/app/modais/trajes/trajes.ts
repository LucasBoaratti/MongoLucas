import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trajes.html',
  styleUrl: './trajes.scss'
})
export class Trajes {
    // Controlando a visibilidade do modal com open
    @Input() open = false;
    // close é uma função que será chamada para fechar o modal
    @Input() closeModalTrajes!: () => void;
}
