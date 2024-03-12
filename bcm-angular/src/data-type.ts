
export interface Customer {
    id:number;
    dob: string;
    name: string
    email: string;
    mobile: string;
  }

  
export interface Bill {
    id:number;
    item: string;
    price: number;
    quantity: number;
    total:  number;
  }

export interface DialogData{
    data: Customer;
    src: string
  }