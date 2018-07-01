import { Component } from '@angular/core';

@Component({
  selector: 'favourite.component',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  cards = [
    { title: 'Lista wszystkich iventow', cols: 2, rows: 1 }
  ];
}
