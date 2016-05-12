import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { HomeService } from './home.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  	appName: string;
	appTagLine: string;
	menus: Array<any>;

	constructor(private _homeService: HomeService) {
        this.menus = _homeService.getMenus();
    }

    ngOnInit(): any {
        this.appName = "Career Startup";
		this.appTagLine = "Find your best Education place";
    }

}
