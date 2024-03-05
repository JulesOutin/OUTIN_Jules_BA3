import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PanierComponent } from '../app/pages/home/panier/panier.component';
import { CheckoutComponent } from '../app/pages/home/checkout/checkout.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'panier', component: PanierComponent },
    { path: 'checkout', component: CheckoutComponent }
];
