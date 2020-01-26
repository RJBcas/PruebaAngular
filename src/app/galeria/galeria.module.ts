import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { GaleriaRoutingModule } from './galeria-routing.module';
import { ListComponent } from './list/list.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FilterPipe } from '../pipe/filter.pipe';

@NgModule({
  declarations: [ListComponent, DetalleComponent,
  FilterPipe
],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    FormsModule
  ],
})
export class GaleriaModule { }
