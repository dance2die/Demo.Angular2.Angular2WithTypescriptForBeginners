import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarGlyphiconComponent} from './star-glyphicon.component';
import {HeartComponent} from './heart.component';
import {VoterComponent} from './voter.component';
import {TweetService} from './tweet.service';
import {TweetComponent} from './tweet.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="tweets">
            <div *ngFor="#tweet of tweets">
                <tweet 
                    [imageSrc]="tweet.imageSrc"
                    [authorName]="tweet.authorName"
                    [tweeterHandle]="tweet.tweeterHandle"
                    [tweetContent]="tweet.tweetContent">
                </tweet>
            </div>
        </div>

        <br />
        <br />
        <br />

        <h1 [style.backgroundColor]="isActive ? 'blue' : 'red'">{{title}}</h1>
        <input type="text" [(ngModel)]="title" />

        <i class="glyphicon glyphicon-star"></i>
        <starGlyphicon 
            [isFavorite]="post.isFavorite"
            (change)="onFavoriteChange($event)">
        </starGlyphicon>

        <heart
            [heartCount]="post.heartCount"
            [isLiked]="post.isLiked"
            (change)="onLikeChange($event)">
        </heart>

        <button (click)='onClick($event)'>Click Me!</button>
        <br /><br />
        <voter
            [myVote]="voter.myVote"
            [voteCount]="voter.voteCount"
            (vote)="onVote($event)">
        </voter>


        <courses></courses>
        <authors></authors>
    `,
    directives: [CoursesComponent, 
                 AuthorsComponent,
                 StarGlyphiconComponent,
                 HeartComponent,
                 VoterComponent,
                 TweetComponent],
    providers: [TweetService]
})
export class AppComponent { 
    isActive: boolean = true;
    title: string = "Hello Angular 2";
    post = {
        title: "Title",
        isFavorite: true,
        heartCount: 10,
        isLiked: false
    };

    tweets: any;

    constructor(private _tweet: TweetService){
        this.tweets = _tweet.getTweets();
    }

    voter = {
        myVote: 0,
        voteCount: 10
    }

    onLikeChange($event) {
        console.log($event);
    }

    onFavoriteChange($event) {
        console.log($event);
    }

    onClick($event) {
        console.log($event);
    }

    onVote($event){
        console.log($event);
    }
}