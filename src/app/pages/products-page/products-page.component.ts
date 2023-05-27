import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  products!: IProduct[]
  constructor(private productService: ProductService) {
    this.productService.getAllProduct().subscribe(data => {
      this.products = data
    })
  }
  removeItem(id: number | undefined) {
    this.productService.removeProduct(id).subscribe(data => {
      this.products.filter(item => item.id != data.id)
    })
  }
}
