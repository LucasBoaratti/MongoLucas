import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
    // Construtor que permite navegar entre rotas, sem precisar do routerLink
    constructor(private router: Router) {}

    // Função que muda a rota atual para a página de culturas
    cultura(): void {
        this.router.navigate(['/culturas']);
    }
    
    // Navegação para a página de receitas
    receita(): void {
        this.router.navigate(["/receitas"]);
    }
}
