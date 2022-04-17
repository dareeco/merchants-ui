export class Store {

    storeCode: string;
    name: string;
    phone: string;
    description: string;
    address: string;
    city: string;
    email: string;
    merchantCode: string;

    constructor(storeCode: string, name: string, phone: string, description: string, address: string, city: string, email: string, merchantCode: string){
        this.storeCode=storeCode;
        this.name=name;
        this.phone=phone;
        this.description=description;
        this.address=address;
        this.city=city;
        this.email=email;
        this.merchantCode=merchantCode;
    }
}
