import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-searchby',
  templateUrl: 'searchby.component.html',
  styleUrls: ['searchby.component.css']
})
export class SearchbyComponent implements OnInit {

 	educationType: string;
  	constructor() {
        this.educationType = "dummy";
    }

  	ngOnInit() {
  	}

}
