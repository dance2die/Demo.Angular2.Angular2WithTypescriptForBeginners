System.register(['angular2/core', './courses.component', './authors.component', './star-glyphicon.component', './heart.component', './voter.component', './tweet.service', './tweet.component', './summary.pipe', './bootstrap.panel.component', './zippy.component', './contact-form.component', "./signup-form.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, star_glyphicon_component_1, heart_component_1, voter_component_1, tweet_service_1, tweet_component_1, summary_pipe_1, bootstrap_panel_component_1, zippy_component_1, contact_form_component_1, signup_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (star_glyphicon_component_1_1) {
                star_glyphicon_component_1 = star_glyphicon_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_tweet) {
                    this._tweet = _tweet;
                    this.isActive = true;
                    this.title = "Hello Angular 2";
                    this.post = {
                        title: "Title",
                        isFavorite: true,
                        heartCount: 10,
                        isLiked: false
                    };
                    this.post2 = {
                        title: 'Angular Tutorial for Beginners',
                        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel neque viverra, facilisis ante in, interdum massa. Aliquam molestie mattis suscipit. Mauris ut massa vitae ligula ultrices vulputate. Nam imperdiet pulvinar molestie."
                    };
                    this.viewMode = 'map';
                    this.voter = {
                        myVote: 0,
                        voteCount: 10
                    };
                    this.tweets = _tweet.getTweets();
                }
                AppComponent.prototype.onLikeChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onClick = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        pipes: [summary_pipe_1.SummaryPipe],
                        template: "\n        <signup-form></signup-form>\n        <br />\n        <br />\n\n        <contact-form></contact-form>\n\n        <br />\n        <br />\n        <div class=\"row\">\n            <zippy title=\"Who can see my stuff?\">\n                Content of who can see my stuff\n            </zippy>\n            <zippy title=\"Who can conctact me?\">\n                Content of who can contact me\n            </zippy>\n        </div>\n\n        <br />\n        <br />\n\n        <bs-panel>\n            <div class=\"heading\">This is a heading</div>\n            <div class=\"body\">Body line 1</div>\n            <div class=\"body\">Body line 2</div>\n        </bs-panel>\n\n        <br />\n        <br />\n        {{post2.title}}\n        <br />\n        {{post2.body | summary:20}}\n\n\n        <ul class=\"nav nav-pills\">\n            <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode = 'map'\">Map View</a></li>\n            <li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode = 'list'\">List View</a></li>\n        </ul>\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\" ngSwitchDefault>Map View Content</template>\n            <template [ngSwitchWhen]=\"'list'\">List View Content</template>\n        </div>\n\n\n        <div class=\"tweets\">\n            <div *ngFor=\"#tweet of tweets\">\n                <tweet [data]=\"tweet\"></tweet>\n            </div>\n        </div>\n\n        <br />\n        <br />\n        <br />\n\n        <h1 [style.backgroundColor]=\"isActive ? 'blue' : 'red'\">{{title}}</h1>\n        <input type=\"text\" [(ngModel)]=\"title\" />\n\n        <i class=\"glyphicon glyphicon-star\"></i>\n        <starGlyphicon \n            [isFavorite]=\"post.isFavorite\"\n            (change)=\"onFavoriteChange($event)\">\n        </starGlyphicon>\n\n        <heart\n            [heartCount]=\"post.heartCount\"\n            [isLiked]=\"post.isLiked\"\n            (change)=\"onLikeChange($event)\">\n        </heart>\n\n        <button (click)='onClick($event)'>Click Me!</button>\n        <br /><br />\n        <voter\n            [myVote]=\"voter.myVote\"\n            [voteCount]=\"voter.voteCount\"\n            (vote)=\"onVote($event)\">\n        </voter>\n\n\n        <courses></courses>\n        <authors></authors>\n    ",
                        directives: [courses_component_1.CoursesComponent,
                            authors_component_1.AuthorsComponent,
                            star_glyphicon_component_1.StarGlyphiconComponent,
                            heart_component_1.HeartComponent,
                            voter_component_1.VoterComponent,
                            tweet_component_1.TweetComponent,
                            bootstrap_panel_component_1.BootstrapPanelComponent,
                            zippy_component_1.ZippyComponent,
                            contact_form_component_1.ContactFormComponent,
                            signup_form_component_1.SignUpFormComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map