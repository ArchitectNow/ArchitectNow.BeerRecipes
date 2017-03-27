import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'beers',
        pathMatch: 'full'
    },
    {
        path: 'beers',
        component: BeerListComponent
    },
    {
        path: 'beer/:id',
        component: BeerDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
