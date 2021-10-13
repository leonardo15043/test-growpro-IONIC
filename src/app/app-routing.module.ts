import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductPageModule } from './product/product.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product/nearby',
    pathMatch: 'full'
  },
  {
    path: 'product',
    loadChildren: () => ProductPageModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
