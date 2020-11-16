import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CompanyRetrieveComponent } from './company-retrieve/company-retrieve.component';
import { CompanyStoreComponent } from './company-store/company-store.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { HomeComponent } from './home/home.component';
import { ProductRetrieveComponent } from './product-retrieve/product-retrieve.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductComponent } from './product/product.component';
import { UserRetrieveComponent } from './user-retrieve/user-retrieve.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productStore', component: ProductStoreComponent },
  { path: 'productRetrieve', component: ProductRetrieveComponent },
  { path: 'productUpdate/:id', component: ProductUpdateComponent },
  { path: 'productDisplay', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'companyStore', component: CompanyStoreComponent },
  { path: 'companyRetrieve', component: CompanyRetrieveComponent },
  { path: 'companyUpdate/:id', component: CompanyUpdateComponent },
  { path: 'userStore', component: UserStoreComponent },
  { path: 'userRetrieve', component: UserRetrieveComponent },
  { path: 'userUpdate/:id', component: UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
