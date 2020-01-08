import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './core/table/table.component';
import { FormComponent } from './shared/components/form/form.component';

const routes: Routes = [
    {
        path: 'employees/add',
        component: FormComponent
    },
    {
        path: 'employees/:id/edit',
        component: FormComponent
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
