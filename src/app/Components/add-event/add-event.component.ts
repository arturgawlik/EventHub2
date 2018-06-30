import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, DateAdapter } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { IEvent, EventService } from '../../Services/event/event.service';
import { AuthService } from '../../Services/auth/auth.service';
import { TagService } from '../../Services/tag/tag.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  // chips
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;

  separatorKeysCodes = [ENTER, COMMA];

  tagCtrl = new FormControl();

  filteredTags: Observable<any[]>;

  tags = [];

  allTags = [
    'C#',
    'C++',
    'SQL',
    'C',
    'Angular',
    'React',
    'Liquid',
    'Cobol',
    'F#',
    'Typescript',
    'VB',
    'Concert',
  ];


  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  lat: number = 50.0647;
  lng: number = 19.9450;

  latChoosen: number = null;
  lngChoosen: number = null;

  constructor(private _formBuilder: FormBuilder, private adapter: DateAdapter<any>, private auth: AuthService, private eventService: EventService, private tagService: TagService) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this.filter(tag) : this.allTags.slice()));
    adapter.setLocale("pl");
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      locationDescription: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onChooseLocation(event) {
    this.latChoosen = event.coords.lat;
    this.lngChoosen = event.coords.lng;
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
  }

  remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.allTags.filter(tag =>
      tag.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  save() {
    console.log(this.firstFormGroup);
    console.log(this.secondFormGroup);
    console.log(this.thirdFormGroup);

    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup) {
      // let startDate = this.firstFormGroup.value['StartDate'].toDateString();
      // let endDate = this.firstFormGroup.value['EndDate'].toDateString();

      let event: IEvent = {
        name: this.firstFormGroup.value['name'],
        description: this.firstFormGroup.value['description'],
        addDate: new Date().toDateString(),
        startDate: this.firstFormGroup.value['startDate'].toDateString(),
        endDate: this.firstFormGroup.value['endDate'].toDateString(),
        lat: this.latChoosen,
        lng: this.lngChoosen,
        locationDescription: this.secondFormGroup.value['locationDescription'],
        userId: this.auth.afAuth.auth.currentUser.email,
        arrives: 0,
        tags: this.tags
      }

      this.eventService.save(event);

      for (let tag of this.tags) {
        this.tagService.save({
          value: tag
        });
      }

      // this.snackBar.open('Done','Event has been added', {
      //   duration: 3000,
      // });
    }
  }
}