import { Route } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

export const CUST_ROUTES: Route[] = [
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent },
  { path: 'customers-list', component: CustomersListComponent },
  { path: 'edit-customer/:id', component:EditCustomerComponent}
];
