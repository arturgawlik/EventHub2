import { Injectable } from '@angular/core';
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
    //let tags: Array<ITag> = this.db.list<ITag>(this.baseEventPath).query.toJSON();
    //let includes = tags.includes(tag);
    //return includes;    
  }
}

interface ITag {
  value: string;
}
