import { Component } from '@angular/core';
import { ProductService } from '../api/products/product.service';

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>`,
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Aceme Product Management';
}
