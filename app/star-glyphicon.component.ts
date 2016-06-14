import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'starGlyphicon',
    template: `
        <i class="glyphicon" 
            [class.glyphicon-star-empty]="!isFavorite" 
            [class.glyphicon-star]="isFavorite" 
            (click)="applyStyle()">
        </i>
    `
})
export class StarGlyphiconComponent {
    @Input() isFavorite: boolean = false;
    @Output() change = new EventEmitter();

    applyStyle() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}