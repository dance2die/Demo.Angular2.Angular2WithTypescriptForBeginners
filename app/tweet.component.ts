import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {HeartComponent} from './heart.component';

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" [src]="data.imageSrc">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{data.authorName}}</h4>
                <h5 class="media-heading">{{data.tweeterHandle}}</h5>
                <br />
                {{data.tweetContent}}
            </div>
            <heart
                [isLiked]="data.isLiked"
                [heartCount]="data.heartCount">
            </heart>
        </div>
    `,
    directives: [HeartComponent]
})
export class TweetComponent {
    @Input() data: any[];
}