import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductGuardService] },
    ]),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProductGuardService
  ]
})
export class ProductRoutingModule { }
