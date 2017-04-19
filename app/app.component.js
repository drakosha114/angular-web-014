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
var current_section_service_1 = require("./current.section.service");
var sections_service_1 = require("./sections.service");
var notes_service_1 = require("./notes.service");
var AppComponent = (function () {
    function AppComponent(currentSectionService) {
        var _this = this;
        this.currentSectionService = currentSectionService;
        this.subscription = currentSectionService.currentSection$.subscribe(function (section) {
            _this.section = section;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.currentSectionService.changeCurrentSection('work');
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <app-navigation></app-navigation>\n        <div class=\"container\">\n            <router-outlet></router-outlet>           \n        </div>\n    ",
        providers: [current_section_service_1.CurrentSectionService, sections_service_1.SectionsService, notes_service_1.NotesService]
    }),
    __metadata("design:paramtypes", [current_section_service_1.CurrentSectionService])
], AppComponent);
exports.AppComponent = AppComponent;
/*
* <div class="page-header">
 <h1>Notes application</h1>
 </div>
 <div class="row">
 <div class="col-md-8">
 <app-notes></app-notes>
 </div>
 <div class="col-md-4">
 <app-sections></app-sections>
 </div>
 </div>
*
* */ 
//# sourceMappingURL=app.component.js.map