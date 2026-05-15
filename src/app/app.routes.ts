import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { News } from './pages/news/news';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'noticias', component: News },
    { path: 'noticias/:id', component: News },
    { path: 'proyectos', component: Projects },
    { path: 'proyectos/:id', component: Projects },
];
