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
var NotesList = (function () {
    function NotesList() {
        this.deleteNote = new core_1.EventEmitter();
    }
    ;
    NotesList.prototype.removeNote = function (noteID) {
        this.deleteNote.emit(noteID);
    };
    return NotesList;
}());
__decorate([
    core_1.Input('notes'),
    __metadata("design:type", Array)
], NotesList.prototype, "notes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], NotesList.prototype, "deleteNote", void 0);
NotesList = __decorate([
    core_1.Component({
        selector: 'notes-list',
        template: "\n        <ul class=\"notes__list\">\n            <li *ngFor=\"let note of notes \" class=\"notes__item\">\n                <div class=\"page-header\">\n                    <h3 class=\"notes__item__title\">{{note.title}} <small><span class=\"label label-primary notes__item__section\">{{note.section}}</span></small></h3>\n                </div>\n                <div class=\"notes__item__body\">{{note.body}}</div>\n                <div class=\"notes__item__button\">\n                    <button type=\"button\" (click)=\"removeNote(note._id)\" >delete</button>\n                </div>\n            </li>\n        </ul>\n    ",
        styleUrls: ['app/notes-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], NotesList);
exports.NotesList = NotesList;
//# sourceMappingURL=notes.list.component.js.map