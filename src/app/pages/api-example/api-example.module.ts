import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiExamplePageRoutingModule } from './api-example-routing.module';

import { ApiExamplePage } from './api-example.page';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiExamplePageRoutingModule,
    ToolbarModule,
  ],
  declarations: [ApiExamplePage],
})
export class ApiExamplePageModule {}
