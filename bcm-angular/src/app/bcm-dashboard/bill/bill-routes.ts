import { Route } from "@angular/router";
import { NewBillComponent } from "./new-bill/new-bill.component";
import { BillDetailsComponent } from "./bill-details/bill-details.component";
import { BillsListComponent } from "./bills-list/bills-list.component";

export const BILL_ROUTES: Route[] = [
    { path: 'new-bill', component: NewBillComponent },
    { path: 'bill-details', component: BillDetailsComponent },
    { path: 'bills-list', component: BillsListComponent }
]