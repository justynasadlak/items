import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './containers/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemRoutingModule } from './item-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [ItemComponent, ItemListComponent, AddItemComponent, HeaderComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, ItemRoutingModule],
  exports: [ItemComponent]
})
export class ItemModule {}
