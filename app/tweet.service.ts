export class TweetService {
    getTweets(): any{
        return [
            {imageSrc: "http://lorempixel.com/100/100/people/?1", authorName: "Windward", tweeterHandle: "@windwardstudios", tweetContent: "Looking for a better company reporting or docgen app?"},
            {imageSrc: "http://lorempixel.com/100/100/people/?2", authorName: "AngularJS New", tweeterHandle: "@angularjs_new", tweetContent: "Righ Relevance: Influencers, Articles and Conversations"},
            {imageSrc: "http://lorempixel.com/100/100/people/?3", authorName: "UX & Bootstrap", tweeterHandle: "@3rdwave", tweetContent: "10 Reasons Wny Web Projects Fail"},
        ];
    }
}