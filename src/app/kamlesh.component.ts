import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { AddEducationComponent } from './+add-education';
import { SearchbyComponent } from './+searchby';
import { NavbarComponent } from './navbar';
import { FooterComponent } from './footer';

@Component({
  moduleId: module.id,
  selector: 'kamlesh-app',
  templateUrl: 'kamlesh.component.html',
  styleUrls: ['kamlesh.component.css'],
  directives: [ROUTER_DIRECTIVES,NavbarComponent,FooterComponent]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/add-education', component: AddEducationComponent},
  {path: '/searchby/:educationType', component: SearchbyComponent}
])
export class KamleshAppComponent {
  title: string = "";
}
