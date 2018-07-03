import { Injectable } from '@angular/core';
import { IEvent } from '../event/event.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public event: IEvent;

  constructor() { }
}
