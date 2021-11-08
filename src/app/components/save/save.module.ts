import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SaveComponent } from './save.component';

const routes: Routes = [
  {
    path: '',
    component: SaveComponent,
  },
];

@NgModule({
  declarations: [SaveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SaveModule { }
