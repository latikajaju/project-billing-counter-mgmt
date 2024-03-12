import { Route } from "@angular/router";
import { MonthlySellComponent } from "./monthly-sell/monthly-sell.component";
import { ProductsSellComponent } from "./products-sell/products-sell.component";

export const ANALYTICS_ROUTE: Route[] =[
    { path: 'monthly-sell', component:MonthlySellComponent},
    { path: 'products-sell', component: ProductsSellComponent}
]