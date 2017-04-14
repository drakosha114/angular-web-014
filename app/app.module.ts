import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import  { NotesTitle } from './notes.title.component';
import { NotesList } from './notes.list.component';
import { HttpModule }    from '@angular/http';
import { SectionsComponent } from './sections.component';
import { SectionsTitleComponent } from './sections.title.component';
import { SectionList } from './sections.list.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ AppComponent, NotesTitle, NotesList, SectionsComponent,  SectionsTitleComponent, SectionList ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}
