import {Component} from "angular2/core";

@Component({
    selector: 'subscribe-form',
    template: `
        <form #f="ngForm" (ngSubmit)="onSubmit(f)">
            <div class="form-group">
                <label>Name</label>
                <input #name="ngForm" 
                        type="text" 
                        class="form-control" 
                        required 
                        minlength="3">
                <div *ngIf="name.touched && name.errors">
                    <div class="alert alert-danger"
                         *ngIf="name.errors.required">Name is required</div>
                    <div class="alert alert-danger"
                         *ngIf="name.errors.minlength">Name should be minimum {{name.errors.minlength.requiredLength}}</div>
                </div>
            </div>
            
            <div class="form-group">
                <label>email</label>
                <input #email="ngForm" 
                        type="text" 
                        class="form-control" 
                        required 
                        minlength="3">
                <div *ngIf="email.touched && email.errors">
                    <div class="alert alert-danger"
                         *ngIf="email.errors.required">email is required</div>
                    <div class="alert alert-danger"
                         *ngIf="email.errors.minlength">email should be minimum {{name.errors.minlength.requiredLength}}</div>
                </div>
            </div>
            
            <button class="btn btn-primary" type="submit" [disabled]="!f.valid">Submit</button>
        </form>
    `
})
export class SubscribeFormComponent {
    onSubmit(form){
        console.log(form);
    }
}