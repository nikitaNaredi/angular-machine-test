import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-form-modal',
    templateUrl: './form-modal.component.html',
    styleUrls: ['./form-modal.component.css']
})

export class FormModalComponent implements OnInit{
    isEditable = false;
    form: {
        id: number;
        name: string;
        phone: string;
        city: string;
        address_line1: string;
        address_line2: string;
        postal_code: string;
    };

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.url.subscribe((urlSegment) => {
            if (urlSegment.find((value) => {
                return value.path === 'add';
            })) {
                this.isEditable = false;
                this.form = {
                    id: null,
                    name: '',
                    phone: '',
                    city: '',
                    address_line1: '',
                    address_line2: '',
                    postal_code: ''
                }
            } else {
                this.isEditable = true;
            }
        });
    }

}
