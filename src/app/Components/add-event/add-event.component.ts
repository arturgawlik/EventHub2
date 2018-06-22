import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


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

  Tags = [];

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

  constructor(private _formBuilder: FormBuilder) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this.filter(tag) : this.allTags.slice()));
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      LocationDescription: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onChooseLocation(event) {
    this.latChoosen = event.coords.lat;
    this.lngChoosen = event.coords.lng;
  }

  //chips

  @ViewChild('tagInput') tagInput: ElementRef;


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.Tags.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);
  }

  remove(tag: any): void {
    const index = this.Tags.indexOf(tag);

    if (index >= 0) {
      this.Tags.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.allTags.filter(tag =>
      tag.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.Tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }
}
