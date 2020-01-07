import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { IEmployees } from 'src/app/models/IEmployees';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
    employees: IEmployees;
    employeesFilter: IEmployees;
    myFilter: string;
    tableHeaders = [
        {
            label: 'Id',
            name: 'id',
            order: 2
        },
        {
            label: 'Name',
            name: 'name',
            order: 2
        },
        {
            label: 'Phone',
            name: 'phone',
            order: 2
        },
        {
            label: 'City',
            name: 'city',
            order: 2
        },
        {
            label: 'Address1',
            name: 'address_line1',
            order: 2
        },
        {
            label: 'Address2',
            name: 'address_line2',
            order: 2
        },
        {
            label: 'Postal Code',
            name: 'postal_code',
            order: 2
        }];
    icon = ['arrow_upward', 'arrow_downward', ''];

    constructor(private employeesService: EmployeesService) {  }

    ngOnInit() {
        this.employees = this.employeesService.getEmployees();
        this.employeesFilter = {...this.employees};
    }

    filterTable() {
        this.employeesFilter.data = this.employees.data.filter((value) => {
            if (value.name.toLowerCase().includes(this.myFilter.toLowerCase()) ||
            value.address.city.toLowerCase().includes(this.myFilter.toLowerCase())) {
                return true;
            }
            return false;
        });
    }

    updateOrderBy(index: number) {
        if (this.tableHeaders[index].order === 0) {
          for (let i in this.tableHeaders) {
            this.tableHeaders[i].order = 2;
          }
          this.tableHeaders[index].order = 1;
        } else {
          for (let i in this.tableHeaders) {
            this.tableHeaders[i].order = 2;
          }
          this.tableHeaders[index].order = 0;
        }
      }

    sort(sortBy: string, orderBy: number) {
        this.employeesFilter.data = this.employees.data.sort((a, b) => {
            let val;
            let first: any;
            let second: any;
            if (sortBy === 'address_line1' ||
            sortBy === 'address_line2' ||
            sortBy === 'city' ||
            sortBy === 'postal_code') {
                first = (a['address'][sortBy]);
                second = (b['address'][sortBy]);
            } else {
                first = a[sortBy];
                second = b[sortBy];
            }
            if (first > second) {
                val = (orderBy === 0) ? -1 : 1;
            } else if (first < second) {
                val = (orderBy === 0) ? 1 : -1;
            } else {
                val = 0;
            }
            return val;
        });
    }
}
