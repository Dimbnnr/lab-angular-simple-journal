import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RetrieveService } from './services/retrieve.service';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';



const routes = [
  {path: 'entry-list', component: EntryListComponent},
  {path: 'entry-list/:id', component: SingleEntryComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RetrieveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
