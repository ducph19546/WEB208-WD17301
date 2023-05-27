import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductAddFormComponent } from './pages/product-add-form/product-add-form.component';
import { ProductUpdateFormComponent } from './pages/product-update-form/product-update-form.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    ProductDetailComponent,
    ProductAddFormComponent,
    ProductUpdateFormComponent,
    WebsiteLayoutComponent,
    NotFoundPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
