import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.scss']
})
export class ProductAddFormComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productService: ProductService, private nav: Router) {
  }
  onHandleSubmit() {
    this.productService.createProduct(this.product).subscribe(() => {
      this.nav.navigateByUrl("/products")
    })
  }
}
