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
    var StarGlyphiconComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StarGlyphiconComponent = (function () {
                function StarGlyphiconComponent(_el, _renderer) {
                    this._el = _el;
                    this._renderer = _renderer;
                    this.isClicked = false;
                }
                StarGlyphiconComponent.prototype.applyStyle = function () {
                    if (this.isClicked) {
                        this._renderer.setElementClass(this._el.nativeElement, "glyphicon-star", true);
                        this._renderer.setElementClass(this._el.nativeElement, "glyphicon-star-empty", false);
                    }
                    else {
                        this._renderer.setElementClass(this._el.nativeElement, "glyphicon-star", false);
                        this._renderer.setElementClass(this._el.nativeElement, "glyphicon-star-empty", true);
                    }
                    this.isClicked = !this.isClicked;
                };
                StarGlyphiconComponent = __decorate([
                    core_1.Component({
                        selector: 'starGlyphicon',
                        template: "\n        <span class=\"glyphicon\" [class.glyphicon-star]=\"isClicked\" [class.glyphicon-star-empty]=\"!isClicked\" (click)=\"applyStyle()\"></span>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], StarGlyphiconComponent);
                return StarGlyphiconComponent;
            }());
            exports_1("StarGlyphiconComponent", StarGlyphiconComponent);
        }
    }
});
//# sourceMappingURL=star-glyphicon.component.js.map