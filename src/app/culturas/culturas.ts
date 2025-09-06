import { Component } from '@angular/core';
import { Festival } from '../modais/festival/festival';
import { Trajes } from "../modais/trajes/trajes";
import { Musicas } from '../modais/musicas/musicas';
import { Dancas } from "../modais/dancas/dancas";

@Component({
  selector: 'app-culturas',
  imports: [Festival, Trajes, Musicas, Dancas],
  templateUrl: './culturas.html',
  styleUrl: './culturas.scss'
})
export class Culturas {
    // Definindo o estado que controla se modal está visível (define se ele está aberto ou não)
    openModalFestivais: boolean = false;

    // Função que abre o modal
    abrirModalFestivais = () => {
        this.openModalFestivais = true;
    }

    // Função que fecha o modal
    fecharModalFestivais = () => {
        this.openModalFestivais = false;
    }

    // Controlando o modal dos trajes nacionais

    openModalTrajes: boolean = false;

    abrirModalTrajes = () => {
        this.openModalTrajes = true;
    }

    fecharModalTrajes = () => {
        this.openModalTrajes = false;
    }

    // Controlando o estado do modal de músicas

    openModalMusicas: boolean = false;

    abrirModalMusicas = () => {
        this.openModalMusicas = true;
    }

    fecharModalMusicas = () => {
        this.openModalMusicas = false;
    }

    // Controlando o estado do modal de danças

    openModalDancas: boolean = false;

    abrirModalDancas = () => {
        this.openModalDancas = true;
    }

    fecharModalDancas = () => {
        this.openModalDancas = false;
    }
}
