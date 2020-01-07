import { IEmployees } from 'src/app/models/IEmployees';

export function dummyEmployees() {
    const employees: IEmployees = {
        data: [
            {
                id: 1,
                name: 'Jhon',
                phone: '99999999999',
                address: {
                    city: 'Pune',
                    address_line1: 'ABC road',
                    address_line2: 'XYZ building',
                    postal_code: '12455'
                }
            },
            {
                id: 2,
                name: 'Jacob',
                phone: 'AZ993A9493',
                address: {
                    city: 'Pune',
                    address_line1: 'PQR road',
                    address_line2: 'ABC building',
                    postal_code: '13455'
                }
            },
            {
                id: 3,
                name: 'Ari',
                phone: '14545822',
                address: {
                    city: 'Mumbai',
                    address_line1: 'ABC road',
                    address_line2: 'XYZ building',
                    postal_code: '12455'
                }
            }
        ]
    };
    return employees;
}
