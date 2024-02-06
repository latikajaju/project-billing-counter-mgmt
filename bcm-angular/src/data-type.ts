
export interface customerDetails {
    id:number;
    bill: string;
    date: string;
    amount:  number;
    method: string;
  }

  
export interface billDetails {
    id:number;
    item: string;
    price: number;
    quantity: number;
    total:  number;
  }