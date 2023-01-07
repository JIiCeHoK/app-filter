import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ShipEntityComponent } from './components/ship-entity/ship-entity.component';

const routes: Routes = [
    {
        path: 'list-ships', title: 'List-ships', component: ListComponent,
    },
    {
        path: 'ship/:id', title: 'Ship', component: ShipEntityComponent,
    },
    { path: '', redirectTo: '/list-ships', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
