System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        { imageSrc: "http://lorempixel.com/100/100/people/?1", authorName: "Windward", tweeterHandle: "@windwardstudios", tweetContent: "Looking for a better company reporting or docgen app?" },
                        { imageSrc: "http://lorempixel.com/100/100/people/?2", authorName: "AngularJS New", tweeterHandle: "@angularjs_new", tweetContent: "Righ Relevance: Influencers, Articles and Conversations" },
                        { imageSrc: "http://lorempixel.com/100/100/people/?3", authorName: "UX & Bootstrap", tweeterHandle: "@3rdwave", tweetContent: "10 Reasons Wny Web Projects Fail" },
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map