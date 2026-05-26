export interface KanbanItem {
  id: number;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
}

export interface KanbanColumn {
  id: string;
  title: string;
  tickets: KanbanItem[];
}
