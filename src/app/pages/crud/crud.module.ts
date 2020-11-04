import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudPageRoutingModule } from './crud-routing.module';

import { CrudPage } from './crud.page';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudPageRoutingModule,
    ReactiveFormsModule,
    ToolbarModule,
  ],
  declarations: [CrudPage],
})
export class CrudPageModule {}
