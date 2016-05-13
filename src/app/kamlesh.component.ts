import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { ROUTER_DIRECTIVES, RouterOutlet, RouteConfig} from '@angular/router-deprecated';
import { AddEducationComponent } from './+add-education';
import { SearchbyComponent } from './+searchby';
import { NavbarComponent } from './navbar';
import { FooterComponent } from './footer';

@Component({
  moduleId: module.id,
  selector: 'kamlesh-app',
  templateUrl: 'kamlesh.component.html',
  styleUrls: ['kamlesh.component.css'],
  directives: [ROUTER_DIRECTIVES,RouterOutlet,NavbarComponent,FooterComponent]
})
@RouteConfig([
  	{ path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/add-education', name: 'AddEducation', component: AddEducationComponent },
    { path: '/searchby/:educationType' , name: 'Searchby' , component: SearchbyComponent }
])
export class KamleshAppComponent {
  title: string = "";
}
