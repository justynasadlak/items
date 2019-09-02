import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../../../models/item';
import { ItemDataService } from '../../../../services/item-data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  itemsS: Observable<Item[]>;

  constructor(private itemDataService: ItemDataService) {}

  ngOnInit(): void {
    this.getItemList();
  }

  onAddItem(item: Item): void {
    console.log(item);
    this.itemDataService.addItem(item).subscribe();
  }

  private getItemList(): void {
    this.itemDataService.getAllItems();
    this.itemsS = this.itemDataService.items$;
  }
}
