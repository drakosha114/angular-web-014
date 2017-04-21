import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SectionsBackend } from './shared/section.backend';
import { SectionsService } from './shared/sections.service';
import { SectionService } from './shared/section.service';

import { SectionsComponent } from './sections.component';
import { SectionsTitleComponent } from './sections-title/sections-title.component'
import { SectionsListComponent } from './sections-list/sections-list.component';
import { SectionsAddSectionComponent } from './sections-addSection/sections-addSection.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        SectionsComponent,
        SectionsTitleComponent,
        SectionsListComponent,
        SectionsAddSectionComponent
    ],
    exports: [
        SectionsComponent,
        SectionsTitleComponent,
        SectionsListComponent,
        SectionsAddSectionComponent
    ],
    providers: [
        SectionsBackend,
        SectionsService,
        SectionService
    ]
})
export class SectionsModule{

}