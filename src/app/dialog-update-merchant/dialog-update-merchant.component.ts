import { registerLocaleData } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Merchant } from '../merchant';
import { MerchantService } from '../merchant.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-update-merchant',
  templateUrl: './dialog-update-merchant.component.html',
  styleUrls: ['./dialog-update-merchant.component.scss']
})
export class DialogUpdateMerchantComponent implements OnInit {
  public telephoneFormControl: FormControl = new FormControl();
  public merchantNameFormControl: FormControl = new FormControl();
  public fullNameFormControl: FormControl = new FormControl();
  public addressFormControl: FormControl = new FormControl();
  public cityFormControl: FormControl = new FormControl();
  public emailFormControl: FormControl = new FormControl();
  public websiteFormControl: FormControl = new FormControl();
  public accountNumberFormControl: FormControl = new FormControl();

  //public merchant!:Merchant;
  public merchant: any;
  constructor(
    private route: ActivatedRoute,
    private merchantService: MerchantService,
    public dialogRef: MatDialogRef<DialogUpdateMerchantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { merchantCode: string }
    ){

  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const merchantCode = this.data.merchantCode;
      this.merchantService.getMerchant(merchantCode).subscribe((merchant) => {
        this.merchant = merchant;
        this.initFormControls();
      })

    })
  }

  public updateMerchant() {
    this.merchant.telephone = this.telephoneFormControl.value;
    this.merchant.merchantName = this.merchantNameFormControl.value;
    this.merchant.fullName = this.fullNameFormControl.value;
    this.merchant.address = this.addressFormControl.value;
    this.merchant.city = this.cityFormControl.value;
    this.merchant.email = this.emailFormControl.value;
    this.merchant.website = this.websiteFormControl.value;
    this.merchant.accountNumber = this.accountNumberFormControl.value;
    this.merchantService.updateMerchant(this.merchant.merchantCode, this.merchant).subscribe(() => {
      //
    })
  }
 

  private initFormControls() {
    this.telephoneFormControl = new FormControl(this.merchant.telephone);
    this.merchantNameFormControl = new FormControl(this.merchant.merchantName);
    this.fullNameFormControl = new FormControl(this.merchant.fullName);
    this.addressFormControl = new FormControl(this.merchant.address);
    this.cityFormControl = new FormControl(this.merchant.city);
    this.emailFormControl = new FormControl(this.merchant.email);
    this.websiteFormControl = new FormControl(this.merchant.website);
    this.accountNumberFormControl = new FormControl(this.merchant.accountNumber);
  }

}
