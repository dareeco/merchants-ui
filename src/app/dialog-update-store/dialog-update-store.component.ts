import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogUpdateMerchantComponent } from '../dialog-update-merchant/dialog-update-merchant.component';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-dialog-update-store',
  templateUrl: './dialog-update-store.component.html',
  styleUrls: ['./dialog-update-store.component.scss']
})
export class DialogUpdateStoreComponent implements OnInit {
  public nameFormControl: FormControl= new FormControl();
  public phoneFormControl: FormControl= new FormControl();
  public descriptionFormControl: FormControl= new FormControl();
  public cityFormControl: FormControl= new FormControl();
  public addressFormControl: FormControl= new FormControl();
  public emailFormControl: FormControl= new FormControl();
  
  public store: any;
  constructor(
    private route: ActivatedRoute,
    private merchantService: MerchantService,
    public dialogRef: MatDialogRef<DialogUpdateMerchantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { merchantCode: string, storeCode:string }
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const merchantCode = this.data.storeCode;
      const storeCode = this.data.merchantCode;
      console.log('merchantCode', merchantCode);
      console.log('storeCode', storeCode);
      this.merchantService.getStore(merchantCode, storeCode).subscribe((store) => {
        this.store = store;
        this.initFormControls();
      })

    })
  }
  public updateStore(){
    this.store.name=this.nameFormControl.value;
    this.store.phone=this.phoneFormControl.value;
    this.store.description=this.descriptionFormControl.value;
    this.store.city=this.cityFormControl.value;
    this.store.address=this.addressFormControl.value;
    this.store.email=this.emailFormControl.value;
    console.log(this.store.storeCode);
    this.merchantService.updateStore(this.store.merchantCode, this.store.storeCode, this.store).subscribe(() => {
      //
    })
    
  }

  private initFormControls() {
    this.nameFormControl = new FormControl(this.store.name);
    this.phoneFormControl = new FormControl(this.store.phone);
    this.descriptionFormControl = new FormControl(this.store.description);
    this.cityFormControl = new FormControl(this.store.city);
    this.addressFormControl = new FormControl(this.store.address);
    this.emailFormControl = new FormControl(this.store.email);
    
  }

}
