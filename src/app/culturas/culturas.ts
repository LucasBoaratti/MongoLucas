import { Component } from '@angular/core';
import { Culturamodal1 } from '../modais/festival/festival';

@Component({
  selector: 'app-culturas',
  imports: [Culturamodal1],
  templateUrl: './culturas.html',
  styleUrl: './culturas.scss'
})
export class Culturas {
    // Definindo o estado do modal como false (define se ele está aberto ou não)
    openModal = false;

    // Função que abre o modal
    abrirModal = () => {
        this.openModal = true;
    }

    // Função que fecha o modal
    fecharModal = () => {
        this.openModal = false;
    }
}
