import { Injectable, Query } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private baseTagPath = '/tag';

  constructor(private db: AngularFireDatabase) { }

  getAllTags() {
    return this.db.list<ITag>(this.baseTagPath );
  }

  isExists(tag: ITag) {
    return false;
    //TODO
    // let item = this.db.list<ITag>(this.baseTagPath);
    // let item2 = item.query.equalTo(tag.value);
    // let item3 = item2.toJSON();
    // item2.("value", (snapshot) => {
    //   item3 = snapshot.exists();
    //   console.log(snapshot.exists());
    // })
    // return item3;
  }

  save(tag: ITag) {
    this.db.list<ITag>(this.baseTagPath).push(tag);
  }
}

export interface ITag {
  value: string;
}
