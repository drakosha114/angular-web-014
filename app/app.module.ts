import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import  { NotesTitle } from './notes.title.component';
import { NotesList } from './notes.list.component';
import { HttpModule }    from '@angular/http';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ AppComponent, NotesTitle, NotesList ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}
