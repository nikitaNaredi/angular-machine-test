import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './core/table/table.component';
import { FormModalComponent } from './shared/components/form-modal/form-modal.component';

const routes: Routes = [
    {
        path: 'employees/add',
        component: TableComponent
    },
    {
        path: 'employees/:id/edit',
        component: FormModalComponent
    },
    {
        path: 'employees',
        component: TableComponent
    },
    { 
        path: '',
        redirectTo: '/employees', 
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
