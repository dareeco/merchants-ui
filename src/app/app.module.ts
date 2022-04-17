import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MerchantComponent } from './merchant/merchant.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { DialogUpdateMerchantComponent } from './dialog-update-merchant/dialog-update-merchant.component';
import { DialogUpdateStoreComponent } from './dialog-update-store/dialog-update-store.component';
import { DialogAddStoreComponent } from './dialog-add-store/dialog-add-store.component';
import { DialogStoreOverviewComponent } from './dialog-store-overview/dialog-store-overview.component';
import {MatPaginatorModule} from '@angular/material/paginator';






@NgModule({
  declarations: [							
    AppComponent,
    MerchantsComponent,
      MerchantComponent,
      DialogExampleComponent,
      DialogUpdateMerchantComponent,
      DialogUpdateStoreComponent,
      DialogAddStoreComponent,
      DialogStoreOverviewComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule, //nadolu 3 za formmi i inputi
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatPaginatorModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
