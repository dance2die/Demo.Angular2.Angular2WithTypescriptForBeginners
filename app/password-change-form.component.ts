import {Component} from 'angular2/core';
import {FormBuilder, Validators, ControlGroup} from 'angular2/common';

@Component({
    selector: 'password-change-form',
    templateUrl: 'app/password-change-form.component.html'
})
export class PasswordChangeFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            currentPassword: ['', Validators.compose([Validators.required]), null],
            newPassword: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)]), null],
            confirmPassword: ['', Validators.compose([Validators.required]), null]
        });
    }

    changePassword() {

    }
}



