import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'starGlyphicon',
    templateUrl: 'app/star-glyphicon.template.html',
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `]
})
export class StarGlyphiconComponent {
    @Input() isFavorite: boolean = false;
    @Output() change = new EventEmitter();

    applyStyle() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}