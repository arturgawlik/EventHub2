import { Injectable, Query } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private baseEventPath = '/tag';

  constructor(private db: AngularFireDatabase) { }

  getAllTags() {
    return this.db.list<ITag>(this.baseEventPath);
  }

  isExists(tag: ITag) {
    let item = this.db.list<ITag>(this.baseEventPath, ref => ref.equalTo(tag.value));
    return item != null;
  }

  save(tag: ITag) {
    this.db.list<ITag>(this.baseEventPath).push(tag);
  }
}

interface ITag {
  value: string;
}
