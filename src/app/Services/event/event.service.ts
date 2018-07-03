import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ITag } from '../tag/tag.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseEventPath = '/event';

  constructor(private db: AngularFireDatabase) { }

  save(event: IEvent) {
    this.db.list<IEvent>(this.baseEventPath).push(event);
  }

  getAll(): Observable<IEvent[]> {
    return this.db.list<IEvent>(this.baseEventPath).valueChanges();
  }

  get(id: string) {
    return this.db.object<IEvent>(this.baseEventPath + '/' + id);
  }

}

export interface IEvent {
  id?: string;
  name: string;
  description: string;
  addDate: string;
  startDate: string;
  endDate: string;
  lat: number;
  lng: number;
  locationDescription: string;
  userId: string;
  arrives: number;
  tags: Array<ITag>;
}
