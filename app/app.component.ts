import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: `
        <h1 [style.backgroundColor]="isActive ? 'blue' : 'red'">{{title}}</h1>
        <input type="text" [(ngModel)]="title" />
        <courses></courses>
        <authors></authors>
    `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { 
    isActive: boolean = true;
    title: string = "Hello Angular 2";
}