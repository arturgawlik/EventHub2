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
  selector: 'find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {
 
items: Observable<any[]>;
 
 
  constructor(private eventService: EventService ) { }
 
  getAll() {
    this.items = this.eventService.getAll();
    console.log(this.items);
  }
 
}