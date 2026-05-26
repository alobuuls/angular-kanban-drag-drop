import { Component, Input } from '@angular/core';
import { KanbanItem } from 'src/app/interfaces/kanban.interface';

const statusMapperColors: any = {
  Medium: 'bg-yellow-200',
  High: 'bg-red-200',
  Low: 'bg-green-200',
};

const statusMapperText: any = {
  Medium: 'Media',
  High: 'Alta',
  Low: 'Baja',
};

@Component({
  selector: 'app-kanban-item',
  templateUrl: './kanban-item.component.html',
  styleUrls: ['./kanban-item.component.css']
})
export class KanbanItemComponent {

  @Input() item!: KanbanItem;

  get color(): string {
    return statusMapperColors[this.item.priority];
  }

  get statusText(): string {
    return statusMapperText[this.item.priority];
  }
}
