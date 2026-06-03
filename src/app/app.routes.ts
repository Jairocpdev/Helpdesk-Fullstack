import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChamadosComponent } from './pages/chamados/chamados.component';
import { NovoChamadoComponent } from './pages/novo-chamado/novo-chamado.component';
import { EmitirNovoChamadoComponent } from './pages/emitir-novo-chamado/emitir-novo-chamado.component'


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'chamados',
    component: ChamadosComponent
  },

  {
  path: 'novo-chamado',
  component: NovoChamadoComponent
},

{
  path: 'editar-chamado/:id',
  component: NovoChamadoComponent
}

];