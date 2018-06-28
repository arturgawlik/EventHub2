import { Injectable, Query } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private baseTagPath = '/tag';

  constructor(private db: AngularFireDatabase) { }

  getAllTags() {
    return this.db.list<ITag>(this.baseTagPath);
  }

  isExists(tag: ITag) {
    let item = this.db.list<ITag>(this.baseTagPath, ref => ref.equalTo(tag.value));
    return item != null;
  }

  save(tag: ITag) {
    this.db.list<ITag>(this.baseTagPath).push(tag);
  }
}

export interface ITag {
  value: string;
}
