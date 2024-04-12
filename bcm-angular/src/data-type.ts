
export interface Customer {
    id:number;
    dob: string;
    name: string
    email: string;
    mobile: string;
    bills: Bill[]
  }

  
export interface Bill {
    id:number;
    item: string;
    price: number;
    quantity: number;
    total:  number;
    // counter: number;
    // cashier: string;
    // paymentMode: string;
  }

export interface DialogData{
    updatedCustData(updatedCustData: any): unknown;
    customerData: Customer;
    src: string
  }