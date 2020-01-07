import { dummyEmployees } from '../../../assets/dummy-employees';
import { IEmployees } from 'src/app/models/IEmployees';

export class EmployeesService {
    private dummyEmployeesData: IEmployees = dummyEmployees();

    getEmployees(): IEmployees {
        
        return this.dummyEmployeesData;
    }
}
