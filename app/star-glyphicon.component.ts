import {Component, Input} from 'angular2/core';

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

    applyStyle() {
        this.isFavorite = !this.isFavorite;
    }
}