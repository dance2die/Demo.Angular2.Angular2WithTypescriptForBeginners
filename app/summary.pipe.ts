import { Pipe, PipeTransform } from 'angular2/core';

@Pipe ({name: 'summary'})
export class SummaryPipe implements PipeTransform {
    transform(value: number, exponent: string) {
        if (value){
            return value.substring(0, 50) + "...";
        }
    }
}