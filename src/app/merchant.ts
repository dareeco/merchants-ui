export class Merchant {



     merchantCode: string;

     telephone: string;
 
     merchantName: string;
  
     fullName: string;
  
     address: string;
  
     city: string;
  
     email: string;
  
     website: string;
 
     accountNumber: string;
 
     constructor(merchantCode: string, telephone: string, merchantName: string, fullName: string, city: string, address:string, email: string, website: string, accountNumber: string) {
 
         this.merchantCode = merchantCode;
         this.telephone = telephone;
         this.merchantName = merchantName;
         this.fullName=fullName;
         this.city=city;
         this.address=address;
         this.email=email;
         this.website=website;
         this.accountNumber=accountNumber;

 
     }
 
 
 
 }
