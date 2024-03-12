import { Route } from "@angular/router";

export const DASH_ROUTES: Route[] = [
    {
        path: 'customers',
        loadComponent: () => import('./customers/customers.component').then(mod=>mod.CustomersComponent),
        loadChildren: () => import('./customers/cust-routes').then(mod=>mod.CUST_ROUTES)
    },
    {
        path: 'bill',
        loadComponent: () => import('./bill/bill.component').then(mod=>mod.BillComponent),
        loadChildren: () => import('./bill/bill-routes').then(mod=>mod.BILL_ROUTES)
    },
    {
        path: 'analytics',
        loadComponent: () => import('./analytics/analytics.component').then(mod=>mod.AnalyticsComponent),
        loadChildren: () => import('./analytics/analytics-routes').then(mod=>mod.ANALYTICS_ROUTE)
    }
];