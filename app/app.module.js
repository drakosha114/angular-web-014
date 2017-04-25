"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_module_1 = require("./router/router.module");
var notes_module_1 = require("./notes/notes.module");
var sections_module_1 = require("./sections/sections.module");
var user_module_1 = require("./user/user.module");
var pages_module_1 = require("./pages/pages.module");
var navbar_module_1 = require("./navbar/navbar.module");
var app_component_1 = require("./app.component");
var AddNoteComponent_1 = require("./AddNoteComponent");
var EditNoteComponent_1 = require("./EditNoteComponent");
var NotFoundComponent_1 = require("./NotFoundComponent");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            notes_module_1.NotesModule,
            sections_module_1.SectionsModule,
            user_module_1.UserModule,
            pages_module_1.PagesModule,
            navbar_module_1.NavbarModule,
            router_module_1.AppRouterModule
        ],
        declarations: [
            app_component_1.AppComponent,
            AddNoteComponent_1.AddNoteComponent,
            EditNoteComponent_1.EditNoteComponent,
            NotFoundComponent_1.NotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map