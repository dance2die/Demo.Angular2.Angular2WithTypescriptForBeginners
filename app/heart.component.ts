import {Component, Input, Output, EventEmitter} from 'angular2/core';


@Component({
    selector: 'heart',
    templateUrl: 'app/heart.component.html',
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted {
            color: deeppink;
        }
    `]
})
export class HeartComponent {
    @Input() isLiked: boolean;
    @Output() change = new EventEmitter();
    @Input() heartCount: number;

    applyStyle() {
        this.change.emit({newValue: this.isLiked});

        if (this.isLiked){
            this.isLiked = false;
            this.heartCount--;
        } else {
            this.isLiked = true;
            this.heartCount++;
        }
    }
}

