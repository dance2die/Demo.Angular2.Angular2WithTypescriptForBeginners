import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {HeartComponent} from './heart.component';

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" [src]="imageSrc">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{authorName}}</h4>
                <h5 class="media-heading">{{tweeterHandle}}</h5>
                <br />
                {{tweetContent}}
            </div>
        </div>
    `,
    directives: [HeartComponent]
})
export class TweetComponent {
    @Input() imageSrc: string = "";
    @Input() authorName: string = "";
    @Input() tweeterHandle: string = "";
    @Input() tweetContent: string = "";
}