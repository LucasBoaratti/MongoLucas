import { Component } from '@angular/core';
import { Festival } from '../modais/festival/festival';
import { Trajes } from "../modais/trajes/trajes";

@Component({
  selector: 'app-culturas',
  imports: [Festival, Trajes],
  templateUrl: './culturas.html',
  styleUrl: './culturas.scss'
})
export class Culturas {
    // Definindo o estado que controla se modal está visível (define se ele está aberto ou não)
    openModalFestivais = false;

    // Função que abre o modal
    abrirModalFestivais = () => {
        this.openModalFestivais = true;
    }

    // Função que fecha o modal
    fecharModalFestivais = () => {
        this.openModalFestivais = false;
    }

    // Modal dos trajes nacionais

    openModalTrajes = false;

    abrirModalTrajes = () => {
        this.openModalTrajes = true;
    }

    fecharModalTrajes = () => {
        this.openModalTrajes = false;
    }
}
