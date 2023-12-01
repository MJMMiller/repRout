import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      
      {//Instanciar pa pagina hija de inicio
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then( hijo => hijo.InicioPageModule)
      },
      {//Instanciar pa pagina hija de inicio
        path: 'nudo/:id',
        loadChildren: () => import('./nudo/nudo.module').then( hijo => hijo.NudoPageModule)
      },
      {//Instanciar pa pagina hija de inicio
        path: 'desenlace',
        loadChildren: () => import('./desenlace/desenlace.module').then( hijo => hijo.DesenlacePageModule)
      },
      {//Hija por defecto
        path: '',
        redirectTo:"inicio",
        pathMatch:"full"
      },
    ]
  },
  {//Padre por defecto
    path: '',
    redirectTo:"tabs/inicio",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
