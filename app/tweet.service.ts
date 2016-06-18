export class TweetService {
    getTweets(): any{
        return [
            {
                imageSrc: "http://lorempixel.com/100/100/people/?1", 
                authorName: "Windward", 
                tweeterHandle: "@windwardstudios", 
                tweetContent: "Looking for a better company reporting or docgen app?",
                isLiked: false,
                heartCount: 0
            },
            {
                imageSrc: "http://lorempixel.com/100/100/people/?2", 
                authorName: "AngularJS New",
                tweeterHandle: "@angularjs_new", 
                tweetContent: "Righ Relevance: Influencers, Articles and Conversations",
                isLiked: true,
                heartCount: 10
            },
            {
                imageSrc: "http://lorempixel.com/100/100/people/?3", 
                authorName: "UX & Bootstrap", 
                tweeterHandle: "@3rdwave", 
                tweetContent: "10 Reasons Wny Web Projects Fail",
                isLiked: false,
                heartCount: 20
            },
        ];
    }
}