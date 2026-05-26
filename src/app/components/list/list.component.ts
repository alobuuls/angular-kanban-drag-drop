import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  movies: string[] = [
    'Harry Potter and the Philosopher\'s Stone',
    'Harry Potter and the Chamber of Secrets',
    'Harry Potter and the Prisoner of Azkaban',
    'Harry Potter and the Goblet of Fire',
    'Harry Potter and the Order of the Phoenix',
    'Harry Potter and the Half-Blood Prince',
    'Harry Potter and the Deathly Hallows – Part 1',
    'Harry Potter and the Deathly Hallows – Part 2',
  ];

  dropItem(event: any) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
