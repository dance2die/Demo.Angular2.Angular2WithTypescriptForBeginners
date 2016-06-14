import {Component, ElementRef, Renderer} from 'angular2/core';

@Component({
    selector: 'starGlyphicon',
    template: `
        <i class="glyphicon" [class.glyphicon-star]="isClicked" [class.glyphicon-star-empty]="!isClicked" (click)="applyStyle()"></i>
    `
})
export class StarGlyphiconComponent {
    isClicked: boolean = false;

    // constructor(
    //     private _el: ElementRef, 
    //     private _renderer: Renderer) {
    // }

    applyStyle() {
        // if (this.isClicked) {
        //     this._renderer.setElementClass(this._el.nativeElement, "glyphicon-star", true);
        //     this._renderer.setElementClass(this._el.nativeElement, "glyphicon-star-empty", false);
        // } else {
        //     this._renderer.setElementClass(this._el.nativeElement, "glyphicon-star", false);
        //     this._renderer.setElementClass(this._el.nativeElement, "glyphicon-star-empty", true);
        // }

        this.isClicked = !this.isClicked;
    }
}