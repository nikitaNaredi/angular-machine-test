import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberTypeCheck'
})
export class NumberTypeCheckPipe implements PipeTransform {
    transform(value: string) {
        return (!isNaN(+value)) ? value : 'NA';
    }
}
