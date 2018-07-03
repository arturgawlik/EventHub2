import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data/data.service';
import { IEvent } from '../../Services/event/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: IEvent;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.event = this.dataService.event;
    console.log(this.event);
  }

}
