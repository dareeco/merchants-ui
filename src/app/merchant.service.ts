import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Ovoj servis ni sluzhi za komunikacija megju api (C#) i front
@Injectable({
  providedIn: 'root'
})
export class MerchantService {

constructor(
  private http: HttpClient   //This is private because it will only be used in this module
) { }

public getMerchants(){
  return this.http.get('https://localhost:7175/api/merchants');

}
public getMerchant(merchantCode: string){
  
  return this.http.get('https://localhost:7175/api/merchants/' + merchantCode);
}

public createMerchant(body: any){
  console.log(body);
  return this.http.post('https://localhost:7175/api/merchants',body);
}
public updateMerchant(merchantCode:string, body:any){
  return this.http.put('https://localhost:7175/api/merchants/'+ merchantCode,body);
}

public deleteMerchant(merchantCode: string){
  return this.http.delete('https://localhost:7175/api/merchants/' + merchantCode);
 
}

public createStore(merchantCode:string, body:any){
  return this.http.post('https://localhost:7175/api/merchants/' + merchantCode + '/stores',body);

}

public getStores(merchantCode: string){
  return this.http.get('https://localhost:7175/api/merchants/' + merchantCode + '/stores');


}

public getStore(merchantCode:string, storeCode: string){
  return this.http.get('https://localhost:7175/api/merchants/' + merchantCode + '/stores/' + storeCode);

}

public updateStore(merchantCode: string, storeCode:string, body:any){
  return this.http.put('https://localhost:7175/api/merchants/' + merchantCode + '/stores/'+ storeCode,body);

}

public deleteStore(merchantCode: string, storeCode: string){
  return this.http.delete('https://localhost:7175/api/merchants/' + merchantCode + '/stores/' + storeCode);

}




}
