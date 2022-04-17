import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Merchant } from '../merchant';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {
  public merchantCodeFormControl: FormControl = new FormControl();
  public phoneNumberFormControl: FormControl = new FormControl();
  public nameFormControl: FormControl = new FormControl();
  public fullNameFormControl: FormControl = new FormControl();
  public addressFormControl: FormControl = new FormControl();
  public cityFormControl: FormControl = new FormControl();
  public emailFormControl: FormControl = new FormControl();
  public websiteFormControl: FormControl = new FormControl();
  public accountNumberFormControl: FormControl = new FormControl();


  public merchant!: Merchant;

  constructor(
    private merchantService: MerchantService,
    public dialogRef: MatDialogRef<DialogExampleComponent>

  ) { }

  ngOnInit() {
    this.initFormControls(); //create form group when started
  }

  public createMerchant() {
    this.merchant = new Merchant(
      this.merchantCodeFormControl.value,
      this.phoneNumberFormControl.value,
      this.nameFormControl.value,
      this.fullNameFormControl.value,
      this.addressFormControl.value,
      this.cityFormControl.value,
      this.emailFormControl.value,
      this.websiteFormControl.value,
      this.accountNumberFormControl.value
    );
    console.log(this.merchant);

    if (this.merchantCodeFormControl.valid && this.nameFormControl.valid &&
      this.fullNameFormControl.valid && this.accountNumberFormControl.valid) {

      this.merchantService.createMerchant(this.merchant).subscribe(() => {
        this.dialogRef.close();
      })
    }
    else{
      alert("Error while adding merchant");
    }
  }

  private initFormControls() {
    this.merchantCodeFormControl = new FormControl('', Validators.required);
    this.phoneNumberFormControl = new FormControl();
    this.nameFormControl = new FormControl('', Validators.required);
    this.fullNameFormControl = new FormControl('', Validators.required);
    this.addressFormControl = new FormControl();
    this.cityFormControl = new FormControl();
    this.emailFormControl = new FormControl();
    this.websiteFormControl = new FormControl();
    this.accountNumberFormControl = new FormControl('', Validators.required);
  }

}
