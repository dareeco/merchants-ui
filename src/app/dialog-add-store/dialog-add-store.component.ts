import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MerchantService } from '../merchant.service';
import { Store } from '../store';

@Component({
  selector: 'app-dialog-add-store',
  templateUrl: './dialog-add-store.component.html',
  styleUrls: ['./dialog-add-store.component.scss']
})
export class DialogAddStoreComponent implements OnInit {
  public storeCodeFormControl: FormControl= new FormControl();
  public nameFormControl: FormControl= new FormControl();
  public phoneFormControl: FormControl= new FormControl();
  public descriptionFormControl: FormControl= new FormControl();  
  public addressFormControl: FormControl= new FormControl();
  public cityFormControl: FormControl= new FormControl();
  public emailFormControl: FormControl= new FormControl();
  public websiteFormControl: FormControl= new FormControl();
  public merchantCodeFormControl: FormControl=new FormControl();

  public store!: Store

  constructor(
    private route: ActivatedRoute,
    private merchantServic: MerchantService,
    public dialogRef: MatDialogRef<DialogAddStoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { merchantCode: string },

  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.initFormControls();
    })

  }
  public createStore(){
    const merchantCode=this.data.merchantCode;
    this.store=new Store(
      this.storeCodeFormControl.value,
      this.nameFormControl.value,
      this.phoneFormControl.value,
      this.descriptionFormControl.value,
      this.addressFormControl.value,
      this.cityFormControl.value,
      this.emailFormControl.value,
      merchantCode
    );
    if(this.storeCodeFormControl.valid && this.nameFormControl.valid){
       this.merchantServic.createStore(merchantCode, this.store).subscribe(() => {
        this.dialogRef.close(); //To make sure dialog is closed only after the store is posted
       })
    }
    else{
      alert("Error occured during adding store for this merchant");      
    }
  }

  private initFormControls(){
    this.storeCodeFormControl=new FormControl('',Validators.required);
    this.nameFormControl=new FormControl('',Validators.required);
    this.phoneFormControl=new FormControl();
    this.descriptionFormControl=new FormControl();
    this.addressFormControl=new FormControl();
    this.cityFormControl=new FormControl();
    this.emailFormControl=new FormControl();
    this.websiteFormControl=new FormControl();
    const merchantCode=this.data.merchantCode;
    console.log(merchantCode);
    this.merchantCodeFormControl= new FormControl(merchantCode);
  }

}
