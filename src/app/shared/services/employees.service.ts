import { dummyEmployees } from '../../../assets/dummy-employees';
import { IEmployees } from 'src/app/models/IEmployees';
import { IEmployee } from 'src/app/models/IEmployee';

export class EmployeesService {
    private dummyEmployeesData: IEmployees = dummyEmployees();

    getEmployees(): IEmployees {
        return this.dummyEmployeesData;
    }

    getEmployee(id: number): IEmployee {
        return this.dummyEmployeesData.data.find((value) => {
            return value.id === +id;
        });
    }

    addEmployee(employee: IEmployee) {
        this.dummyEmployeesData.data.push(employee);
    }

    updateEmployee(id: number, employee: IEmployee) {
        const index = this.dummyEmployeesData.data.findIndex((value) => {
            return value.id === +id;
        });
        this.dummyEmployeesData.data[index] = employee;
    }
}
