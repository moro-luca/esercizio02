import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ItemService]
})
export class ItemListComponent implements OnInit {

  title = "cose da comprare";

  items: Item[];
  selectedItem: Item = {
    name: '',
    quantity: 0,
    checked: false
  };


  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  selectThisItem(item: Item): void {
    this.selectedItem = item;
  }

  removeItem(item: Item): void {
    this.items = this.items.filter(x => x != item);
  }

  addItem(): void {
    this.items.push(this.selectedItem);
    this.selectedItem = {
      name: '',
      quantity: 0,
      checked: false
    }
  }

}
