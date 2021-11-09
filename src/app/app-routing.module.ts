import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

// Habilita o Lazy Loading do componente usando uma Promise
const routes: Routes = [
  {
    path: 'list',
    loadChildren: async () => (await import('./components/list/list.module')).ListModule,
  },
  {
    path: 'save',
    loadChildren: async () => (await import('./components/save/save.module')).SaveModule,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
