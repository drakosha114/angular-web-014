"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_login_service_1 = require("./user/shared/user.login.service");
var AppComponent = (function () {
    function AppComponent(router, userLoginService) {
        var _this = this;
        this.router = router;
        this.userLoginService = userLoginService;
        this.isLoggedInStream = this.userLoginService.isLoggedInStream$.subscribe(function (isLogged) {
            if (!isLogged) {
                _this.redirectToLoginPage();
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('sadas');
        this.userLoginService.isLogged();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.isLoggedInStream.unsubscribe();
    };
    AppComponent.prototype.redirectToLoginPage = function () {
        this.router.navigateByUrl("/login");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <app-navbar></app-navbar>\n        <div class=\"container\">\n            <router-outlet></router-outlet>           \n        </div>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router, user_login_service_1.UserLoginService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map