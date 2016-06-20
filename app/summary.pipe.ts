import { Pipe, PipeTransform } from 'angular2/core';

@Pipe ({name: 'summary'})
export class SummaryPipe implements PipeTransform {
    transform(value: number, args: string) {
        if (value) {
            let limit = (args && args[0]) ? parseInt(args[0]) : 50;
            return value.substring(0, limit) + "...";
        }
    }
}