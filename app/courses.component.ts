import {Component} from 'angular2/core';
import {AuthorsComponent} from './authors.component';
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
        <authors></authors>
    `,
    directives: [AuthorsComponent],
    providers: [CourseService]
})
export class CoursesComponent {
    title: string = "Thte title of courses page";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}