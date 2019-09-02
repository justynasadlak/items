import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../../../models/item';
import { ItemDataService } from '../../../../services/item-data.service';
import { UserDataService } from '../../../../services/user-data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  itemsS: Observable<Item[]>;

  constructor(private itemDataService: ItemDataService, private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.getItemList();
  }

  onAddItem(item: Item): void {
    item = { ...item, name: item.name.trim() };
    this.itemDataService
      .addItem(item)
      .pipe()
      .subscribe(
        data => {
          this.getItemList();
        },
        error => console.log(error)
      );
  }

  onLogout(): void {
    this.userDataService.logout();
  }

  private getItemList(): void {
    this.itemDataService.getAllItems();
    this.itemsS = this.itemDataService.items$;
  }
}
