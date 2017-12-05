import { NgModule } from '@angular/core';

import { ProductService } from '../../api/products/product.service';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  providers: [
    ProductService,

  ],
})
export class ProductModule { }
