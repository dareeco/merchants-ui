import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchantService } from '../merchant.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogUpdateMerchantComponent } from '../dialog-update-merchant/dialog-update-merchant.component';
import { DialogUpdateStoreComponent } from '../dialog-update-store/dialog-update-store.component';
import { DialogAddStoreComponent } from '../dialog-add-store/dialog-add-store.component';
import { DialogStoreOverviewComponent } from '../dialog-store-overview/dialog-store-overview.component';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {
  public dataSource = new MatTableDataSource(); //we need to import datasource variable if we want the table in the html to work
  public displayedColumns: string[] = ['storeCode', 'name', 'merchantCode', 'actions']; //what columns are we displaying
  public merchant: any;
  constructor(
    private route: ActivatedRoute,
    private merchantService: MerchantService, //We need this so we can get merchants
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    //params ni treba oti rabotime so routing parametri a ne so query parametri, /merchantCode e route ?merchantCodee query params
    this.route.params.subscribe((params: any) => {
      const merchantCode = params.merchantCode;
      //Here below code for fetching data for stores table
      this.merchantService.getStores(merchantCode).subscribe((results: any) => {
        console.log("The stores are:", results);
        this.dataSource.data = results.stores;
      });

      console.log("This is merchant", merchantCode);
      this.merchantService.getMerchant(merchantCode).subscribe((merchant) => {
        console.log("This is merchant", merchant);
        this.merchant = merchant;
      })

    });

  }

  public deleteDetails(merchantCode: string, storeCode: string) {
    this.merchantService.deleteStore(merchantCode, storeCode).subscribe(() => {
      const data = this.dataSource.data;
      const index = data.findIndex((item: any) => item.storeCode === storeCode);
      data.splice(index, 1);
      this.dataSource.data = data;
    })
  }
  refreshPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route
    })

  }
  openDialog(merchantCode: string) {
    //this.dialog.open(DialogExampleComponent);


    let dialogRef = this.dialog.open(DialogUpdateMerchantComponent, {
      data: {
        merchantCode: merchantCode
      },
      width: '768px',


    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
  openStoreDialog(storeCode: string, merchantCode: string) {
    let dialogRef = this.dialog.open(DialogUpdateStoreComponent, {
      data: {
        merchantCode: merchantCode,
        storeCode: storeCode
      },
      width: '768px',


    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
  openAddStore(merchantCode: string){
    let dialogRef=this.dialog.open(DialogAddStoreComponent, {
      data: {
        merchantCode: merchantCode,
      },
      width:'768px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshPage();
    });
  }

  openStoreOverview(merchantCode:string, storeCode: string){
    let dialogRef=this.dialog.open(DialogStoreOverviewComponent, {
      data: {
          merchantCode:merchantCode,
          storeCode: storeCode
      }
    
    });
  }

}


