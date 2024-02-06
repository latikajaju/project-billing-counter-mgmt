import { Route } from "@angular/router";
import { NewCustomerComponent } from '../new-customer/new-customer.component';
import { NewBillComponent } from '../new-bill/new-bill.component';
import { BillDetailsComponent } from '../bill-details/bill-details.component';
import { MonthlySellComponent } from '../monthly-sell/monthly-sell.component';
import { ProductsSellComponent } from '../products-sell/products-sell.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

export const DASH_ROUTES: Route[] = [
    { path: '', component: CustomerDetailsComponent},
    { path: 'new-customer', component: NewCustomerComponent },
    { path: 'customer-details', component: CustomerDetailsComponent },
    { path: 'new-bill', component: NewBillComponent },
    { path: 'bill-details', component: BillDetailsComponent },
    { path: 'monthly-sell', component:MonthlySellComponent},
    { path: 'products-sell', component: ProductsSellComponent}
];