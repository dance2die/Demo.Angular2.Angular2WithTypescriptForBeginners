import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarGlyphiconComponent} from './star-glyphicon.component';
import {HeartComponent} from './heart.component';
import {VoterComponent} from './voter.component';
import {TweetService} from './tweet.service';
import {TweetComponent} from './tweet.component';
import {SummaryPipe} from './summary.pipe';
import {BootstrapPanelComponent} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';
import {SignUpFormComponent} from "./signup-form.component";

@Component({
    selector: 'my-app',
    pipes: [SummaryPipe],
    template: `
        <signup-form></signup-form>
        <br />
        <br />

        <contact-form></contact-form>

        <br />
        <br />
        <div class="row">
            <zippy title="Who can see my stuff?">
                Content of who can see my stuff
            </zippy>
            <zippy title="Who can conctact me?">
                Content of who can contact me
            </zippy>
        </div>

        <br />
        <br />

        <bs-panel>
            <div class="heading">This is a heading</div>
            <div class="body">Body line 1</div>
            <div class="body">Body line 2</div>
        </bs-panel>

        <br />
        <br />
        {{post2.title}}
        <br />
        {{post2.body | summary:20}}


        <ul class="nav nav-pills">
            <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
            <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
            <template [ngSwitchWhen]="'list'">List View Content</template>
        </div>


        <div class="tweets">
            <div *ngFor="#tweet of tweets">
                <tweet [data]="tweet"></tweet>
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
                 TweetComponent,
                 BootstrapPanelComponent,
                ZippyComponent,
                ContactFormComponent,
        SignUpFormComponent],
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

    post2 = {
        title: 'Angular Tutorial for Beginners',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel neque viverra, facilisis ante in, interdum massa. Aliquam molestie mattis suscipit. Mauris ut massa vitae ligula ultrices vulputate. Nam imperdiet pulvinar molestie.`
    };

    tweets: any;
    viewMode = 'map';



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