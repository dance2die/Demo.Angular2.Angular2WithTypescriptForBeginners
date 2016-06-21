import {Component} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading" (click)="onClick()">
                <ng-content select="zippy.title"></ng-content>
                <div class="glyphicon pull-right" 
                    [ngClass]="{
                        'glyphicon-chevron-up': isExpanded,
                        'glyphicon-chevron-down': !isExpanded
                     }">
                </div>
            </div>
            <div class="panel-body" [hidden]="!isExpanded">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class ZippyComponent {
    private isExpanded: boolean = false;

    onClick() {
        this.isExpanded = !this.isExpanded;
    }
}
