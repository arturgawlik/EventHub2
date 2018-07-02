import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, DateAdapter } from '@angular/material';
import { Observable, pipe } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { IEvent, EventService } from '../../Services/event/event.service';
import { AuthService } from '../../Services/auth/auth.service';
import { TagService } from '../../Services/tag/tag.service';
import { Router } from '@angular/router';
import { filter, catchError, mergeMap } from 'rxjs/operators';



@Component({
  selector: 'find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;

  separatorKeysCodes = [ENTER, COMMA];

  tagCtrl = new FormControl();

  filteredTags: Observable<any[]>;

  tags = [];

  allTags = [
  ];

  matchEvents: Observable<Array<IEvent>>;

  isLinear = true;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private adapter: DateAdapter<any>,
    private auth: AuthService,
    private eventService: EventService,
    private tagService: TagService,
    private router: Router) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this.filter(tag) : this.allTags.slice()));
    adapter.setLocale("pl");
  }

  ngOnInit() {
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  //clips

  @ViewChild('tagInput') tagInput: ElementRef;


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);

    this.loadRightEvents();
  }

  remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
    this.loadRightEvents();
  }

  filter(name: string) {
    return this.allTags.filter(tag =>
      tag.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  // filter(name: string) {
  //   return this.tagService.getAllTags()
  // }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  save() {
  }

  // this.snackBar.open('Done','Event has been added', {
  //   duration: 3000,
  // });

  loadRightEvents(): void {
    this.matchEvents = this.eventService.getAll().pipe(
      filter(a => true),
      map(b => {
        let outputArray: Array<IEvent> = new Array<IEvent>();
        let canAdd: boolean;
        for (let index = 0; index < b.length; index++) {
        const element: IEvent = b[index];
        
          for (let index2 = 0; index2 < this.tags.length; index2++) {
            const element2 = this.tags[index2];
            if (element.tags.indexOf(element2) < 0) {
              canAdd = false;
              break;
            }
            else
              canAdd = true;
          }
          if (canAdd)
            outputArray.push(element);
      }
      return outputArray;
    })
    )
  }

}

