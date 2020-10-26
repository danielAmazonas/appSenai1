import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'api-example',
    pathMatch: 'full',
  },
  {
    path: 'api-example',
    loadChildren: () =>
      import('./pages/api-example/api-example.module').then(
        (m) => m.ApiExamplePageModule
      ),
  },
  {
    path: 'crud',
    loadChildren: () =>
      import('./pages/crud/crud.module').then((m) => m.CrudPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
