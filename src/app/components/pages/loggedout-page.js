var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var navbar_1 = require('../../components/navbar/navbar');
var LoggedoutPage = (function () {
    function LoggedoutPage() {
    }
    LoggedoutPage = __decorate([
        core_1.Component({
            selector: 'loggedout-page',
            directives: [navbar_1.Navbar],
            pipes: [],
            providers: [],
            template: "\n<div class=\"pos-f-t\">\n    <navbar></navbar>\n</div>\n<div><h2>You have been logged out.</h2></div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], LoggedoutPage);
    return LoggedoutPage;
})();
exports.LoggedoutPage = LoggedoutPage;
//# sourceMappingURL=loggedout-page.js.map