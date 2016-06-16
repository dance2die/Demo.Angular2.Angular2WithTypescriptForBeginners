System.register(['angular2/core'], function(exports_1, context_1) {
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
    var HeartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeartComponent = (function () {
                function HeartComponent(_el, _renderer) {
                    this._el = _el;
                    this._renderer = _renderer;
                    this.change = new core_1.EventEmitter();
                }
                HeartComponent.prototype.applyStyle = function () {
                    // this.isLiked = !this.isLiked;
                    this.change.emit({ newValue: this.isLiked });
                    if (this.isLiked) {
                        this.isLiked = false;
                        this.heartCount--;
                    }
                    else {
                        this.isLiked = true;
                        this.heartCount++;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], HeartComponent.prototype, "isLiked", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "change", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], HeartComponent.prototype, "heartCount", void 0);
                HeartComponent = __decorate([
                    core_1.Component({
                        selector: 'heart',
                        templateUrl: 'app/heart.component.html',
                        styles: ["\n        .glyphicon-heart {\n            color: #ccc;\n            cursor: pointer;\n        }\n\n        .highlighted {\n            color: deeppink;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HeartComponent);
                return HeartComponent;
            }());
            exports_1("HeartComponent", HeartComponent);
        }
    }
});
//# sourceMappingURL=heart.component.js.map