import { Routes } from '@angular/router';
import { Receitas } from './receitas/receitas';
import { Culturas } from './culturas/culturas';
import { Home } from './home/home';

export const routes: Routes = [
    // Rota inicial da página home
    {
        path: "",
        component: Home
    },
    // Rota para a página de culturas
    {
        path: "culturas",
        component: Culturas
    },
    // Rota para a página de receitas
    { 
        path: "receitas", 
        component: Receitas 
    }
];