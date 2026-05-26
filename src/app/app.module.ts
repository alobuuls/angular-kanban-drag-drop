import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Drag & Drop
import { DragDropModule } from '@angular/cdk/drag-drop';

// Components
import { AppComponent } from './app.component';
import { KanbanDashboardComponent } from './components/kanban/kanban-dashboard.component';
import { KanbanColumnComponent } from './components/kanban/kanban-column/kanban-column.component';
import { KanbanItemComponent } from './components/kanban/kanban-item/kanban-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'kanban-dashboard',
    component: KanbanDashboardComponent
  },

  {
    path: 'list',
    component: ListComponent
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'kanban-dashboard'
  },

  {
    path: '**',
    redirectTo: 'kanban-dashboard'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    KanbanDashboardComponent,
    KanbanColumnComponent,
    KanbanItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    DragDropModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
