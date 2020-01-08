import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './core/table/table.component';
import { FormComponent } from './shared/components/form/form.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesService } from './shared/services/employees.service';
import { NumberTypeCheckPipe } from './shared/pipes/number-type-check.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    NumberTypeCheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
