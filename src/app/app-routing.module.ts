import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{
        path:"home-page",component: HomePageComponent
},
{
        path: "blog-page",component: BlogPageComponent
},
{
        path:"travel-page",component: TravelPageComponent
},
{
        path: 'travels/:travelId', component: TravelDetailsComponent
},
{
        path: 'cart', component: CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
