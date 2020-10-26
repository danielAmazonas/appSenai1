import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiExamplePageRoutingModule } from './api-example-routing.module';

import { ApiExamplePage } from './api-example.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiExamplePageRoutingModule,
  ],
  declarations: [ApiExamplePage, ToolbarComponent],
})
export class ApiExamplePageModule {}
