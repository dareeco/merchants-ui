import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss']
})
export class MerchantsComponent implements OnInit {
  public dataSource = new MatTableDataSource(); //we need to import datasource variable if we want the table in the html to work
  public displayedColumns: string[] = ['merchantCode', 'merchantName', 'fullName', 'actions']; //what columns are we displaying
  //name of the collumns must be identical to the Merchant.cs class in Model, for example it cannot be name, it has to be merchantName
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  constructor(
    public merchantService: MerchantService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; //to refresh table and put on other pages
  }
  ngOnInit(): void {
    //this.dataSource.paginator=this.paginator;
    this.merchantService.getMerchants().subscribe((results: any) => {
      console.log('get merchants', results);
      this.dataSource.data = results.merchants; //This line gets merchants from the api and puts them in dataSource to be shown in the table
    });
    //console.log("test");
  }

  public navigateToDetails(merchantCode: string) {
    //console.log('merchantCode', merchantCode);
    this.router.navigate(['merchants/' + merchantCode])
  }
  refreshPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route
    })

  }

  openDialog() {
    //this.dialog.open(DialogExampleComponent);
    let dialogRef=this.dialog.open(DialogExampleComponent, {
        width: '768px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refreshPage();
      

    })
    
  }

  public deleteDetails(merchantCode: string) {
    
    //this.merchantService.deleteMerchant(merchantCode); //Only deleting, without updating
    this.merchantService.deleteMerchant(merchantCode).subscribe(() => {
      const data = this.dataSource.data;
      const index = data.findIndex((item: any) => item.merchantCode === merchantCode);
      data.splice(index, 1);
      this.dataSource.data = data;
      // this.ngOnInit(); //dont refresh the page, this way we are only updating the table
    });
  }

  applyFilter(filterValue: string){
    this.dataSource.filter=filterValue.trim().toLowerCase();

  }


}
