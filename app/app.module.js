"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var notes_title_component_1 = require("./notes.title.component");
var notes_list_component_1 = require("./notes.list.component");
var http_1 = require("@angular/http");
var sections_component_1 = require("./sections.component");
var sections_title_component_1 = require("./sections.title.component");
var sections_list_component_1 = require("./sections.list.component");
var sections_addSection_component_1 = require("./sections.addSection.component");
var current_section_service_1 = require("./current.section.service");
var sections_service_1 = require("./sections.service");
var notes_component_1 = require("./notes.component");
var notes_addNote_component_1 = require("./notes.addNote.component");
var SectionComponent_1 = require("./SectionComponent");
var AddNoteComponent_1 = require("./AddNoteComponent");
var EditNoteComponent_1 = require("./EditNoteComponent");
var NotFoundComponent_1 = require("./NotFoundComponent");
var MainPageComponent_1 = require("./MainPageComponent");
var AppNavbarComponent_1 = require("./AppNavbarComponent");
var routerParameters = [{
        path: 'section',
        component: MainPageComponent_1.MainPageComponent
    }, {
        path: 'section/:id',
        component: SectionComponent_1.SectionComponent
    }, {
        path: 'addNote',
        component: AddNoteComponent_1.AddNoteComponent
    }, {
        path: 'editNote/:id',
        component: EditNoteComponent_1.EditNoteComponent
    }, {
        path: '',
        redirectTo: '/section',
        pathMatch: 'full'
    }, {
        path: '**',
        component: NotFoundComponent_1.NotFoundComponent
    }];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(routerParameters)],
        declarations: [app_component_1.AppComponent,
            notes_title_component_1.NotesTitle,
            notes_list_component_1.NotesList,
            sections_component_1.SectionsComponent,
            sections_title_component_1.SectionsTitleComponent,
            sections_list_component_1.SectionList,
            sections_addSection_component_1.SectionsAddSection,
            notes_component_1.NotesComponent,
            notes_addNote_component_1.NotesAddNoteComponent,
            SectionComponent_1.SectionComponent,
            AddNoteComponent_1.AddNoteComponent,
            EditNoteComponent_1.EditNoteComponent,
            NotFoundComponent_1.NotFoundComponent,
            MainPageComponent_1.MainPageComponent,
            AppNavbarComponent_1.AppNavbarComponent
        ],
        providers: [current_section_service_1.CurrentSectionService,
            sections_service_1.SectionsService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map