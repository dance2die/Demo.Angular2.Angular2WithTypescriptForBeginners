import {Component} from 'angular2/core';
import {FormBuilder, Validators, ControlGroup} from 'angular2/common';
import {PasswordValidators} from "./PasswordValidators";

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
                PasswordValidators.complexPassword]), null],
            confirmPassword: ['', Validators.required]
            }, {validator: PasswordValidators.passwordShouldMatch});
    }

    changePassword() {
        var currentPassword = this.form.find('currentPassword');
        if (currentPassword.value != 1234){
            currentPassword.setErrors({validOldPassword: true});
        }

        if (this.form.valid){
            alert("password successfully changed.");
        }
    }
}



