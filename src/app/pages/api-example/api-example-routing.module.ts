import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiExamplePage } from './api-example.page';

const routes: Routes = [
  {
    path: '',
    component: ApiExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiExamplePageRoutingModule {}
