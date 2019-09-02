import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './containers/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AddItemComponent } from './components/add-item/add-item.component';

@NgModule({
  declarations: [ItemComponent, ItemListComponent, AddItemComponent],
  imports: [CommonModule]
})
export class ItemModule {}
