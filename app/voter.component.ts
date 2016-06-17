import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
        <div style="width: 20px">
            <i  [style.highlighted]="myVote > 0 ? true : false"
                (click)="isUpClicked()"
                class="glyphicon glyphicon-menu-up">
            </i>

            <span>{{voteCount}}</span>

            <i  [style.highlighted]="myVote < 0 ? true: false"
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
    @Input() myVote: number;
    @Input() voteCount: number;
    @Output() vote = new EventEmitter();

    isUpClicked() {
        if (this.myVote = 1){
            this.myVote = 0;
            this.voteCount++;
        } else {
            this.myVote = 1;
            this.voteCount--;
        }
        this.vote.emit({
            newVote: this.myVote,
            newVoteCount: this.voteCount
        });
    }

    isDownClicked() {
        if (this.myVote = -1){
            this.myVote = 0;
            this.voteCount--;
        } else {
            this.myVote = -1;
            this.voteCount++;
        }
        this.vote.emit({
            newVote: this.myVote,
            newVoteCount: this.voteCount
        });
    }
}









