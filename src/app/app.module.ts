import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './core/table/table.component';
import { FormModalComponent } from './shared/components/form-modal/form-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesService } from './shared/services/employees.service';
import { NumberTypeCheckPipe } from './shared/pipes/number-type-check.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormModalComponent,
    NumberTypeCheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
