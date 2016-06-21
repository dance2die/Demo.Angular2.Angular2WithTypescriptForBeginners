import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading" (click)="onClick()">
                {{title}}
                <i class="glyphicon pull-right" 
                    [ngClass]="{
                        'glyphicon-chevron-up': isExpanded,
                        'glyphicon-chevron-down': !isExpanded
                     }">
                </i>
            </div>
            <div class="panel-body" [hidden]="!isExpanded">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class ZippyComponent {
    private isExpanded: boolean = false;
    @Input() title: string;

    onClick() {
        this.isExpanded = !this.isExpanded;
    }
}
