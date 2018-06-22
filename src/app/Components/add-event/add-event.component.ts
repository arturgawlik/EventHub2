import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  lat: number = 50.0647;
  lng: number = 19.9450;

  latChoosen: number = null;
  lngChoosen: number = null;

  constructor(private _formBuilder: FormBuilder) { }

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

}
