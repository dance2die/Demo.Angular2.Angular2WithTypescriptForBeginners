import {Component, Input, Output, EventEmitter, ElementRef, Renderer} from 'angular2/core';


@Component({
    selector: 'heart',
    templateUrl: 'app/heart.component.html'
})
export class HeartComponent {
    @Input() isLiked: boolean;
    @Output() change = new EventEmitter();
    heartCount: number = 11;

    constructor(private _el:ElementRef, private _renderer: Renderer) {
    }

    onHover() {
        this._renderer.setElementStyle(this._el.nativeElement, 'cursor', 'pointer');
    }

    onBlur() {
        this._renderer.setElementStyle(this._el.nativeElement, 'cursor', null);
    }

    applyStyle() {
        // this.isLiked = !this.isLiked;
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

