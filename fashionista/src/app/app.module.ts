import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductRetrieveComponent } from './product-retrieve/product-retrieve.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyStoreComponent } from './company-store/company-store.component';
import { CompanyRetrieveComponent } from './company-retrieve/company-retrieve.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthModule } from './auth/auth.module';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { UserRetrieveComponent } from './user-retrieve/user-retrieve.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductStoreComponent,
    ProductRetrieveComponent,
    CompanyStoreComponent,
    CompanyRetrieveComponent,
    NavbarComponent,
    ProductUpdateComponent,
    CompanyUpdateComponent,
    ProductComponent,
    CartComponent,
    UserRetrieveComponent,
    UserStoreComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
