import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-dialog-store-overview',
  templateUrl: './dialog-store-overview.component.html',
  styleUrls: ['./dialog-store-overview.component.scss']
})
export class DialogStoreOverviewComponent implements OnInit {
  public store: any;
  constructor(
    private route: ActivatedRoute,
    private merchantService: MerchantService,
    @Inject(MAT_DIALOG_DATA) public data: { merchantCode: string, storeCode:string }
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) =>{
      const storeCode=this.data.storeCode;
      const merchantCode=this.data.merchantCode;
      console.log('storecode', storeCode);
      console.log('merchantCode', merchantCode);
      this.merchantService.getStore(merchantCode, storeCode).subscribe((store) => {
        this.store = store;
        
      })
    })
  }

}
