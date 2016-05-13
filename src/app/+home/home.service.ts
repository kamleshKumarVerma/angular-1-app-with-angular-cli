import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  	public menus: Array<any> = [{
        label: 'Searching for School',
        href: ['Searchby', {educationType: 'school'}],
        img_url: '../../assets/img/school.jpg'
    },
    {
        label: 'Searching for College',
        href: ['Searchby', {educationType: 'college'}],
        img_url: '../../assets/img/college.jpg'
    },
    {
        label: 'Searching for Coaching',
        href: ['Searchby', {educationType: 'coaching'}],
        img_url: '../../assets/img/coaching.jpg'
    },
    {
        label: 'Searching for Tuition',
        href: ['Searchby', {educationType: 'tuition'}],
        img_url: '../../assets/img/tuition.jpg'
    }];

	getMenus() {
		return this.menus;
	}

}
