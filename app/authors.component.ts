import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{authorTitle}}
        <ul>
            <li *ngFor="#author of authors">{{author}}</li>
        </ul>
    `,
    providers: [AuthorsService]
})
export class AuthorsComponent {
    authors: string[];
    authorTitle: string = "The title of authors page";


    constructor(authorsService: AuthorsService){
        this.authors = authorsService.getAuthors();
    }
}