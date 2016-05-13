import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES, RouterOutlet, RouteConfig} from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit {
  @Input() brand: string;
  constructor() {}

  ngOnInit() {
  }

}
