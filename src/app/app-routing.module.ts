import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductAddFormComponent } from './pages/product-add-form/product-add-form.component';
import { ProductUpdateFormComponent } from './pages/product-update-form/product-update-form.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: "", component: WebsiteLayoutComponent, children: [
      { path: "", component: HomePageComponent },
      {
        path: "products", component: ProductsPageComponent
      },
      { path: "products/add", component: ProductAddFormComponent },
      { path: "products/:id", component: ProductDetailComponent },

      { path: "products/:id/update", component: ProductUpdateFormComponent },


    ]
  },
  {
    path: "**", component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
