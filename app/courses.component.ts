import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <ul>
            <li *ngFor="#course of courses">
                {{course}}
            </li>
        </ul>
        <br />
        <br />
        <h2>Authors</h2>
        {{authorTitle}}
        <ul>
            <li *ngFor="#author of authors">{{author}}</li>
        </ul>
    `,
    providers: [CourseService]
})
export class CoursesComponent {
    title: string = "Thte title of courses page";
    authorTitle: string = "The title of authors page";
    courses;
    authors: string[];

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
        this.authors = courseService.getAuthors();
    }
}