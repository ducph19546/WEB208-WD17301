import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.productService.getProduct(id).subscribe(data => {
        this.product = data
      })
    })
  }
}
