import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {
    path: '' , component: ListComponent
  },
  {
    path: 'detalle', component: DetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriaRoutingModule { }
