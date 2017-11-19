"use strict";
// Angular allows us to create/divide app on component basis. Think of
// it as a feature driven design pattern.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomepageComponent = /** @class */ (function () {
    // notice naming convention btwn filename and class name
    function HomepageComponent() {
    }
    HomepageComponent = __decorate([
        core_1.Component({
            selector: 'homepage',
            template: '<h1>Home</h1>'
        })
        // notice naming convention btwn filename and class name
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
// Will act as a master application component that everything else
// will flow through. Think of our HomepageComponent as simliar to
// the Rails application controller.
//# sourceMappingURL=homepage.component.js.map