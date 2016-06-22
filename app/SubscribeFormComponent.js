System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SubscribeFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SubscribeFormComponent = (function () {
                function SubscribeFormComponent() {
                }
                SubscribeFormComponent.prototype.onSubmit = function (form) {
                    console.log(form);
                };
                SubscribeFormComponent = __decorate([
                    core_1.Component({
                        selector: 'subscribe-form',
                        template: "\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input #name=\"ngForm\" \n                        type=\"text\" \n                        class=\"form-control\" \n                        required \n                        minlength=\"3\">\n                <div *ngIf=\"name.touched && name.errors\">\n                    <div class=\"alert alert-danger\"\n                         *ngIf=\"name.errors.required\">Name is required</div>\n                    <div class=\"alert alert-danger\"\n                         *ngIf=\"name.errors.minlength\">Name should be minimum {{name.errors.minlength.requiredLength}}</div>\n                </div>\n            </div>\n            \n            <div class=\"form-group\">\n                <label>email</label>\n                <input #email=\"ngForm\" \n                        type=\"text\" \n                        class=\"form-control\" \n                        required \n                        minlength=\"3\">\n                <div *ngIf=\"email.touched && email.errors\">\n                    <div class=\"alert alert-danger\"\n                         *ngIf=\"email.errors.required\">email is required</div>\n                    <div class=\"alert alert-danger\"\n                         *ngIf=\"email.errors.minlength\">email should be minimum {{name.errors.minlength.requiredLength}}</div>\n                </div>\n            </div>\n            \n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SubscribeFormComponent);
                return SubscribeFormComponent;
            }());
            exports_1("SubscribeFormComponent", SubscribeFormComponent);
        }
    }
});
//# sourceMappingURL=SubscribeFormComponent.js.map