import { Route } from "@angular/router";
import { NewBillComponent } from "./new-bill/new-bill.component";
import { BillDetailsComponent } from "./bill-details/bill-details.component";

export const BILL_ROUTES: Route[] = [
    { path: 'new-bill', component: NewBillComponent },
    { path: 'bill-details', component: BillDetailsComponent },
]