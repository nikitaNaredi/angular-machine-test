import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from 'src/app/models/IEmployee';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
    employeeId: number;
    employeeForm: FormGroup;
    isEditable = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private employeeService: EmployeesService
    ) {}

    ngOnInit() {
        this.employeeForm = new FormGroup({
            id: new FormControl(),
            name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            phone: new FormControl(null, [Validators.required]),
            address: new FormGroup({
                city: new FormControl(),
                address_line1: new FormControl(),
                address_line2: new FormControl(),
                postal_code: new FormControl()
            })
        });
        this.route.url.subscribe((urlSegment) => {
            if (urlSegment.find((value) => {
                return value.path === 'add';
            })) {
                this.isEditable = false;
            } else {
                this.isEditable = true;
                this.employeeId = this.route.snapshot.params.id;
                const employee = this.employeeService.getEmployee(this.employeeId);
                this.employeeForm.setValue(employee);
            }
        });
    }

    onBack() {
        this.router.navigate(['employees']);
    }

    onSubmit() {
        const employeeObj: IEmployee = {
            ...this.employeeForm.value
        };
        if (this.isEditable) {
            this.employeeService.updateEmployee(this.employeeId, employeeObj);
        } else {
        this.employeeService.addEmployee(employeeObj);
        }
        this.router.navigate(['/employees']);
    }
}
