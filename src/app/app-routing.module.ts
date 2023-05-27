import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';


const routes: Routes = [
  {
    path : "", children :[
      {path:"",component:HomePageComponent},
      {path:"about",component:AboutPageComponent},
      {path:"product/:id",component:ProductDetailComponent}
    ]
  },
  {
    path : "admin",children : [
      {path:"product",component:ProductListComponent},
      {path:"product/add",component:ProductAddComponent},
      {path:"product/:id/edit",component:ProductEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
