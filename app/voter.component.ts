import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
        <div style="width: 20px">
            <i  [class.highlighted]="myVote == 1"
                (click)="isUpClicked()"
                class="glyphicon glyphicon-menu-up">
            </i>

            <span>{{voteCount + myVote}}</span>

            <i  [class.highlighted]="myVote == -1"
                (click)="isDownClicked()"
                class="glyphicon glyphicon-menu-down">
            </i>
        </div>
    `,
    styles: [`
        .highlighted {
            color: oranage;
        }
    `]
})
export class VoterComponent {
    @Input() myVote: number = 0;
    @Input() voteCount: number = 0;
    @Output() vote = new EventEmitter();

    isUpClicked() {
        if (this.myVote = 1){
            return;
        }

        this.myVote++;

        this.vote.emit({
            myVote: this.myVote
        });
    }

    isDownClicked() {
        if (this.myVote = -1){
            return;
        }

        this.myVote--;

        this.vote.emit({
            myVote: this.myVote
        });
    }
}









