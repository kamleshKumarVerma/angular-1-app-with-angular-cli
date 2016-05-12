import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  	public menus: Array<any> = [{
        label: 'Searching for School',
        href: ['searchby/school'],
        img_url: '../../assets/img/school.jpg'
    },
    {
        label: 'Searching for College',
        href: ['searchby/college'],
        img_url: '../../assets/img/college.jpg'
    },
    {
        label: 'Searching for Coaching',
        href: ['searchby/coaching'],
        img_url: '../../assets/img/coaching.jpg'
    },
    {
        label: 'Searching for Tuition',
        href: ['searchby/tuition'],
        img_url: '../../assets/img/tuition.jpg'
    }];

	getMenus() {
		return this.menus;
	}

}
