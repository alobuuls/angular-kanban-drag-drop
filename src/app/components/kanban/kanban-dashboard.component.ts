import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import data from 'src/assets/json/data.json';

@Component({
  selector: 'app-kanban-dashboard',
  templateUrl: './kanban-dashboard.component.html',
  styleUrls: ['./kanban-dashboard.component.css']
})
export class KanbanDashboardComponent {

  columns: any[] = data;

  // IDs para conectar listas de tareas
  get connectedTaskLists(): string[] {
    return this.columns.map(c => c.id);
  }

  // mover columnas
  dropColumn(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  // mover tareas
  dropTicket(event: CdkDragDrop<any[]>): void {
    event.previousContainer === event.container
      ? moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
      : transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
  }
}
