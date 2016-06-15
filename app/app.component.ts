import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarGlyphiconComponent} from './star-glyphicon.component';

@Component({
    selector: 'my-app',
    template: `
        <h1 [style.backgroundColor]="isActive ? 'blue' : 'red'">{{title}}</h1>
        <input type="text" [(ngModel)]="title" />

        <i class="glyphicon glyphicon-star"></i>
        <starGlyphicon 
            [isFavorite]="post.isFavorite"
            (change)="onFavoriteChange($event)">
        </starGlyphicon>

        <button (click)='onClick($event)' >Click Me!</button>
        <courses></courses>
        <authors></authors>
    `,
    directives: [CoursesComponent, 
                 AuthorsComponent,
                 StarGlyphiconComponent]
})
export class AppComponent { 
    isActive: boolean = true;
    title: string = "Hello Angular 2";
    post = {
        title: "Title",
        isFavorite: true
    };

    onFavoriteChange($event) {
        console.log($event);
    }

    onClick($event) {
        console.log($event);
    }
}