import { Routes } from '@angular/router';
import { Receitas } from './receitas/receitas';
import { App } from './app';
import { Culturas } from './culturas/culturas';

export const routes: Routes = [
    {
        path: "",
        component: Culturas
    },
    { 
        path: "receitas", 
        component: Receitas 
    }
];