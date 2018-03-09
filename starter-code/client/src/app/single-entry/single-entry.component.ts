import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

singleEntry: Object = {}

  constructor(private Rservice: RetrieveService, private route: ActivatedRoute) { }

  getSingleEntry(id){
    this.Rservice.getSingleJournalEntry(id)
    .subscribe(j => {
        this.singleEntry = j;
});
}

  ngOnInit() {
this.route.params.subscribe(params => {
    this.getSingleEntry(params['id']);
});


//  this.route.params.subscribe(params => {
//      this.Rservice.getSingleJournalEntry(params['id'])
//      .subscribe(single => this.singleEntry = single);
//  });

  }

}
