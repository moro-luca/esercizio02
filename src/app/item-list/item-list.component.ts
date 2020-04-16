import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers:[ItemService]
})
export class ItemListComponent implements OnInit {

  title = "cosa da comprare";

  items:Item[];
 

  constructor(private itemService : ItemService) { }

  ngOnInit(){
    this.items = this.itemService.getItems();
  }

}
