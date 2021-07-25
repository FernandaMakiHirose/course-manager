import { Pipe, PipeTransform } from '@angular/core';

// mostra que a classe vai ser um pipe
@Pipe({
    name: 'replace' // nome do pipe
})


export class ReplacePipe implements PipeTransform {
    
    
    transform(value: string, char: string, valueToReplace: string) { 
        return value.replace(char, valueToReplace);
    }

}