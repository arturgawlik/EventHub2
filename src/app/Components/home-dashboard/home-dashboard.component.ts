import { Component } from '@angular/core';

@Component({
  selector: 'home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent {
  displayedColumns = ['name', 'startDate', 'endDate'];
  displayedColumns2 = ['user', 'eventsAdd'];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;

}

export interface PeriodicElement2 {
  user: string;
  eventsAdd: number;
}

export interface PeriodicElement {
  name: string;
  startDate: string;
  endDate: string;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {user: 'czernecki@kamil@gmail.com', eventsAdd: 21},
  {user: 'mateuszkuskaa@gmail.com', eventsAdd: 19},
  {user: 'krzysztof.miszczyk@interia.eu', eventsAdd: 15},
  {user: 'hoofedcomic666@gmail.com', eventsAdd: 12},
  {user: 'cgrawerjk@gmail.com', eventsAdd: 4}
];

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Pair programming', startDate: 'Jun 29, 2018', endDate: 'Jun 30, 2018'},
  {name: 'Fajerwerki', startDate: 'Jun 28, 2018', endDate: 'Jun 30, 2018'},
  {name: 'Impreza studencka', startDate: 'Jun 25, 2018', endDate: 'Jun 26, 2018'},
  {name: 'Koncert Metalica', startDate: 'Jun 20, 2018', endDate: 'Jun 21, 2018'},
  {name: 'Angular fans', startDate: 'Jun 29, 2018', endDate: 'Jun 30, 2018'},
  {name: 'Koncert Kapela N', startDate: 'Jun 25, 2018', endDate: 'Jun 26, 2018'},
  {name: 'Spotkanie studenckie', startDate: 'Jun 1, 2018', endDate: 'Jun 1, 2018'},
  {name: 'Spotkanie UEK', startDate: 'Jun 16, 2018', endDate: 'Jun 17, 2018'},
  {name: 'Spotkanie AGH', startDate: 'Jun 15, 2018', endDate: 'Jun 16, 2018'},
  {name: 'Wspólne czytanie', startDate: 'Jun 9, 2018', endDate: 'Jun 10, 2018'},
];
