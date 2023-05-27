import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update-form',
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.scss']
})
export class ProductUpdateFormComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productService: ProductService, private route: ActivatedRoute, private nav: Router) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.productService.getProduct(id).subscribe(data => {
        this.product = data
      })
    })
  }
  onHandleSubmit() {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.nav.navigateByUrl("/products")
    })
  }
}
