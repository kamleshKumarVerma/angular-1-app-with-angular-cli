import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-searchby',
  templateUrl: 'searchby.component.html',
  styleUrls: ['searchby.component.css']
})
export class SearchbyComponent implements OnInit {

 	educationType: string;

	constructor(params: RouteParams) {
        this.educationType = params.get('educationType');
    }

  	ngOnInit() {
  	}

}
