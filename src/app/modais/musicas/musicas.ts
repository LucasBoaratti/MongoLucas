import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-musicas',
  imports: [CommonModule],
  templateUrl: './musicas.html',
  styleUrl: './musicas.scss'
})
export class Musicas {
    // Controlando a visibilidade do modal com open
    @Input() openModalMusica = false;
    // close é uma função que será chamada para fechar o modal
    @Input() fecharModalMusica!: () => void;
}
