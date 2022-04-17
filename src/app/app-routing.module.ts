import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantComponent } from './merchant/merchant.component';
import { MerchantsComponent } from './merchants/merchants.component';
//Vo Routes da definirame ruti i koja komponenta odgovara na tie ruti - taka kje pristapvame 
//do tie stranici
const routes: Routes = [
  {
    path:'merchants', component:MerchantsComponent
  },
  {
    path:'merchants/:merchantCode', component: MerchantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
