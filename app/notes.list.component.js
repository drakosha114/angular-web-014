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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var NotesList = (function () {
    function NotesList(http) {
        this.http = http;
        this.notesUrl = 'http://localhost:8080/notes';
    }
    NotesList.prototype.ngOnInit = function () {
        this.readNotes();
    };
    NotesList.prototype.ngOnChanges = function () {
        this.readNotes();
    };
    NotesList.prototype.add = function () {
        if (!this.text) {
            return;
        }
        var note = {
            text: this.text,
            section: this.section
        };
        this.addNote(note);
        this.text = '';
    };
    NotesList.prototype.readNotes = function () {
        var _this = this;
        this.getNotes().then(function (notes) {
            _this.notes = notes;
            console.log(_this.section);
        });
    };
    NotesList.prototype.getNotes = function () {
        var params = new http_1.URLSearchParams();
        params.set('section', this.section);
        return this.http.get(this.notesUrl)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    NotesList.prototype.removeNote = function (id) {
        var _this = this;
        var params = new http_1.URLSearchParams();
        params.set('id', id);
        this.http.delete(this.notesUrl, { search: params })
            .toPromise()
            .then(function (response) {
            console.log("note with id " + id + " removed, response", response);
            _this.readNotes();
        });
    };
    NotesList.prototype.addNote = function (note) {
        var _this = this;
        console.log(note);
        this.http.post(this.notesUrl, note).toPromise()
            .then(function (response) {
            console.log("note sent, response", response);
            _this.readNotes();
        });
    };
    return NotesList;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NotesList.prototype, "section", void 0);
NotesList = __decorate([
    core_1.Component({
        selector: 'notes-list',
        template: "\n        <div class=\"notes__create\">\n            <div class=\"notes___create__row\">\n                <textarea class=\"notes___create__textarea\" [(ngModel)]=\"text\" ></textarea>\n            </div>\n            <div class=\"notes___create__row\">\n                <button [disabled]=\"!text\" class=\"notes___create__button\" type=\"button\" (click)=\"add()\">Add</button>\n            </div>\n        </div>\n        <ul class=\"notes__list\">\n            <li *ngFor=\"let note of notes \" class=\"notes__item\">\n                <div class=\"notes__item__text\"> {{note.text}}</div>\n                <div class=\"notes__item__text\"> {{note.section}}</div>\n                <div class=\"notes__item__button\">\n                    <button type=\"button\" (click)=\"removeNote(note._id)\" >delete</button>\n                </div>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], NotesList);
exports.NotesList = NotesList;
//TODO: передать активную секцию 
//# sourceMappingURL=notes.list.component.js.map