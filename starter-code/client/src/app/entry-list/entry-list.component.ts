import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

entryList : Array<Object>

  constructor(private Rservice:RetrieveService) { }

  ngOnInit() {
      this.Rservice.retrieveJournalEntries()
          .subscribe(r => this.entryList = r);
  }




}
